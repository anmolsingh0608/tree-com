<?php

namespace App\Http\Controllers;
use Validator;
use App\Models\Image;
use Exception;
use File;
use Illuminate\Http\Request;
use App\Models\Tree;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $filterImage = Image::with('tree');
        if($request->has('filter') || $request->has('sortBy')){
            foreach (($request->filter) as $key => $filter) {
                $filterValues = $filter;
                $filterValuesArr = (explode(",",$filterValues));
                if($key == 'treeId') {
                    $filterImage = Image::whereHas('tree', function($q) use($key, $filterValuesArr) {
                        // dd($filterValuesArr);
                        $q->whereIn($key, $filterValuesArr);
                    });
                } else {
                    $filterImage->whereIn('$key',$filterValuesArr);
                }
            }
            if(isset($request->sortBy)){
                $key = array_keys($request->sortBy);
                $value = ($request->sortBy[$key[0]]);
                if(isset($key[0])){
                    $filterImage->OrderBy($key[0], $value);
                }
            }
            $filterImages = $filterImage->get();
            return $this->response->createResponse('Data Fetched', $filterImages);
        }
        else{
            try {
                $allImages = Image::all();
                return $this->response->createResponse('Data Fetched', $allImages);
            } catch (Exception $exception) {
                return $this->response->createErrorResponse($exception->getMessage());
            }
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
        if ($request->photo) {
            try
            {
                $imageDB = new Image;
                if($request->type == 'TREE'){
                    $folderPath = "uploads/tree/";
                    $folder = 'tree';
                }
                if($request->type == 'YARD_SKETCH'){
                    $folderPath = "uploads/yard-sketch/";
                    $folder = 'yard-sketch';
                }
                $base64Image = explode(";base64,", $request->photo);
                $explodeImage = explode("image/", $base64Image[0]);
                $imageType = $explodeImage[1];
                $image_base64 = base64_decode($base64Image[1]);
                $file = $folderPath . uniqid() . '.'.$imageType;
                if (!file_exists($folderPath)) {
                    mkdir($folderPath, 0777, true);
                }
                file_put_contents($file, $image_base64);
                $imageDB->image = $file;
                // $savedImage = $imageDB->save();
                // dd($request->type);
                $savedImage = Image::create([
                    'path' => $file,
                    'type' => $request->type
                ]);
                return $this->response->createResponse('Photo Uploaded', $savedImage);
            }
            catch (Exception $exception)
            {
                return $this->response->createErrorResponse($exception->getMessage());
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $image = Image::find($id);
            if (!$image) {
                return $this->response->createErrorResponse('Image with id ' . $id . ' not found', 404);
            }
            return $this->response->createResponse('Data Fetched', $image);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        try {
            $image = Image::find($id);
            if (!$image) {
                return $this->response->createErrorResponse('Image with id ' . $id . ' not found', 404);
            }
            $folderPath = "uploads/";
            $base64Image = explode(";base64,", $request->photo);
            $explodeImage = explode("image/", $base64Image[0]);
            $imageType = $explodeImage[1];
            $image_base64 = base64_decode($base64Image[1]);
            $file = $folderPath . uniqid() . '.'.$imageType;
            file_put_contents($file, $image_base64);
            $updatedImage = Image::where('id', $id)->update([
                    'path'=>$file,
            ]);
            if (!$updatedImage) {
                throw new Exception("Problem saving data.");
            }
            return $this->response->createResponse('Image Updated!', $updatedImage);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $deletedImage = Image::find($id);
            if (!$deletedImage) {
                return $this->response->createErrorResponse('Image with id ' . $id . ' not found', 404);
            }
            // dd($deletedImage->path);
            if(File::exists(public_path($deletedImage->path))){
                File::delete(public_path($deletedImage->path));
            }else{
                return $this->response->createErrorResponse('Image does not exists.', 404);
            }
            $deletedImage->tree()->detach();
            $deletedImage->delete();
            return $this->response->createResponse('Data Deleted', $deletedImage);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }
    public function imageFilter()
    {
        return 'hii' ;
    }
}
