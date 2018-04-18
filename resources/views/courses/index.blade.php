@extends ('layouts.master')

@include ('layouts.breadcrumb')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-4">.col-4</div>
            <div class="col-4">.col-4</div>
            <div class="col-4">.col-4</div>
        </div>

        <div class="row">
            <div class="col-sm-4">.col-sm-4</div>
            <div class="col-sm-4">.col-sm-4</div>
            <div class="col-sm-4">.col-sm-4</div>
        </div>

        <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4">.col-md-4</div>
        </div>
    </div>

@endsection