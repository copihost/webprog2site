import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Logo
        </a>
        <div class="mx-auto">
          <Link to="/home" class="nav-link d-inline-block mx-2">
            HOME
          </Link>
          <Link to="/news" class="nav-link d-inline-block mx-2">
            NEWS
          </Link>
          <Link to="/stocks" class="nav-link d-inline-block mx-2">
            STOCKS
          </Link>
          <Link to="/art" class="nav-link d-inline-block mx-2">
            ART
          </Link>
        </div>
        <button class="btn btn-primary">Login</button>
      </div>
    </nav>
  );
}
