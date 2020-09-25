<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class React extends Model
{
    public function getImgAttribute($value)
    {
        return $value ? $value : asset('/images/480px-No_image_available.svg.png');
    }
}
