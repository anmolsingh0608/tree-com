<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cities = [
            'Barnstable','Brockton','Chelsea','Chicopee','Everett',  
            'Fall River','Fitchburg','Haverhill','Holyoke','Lawrence',
            'Leominster','Lowell','Lynn','Malden','New Bedford','Pittsfield', 
            'Quincy','Revere','Salem','Springfield','Taunton','Westfield','Worcester'
            
        ];
        foreach($cities as $city){

            DB::table('cities')->insert([
                'name' => $city,
            ]);
        }
    }
}
