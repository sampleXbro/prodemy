<?php

namespace App\Http\Middleware;

use Closure;
use App\Role;
use Illuminate\Support\Facades\Redirect;

class RolesPermission
{

    public function handle($request, Closure $next, $role)
    {

        $user_role = Role::findOrFail(auth()->user()->role_id);

        if($user_role->role == $role){
            return $next($request);
        }

        return Redirect::to('portal/courses');

}
}
