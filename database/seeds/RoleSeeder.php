<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('roles')->insert(
            array(
                array('description' => 'Forward'),
                array('description' => 'MidFielder'),
                array('description' => 'CentreBack'),
            )
        );
    }
}
