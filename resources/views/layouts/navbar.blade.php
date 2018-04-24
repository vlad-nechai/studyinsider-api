@section('navbar')

    <header>
        {{--TODO: fix sticky navbar--}}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">Evalooni</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav col-md-5">
                    <li class="nav-item">
                        <a class="nav-link" href="/universities">Universities</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/courses">Courses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/professors">Professors</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/companies">Companies</a>
                    </li>

                </ul>
                <div class="navbar-nav mr-auto">
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>

                <ul class="navbar-nav language-menu">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="material-icons">language</i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/de">Deutsch</a>
                            <a class="dropdown-item" href="/en">English</a>
                        </div>
                    </li>
                </ul>

                <ul class="navbar-nav user-menu">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="material-icons">account_circle</i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/">My account</a>
                            <a class="dropdown-item" href="/">Settings</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/">Log out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
@show