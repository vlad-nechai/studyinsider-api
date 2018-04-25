@extends ('layouts.master')

@section('content')
    <div class="container bg-secondary">
        <form method="POST" action="/courses">
            {{csrf_field()}}
            <div class="form-group">
                <label for="courseName">Course name</label>
                <input type="text" name="name" class="form-control" id="courseName" aria-describedby="courseNameHelp" placeholder="Enter course name" required>
                <small id="courseNameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
                <label for="inputChair">Chair</label>
                <select id="inputChair" class="form-control" name="chair" required>
                    <option value="" selected>Choose...</option>
                    @foreach ($chairs as $chair)
                        <option value="{{ $chair->id }}">{{ $chair->name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="form-group">
                <label for="courseType">Course type</label>
                <input type="text" name="type" class="form-control" id="courseType" aria-describedby="courseTypeHelp" placeholder="Enter course type" required>
                <small id="courseTypeHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
                <label for="courseLocation">Course location</label>
                <input type="text" name="location" class="form-control" id="courseLocation" aria-describedby="courseLocationHelp" placeholder="Enter course location" required>
                <small id="courseLocationHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <button type="submit" class="btn btn-primary">Create</button>

            @include('layouts.errors')
        </form>
    </div>
@endsection