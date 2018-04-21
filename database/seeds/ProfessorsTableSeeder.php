<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\Professor;

class ProfessorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $professor = new Professor;
        $professor->name = 'Cuthbert Binns';
        $professor->level = 'Professor';
        $professor->type = 'Ghost';
        $professor->chair_id = 1;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Charity Burbage';
        $professor->level = 'Professor';
        $professor->type = 'Muggle';
        $professor->chair_id = 2;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Albus Dumbledore';
        $professor->level = 'Headmaster';
        $professor->type = 'Wizard';
        $professor->chair_id = 1;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Firenze';
        $professor->level = 'Professor';
        $professor->type = 'Centaur';
        $professor->chair_id = 2;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Filius Flitwick';
        $professor->level = 'Professor';
        $professor->type = 'Wizard';
        $professor->chair_id = 4;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Rubeus Hagrid';
        $professor->level = 'Grounds Keeper';
        $professor->type = 'half-giant';
        $professor->chair_id = 1;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Remus Lupin';
        $professor->level = 'Professor';
        $professor->type = 'Werewolf';
        $professor->chair_id = 1;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Minerva McGonagall';
        $professor->level = 'Deputy Headmistress';
        $professor->type = 'Wizard';
        $professor->chair_id = 1;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Aurora Sinistra';
        $professor->level = 'Professor';
        $professor->type = 'Wizard';
        $professor->chair_id = 4;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Horace Slughorn';
        $professor->level = 'Professor';
        $professor->type = 'Wizard';
        $professor->chair_id = 6;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Severus Snape';
        $professor->level = 'Professor';
        $professor->type = 'Wizard';
        $professor->chair_id = 5;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Pomona Sprout';
        $professor->level = 'Head of House';
        $professor->type = 'Wizard';
        $professor->chair_id = 3;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Sybill Trelawney';
        $professor->level = 'Professor';
        $professor->type = 'Wizard';
        $professor->chair_id = 2;
        $professor->save();

        $professor = new Professor;
        $professor->name = 'Dolores Umbridge';
        $professor->level = 'Professor';
        $professor->type = 'Wizard';
        $professor->chair_id = 5;
        $professor->save();
    }
}
