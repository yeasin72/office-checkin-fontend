import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faClipboardCheck, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-item" title='Dashboard'>
                <Link to="/">
                    <FontAwesomeIcon icon={faChartPie} />
                </Link>
            </div>
            <div className="sidebar-item" title='Check in'>
                <Link to="/check-in">
                    <FontAwesomeIcon icon={faClipboardCheck} />
                </Link>
            </div>
            <div className="sidebar-item" title='Check out'>
                <Link to="/check-out">
                    <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
