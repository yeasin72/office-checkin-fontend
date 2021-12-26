import React, { useState } from 'react'
import './Checkin.css'
import { faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Checkin = () => {
    const [alert, setalert] = useState(false)
    return (
        <div className='checkin'>
            <div className="container">
                <div className="checkin-main">
                    {alert? 
                    <div className="alert">
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <p className="message">are you sure?</p>
                        <div className="button-group">
                        <div className="yes-btn">Yes</div>
                        <div className="no-btn" onClick={() => setalert(false)}>No</div>
                        </div>
                    </div>
                    :
                    <div className="form">
                        <div className="heading">
                            <h3>Check in</h3>
                        </div>
                        <div className="form-item st">
                            <div className="stuff active">
                                <div className="checked">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <div className="name">
                                        Musfik
                                </div>
                            </div>
                            <div className="stuff">
                                <div className="checked">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <div className="name">
                                        Musfik
                                </div>
                            </div>
                        </div>
                        <div className="form-item">
                            <div className="checkin-btn" onClick={() => setalert(!alert)}>Check in</div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkin
