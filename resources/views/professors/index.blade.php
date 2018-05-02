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
                <th scope="col">Course Name</th>
                <th scope="col">Overall rating</th>
                <th scope="col">University</th>
                <th scope="col">Chair</th>
                <th scope="col">Type</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($professors as $key=>$professor)
                <tr>
                    <th scope="row">{{ ++$key }}</th>
                    <td><a href="/professors/{{$professor->id}}">{{ $professor->name }}</a></td>
                    <td>
                        <span><i class="material-icons text-warning">star_rate</i></span>
                    </td>
                    <td>{{ $professor->chair->faculty->university->name }}</td>
                    <td>{{ $professor->chair->name }}</td>
                    <td>{{ $professor->type }}</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection