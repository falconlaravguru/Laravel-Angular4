<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class StyleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('styles')->insert(
            array(
                array( 'description' => 'versatile' ),
                array( 'description' => 'dribble' ),
                array( 'description' => 'shoot' ),
                array( 'description' => 'speed' ),
                array( 'description' => 'pass' ),
                array( 'description' => 'technical' ),
                array( 'description' => 'power' ),
                array( 'description' => 'trackle' ),
                array( 'description' => 'snap' ),
                array( 'description' => 'gentle' ),
                array( 'description' => 'half-mad' ),
                array( 'description' => 'enthusiastic' ),
            )
        );
    }
}
