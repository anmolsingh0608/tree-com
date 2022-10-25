<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tree extends Model
{
    use HasFactory;
    protected $casts = [
        'form' => 'json',
        'fruit' => 'json',
        'tolerances' => 'json',
        'size' => 'json',
        'flowerColor'=> 'json',
        'fallColor' => 'json',
        'flowerTime' => 'json',
        'growthRate' => 'json',
        'nativeRegion' => 'json'
      ];
    protected $fillable = [
        'name',
        'scientificName',
        "use",
        "form",
        "flower",
        "flowerColor",
        "fruit",
        "flowerTime",
        "fallColor",
        "tolerances",
        "size",
        "growthRate",
        "nativeRegion",
        "notes",
        "imgs"
    ];
    public function images()
    {
        return $this->belongsToMany(Image::class, 'treeImage', 'treeId', 'imageId');
    }
}
