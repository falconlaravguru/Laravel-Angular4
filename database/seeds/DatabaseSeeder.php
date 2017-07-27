<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleSeeder::class);
        $this->call(StyleSeeder::class);
        $this->call(PersonalitySeeder::class);
        $this->call(CountrySeeder::class);
        $this->call(CitySeeder::class);
        $this->call(LeagueSeeder::class);
        $this->call(ClubSeeder::class);
        $this->call(PlayerSeeder::class);
        $this->call(CoachSeeder::class);
    }
}
