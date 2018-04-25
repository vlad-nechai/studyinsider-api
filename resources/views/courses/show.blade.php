@extends ('layouts.master')
@section ('head')
    @parent
    {{--<link rel="stylesheet" href="css/grid.css">--}}
@stop

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <img class="card-img-top" src="/images/sample.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{$course->name}}</h5>
                        <ul class="list-group">
                            <li class="list-group-item">University: {{$course->chair->faculty->university->name}}</li>
                            <li class="list-group-item">Faculty: {{$course->chair->faculty->name}}</li>
                            <li class="list-group-item">Chair: {{$course->chair->name}}</li>
                            <li class="list-group-item">Proffesors: {{$course->professors}}</li>
                        </ul>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div class="col">
            </div>
            <div class="col">
            </div>
        </div>
    </div>

@endsection