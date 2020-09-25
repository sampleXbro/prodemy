<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('description');
            $table->string('image');
            $table->tinyInteger('lessons_qty');
            $table->integer('full_duration');
            $table->text('what_will_learn');
            $table->text('requirements');
            $table->boolean('is_recommended')->default(0);
            $table->foreignId('level_id')->constrained('levels');
            $table->foreignId('software_id')->constrained('software');
            $table->integer('views')->default(0);
            $table->boolean('bonus')->default(0);
            $table->foreignId('author_id')->constrained('users');
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
        Schema::dropIfExists('courses');
    }
}
