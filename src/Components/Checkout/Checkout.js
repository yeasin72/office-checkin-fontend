import React, { useState } from 'react'
import './../Checkin/Checkin.css'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'

const Checkout = () => {
    const [alert, setalert] = useState(false)

    const options = [
        { value: 'Masum', label: 'Masum' },
        { value: 'Nadim', label: 'Nadim' },
        { value: 'Sohag', label: 'Sohag' },
        { value: 'Musfik', label: 'Musfik' },
        { value: 'Ibne sina', label: 'Ibne sina' },
    ]
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
                            <h3>Check out form</h3>
                        </div>
                        <div className="form-item st">
                            <Select options={options} />
                        </div>
                        <div className="form-item">
                            <div className="checkin-btn" onClick={() => setalert(!alert)}>Check Out</div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkout
