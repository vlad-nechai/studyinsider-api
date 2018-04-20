@extends ('layouts.master')
@section ('head')
    @parent
    <link rel="stylesheet" href="css/grid.css">
@stop

@include ('layouts.breadcrumb')

@section('content')
    <div class="container">
        <div class="row grid-head">
            <div class="col">Course Name</div>
            <div class="col">Overall rating</div>
            <div class="col">University</div>
            <div class="col">Chair</div>
            <div class="col">Faculty</div>
        </div>

        @foreach ($courses as $course)
            <div class="row">
                <div class="col">{{ $course->name }}</div>
                <div class="col">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <div class="col">{{ $course->chair->faculty }}</div>
                <div class="col">{{ $course->chair->name }}</div>
                <div class="col">{{ $course->location }}</div>
            </div>
        @endforeach

    </div>

@endsection