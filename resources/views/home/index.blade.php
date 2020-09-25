@extends('layouts.app')


@section('content')

    <nav class=" navbar navbar-expand-lg fixed-top py-0 shadow-sm">
    <div class="container">
        <a id="main-logo" class="text" href="{{ url('/') }}">
            {{ config('app.name', 'PRODEMY') }}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Переключение навигации') }}">
            <span class="menu-icon fas fa-bars"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">

            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
                <!-- Authentication Links -->
                @guest
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">{{ __('Вход') }}</a>
                    </li>
                    @if (Route::has('register'))
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('register') }}">{{ __('Регистрация') }}</a>
                        </li>
                    @endif
                @else

                    <li class="nav-item">
                        <a class="nav-link" href="/portal/courses">Портал</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            Вы вошли как <span style="font-weight: 400; font-style: italic">{{ Auth::user()->name }}</span>
                        </a>

                        <div class="bg-dark dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="bg-dark nav-link dropdown-item" href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                                {{ __('Выйти') }}
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </div>
                    </li>
                @endguest
            </ul>
        </div>
    </div>
</nav>

    <div class="p-0  main-page">

        <div class="wallpaper" style="background-image: url({{asset('images/wallpaper/studio.jpg')}})">
            <div class="wallpaper-card">
                <span class="wallpaper-title">ЧТО ТАКОЕ PRODEMY?</span>
                <span class="wallpaper-description">Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.</span>
                <a class="big-button" href="{{Auth::user() ? '/portal/courses' : '/register'}}">ПРИСОЕДИНИТЬСЯ</a>

            </div>

        </div>

        <div class="container-fluid features-container">

            <div class="small-feature-card" style="background-image: url({{asset('images/digital-mixer-recording-studio-with-computer-recording-music_169016-3817.jpg')}})">
                <p class="text-middle-normal-light" >БОЛЕЕ {{floor($courses->sum('full_duration') / 3600)}} ЧАСОВ ОБУЧАЮЩИХ МАТЕРИАЛОВ</p>
            </div>

            <div class="small-feature-card" style="background-image: url({{asset('images/coworkers-process-creating-music_236854-8299.jpg')}})">
                <p class="text-middle-normal-light">БОЛЕЕ {{$courses->count()}} ОБУЧАЮЩИХ КУРСОВ</p>
            </div>

            <div class="small-feature-card" style="background-image: url({{asset('images/equipment-empty-musical-recording-room_1303-20399.jpg')}})">
                <p class="text-middle-normal-light">БОЛЕЕ {{$reviews->count()}} ОТЗЫВОВ К КУРСАМ ОТ СТУДЕНТОВ</p>
            </div>
        </div>
        <hr>
        <p class="container-fluid text-center text-middle-normal-dark pt-1" style="font-weight: 400; background: none">НОВЫЕ ОБУЧАЮЩИЕ МАТЕРИАЛЫ</p>

        <hr>
        <div class="container-fluid courses-container">
            @foreach($courses as $course)
                <div class="small-course-card" style="background-image: url({{$course->image}})">
                    <p class="text-middle-normal-dark">{{strtoupper($course->title)}}</p>
                    <div class="rating">
                        @php
                            $cur_reviews = $reviews->where('course_id', $course->id);
                            $rating = $cur_reviews->sum('rev_rating') / $cur_reviews->count();
                        @endphp

                        @foreach(range(1,5) as $i)
                            <span class="fa-stack" style="width:1em">
                            <i class="far fa-star fa-stack-1x" style="color: dimgrey;"></i>

                        @if($rating >0)
                            @if($rating > 0.5)
                                        <i class="fas fa-star fa-stack-1x" style="color: orange"></i>
                            @else
                                        <i class="fas fa-star-half fa-stack-1x" style="color: orange"></i>
                            @endif
                        @endif
                                @php $rating--; @endphp
                            </span>
                        @endforeach
                     ({{$cur_reviews->count()}})
                    </div>
                </div>

                @if ($loop->iteration >= 7)
                    @break
                @endif
            @endforeach
        </div>
        <hr>
        <p class="container-fluid text-center text-middle-normal-dark pt-1" style="font-weight: 400; background: none">ОТЗЫВЫ ОТ СТУДЕНТОВ</p>
        <hr>
        @php
            $curReviews = $reviews->where('rev_rating', '>=', 4 );
        @endphp
        <div class="courses-container">
            @foreach($curReviews as $curReview)
                <div class="container-fluid border rounded m-2 bg-light">
                    <p class="pt-1 font-weight-bold" style="background: none">{{$curReview->author->name}}</p>
                    <p class="text-small-normal-dark pt-1" style="font-weight: 300; background: none">{{$curReview->review}}</p>

                    @php
                        $rating = $curReview->rev_rating
                    @endphp
                    <div class="text-right">
                    @foreach(range(1,5) as $i)
                        <span class="fa-stack" style="width:1em">
                            <i class="far fa-star fa-stack-1x" style="color: dimgrey;"></i>
                        @if($rating > 0)
                                @if($rating > 0.5)
                                    <i class="fas fa-star fa-stack-1x" style="color: orange"></i>
                                @else
                                    <i class="fas fa-star-half fa-stack-1x" style="color: orange"></i>
                                @endif
                            @endif
                            @php $rating--; @endphp
                            </span>
                    @endforeach
                    </div>
                </div>
                @if ($loop->iteration >= 5)
                    @break
                @endif
            @endforeach

        </div>
        <div class="courses-container">
            <a class="big-button" href="#">НАЧАТЬ ОБУЧАТЬСЯ</a>
        </div>
        <hr>
    </div>
@stop
