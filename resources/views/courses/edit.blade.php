@extends ('layouts.master')

@section('content')
    <div class="container bg-secondary">
        <form method="POST" action="/courses/{{ $course->id }}">
            {{csrf_field()}}
            {{ method_field('put') }}

            <div class="form-group">
                <label for="courseName">Course name</label>
                <input type="text" name="name" class="form-control" id="courseName" aria-describedby="courseNameHelp" placeholder="Enter course name" value="{{ $course->name }}"required>
                <small id="courseNameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
                <label for="inputChair">Chair</label>
                <select id="inputChair" class="form-control" name="chair" required>
                    @foreach ($chairs as $chair)
                        @if ($chair->id == $course->chair_id)
                            <option value="{{ $chair->id }}" selected>{{ $chair->name }}</option>
                        @else
                            <option value="{{ $chair->id }}">{{ $chair->name }}</option>
                        @endif
                    @endforeach
                </select>
            </div>

            <div class="form-group">
                <label for="courseType">Course type</label>
                <input value="{{ $course->type }}" type="text" name="type" class="form-control" id="courseType" aria-describedby="courseTypeHelp" placeholder="Enter course type" required>
                <small id="courseTypeHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
                <label for="courseLocation">Course location</label>
                <input value="{{ $course->location }}" type="text" name="location" class="form-control" id="courseLocation" aria-describedby="courseLocationHelp" placeholder="Enter course location" required>
                <small id="courseLocationHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <button type="submit" class="btn btn-primary">Save</button>

            @include('layouts.errors')
        </form>
    </div>
@endsection