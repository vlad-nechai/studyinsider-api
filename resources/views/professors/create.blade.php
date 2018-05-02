@extends ('layouts.master')

@section('content')
    <div class="container bg-secondary">
        <form method="POST" action="/professors">
            {{csrf_field()}}
            <div class="form-group">
                <label for="courseName">Professor name</label>
                <input type="text" name="name" class="form-control" id="professorName" aria-describedby="professorNameHelp" placeholder="Enter professor full name" required>
                <small id="professorNameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
                <label for="professorLevel">Professor level</label>
                <input type="text" name="level" class="form-control" id="professorLevel" aria-describedby="professorLevelHelp" placeholder="Enter professor level" required>
                <small id="professorLevelHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
                <label for="professorType">Professor type</label>
                <input type="text" name="type" class="form-control" id="professorType" aria-describedby="professorTypeHelp" placeholder="Enter professor type" required>
                <small id="professorTypeHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <button type="submit" class="btn btn-primary">Create</button>

            @include('layouts.errors')
        </form>
    </div>
@endsection