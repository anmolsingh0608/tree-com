<?php

namespace App\Http\Controllers;
use Exception;
use Validator;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            if($request->filter){
                $email = str_replace("'"," ",$request->filter["email"]);
                $customer = Customer::where('email',$email)->first();
               
                return $this->response->createResponse('Data Fetched', $customer);
            }
            if($request->populate){
                $populate = explode(' ', str_replace(","," ", $request->populate));
                $allCustomer = Customer::with($populate)->get();
            }
            else{
                $allCustomer = Customer::all();
            }
            return $this->response->createResponse('Data Fetched', $allCustomer);
        } catch (Exception $exception) {
            return $this->response->createErrorResponse($exception->getMessage());
        }
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
        $rules = array(
            'address' => 'required',
            'city' => 'required',
        );
        $validated = Validator::make($request->all(), $rules);
        if ($validated->fails()) {
            return $this->response->createErrorResponse($validated->errors()->first());
        }
        try {
            $savedCustomer =  Customer::create($request->all());
            if (!$savedCustomer) {
                throw new Exception("Problem saving data.");
            }
            return $this->response->createResponse('User Created!', $savedCustomer);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $customer = Customer::find($id);
            if (!$customer) {
                return $this->response->createErrorResponse('Customer with id ' . $id . ' not found', 404);
            }
            return $this->response->createResponse('Data Fetched', $customer);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $rules = array(
            'address' => 'required',
            'city' => 'required',
        );
        $validated = Validator::make($request->all(), $rules);
        if ($validated->fails()) {
            return $this->response->createErrorResponse($validated->errors()->first());
        }
        try {
            $customer = Customer::find($id);
            if (!$customer) {
                return $this->response->createErrorResponse('Customer with id ' . $id . ' not found', 404);
            }
            $updatedCustomer = Customer::where('id', $id)->update($request->all());
            if (!$updatedCustomer) {
                throw new Exception("Problem saving data.");
            }
            $updatedCustomerData = Customer::find($id);
            return $this->response->createResponse('Customer Updated!', $updatedCustomerData);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $deletedCustomer = Customer::find($id);
            if (!$deletedCustomer) {
                return $this->response->createErrorResponse('Customer with id ' . $id . ' not found', 404);
            }
            $deletedCustomer->delete();
            return $this->response->createResponse('Data Deleted', $deletedCustomer);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }
}
