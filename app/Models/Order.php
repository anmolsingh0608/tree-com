<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $casts = [
        'isSentToNursery' => 'boolean',
      ];
    protected $fillable = [
       'customer',
       'foresterId',
       'staffId',
       'tree',
       'quantity',
       'yardSketchImage',
       'isSentToNursery'
    ];
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer');
    }
    public function tree()
    {
        return $this->belongsTo(Tree::class,'tree');
    }
    public function yardSketchImage()
    {
        return $this->belongsTo(Image::class,'yardSketchImage');
    }
    public function staff()
    {
        return $this->belongsTo(User::class,'staffId');
    }
}
