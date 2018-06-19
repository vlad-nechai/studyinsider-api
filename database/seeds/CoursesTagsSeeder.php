<?php

use App\CourseTag;
use Illuminate\Database\Seeder;

class CoursesTagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = [
            1 => ["Unfair", "Boring", "Confusing", "Impossible"], //star rating 1
            2 => ["Unfair", "Boring", "Confusing", "Impossible"], //star rating 2
            3 => ["Easy", "Difficult", "Attendance necessary ", "Lots of reading"], //star rating 3
            4 => ["Useful", "Inspirational", "Interesting", "Fair"], //star rating 4
            5 => ["Useful", "Inspirational", "Interesting", "Fair"] //star rating 5
        ];

        foreach ($tags as $rating => $tagStarRating) {
            foreach ($tagStarRating as $tag) {
                $courseTag = new CourseTag;
                $courseTag->star_rating = $rating;
                $courseTag->tag_type = "determined";
                $courseTag->tag = $tag;
                $courseTag->save();
            }
        }

        /**
         * assigning tags to courses relationships
         */
    }
}
