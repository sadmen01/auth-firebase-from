import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Register = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext);
    console.log('createUser', createUser)


    const handelSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const name =form.name.value ;
        const email =form.email.value ;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email, password)
        .then(res => {
            const user = res.user;
            console.log('registered user',user);
        })
        .catch(error =>{
            console.error(error)
        })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-400">
                    <form onSubmit={handelSubmit} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email"name='email' className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover text-green-300">Already have an account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="form-control mt-6">
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;