<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'address',
        'city',
        'phone',
        'email',
    ];
    public function orders()
    {
        return $this->hasMany(Order::class,'customer');
    }
}
