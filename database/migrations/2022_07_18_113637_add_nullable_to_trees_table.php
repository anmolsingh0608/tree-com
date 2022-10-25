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
        Schema::table('trees', function (Blueprint $table) {
            $table->string('scientificName')->nullable()->change();
            $table->string('use')->nullable()->change();
            $table->string('form')->nullable()->change();
            $table->string('flower')->nullable()->change();
            $table->longText('fruit')->nullable()->change();
            $table->longText('tolerates')->nullable()->change();
            $table->string('growthRateAndSize')->nullable()->change();
            $table->longText('nativeRegion')->nullable()->change();
            $table->longText('notes')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('trees', function (Blueprint $table) {
            //
        });
    }
};
