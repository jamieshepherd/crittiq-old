<?php

use Illuminate\Database\Seeder;

use App\Node;
use App\User;
use App\Review;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $author = User::where('name', '=', 'Jamie Shepherd')->first();
        $node = Node::where('category', '=', 'films')->where('title', '=', 'Inception')->first();

        $review         = new Review();
        $review->author = array('reference' => $author->_id, 'name' => $author->name, 'gravatar' => md5( strtolower( trim($author->email))) );
        $review->node   = array('reference' => $node->_id, 'title' => $node->title);
        $review->score  = 7.9;
        $review->review = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        $review->thumbs = 0;
        $review->save();

        $node->avg = number_format(round(Review::where('node.reference', $node->_id)->avg('score'),1),1);
        $node->increment('reviewCount');
        $node->save();
    }
}
