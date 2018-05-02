@extends ('layouts.master')
@section ('head')
    @parent
    {{--<link rel="stylesheet" href="css/grid.css">--}}
@stop

@section('content')
    <div class="container">
        <div class="row">

            <div class="col">

                <div class="row">
                    <div class="card">
                        <img class="card-img-top" src="/images/sample.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">{{$professor->name}}</h5>
                            <ul class="list-group">
                                <li class="list-group-item">University: {{$professor->chair->faculty->university->name}}</li>
                                <li class="list-group-item">Faculty: {{$professor->chair->faculty->name}}</li>
                                <li class="list-group-item">Chair: {{$professor->chair->name}}</li>
                                <li class="list-group-item">Proffesors: {{$professor->type}}</li>
                            </ul>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <a class="btn btn-primary" href="/professors/{{ $professor->id }}/edit" role="button">Edit</a>
                    </div>
                    <div class="col">
                        <form method="POST" action="/professors/{{ $professor->id }}">
                            {{csrf_field()}}
                            {{ method_field('delete') }}

                            <button type="submit" class="btn btn-primary">Delete</button>
                        </form>
                    </div>
                </div>

            </div>

            <div class="col"></div>
            <div class="col"></div>
        </div>
    </div>

@endsection