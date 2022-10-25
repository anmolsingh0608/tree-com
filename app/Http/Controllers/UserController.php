<?php

namespace App\Http\Controllers;

use Laravel\Sanctum\Sanctum;
use App\Models\User;
use Validator;
use Exception;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $allUser = User::all();
            return $this->response->createResponse('Data Fetched', $allUser);
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
    public function store(Request $req)
    {
        $rules = array(
            'username' => 'required|unique:users',
            'role' => 'required',
            'email' => 'unique:users',
            'password' => 'required',
        );
        $validated = Validator::make($req->all(), $rules);
        if ($validated->fails()) {
            return $this->response->createErrorResponse($validated->errors()->first());
        }
        try {
            $savedUser = User::create([
                'username' => $req->username,
                'role' => $req->role,
                'email' => $req->email,
                'password' => bcrypt($req->password)
            ]);
            if (!$savedUser) {
                throw new Exception("Problem saving data.");
            }
            return $this->response->createResponse('User Created!', $savedUser);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $user = User::find($id);
            if (!$user) {
                return $this->response->createErrorResponse('User with id ' . $id . ' not found', 404);
            }
            return $this->response->createResponse('Data Fetched', $user);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, $id)
    {
        $rules = array(
            'username' => 'unique:users,username,' . $id,
            'email' => 'unique:users,email,' . $id,

        );
        $validated = Validator::make($req->all(), $rules);
        if ($validated->fails()) {
            return $this->response->createErrorResponse($validated->errors()->first());
        }
        try {
            $user = User::find($id);
            if (!$user) {
                return $this->response->createErrorResponse('User with id ' . $id . ' not found', 404);
            }
            $arr = [];
            $arr = $req->all();
            if ($req->has('password')) {
                $arr['password'] = bcrypt($req->password);
            }
            $updatedUser = User::where('id', $id)->update($arr);
            if (!$updatedUser) {
                throw new Exception("Problem saving data.");
            }
            $updatedUserData = User::find($id);
            return $this->response->createResponse('User Updated!', $updatedUserData);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $deletedUser = User::find($id);
            if (!$deletedUser) {
                return $this->response->createErrorResponse('User with id ' . $id . ' not found', 404);
            }
            $deletedUser->delete();
            return $this->response->createResponse('Data Deleted', $deletedUser);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }
    public function login(Request $request)
    {
        $user = User::where('username', $request->username)->first();
        // print_r($user);
        if (!$user) {
            return $this->response->createErrorResponse('User not found', 404);
        }
        if (!Hash::check($request->password, $user->password)) {
            return $this->response->createErrorResponse('Invalid Credentials', 401);
        }

        $token = $user->createAuthToken('web');
        $refreshToken = $user->createRefreshToken('web');
        $response = [
            'user' => $user,
            'token' => $token,
            'refresh_token' => $refreshToken
        ];

        return $this->response->createResponse('Login Successful!', $response);
    }
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return $this->response->createResponse('Logout Successful!', null);
    }
}
