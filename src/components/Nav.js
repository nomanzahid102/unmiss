import React from "react";
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav">
            <ul className='nav-items d-flex align-items-center gap-4 mb-0'>
                <li className='nav-item'><Link to="/about">About</Link></li>
                <li className='nav-item'><Link to="/seo-course">SEO Course</Link></li>
                <li className='nav-item'><Link to="/tools">Tools</Link></li>
                <li className='nav-item'><Link to="/blog">Blog</Link></li>
                <li className='nav-item'><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}