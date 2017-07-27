<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class PersonalitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('personalities')->insert(
            array(
                array( 'description' => 'haughty' ),
                array( 'description' => 'modesty' ),
                array( 'description' => 'nervous' ),
                array( 'description' => 'Non-Definite' ),
                array( 'description' => 'Cunning' ),
                array( 'description' => 'despicable' ),
                array( 'description' => 'gentle' ),
                array( 'description' => 'enthusiastic' ),
            )
        );
    }
}
