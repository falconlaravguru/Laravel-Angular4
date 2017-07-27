<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('countries')->insert(
            array(
                array( 'country_name' => 'Spain' ),
                array( 'country_name' => 'England' ),
                array( 'country_name' => 'Deutschland' ),
                array( 'country_name' => 'France' ),
                array( 'country_name' => 'Italy' ),
            )
        );
    }
}
