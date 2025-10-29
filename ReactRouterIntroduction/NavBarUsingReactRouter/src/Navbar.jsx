import React from 'react';
import {Link, NavLink} from 'react-router-dom';

                // Navigations are two types:
                    // 1.Static Navigation
                    // 2.Dynamic Navigation


const activeClassName = ({isActive}) => (isActive ? "active-link" : "");

export default function Navbar() {
    return (
        <nav className='flex justify-around items-center gap-6 font-semibold text-gray-500 p-5'>
            {/* This <Link> create the anchor tag which is in the HTML */}
            <Link to={'/'}>Home</Link>
            {/* We can pass the our path as a objects also to the navigation links */}
            {/* we can use the <NavLink> also to achieve the active(like we are on that nav page) when we click navbar menus.We can give styling also if we want. */}
            <NavLink to={{
                pathname: '/profile',
                hash: '#test',
                search: 'currenntOrder=1&orderBy=hot'
            }}
            className='{activeClassName}'
            replace
            style={({isActive}) => (isActive ? {color: 'red'} : null)}
            >
                Profile
            </NavLink>
            <NavLink 
                to={'/discuss'}
                className='{activeClassName}'
                style={({isActive}) => (isActive ? {color: 'red'} : null)}
            >
                Discuss
            </NavLink>
            <NavLink 
                to={{
                    pathname:'/problemset/shell',
                    search: 'page=1'
                }}
                className='{activeClassName}'
                style={({isActive}) => (isActive ? {color: 'red'} : null)}
            >
                Problems
            </NavLink>
        </nav>
    );
}

//replace - we use it replace current nav link in place previous one.
// Ex:A -> B -> C
//    A -> C

// For styling you can use this -->
// style={({isActive}) => (isActive ? {color: 'red'} : null)}

// You can use isActive in place of Text also -->
// {({isActive}) => (isActive ? "Active Profile" : "Profile")}

// Routes we use for paths like url/profile --> it should show profile page
// <Link> and <NavLink> we use fo links or linking when a user click that particular text they should go or redirect to that particular route.

//We create the same NavLink's which match to our Routes in the page.

//And also you can observe one thing that when we clicking NavLinks the page is not refreshing but the data is fetching whereas in routes when we go to that particular the page will refresh.