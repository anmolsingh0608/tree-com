<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trees', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('scientificName');
            $table->string('use');
            $table->string('form');
            $table->string('flower');
            $table->longText('fruit');
            $table->string('fallColor')->nullable();
            $table->longText('tolerates');
            $table->string('growthRateAndSize');
            $table->longText('nativeRegion');
            $table->longText('notes');
            $table->text('imgs');
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
        Schema::dropIfExists('trees');
    }
};
