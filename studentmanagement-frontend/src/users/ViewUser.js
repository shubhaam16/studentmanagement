import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function ViewUser() {
    let navigate =useNavigate()
    const [user,setUser]=useState({
        name: '',
        gender: '',
        dob: '',
        fathername: '',
        mothername: '',
        email: '',
        address: '',
        mobilenumber: '',
        course: '',
        city: '',
        state: '',
        xgrade: '',
        xiigrade: ''
    })
    

    const {id}=useParams();
    

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    } ;
    
    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        navigate("/")

    };
 

    return (
        <div>
        <div className='container '>
        <div className='row'>
            <div className ='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='"text-center m-4'>User Details</h2>
                <div className='card'>
                    <div className='card-header'>
                       <b> Details of user id : {user.id}</b>
                        <ul className='list-grou list-group-flush'>
                            <li className='list-group-iteam'>
                                <b>Name : </b>
                                {user.name}
                            </li>
                            <li className='list-group-iteam'>
                                <b>Gender : </b>
                                {user.gender}
                            </li>
                            <li className='list-group-iteam'>
                                <b>DOB :  </b>
                                {user.dob}
                            </li>
                            <li className='list-group-iteam'>
                                <b>Father Name : </b>
                                {user.fathername}
                            </li>
                            <li className='list-group-iteam'>
                                <b>Mother Name : </b>
                                {user.mothername}
                            </li>
                            <li className='list-group-iteam'>
                                <b>Email : </b>
                                {user.email}
                            </li>
                            <li className='list-group-iteam'>
                                <b>Address : </b>
                                {user.address}
                            </li>
                            <li className='list-group-iteam'>
                                <b>Mobile Number : </b>
                                {user.mobilenumber}
                            </li>
                            <li className='list-group-iteam'>
                                <b>Course : </b>
                                {user.course}
                            </li>
                            <li className='list-group-iteam'>
                                <b>City : </b>
                                {user.city}
                            </li>
                            <li className='list-group-iteam'>
                                <b>State : </b>
                                {user.state}
                            </li>
                            <li className='list-group-iteam'>
                                <b>12th Grade : </b>
                                {user.xiigrade}
                            </li>
                            <li className='list-group-iteam'>
                                <b>10th Grade : </b>
                                {user.xgrade}
                            </li>
                        </ul>
                    </div>
                    
                    <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>EDIT</Link>
                    <button className='btn btn-danger mx-2 ' onClick={()=>deleteUser(user.id)}>DELETE</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
    }
