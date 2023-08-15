import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


export const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigatation = useNavigate();
    const disaptch = useDispatch();
    const data = localStorage.getItem('loginUser')
    useEffect(() => {
        if (data) {
            navigatation('/')
        }
    }, [data])

    const loginUser = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem('regUser') || '[]');
        const payload = data.find(e => e.regemail === userEmail && e.regpass === userPassword)
        if (!userEmail && !userPassword) {
            swal("Error!", "Please Fill Email and Password", "error");
        } else if (payload) {
            swal("Login Success", "Your Login is successful!", "success");
            disaptch({
                type: 'LOGIN',
                payload
            })
            navigatation('/');
            localStorage.setItem('loginUser', JSON.stringify(payload))
        } else {
            swal("Error!", "Please check your email and password", "error");
            setUserPassword('');
        }
    }
    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className="col-md-6 bg-light p-5 my-5 shadow">
                        <h2 className='text-center'>Please Login</h2>
                        <form className=''>
                            <div className='mb-3'>
                                <label htmlFor="" className='form-label'>Email</label>
                                <input className='form-control' type="email" placeholder='Enter Your Email'
                                    value={userEmail}
                                    onChange=
                                    {(e) => setUserEmail(e.target.value)}
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="" className='form-label'>Password</label>
                                <input className='form-control' type='password'
                                    placeholder='Enter Your Passsword'
                                    value={userPassword}
                                    onChange=
                                    {(e) => setUserPassword(e.target.value)}
                                />
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <Link type="submit" className="primary-btn w-25 ms-0" onClick={loginUser}>Login</Link>
                                <span className='d-block'>
                                    Not have Account <span className='mx-2'>|</span>
                                    <Link to='/register'>Register</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}