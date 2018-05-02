@extends ('layouts.master')

@section('content')
    <div class="container bg-secondary">
        <form method="POST" action="/universities/{{ $university->id }}">
            {{csrf_field()}}
            {{ method_field('put') }}

            <div class="form-group">
                <label for="courseName">University name</label>
                <input type="text" name="name" class="form-control" id="universityName" aria-describedby="universityNameHelp" placeholder="Enter university name" value="{{ $university->name }}" required>
                <small id="universityNameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
                <label for="universityLocation">University location</label>
                <input type="text" name="location" class="form-control" id="universityLocation" aria-describedby="universityLocationHelp" placeholder="Enter university location" value="{{ $university->location }}" required>
                <small id="universityLocationHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
                <label for="universityType">University type</label>
                <input type="text" name="type" class="form-control" id="universityType" aria-describedby="universityTypeHelp" placeholder="Enter university type" value="{{ $university->type }}" required>
                <small id="universityTypeHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <button type="submit" class="btn btn-primary">Update</button>

            @include('layouts.errors')
        </form>
    </div>
@endsection