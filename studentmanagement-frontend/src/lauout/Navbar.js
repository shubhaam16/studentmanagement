import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ViewUser from '../users/ViewUser'

export default function Navbar() {
  const[searchvalue,setsearchvalue]=useState('');
  function handler (e){
    setsearchvalue(e.target.value)
  };
  console.log(searchvalue);

  {<ViewUser />}
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Student Management Page </a>
    <Link className="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" to={"/adduser"}>
    Add User
    </Link>
    <Link className="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" to={"/"}>
    Home
    </Link>
    <div>
    <input  value={searchvalue} onChange={handler} type='text' placeholder='enter student id ' name='search'></input>
    <Link className='btn btn-outline-light' type='button' to={`/view/${searchvalue}`}>search</Link>
    </div>
    </div>
</nav>
    </div>
  )
}
