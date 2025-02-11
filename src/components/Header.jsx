export default function Header() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Logo
          </a>
          <div class="mx-auto">
            <a class="nav-link d-inline-block mx-2" href="#">
              HOME
            </a>
            <a class="nav-link d-inline-block mx-2" href="#">
              NEWS
            </a>
            <a class="nav-link d-inline-block mx-2" href="#">
              STOCKS
            </a>
            <a class="nav-link d-inline-block mx-2" href="#">
              ART
            </a>
          </div>
          <button class="btn btn-primary">Login</button>
        </div>
      </nav>
    );
}