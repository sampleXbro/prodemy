<?php

namespace App\Http\Controllers;

use App\Comment;
use App\CommentDislike;
use App\Course;
use App\Level;
use App\Mail\UserNote;
use App\Post;
use App\PostDislike;
use App\PostLike;
use App\PostType;
use App\Role;
use App\StudiedCourse;
use App\User;
use App\UsersLevel;
use App\Review;
use App\Software;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use \Intervention\Image\Facades\Image;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class ReactController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('verified');
    }

    public function index(){
        return view('react.index');
    }

    public function getCourses(){
        $courses = Course::with('author')->with('reviews')->with('level')->with('software')->get();

        return response($courses);
    }

    public function getCourseById(Request $request){
        $course = Course::with('reviews.author')->with('author')->firstWhere('id', $request->id);

        return response($course);
    }

    public function addCourse(Request $request){
        $newCourse = new Course();

        $newCourse->title =  $request->title;
        $newCourse->link =  $request->link;
        $newCourse->description =  $request->description;
        $newCourse->lessons_qty =  $request->lessonsQty;
        $newCourse->full_duration =  $request->fullDuration;
        $newCourse->what_will_learn =  $request->whatWillLearn;
        $newCourse->requirements =  $request->requirements;
        $newCourse->is_recommended =  $request->isRecommended;
        $newCourse->level_id =  $request->levelId;
        $newCourse->software_id =  $request->softwareId;
        $newCourse->views =  $request->views;
        $newCourse->bonus =  $request->bonus;
        $newCourse->author_id =  $request->authorId;

        if(isset($request->file)){
            $image = $request->get('file');
            $name = Str::slug($newCourse->title) . time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($image)->save('images/coursesImages/'.$name);
            $newCourse->image = '/images/coursesImages/'.$name;
        }

        $newCourse->save();

        $course = Course::with('author')
            ->with('reviews')
            ->with('level')
            ->with('software')
            ->firstWhere('id', $newCourse->id);

        return response($course);
    }

    public function updateCourse(Request $request){
        $courseToUpdate = Course::find($request->id);

        $courseToUpdate->title =  $request->title ?? $courseToUpdate->title;
        $courseToUpdate->link =  $request->link ?? $courseToUpdate->link;
        $courseToUpdate->description =  $request->description ?? $courseToUpdate->description;
        $courseToUpdate->lessons_qty =  $request->lessonsQty ?? $courseToUpdate->lessons_qty;
        $courseToUpdate->full_duration =  $request->fullDuration ?? $courseToUpdate->full_duration;
        $courseToUpdate->what_will_learn =  $request->whatWillLearn ?? $courseToUpdate->what_will_learn;
        $courseToUpdate->requirements =  $request->requirements ?? $courseToUpdate->requirements;
        $courseToUpdate->is_recommended =  $request->isRecommended ?? $courseToUpdate->is_recommended;
        $courseToUpdate->level_id =  $request->levelId ?? $courseToUpdate->level_id;
        $courseToUpdate->software_id =  $request->softwareId ?? $courseToUpdate->software_id;
        $courseToUpdate->views =  $request->views ?? $courseToUpdate->views;
        $courseToUpdate->bonus =  $request->bonus ?? $courseToUpdate->bonus;
        $courseToUpdate->author_id =  $request->authorId ?? $courseToUpdate->author_id;

        if(isset($request->file)){
            if($courseToUpdate->image != null && $courseToUpdate->image != '' && file_exists(public_path($courseToUpdate->image))){
                unlink(public_path($courseToUpdate->image));
            }

            $image = $request->get('file');
            $name = Str::slug($courseToUpdate->title) . time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($image)->save('images/coursesImages/'.$name);
            $courseToUpdate->image = '/images/coursesImages/'.$name;
        }

        $courseToUpdate->save();

        $course = Course::with('author')
            ->with('reviews')
            ->with('level')
            ->with('software')
            ->firstWhere('id', $request->id);

        return response($course);
    }

    public function getSoftware(){
        $software = Software::all();

        return response($software);
    }

    public function addSoftware(Request $request){
        $software = new Software();

        $software->software = $request->software;
        $software->save();

        return response($software);
    }

    public function updateSoftware(Request $request){
        $softwareUpd = Software::find($request->id);

        $softwareUpd->software = $request->software ?? $softwareUpd->software;
        $softwareUpd->save();

        return response($softwareUpd);
    }

    public function getCurrentUser(){
        $currentUser = Auth::user()->with('role')->with('level')->with('studiedCourses')->firstWhere('id', Auth::id());
        return response($currentUser);
    }

    public function getUserById(Request $request){
        $user = User::with('role')
            ->with('level')
            ->with('studiedCourses')
            ->firstWhere('id', $request->id);
        return response($user);
    }

    public function getAllUsers(){
        $users = User::with('level')->orderBy('name')->with('role')->with('studiedCourses')->get();
        return response($users);
    }

    public function updateUser(Request $request){
        $userToUpdate = User::find($request->id);

        $userToUpdate->name =  $request->name ?? $userToUpdate->name;
        $userToUpdate->role_id =  $request->role_id ?? $userToUpdate->role_id;
        $userToUpdate->level_id =  $request->level_id ?? $userToUpdate->level_id;
        $userToUpdate->additional =  $request->additional ?? $userToUpdate->additional;

        if(isset($request->file)){
            if($userToUpdate->avatar != null && $userToUpdate->avatar != '' && file_exists(public_path($userToUpdate->avatar))){
                unlink(public_path($userToUpdate->avatar));
            }

            $image = $request->get('file');
            $name = Str::slug($userToUpdate->name) . time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($image)->save('/public/images/usersImages/' . $name);
            $userToUpdate->avatar = '/public/images/usersImages/' . $name;
        }

        $userToUpdate->save();

        $user = User::with('role')
            ->with('level')
            ->with('studiedCourses')
            ->firstWhere('id', $request->id);

        return response($user);
    }

    public function sendReview(Request $request){
        $newReview = new Review();

        $newReview->review = $request->review;
        $newReview->course_id = $request->course_id;
        $newReview->rev_rating = $request->rev_rating;
        $newReview->author_id = $request->author_id;
        $newReview->save();

        $review = Review::with('author')->with('course')->firstWhere('id', $newReview->id);
        return response($review);
    }

    public function getAllReviews(){
        $reviews = Review::with('author')->with('course')->get();
        return response($reviews);
    }

    public function updateReview(Request $request){
        $newReview = Review::find($request->id);

        $newReview->review = $request->review ?? $newReview->review;
        $newReview->course_id = $request->course_id ?? $newReview->course_id;
        $newReview->rev_rating = $request->rev_rating ?? $newReview->rev_rating;
        $newReview->author_id = $request->author_id ?? $newReview->author_id;
        $newReview->save();

        $review = Review::with('author')->with('course')->firstWhere('id', $newReview->id);
        return response($review);
    }

    public function deleteReview(Request $request){
        $delReview = Review::find($request->id);
        $delReview->delete();
        return response($delReview);
    }

    public function createStudiedCourse(Request $request){

        $studiedCourse = new StudiedCourse();
        $studiedCourse->course_position = $request->course_position;
        $studiedCourse->course_id = $request->course_id;
        $studiedCourse->user_id = $request->user_id;
        $studiedCourse->save();

        $currentUser = Auth::user()->with('role')->with('level')->with('studiedCourses')->firstWhere('id', Auth::id());
        return response($currentUser);
    }

    public function deleteStudiedCourse(Request $request)
    {
        StudiedCourse::find($request->id)->delete();

        $currentUser = Auth::user()->with('role')->with('level')->with('studiedCourses')->firstWhere('id', Auth::id());
        return response($currentUser);
    }

    public function updateStudiedCourse(Request $request)
    {
        $course = StudiedCourse::find($request->id);
        $course->course_position = $request->course_position;
        $course->save();

        $currentUser = Auth::user()->with('role')->with('level')->with('studiedCourses')->firstWhere('id', Auth::id());
        return response($currentUser);
    }

    public function sendNoteViaMail(Request $request)
    {
        $courseTitle = $request->courseTitle;
        $note = $request->note;

        $mail = new UserNote($courseTitle, $note);

        Mail::to(Auth::user())->send($mail);

        return response($request);
    }

    public function getAllPosts(){
        $posts = Post::select(['id', 'title', 'description', 'image', 'author_id', 'software_id', 'type_id', 'is_recommended', 'video_link'])
            ->with('author')
            ->with('type')
            ->with('software')
            ->withCount('comments')
            ->withCount('likes')
            ->withCount('dislikes')
            ->get();
        return response($posts);
    }

    public function getPostById(Request $request){
        $post = Post::with('author')
            ->with('software')
            ->with('type')
            ->with('comments.author')
            ->with('likes')
            ->with('dislikes')
            ->firstWhere('id', $request->id);

        return response($post);
    }
    public function addPost(Request $request){

        $newPost = new Post();
        $newPost->title = $request->title;
        $newPost->description = $request->description;
        $newPost->video_link = $request->video_link ?? '';
        $newPost->text = $request->text;
        $newPost->author_id = $request->author_id;
        $newPost->software_id = $request->software_id;
        $newPost->is_recommended = $request->is_recommended;
        $newPost->type_id = $request->type_id;

        if(isset($request->file)){
            $image = $request->get('file');
            $name = Str::slug($newPost->title) . time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($image)->save('images/postsImages/'.$name);
            $newPost->image = '/images/postsImages/'.$name;
        }

        $newPost->save();

        $post = Post::select(['id', 'title', 'description', 'image', 'author_id', 'software_id', 'type_id', 'is_recommended', 'video_link'])
            ->with('author')
            ->with('type')
            ->with('software')
            ->withCount('comments')
            ->withCount('likes')
            ->withCount('dislikes')
            ->firstWhere('id', $newPost->id);

        return response($post);
    }

    public function updatePost(Request $request){

        $post = Post::find($request->id);

        $post->title = $request->title ?? $post->title;
        $post->video_link = $request->video_link ?? $post->video_link;
        $post->description = $request->description ?? $post->description;
        $post->text = $request->text ?? $post->text;
        $post->author_id = $request->author_id ?? $post->author_id;
        $post->software_id = $request->software_id ?? $post->software_id;
        $post->is_recommended = $request->is_recommended ?? $post->is_recommended;
        $post->type_id = $request->type_id ?? $post->type_id;

        if(isset($request->file)){
            if($post->image != null && $post->image != '' && file_exists(public_path($post->image))){
                unlink(public_path($post->image));
            }

            $image = $request->get('file');
            $name = Str::slug($post->title) . time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($image)->save('images/postsImages/'.$name);
            $post->image = '/images/postsImages/'.$name;
        }

        $post->save();

        $p = Post::select(['id', 'title', 'description', 'image', 'author_id', 'software_id', 'type_id', 'is_recommended', 'video_link'])
            ->with('author')
            ->with('type')
            ->with('software')
            ->withCount('comments')
            ->withCount('likes')
            ->withCount('dislikes')
            ->firstWhere('id', $post->id);

        return response($p);
    }

    public function deletePost(Request $request){
        $delPost = Post::find($request->id);
        $delPost->delete();

        return response($delPost);
    }

    public function likePost(Request $request){
        $userId = Auth::id();
        $existLike = PostLike::where('user_id', $userId)->where('post_id', $request->id)->first();
        $existDislike = PostDislike::where('user_id', $userId)->where('post_id', $request->id)->first();

        if($existDislike){
            $existDislike->delete();
        }

        if($existLike){
            $existLike->delete();
        } else {
            $postLike = new PostLike();
            $postLike->user_id = $userId;
            $postLike->post_id = $request->id;
            $postLike->save();
        }

        $post = Post::with('author')
            ->with('software')
            ->with('type')
            ->with('comments.author')
            ->with('likes')
            ->with('dislikes')
            ->firstWhere('id', $request->id);

        return response($post);
    }

    public function dislikePost(Request $request){
        $userId = Auth::id();
        $existDislike = PostDislike::where('user_id', $userId)->where('post_id', $request->id)->first();
        $existLike = PostLike::where('user_id', $userId)->where('post_id', $request->id)->first();

        if($existLike){
            $existLike->delete();
        }

        if($existDislike){
            $existDislike->delete();
        } else {
            $postDislike = new PostDislike();
            $postDislike->user_id = $userId;
            $postDislike->post_id = $request->id;
            $postDislike->save();
        }

        $post = Post::with('author')
            ->with('software')
            ->with('type')
            ->with('comments.author')
            ->with('likes')
            ->with('dislikes')
            ->firstWhere('id', $request->id);

        return response($post);
    }

    public function getPostsTypes(){
        $postsTypes = PostType::all();
        return response($postsTypes);
    }

    public function getAllComments(Request $request){
        $comments = Comment::with('author')->with('post')->get();
        return response($comments);
    }

    public function getCommentsByPostId(Request $request){
        $comments = Comment::where('post_id', $request->id)->with('author')->get();
        return response($comments);
    }

    public function addComment(Request $request){
        $newComment = new Comment();
        $newComment->author_id = Auth::id();
        $newComment->post_id = $request->post_id;
        $newComment->comment = $request->comment;
        $newComment->save();

        $comment = Comment::with('author')->with('post')->firstWhere('id', $newComment->id);

        return response($comment);
    }

    public function updateComment(Request $request){

        $newComment = Comment::find($request->id);

        $newComment->author_id = $request->author_id ?? $newComment->author_id;
        $newComment->post_id = $request->post_id ??  $newComment->post_id;
        $newComment->comment = $request->comment ?? $newComment->comment;
        $newComment->save();

        $comment = Comment::with('author')->with('post')->firstWhere('id', $newComment->id);

        return response($comment);
    }

    public function deleteComment(Request $request){
        $delComment = Comment::find($request->id);
        $delComment->delete();

        return response($delComment);
    }

    public function getAdminInitial(){
        $counts = [
            'users' => User::count(),
            'courses' => Course::count(),
            'posts' => Post::count(),
            'reviews' => Review::count(),
            'comments' => Comment::count(),
            'software' => Software::count(),
            'roles' => Role::count(),
            'users_levels' => UsersLevel::count(),
            'complexity_levels' => Level::count(),
        ];

        return response($counts);
    }

    public function getAllRoles(){
        $roles = Role::all();
        return response($roles);
    }

    public function addRole(Request $request){
        $role = new Role();

        $role->role = $request->role;
        $role->save();

        return response($role);
    }

    public function updateRole(Request $request){
        $role = Role::find($request->id);

        $role->role = $request->role ?? $role->role;
        $role->save();

        return response($role);
    }

    public function getAllUsersLevels(){
        $levels = UsersLevel::all();
        return response($levels);
    }

    public function addUserLevel(Request $request){
        $level = new UsersLevel();

        $level->user_level = $request->user_level;
        $level->save();

        return response($level);
    }

    public function updateUserLevel(Request $request){
        $level = UsersLevel::find($request->id);

        $level->user_level = $request->user_level ?? $level->user_level;
        $level->save();

        return response($level);
    }

    public function getAllCoursesLevels(){
        $levels = Level::all();
        return response($levels);
    }

    public function addCourseLevel(Request $request){
        $level = new Level();

        $level->level = $request->course_level;
        $level->save();

        return response($level);
    }

    public function updateCourseLevel(Request $request){
        $level = Level::find($request->id);

        $level->level = $request->course_level ?? $level->level;
        $level->save();

        return response($level);
    }

}


/*
 * $category = Category::with(['products'=>function($query){
 * $query->withCount('reviews');
 * }])->firstWhere('slug', $slug);
 * dd($category);
 * */
