import React from 'react';
import {NavLink, Outlet, useNavigate, useParams} from 'react-router-dom';
// import './discuss.css'

const Discuss = () => {
    // useParams() is a React Router hook that lets you access dynamic URL parameters from the current route.
    let params = useParams();

    console.log(params);

    const activeClassName = ({isActive}) => (isActive ? "active-link" : "");

    // Here we use useNavigate() to achieve the dynamic navigation
    const navigate = useNavigate();

    //created function for the dynamic navigation
    // we can use the promises like this set the time also like when it should open that when the user click here we used 3 seconds.
    const goToProfile = async () => {
        await new Promise((r) => setTimeout(r, 3000));
        navigate("/profile");
        // we also have delta value = 0, +1(forward), -1(backward)
        // navigate(+1);
    }

    console.log(typeof navigate);
    return (
        <div>
            <nav className='flex p-5 gap-10'>
                <div className='bg-red-50 p-15 text-black hover:bg-gray-400 hover:text-white font-semibold'>
                    <NavLink 
                        to={'/interview-experience'}  
                        className={activeClassName}
                    >
                        Interview Experience
                    </NavLink>
                </div>
                <div className='bg-red-50 p-15 text-black hover:bg-gray-400 hover:text-white font-semibold'>
                    <NavLink 
                        to={'/interview-questions'}
                        className={activeClassName}
                    >
                        Interview Questions
                    </NavLink>
                </div>
            </nav>

            {/* We can achieve the dynamic navigation like this */}
            <button onClick={goToProfile}>Navigate to profile</button>

            Discuss Page
            {/* we can use the outlet to get this parent component on top of the child components pages like in our example Discussion page top--->interview-experience page on below. */}
            <Outlet />
        </div>
    );
}

export default Discuss;