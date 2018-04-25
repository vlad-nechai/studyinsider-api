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
                    <th scope="col">Faculty</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>
            <tbody>
            @foreach ($courses as $key=>$course)
                <tr>
                    <th scope="row">{{ ++$key }}</th>
                    <td><a href="/courses/{{$course->id}}">{{ $course->name }}</a></td>
                    <td>
                        <span><i class="material-icons text-warning">star_rate</i></span>
                    </td>
                    <td>{{ $course->chair->faculty->university->name }}</td>
                    <td>{{ $course->chair->faculty->name }}</td>
                    <td>{{ $course->location }}</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection