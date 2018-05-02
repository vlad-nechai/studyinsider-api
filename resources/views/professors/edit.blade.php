@extends ('layouts.master')

@section('content')
    <div class="container bg-secondary">
        <form method="POST" action="/professors/{{ $professor->id }}">
            {{csrf_field()}}
            {{ method_field('put') }}

            <div class="form-group">
                <label for="courseName">Professor name</label>
                <input type="text" name="name" class="form-control" id="professorName" aria-describedby="professorNameHelp" placeholder="Enter professor full name" value="{{ $professor->name }}" required>
                <small id="professorNameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
                <label for="inputChair">Chair</label>
                <select id="inputChair" class="form-control" name="chair" required>
                    @foreach ($chairs as $chair)
                        @if ($chair->id == $professor->chair_id)
                            <option value="{{ $chair->id }}" selected>{{ $chair->name }}</option>
                        @else
                            <option value="{{ $chair->id }}">{{ $chair->name }}</option>
                        @endif
                    @endforeach
                </select>
            </div>

            <div class="form-group">
                <label for="professorLevel">Professor level</label>
                <input type="text" name="level" class="form-control" id="professorLevel" aria-describedby="professorLevelHelp" placeholder="Enter professor level" value="{{ $professor->level }}" required>
                <small id="professorLevelHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
                <label for="professorType">Professor type</label>
                <input type="text" name="type" class="form-control" id="professorType" aria-describedby="professorTypeHelp" placeholder="Enter professor type" value="{{ $professor->type }}" required>
                <small id="professorTypeHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <button type="submit" class="btn btn-primary">Update</button>

            @include('layouts.errors')
        </form>
    </div>
@endsection