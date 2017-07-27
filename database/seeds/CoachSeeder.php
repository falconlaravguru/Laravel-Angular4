<?php

use Illuminate\Database\Seeder;

class CoachSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('coaches')->insert(
            array(
                array(
                    'name' => 'Zinedine Zidane',
                    'age' => '40',
                    'club_id' => '1',
                    'personality_id' => '7'
                ),
                array(
                    'name' => 'Luiz Enrique',
                    'age' => '41',
                    'club_id' => '2',
                    'personality_id' => '8'
                ),
                array(
                    'name' => 'Simeone',
                    'age' => '42',
                    'club_id' => '4',
                    'personality_id' => '8'
                ),
                array(
                    'name' => 'Mourihno',
                    'age' => '50',
                    'club_id' => '5',
                    'personality_id' => '8'
                ),
                array(
                    'name' => 'Conte',
                    'age' => '38',
                    'club_id' => '6',
                    'personality_id' => '8'
                ),
                array(
                    'name' => 'Guardiola',
                    'age' => '38',
                    'club_id' => '10',
                    'personality_id' => '8'
                ),
                array(
                    'name' => 'Wenger',
                    'age' => '75',
                    'club_id' => '7',
                    'personality_id' => '7'
                ),
                array(
                    'name' => 'Kroop',
                    'age' => '57',
                    'club_id' => '9',
                    'personality_id' => '8'
                ),
                array(
                    'name' => 'Anchelotti',
                    'age' => '70',
                    'club_id' => '3',
                    'personality_id' => '7'
                ),
                array(
                    'name' => 'Rituneli',
                    'age' => '80',
                    'club_id' => '11',
                    'personality_id' => '7'
                ),
            )
        );
    }
}
