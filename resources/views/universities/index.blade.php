@extends ('layouts.master')
@section ('head')
    @parent
    {{--<link rel="stylesheet" href="css/grid.css">--}}
@stop

@section('content')

    <div class="container">
        <table class="table bg-light">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">University Name</th>
                <th scope="col">Overall rating</th>
                <th scope="col">University location</th>
                <th scope="col">University type</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($universities as $key=>$university)
                <tr>
                    <th scope="row">{{ ++$key }}</th>
                    <td><a href="/universities/{{$university->id}}">{{ $university->name }}</a></td>
                    <td>
                        <span><i class="material-icons text-warning">star_rate</i></span>
                    </td>
                    <td>{{ $university->location }}</td>
                    <td>{{ $university->type }}</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection