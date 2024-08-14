import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function SignIn() {
    return (
        <div className='Login d-flex justify-content-center align-items-center
        w-100% vh-100'>
            <div className='form-container p-5 bg-transparent'>
                <form action="">
                    <h3 className='Text-center'>Sign In</h3>
                    <div className='mb-2'>
                        <label htmlFor="Email">Email</label>
                        <input type="email" className='form-control' placeholder='Enter Email ' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Password">Password</label>
                        <input type="text" className='form-control' placeholder='Enter Password' />
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className='custom-checkbox' id='checkbox' />
                        <label htmlFor="checkbox" className='input-label ms-2'>
                            Remember me
                        </label>
                    </div>
                    <div className="d-grid">
                        <h3 className='btn btn-primary'><Link to="/">Sign In</Link></h3>
                    </div>
                    <p className='text-right mt-2'>
                        Forgot <Link to="/SignUp">Password ?</Link>
                    </p>
                    <p className='text-right'>Don't have an account? <Link to="/SignUp">Register</Link>
                    </p>
                
                </form>
            </div>
        </div>
    )
}

export default SignIn