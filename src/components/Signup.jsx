import React from 'react'
import { Link } from 'react-router-dom'
import nationality from '../nationality'


function SignUp() {
    return (
        <div className='Register d-flex justify-content-center align-items-center
        w-100% bg-primary'>
            <div className='form-container p-5 bg-transparent'>
                <form action="">
                    <h3 className='Text-center'>Sign Up</h3>
                    <div className='mb-2'>
                        <label htmlFor="MemberID">MemberID</label>
                        <input type="number" className='form-control' placeholder='Your MemberID ' />
                        <label htmlFor="Firstname">Firstname</label>
                        <input type="text" className='form-control' placeholder='Enter Firstname' />
                        <label htmlFor="Lastname">Lastname</label>
                        <input type="text" className='form-control' placeholder='Enter Lastname' />
                        <label htmlFor="Birthdate">Birthdate</label>
                        <input type="Date" className='form-control' />
                        <label htmlFor="Gender">Gender</label>
                        <select className='form-control'>
                            <option value="">Choose Your Gender</option>
                            <option value="Male">Male</option>
                            <option value="FeMale">FeMale</option>
                        </select>
                        <label htmlFor="Nationality">Nationality</label>
                        <select className='form-control' id="Nationality">
                            <option value="">Choose Your Nationality</option>
                            {nationality.map((nationality, index) => (
                                <option key={index} value={nationality}>{nationality}</option>
                            ))}
                        </select>
                        <label htmlFor="Address">Address</label>
                        <textarea className="Text-area" cols="50" rows="5" placeholder="Address"></textarea>
                        <label htmlFor="PhoneNo">PhoneNo</label>
                        <input type="number" className='form-control' placeholder='Enter PhoneNo' />
                        <label htmlFor="Email">Email</label>
                        <input type="email" className='form-control' placeholder='Enter Email ' />
                        <label htmlFor="RegisterDate">RegisterDate</label>
                        <input type="Date" className='form-control' />
                    </div>
                    <div className="d-grid">
                        <button className='btn btn-primary'><Link to="/SignIn">Sign Up</Link></button>
                    </div>
                    <p className='text-right'>Do you have an account? <Link to="/SignIn">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp