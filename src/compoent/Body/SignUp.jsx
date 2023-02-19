import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = ({setrefreshToken }) => {
    const initsignupdata = {
        name: "",
        email: "",
        password: ""
    }
    const [signupdata, setsignupdata] = useState(initsignupdata)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setsignupdata({ ...signupdata, [e.target.name]: e.target.value })
    }
    const handleSignup = () => {
        console.log(signupdata)
        localStorage.setItem("token", "1234567890")
        setrefreshToken (true)
        navigate('/home')
    }
    const handlenavigate = () => {
        navigate('/')
    }
    return (
        <div className='container'>

            <div className='container col-md-6 border border rounded my-4 p-4'>
                <span className='text-center text-warning h4 mb-2'>SignUp page </span>
                <div class="mb-3 my-2">
                    <label class="form-label">Enter Name</label>
                    <input type="text" class="form-control" placeholder="jhon Doe" name='name' onChange={handleChange} />
                </div>

                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" placeholder="name@example.com" name='email' onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="text" class="form-control" placeholder="*******" name='password' onChange={handleChange} />
                </div>
                <button type="button" class="btn btn-success mx-2" onClick={handleSignup}>SignUp hare </button>
                <button type="button" class="btn btn-danger mx-2" onClick={handlenavigate}>Login hare </button>
            </div>
        </div>
    )
}

export default SignUp