<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class PlayerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('players')->insert(
            array(
                array(
                    'name' => 'Cristiano Ronaldo',
                    'age' => '32',
                    'club_id' => '1',
                    'style_id' => "[1]",
                    'role_id' => '1',
                    'personality_id' => '1'
                ),
                array(
                    'name' => 'Lionel Messi',
                    'age' => '30',
                    'club_id' => '2',
                    'style_id' => "[2,3,4,5,6]",
                    'role_id' => '1',
                    'personality_id' => '2'
                ),
                array(
                    'name' => 'Eden Hazard',
                    'age' => '26',
                    'club_id' => '6',
                    'style_id' => "[2,4,5]",
                    'role_id' => '2',
                    'personality_id' => '2'
                ),
                array(
                    'name' => 'Gareth Bale',
                    'age' => '27',
                    'club_id' => '1',
                    'style_id' => "[2,4,7]",
                    'role_id' => '1',
                    'personality_id' => '4'
                ),
                array(
                    'name' => 'Karim Benzema',
                    'age' => '28',
                    'club_id' => '1',
                    'style_id' => "[2,3,5,6]",
                    'role_id' => '1',
                    'personality_id' => '2'
                ),
                array(
                    'name' => 'Sergio Ramos',
                    'age' => '31',
                    'club_id' => '1',
                    'style_id' => "[7,8,9]",
                    'role_id' => '3',
                    'personality_id' => '4'
                ),
                array(
                    'name' => 'Raphael Varane',
                    'age' => '21',
                    'club_id' => '1',
                    'style_id' => "[4,8,9]",
                    'role_id' => '3',
                    'personality_id' => '4'
                ),
                array(
                    'name' => 'Luca Modric',
                    'age' => '32',
                    'club_id' => '1',
                    'style_id' => "[2,3,5,6]",
                    'role_id' => '2',
                    'personality_id' => '2'
                ),
                array(
                    'name' => 'James Rodrigez',
                    'age' => '25',
                    'club_id' => '1',
                    'style_id' => "[2,3,5,6]",
                    'role_id' => '2',
                    'personality_id' => '2'
                ),
                array(
                    'name' => 'Paul Pogba',
                    'age' => '23',
                    'club_id' => '5',
                    'style_id' => "[2,3,5,6,7]",
                    'role_id' => '2',
                    'personality_id' => '2'
                ),
                array(
                    'name' => 'Neymar Junior',
                    'age' => '25',
                    'club_id' => '2',
                    'style_id' => "[2,3,4,5,6]",
                    'role_id' => '1',
                    'personality_id' => '5'
                ),
                array(
                    'name' => 'Luiz Suarez',
                    'age' => '30',
                    'club_id' => '2',
                    'style_id' => "[2,3,5,7]",
                    'role_id' => '1',
                    'personality_id' => '6'
                ),
                array(
                    'name' => 'Sergio Buszuget',
                    'age' => '31',
                    'club_id' => '2',
                    'style_id' => "[5,7,9]",
                    'role_id' => '2',
                    'personality_id' => '5'
                ),
                array(
                    'name' => 'George Pique',
                    'age' => '31',
                    'club_id' => '2',
                    'style_id' => "[5,8,9]",
                    'role_id' => '3',
                    'personality_id' => '2'
                ),
                array(
                    'name' => 'Lewandowski',
                    'age' => '31',
                    'club_id' => '3',
                    'style_id' => "[3,6,7]",
                    'role_id' => '1',
                    'personality_id' => '2'
                )
            )
        );
    }
}
