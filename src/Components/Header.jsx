import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log('context',user)

    const handleSignOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="navbar bg-yellow-300 text-white">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link to='/home' className='btn btn-ghost normal-case text-xl'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/order' className='btn btn-ghost normal-case text-xl'>
                                Order
                            </Link>
                        </li>
                        <li>
                            <Link to='register' className='btn btn-ghost normal-case text-xl'>
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to='/login' className='btn btn-ghost normal-case text-xl'>
                                Login
                            </Link>
                        </li>
                    </ul>
                    {user?.email && <span>Welcome, {user.email}</span>}
                    {
                    user?.email ? 
                    <button onClick={handleSignOut} className="btn btn-sm">Log out</button>
                    : <Link to='/login'>
                        <button className='btn btn-sm'>Log In</button>
                    </Link>
                }
                </div>
            </div>
        </div>
    );
};

export default Header;