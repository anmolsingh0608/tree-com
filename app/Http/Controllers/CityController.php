<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;
use Exception;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $allCity =  City::all();
            return $this->response->createResponse('Data Fetched', $allCity);
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
            $savedCity = City::create([
                'name' => $request->name,
            ]);
            if (!$savedCity) {
                throw new Exception("Problem saving data.");
            }

            return $this->response->createResponse('City Registered!', $savedCity);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $city = City::find($id);
            if (!$city) {
                return $this->response->createErrorResponse('City with id ' . $id . ' not found', 404);
            }
            return $this->response->createResponse('Data Fetched', $city);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function edit(City $city)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $City = City::find($id);
            if (!$City) {
                return $this->response->createErrorResponse('City with id ' . $id . ' not found', 404);
            }
                $updatedCity = City::where('id', $id)->update([
                    'name' => $request->name,
                ]);
                
            if (!$updatedCity) {
                throw new Exception("Problem saving data.");
            }
            $updatedCityData = City::find($id);
            return $this->response->createResponse('City Updated!', $updatedCityData);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $deletedCity = City::find($id);
            if (!$deletedCity) {
                return $this->response->createErrorResponse('City with id ' . $id . ' not found', 404);
            }
            $deletedCity->delete();
            return $this->response->createResponse('Data Deleted', $deletedCity);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }
}
