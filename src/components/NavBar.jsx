import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <a class="navbar-brand" href="#">To Do aPP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/Add">Add <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Search">Search</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/delete">Delete</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/All">All</a>
      </li>
      </ul>
    <form class="form-control">
        <input class="form-control mr-sm-12" type="search" placeholder="Task" aria-label="Task"/>
        <br></br>
        <button class="btn btn-danger my-2 my-sm-12" type="submit">Add</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default NavBar