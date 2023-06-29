import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {
  let navigate =useNavigate()

  const[user,setUser]=useState({
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

  // decontruction of above object (user)
  const {name,gender,dob,fathername,mothername,email,address,mobilenumber,course,city,state,xgrade,xiigrade}=user

  const onInputChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  };
  console.log(user);
  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user)
    navigate("/")


  };

  return (
    <div className='container '>
        <div className='row'>
            <div className ='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='"text-center m-4'>Register user</h2>


              <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your name'
                name='name'
                value={name}
                onChange={(e)=>onInputChange(e)}
                required
              />
            </div>
            <div className='mb-3'>
            <label htmlFor='gender' className='form-label'>
                Gender
            </label>
            <select
                className='form-select'
                name='gender'
                value={gender}
                onChange={(e)=>onInputChange(e)}
                required
            >
                <option value=''>Select your gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
            </select>
            </div>
            <div className='mb-3'>
              <label htmlFor='dob' className='form-label'>
                Date of Birth
              </label>
              <input
                type='date'
                className='form-control'
                placeholder='Enter your date of birth'
                name='dob'
                value={dob}
                onChange={(e)=>onInputChange(e)}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='fathername' className='form-label'>
                Father's Name
              </label>
              <input
                type='text'
                className='form-control'
                placeholder="Enter your father's name"
                name='fathername'
                value={fathername}
                onChange={(e)=>onInputChange(e)}
            required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='mothername' className='form-label'>
                Mother's Name
              </label>
              <input
                type='text'
                className='form-control'
                placeholder="Enter your mother's name"
                name='mothername'
                value={mothername}
                onChange={(e)=>onInputChange(e)}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter your email address'
                name='email'
                value={email}
                onChange={(e)=>onInputChange(e)}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='address' className='form-label'>
                Address
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your address'
                name='address'
                value={address}
                onChange={(e)=>onInputChange(e)}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='mobilenumber' className='form-label'>
                Mobile Number
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your mobile number'
                name='mobilenumber'
                value={mobilenumber}
                onChange={(e)=>onInputChange(e)}
                required
              />
            </div>
            <div className='mb-3'>
            <label htmlFor='course' className='form-label'>
                Course
            </label>
            <select
                className='form-select'
                name='course'
                value={course}
                onChange={(e)=>onInputChange(e)}
                required
            >
                <option value=''>Select your course</option>
                <option value='course 1'>course 1</option>
                <option value='course 2'>course 2</option>
                <option value='course 3'>course 3</option>
            </select>
            </div>
            <div className='mb-3'>
              <label htmlFor='city' className='form-label'>
                City
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your city'
                name='city'
                value={city}
                onChange={(e)=>onInputChange(e)}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='state' className='form-label'>
                State
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='select your state '
                name='state'
                value={state}
                onChange={(e)=>onInputChange(e)}
                required
                />
                </div>
                <div className='mb-3'>
              <label htmlFor='xiigrade' className='form-label'>
                12TH GRADE
              </label>
              <input
                type='number'
                className='form-control'
                placeholder='enter 12th obtained marks '
                name='xiigrade'
                value={xiigrade}
                onChange={(e)=>onInputChange(e)}
                required
                />
                </div>
                <div className='mb-3'>
              <label htmlFor='xgrade' className='form-label'>
                10th GRADE
              </label>
              <input
                type='number'
                className='form-control'
                placeholder='enter 10th obtained marks '
                name='xgrade'
                value={xgrade}
                onChange={(e)=>onInputChange(e)}
                required
                />
                </div>
                <button type='submit' className='btn btn-outline-primary'>submit</button>
                <Link type='cancle' className='btn btn-outline-danger mx-2' to={"/"}>cancle</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

















































{/* <div className='mb-3'>
                    <label htmlFor='name' className='form-lable'>NAME</label>
                    <input type='text' className='form-control' placeholder='enter your name' name="name"></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-lable'>NAME</label>
                    <input type='text' className='form-control' placeholder='enter your name' name="name"></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-lable'>NAME</label>
                    <input type='text' className='form-control' placeholder='enter your name' name="name"></input>
                </div> */}
