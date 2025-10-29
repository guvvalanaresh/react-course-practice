import React from 'react';
import {Outlet, useParams} from 'react-router-dom';

const Discuss = () => {
    // useParams() is a React Router hook that lets you access dynamic URL parameters from the current route.
    let params = useParams();

    console.log(params);
    return (
        <div>
            Discuss Page
            {/* we can use the outlet to get this parent component on top of the child components pages like in our example Discussion page top--->interview-experience page on below. */}
            <Outlet />
        </div>
    );
}

export default Discuss;