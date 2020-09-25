<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;

if (App::environment('production')) {
    URL::forceScheme('https');
}

Auth::routes(['verify' => true]);

Route::get('/', 'HomeController@index')->name('home');
Route::get('/admin/{slug}', 'ReactController@index')->name('admin')->middleware('role:Администратор');

Route::get('/portal/{path?}', [
    'uses' => 'ReactController@index',
    'as' => 'react',
    'where' => ['path' => '.*']
]);

Route::get('/api/messages', 'ChatsController@fetchMessages');
Route::post('/api/message', 'ChatsController@sendMessage');

Route::get('/api/private-messages', 'ChatsController@fetchPrivateMessages');
Route::post('/api/private-message', 'ChatsController@sendPrivateMessage');
Route::put('/api/private-message/{id}', 'ChatsController@updatePrivateMessage');

Route::get('/api/courses', 'ReactController@getCourses');
Route::post('/api/course', 'ReactController@addCourse');
Route::get('/api/course/{id}', 'ReactController@getCourseById');
Route::put('/api/course/{id}', 'ReactController@updateCourse');

Route::get('/api/software', 'ReactController@getSoftware');
Route::post('/api/software', 'ReactController@addSoftware');
Route::put('/api/software/{id}', 'ReactController@updateSoftware');

Route::get('/api/current-user', 'ReactController@getCurrentUser');
Route::get('/api/user/{id}', 'ReactController@getUserById');
Route::put('/api/user/{id}', 'ReactController@updateUser');
Route::get('/api/users', 'ReactController@getAllUsers');

Route::post('/api/review', 'ReactController@sendReview');
Route::get('/api/reviews', 'ReactController@getAllReviews');
Route::put('/api/review/{id}', 'ReactController@updateReview');
Route::delete('/api/review/{id}', 'ReactController@deleteReview');

Route::post('/api/studied-course', 'ReactController@createStudiedCourse');
Route::delete('/api/studied-course/{id}', 'ReactController@deleteStudiedCourse');
Route::put('/api/studied-course/{id}', 'ReactController@updateStudiedCourse');
Route::post('/api/send-note-via-mail', 'ReactController@sendNoteViaMail');

Route::get('/api/posts', 'ReactController@getAllPosts');
Route::get('/api/post/{id}', 'ReactController@getPostById');
Route::post('/api/post', 'ReactController@addPost');
Route::put('/api/post/{id}', 'ReactController@updatePost');
Route::delete('/api/post/{id}', 'ReactController@deletePost');

Route::get('/api/posts-types', 'ReactController@getPostsTypes');

Route::get('/api/like-post/{id}', 'ReactController@likePost');
Route::get('/api/dislike-post/{id}', 'ReactController@dislikePost');

Route::get('/api/comments', 'ReactController@getAllComments');
Route::get('/api/comments/{id}', 'ReactController@getCommentsByPostId');
Route::post('/api/comment', 'ReactController@addComment');
Route::put('/api/comment/{id}', 'ReactController@updateComment');
Route::delete('/api/comment/{id}', 'ReactController@deleteComment');

Route::get('/api/admin-initial', 'ReactController@getAdminInitial');

Route::get('/api/roles', 'ReactController@getAllRoles');
Route::post('/api/role', 'ReactController@addRole');
Route::put('/api/role/{id}', 'ReactController@updateRole');

Route::get('/api/users-levels', 'ReactController@getAllUsersLevels');
Route::post('/api/user-level', 'ReactController@addUserLevel');
Route::put('/api/user-level/{id}', 'ReactController@updateUserLevel');

Route::get('/api/courses-levels', 'ReactController@getAllCoursesLevels');
Route::post('/api/course-level', 'ReactController@addCourseLevel');
Route::put('/api/course-level/{id}', 'ReactController@updateCourseLevel');
