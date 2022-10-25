<?php

namespace App\Http\Controllers;
use Exception;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Exports\UsersExport;
use App\Jobs\OrderForesterJob;
use App\Jobs\OrderCustomerJob;
use App\Mail\OrderForesterMail;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            if($request->populate){
                $populate = explode(' ', str_replace(","," ", $request->populate));
                $allOrder = Order::with($populate)->orderBy('created_at', 'DESC')->get();
            }
            else{
                $allOrder = Order::orderBy('created_at', 'DESC')->get();
            }
            return $this->response->createResponse('Data Fetched', $allOrder);
        } catch (Exception $exception) {
            return $this->response->createErrorResponse($exception->getMessage());
        };
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        try {
            $orders = $request->all();
            foreach($orders as $order){
                $savedOrder = Order::create([
                    'customer' =>$order['customer'],
                    'foresterId' => $order['foresterId'],
                    'tree' => $order['tree'],
                    'quantity' => $order['quantity'],
                    'yardSketchImage' => $order['yardSketchImage'],
                    'isSentToNursery' => isset($order['isSentToNursery']) ? $order['isSentToNursery'] : false,
                ]);
            }    
            if (!$savedOrder) {
                throw new Exception("Problem saving data.");
            }
                $customer = Customer::find($orders[0]['customer']);
                if(isset($customer->email)){
                    $custome['to'] = $customer->email;
                    dispatch(new OrderCustomerJob($custome));
                }
                $forester = User::find($orders[0]['foresterId']);
                if(isset($forester->email)){
                    $forest['address'] = $customer->address;
                    $forest['city'] = $customer->city;
                    $forest['to'] = $forester->email;
                    // dispatch(new OrderCustomerJob($forest));
                    $email = new OrderForesterMail($forest);
                    Mail::to($forest['to'])
                    ->bcc('dmckenna@shieldssgf.com')
                    ->send($email);
                }
            return $this->response->createResponse('Order Created!', $savedOrder);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }
    public function email(){

    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,$id)
    {
        try {
            if($request->populate){
                $populate = explode(' ', str_replace(","," ", $request->populate));
                $order = Order::with($populate)->where('id',$id)->get();
                $order_check = Order::find($id);
                if (!$order_check) {
                    return $this->response->createErrorResponse('Order with id ' . $id . ' not found', 404);
                }
            }
            else{
                $order = Order::find($id);
            }
            if (!$order) {
                return $this->response->createErrorResponse('Order with id ' . $id . ' not found', 404);
            }
            return $this->response->createResponse('Data Fetched', $order);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        try {
            $order = Order::find($id);
            if (!$order) {
                return $this->response->createErrorResponse('Order with id ' . $id . ' not found', 404);
            }
            $orders = $request->all();
            foreach($orders as $order){
                $updatedOrder = Order::where('id', $id)->update([
                    'customer' =>$order['customer'],
                    'foresterId'  =>$order['foresterId'], 
                    'tree' => $order['tree'],
                    'quantity' => $order['quantity'],
                    'yardSketchImage' => $order['yardSketchImage'],
                    'isSentToNursery' => $order['isSentToNursery']
                ]);
            }    
            if (!$updatedOrder) {
                throw new Exception("Problem saving data.");
            }
            $updatedOrderData = Order::find($id);
            return $this->response->createResponse('Order Updated!', $updatedOrderData);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $deletedOrder = Order::find($id);
            if (!$deletedOrder) {
                return $this->response->createErrorResponse('Order with id ' . $id . ' not found', 404);
            }
            $deletedOrder->delete();
            return $this->response->createResponse('Data Deleted', $deletedOrder);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
        
    }
    public function export(Request $request) 
    {
        if (!$request->has('pending')) {
            return Excel::download(new UsersExport(false), 'orders.xlsx');
        }
        return Excel::download(new UsersExport(true), 'orders.xlsx');
    }
}
