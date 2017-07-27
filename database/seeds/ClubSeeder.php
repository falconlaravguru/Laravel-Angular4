<?php

use Illuminate\Database\Seeder;

class ClubSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clubs')->insert(
            array(
                array(
                    'name' => 'Real Madrid',
                    'country_id' => '1',
                    'city_id' => '1',
                    'league_id' => '1',
                    'count' => '12'
                ),
                array(
                    'name' => 'Barcelona',
                    'country_id' => '1',
                    'city_id' => '4',
                    'league_id' => '1',
                    'count' => '8'
                ),
                array(
                    'name' => 'Bayern Munich',
                    'country_id' => '3',
                    'city_id' => '6',
                    'league_id' => '3',
                    'count' => '5'
                ),
                array(
                    'name' => 'Atletico Madrid',
                    'country_id' => '1',
                    'city_id' => '1',
                    'league_id' => '1',
                    'count' => '0'
                ),
                array(
                    'name' => 'Manchester United',
                    'country_id' => '2',
                    'city_id' => '3',
                    'league_id' => '2',
                    'count' => '3'
                ),
                array(
                    'name' => 'Chelsea',
                    'country_id' => '2',
                    'city_id' => '2',
                    'league_id' => '2',
                    'count' => '2'
                ),
                array(
                    'name' => 'Arsenal',
                    'country_id' => '2',
                    'city_id' => '2',
                    'league_id' => '2',
                    'count' => '0'
                ),
                array(
                    'name' => 'Juventus',
                    'country_id' => '5',
                    'city_id' => '7',
                    'league_id' => '4',
                    'count' => '4'
                ),
                array(
                    'name' => 'Liverpool',
                    'country_id' => '2',
                    'city_id' => '5',
                    'league_id' => '2',
                    'count' => '1'
                ),
                array(
                    'name' => 'Man city',
                    'country_id' => '2',
                    'city_id' => '3',
                    'league_id' => '2',
                    'count' => '0'
                ),
                array(
                    'name' => 'Leister city',
                    'country_id' => '2',
                    'city_id' => '2',
                    'league_id' => '2',
                    'count' => '0'
                ),

            )
        );
    }
}
