import React from 'react';
import { FaBeer, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left lg:px-36 lg:mx-6">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                        <div className='flex flex-row'>
                        <button className="btn btn-outline basis-1/2 mx-auto text-2xl"> <FaGithub/> </button>
                        <button className="btn btn-outline basis-1/2 mx-1"><span className='text-xl'><FcGoogle/></span> oogle </button>
                        
                        </div>
                        <div>
                            <p className='text-center'>or</p>
                            <hr />
                        </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                       Haven't any account? <Link to='/register' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register Here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;