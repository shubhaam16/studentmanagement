import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [users,setUsers]=useState([])
    const{id}=useParams()


    useEffect(()=>{
        loadUsers();
    },[]);


    // get data from the MYSQL 
    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data)
    };
    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()

    };

  return (
    <div className=''>
        <div className='py-4 '></div>
        <div style={{ overflowX: 'auto' }}>
        <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">INDEX</th>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">FATHER NAME</th>
                <th scope="col">MOTHER NAME</th>
                <th scope="col">GENDER</th>
                <th scope="col">DOB</th>
                <th scope="col">EMAIL</th>
                <th scope="col">ADDRESS</th>
                <th scope="col">MOBILE NUMBER</th>
                <th scope="col">COURSE</th>
                <th scope="col">CITY</th>
                <th scope="col">STATE</th>
                <th scope="col">12TH MARKS</th>
                <th scope="col">10TH MARKS</th>
                <th scope='col'>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>(
                        <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.fathername}</td>
                        <td>{user.mothername}</td>
                        <td>{user.gender}</td>
                        <td>{user.dob}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.mobilenumber}</td>
                        <td>{user.course}</td>
                        <td>{user.city}</td>
                        <td>{user.state}</td>
                        <td>{user.xiigrade}</td>
                        <td>{user.xgrade}</td>
                        <td>
                            <div className='d-flex'>
                            <Link className='btn btn-primary mx-2 ' to={`/view/${user.id}`}>VIEW</Link>
                            <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>EDIT</Link>
                            <button className='btn btn-danger mx-2 ' onClick={()=>deleteUser(user.id)}>DELETE</button>
                            </div>
                        </td>
                        
                        </tr>
                            ))
                        }
            </tbody>
        </table>
        </div>
    </div>
  )
}
