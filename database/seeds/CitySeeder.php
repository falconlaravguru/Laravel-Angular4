<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('cities')->insert(
            array(
                array( 'city_name' => 'Madrid' ),
                array( 'city_name' => 'London' ),
                array( 'city_name' => 'Manchester' ),
                array( 'city_name' => 'Catalonia' ),
                array( 'city_name' => 'Liverpool' ),
                array( 'city_name' => 'Munich' ),
                array( 'city_name' => 'Turin' ),
            )
        );
    }
}

