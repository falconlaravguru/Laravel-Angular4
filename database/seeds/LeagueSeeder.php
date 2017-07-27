<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class LeagueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('leagues')->insert(
            array(
                array( 'title' => 'La Liga' ),
                array( 'title' => 'Premier League' ),
                array( 'title' => 'Bundesliga' ),
                array( 'title' => 'Serie A' ),
            )
        );
    }
}
