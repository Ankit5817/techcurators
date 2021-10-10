import React from 'react'
import img from "./blank-profile-picture-973460_960_720.png"
import './sidebar.css'

export default function Sidebar() {
    
    return (
        <div className='sidebar'>
            <img src="https://www.techcurators.in/wp-content/uploads/2021/07/logo-yellow-no-border-220x68.png" alt="" className='logo'/>
            <br/>
            <span className='head'>TechCurators</span>
            <br/>
            <span className='topic'><u>Front-end Develpoment Test</u></span>
            <br />
            <img src={img} alt="" className='user'/>
            <span>Name: Ankit Sharma</span>    
            <span>College: GTBIT</span>
            <span>Contact No. : 7289809160</span>
            <div className="contact">
                <span className='query'>If any Query</span>
                <span>+91-5555522222</span>
                <span>+91-9999966666</span>
            </div>
            
        </div>
    )
}
