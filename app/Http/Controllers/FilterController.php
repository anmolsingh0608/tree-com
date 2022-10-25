<?php

namespace App\Http\Controllers;

use App\Models\Filter;
use Illuminate\Http\Request;
use Exception;

class FilterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $allFilter =  Filter::all();
            // foreach($allFilter as $filter){
            //     $filter->item = json_decode($filter->item, true);
            // }
            // dd($allFilter[0]['item']);
            return $this->response->createResponse('Data Fetched', $allFilter);
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
        try {
            $savedFilter = Filter::create([
                'name' => $request->name,
                'item' => $request->item,
            ]);
            if (!$savedFilter) {
                throw new Exception("Problem saving data.");
            }

            return $this->response->createResponse('Filter Registered!', $savedFilter);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Filter  $filter
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $filter = Filter::find($id);
            if (!$filter) {
                return $this->response->createErrorResponse('Filter with id ' . $id . ' not found', 404);
            }
            return $this->response->createResponse('Data Fetched', $filter);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Filter  $filter
     * @return \Illuminate\Http\Response
     */
    public function edit(Filter $filter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Filter  $filter
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $filter = Filter::find($id);
            if (!$filter) {
                return $this->response->createErrorResponse('filter with id ' . $id . ' not found', 404);
            }
                $updatedfilter = Filter::where('id', $id)->update([
                    'name' => $request->name,
                    'item' => $request->item,
                   
                ]);
                
            if (!$updatedfilter) {
                throw new Exception("Problem saving data.");
            }
            $updatedfilterData = Filter::find($id);
            return $this->response->createResponse('filter Updated!', $updatedfilterData);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Filter  $filter
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $deletedFilter = Filter::find($id);
            if (!$deletedFilter) {
                return $this->response->createErrorResponse('Filter with id ' . $id . ' not found', 404);
            }
            $deletedFilter->delete();
            return $this->response->createResponse('Data Deleted', $deletedFilter);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }
}
