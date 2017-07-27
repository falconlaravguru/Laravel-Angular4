<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable(false);
            $table->integer('age')->nullable(false);
            $table->integer('club_id')->nullable(false);
            $table->json('style_id')->nullable(false);
            $table->integer('role_id')->nullable(false);
            $table->integer('personality_id')->nullable(false);

            $table->foreign('club_id')->references('id')->on('clubs');
            $table->foreign('role_id')->references('id')->on('roles');
            $table->foreign('personality_id')->references('id')->on('personalities');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('players');
    }
}
