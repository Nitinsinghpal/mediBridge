import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <Link class="navbar-brand">Medi Bridge</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to='/' class="nav-link active" aria-current="page">Home</Link>
          </li>
          <li class="nav-item">
          <Link to='/about' class="nav-link active" aria-current="page">About</Link>

          </li>
         
         
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default NavBar