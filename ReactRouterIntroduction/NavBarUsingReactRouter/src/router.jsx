import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Discuss from "./pages/Discuss";
import Details from "./pages/Details";
import Navbar from "./Navbar";
import ProblemSet from "./pages/ProblemSet";


export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                     {/* simple routing */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Details />} />
                    {/* index and wildcard(*) routes */}
                    <Route index element={<Home />} />
                    <Route path="*" element={<h3>Not found</h3>} />
                    {/* Nested Routing */}
                    <Route path="/discuss" element={<Discuss />} >
                        <Route 
                            path="interview-experience" 
                            element={<p>Interview Experience</p>} 
                        />
                        <Route 
                            // dynamic routing :id
                            path="interview-question/:id" 
                            element={<p>Interview Questions</p>} 
                        />
                    </Route>
                    {/* optional segment */}
                    {/* <Route path="/profile/:userID/details?" element={<Details />} /> */}
                    {/* instead of above routing use the below routing for the optional segment */}
                    <Route path="/profile/:userID" element={<Details />} />
                    <Route path="/profile/:userID/details" element={<Details />} />

                    <Route path="/problemset/:subjectName" element={<ProblemSet />} />
                </Routes>
            </BrowserRouter>,
        </div>
    );
}
