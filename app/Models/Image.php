<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $fillable = [
        'path',
        'type'
    ];
    public function tree()
    {
        return $this->belongsToMany(Tree::class, 'treeImage', 'imageId', 'treeId');
    }
}
