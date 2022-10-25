<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Tree;
use Illuminate\Http\Request;
use App\Exports\TreeExport;
use Maatwebsite\Excel\Facades\Excel;

class TreeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $allTrees =  Tree::with(['images'])->get();
            return $this->response->createResponse('Data Fetched', $allTrees);
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
            $savedTree = Tree::create([
                'name' => $request->name,
                'scientificName' => $request->scientificName,
                "use" => $request->use,
               "form" => $request->form,
               "flowerColor" => $request->flowerColor,
               "fruit" => $request->fruit,
               "flowerTime" => $request->flowerTime,
               "fallColor" => $request->fallColor,
               "tolerances" => $request->tolerances,
               "size" => $request->size,
               "growthRate" => $request->growthRate,
               "nativeRegion" => $request->nativeRegion,
               "notes" => $request->notes,
                
            ]);
           $images = ($request->images);
           $savedTree['images'] = $images;

            if (!$savedTree) {
                throw new Exception("Problem saving data.");
            }
            if(!empty($images)) {
                $savedTree->images()->attach($images);
            }
            return $this->response->createResponse('Tree Registered!', $savedTree);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tree  $tree
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $tree = Tree::with(['images'])->where('id',$id)->get();
            if (!$tree) {
                return $this->response->createErrorResponse('Tree with id ' . $id . ' not found', 404);
            }
            return $this->response->createResponse('Data Fetched', $tree[0]);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tree  $tree
     * @return \Illuminate\Http\Response
     */
    public function edit(Tree $tree, $id)
    {
        //    
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tree  $tree
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $tree = Tree::find($id);
            if (!$tree) {
                return $this->response->createErrorResponse('Tree with id ' . $id . ' not found', 404);
            }   
            $updatedTree = Tree::where('id', $id)->update($request->except('images'));
            if (!$updatedTree) {
                throw new Exception("Problem saving data.");
            }
            $images = ($request->images);
            // dd($images);
            if(!empty($images)) {
                $tree->images()->sync($images);
            }
            $updatedTreeData = Tree::find($id);
            $updatedTreeData['images'] = $images;
            return $this->response->createResponse('Tree Updated!', $updatedTreeData);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tree  $tree
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        try {
            $deletedTree = Tree::find($id);
            if (!$deletedTree) {
                return $this->response->createErrorResponse('Tree with id ' . $id . ' not found', 404);
            }
            $deletedTree->images()->detach();
            $deletedTree->delete();
            return $this->response->createResponse('Data Deleted', $deletedTree);
        } catch (Exception $e) {
            $errorMessage = $e->getMessage();
            return $this->response->createErrorResponse($errorMessage);
        }
    }
    // public function export(){
    //     return Excel::download(new TreeExport(true), 'tree.xlsx');
    // }
}
