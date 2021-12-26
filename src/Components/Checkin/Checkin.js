import React, { useState } from 'react'
import './Checkin.css'
import { faExclamationTriangle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import { checkinAction } from '../../redux/Action/checkinAction'

const Checkin = () => {
    const dispatch = useDispatch()
    const [alert, setalert] = useState(false)
    const [name, setname] = useState('')

    // response from server
    const checkIN = useSelector(state => state.checkIN);
    const { checkindata } = checkIN

    const accessType =  'Checkout'

    //  Select feild data
    const options = [
        { value: 'Masum', label: 'Masum' },
        { value: 'Nadim', label: 'Nadim' },
        { value: 'Sohag', label: 'Sohag' },
        { value: 'Musfik', label: 'Musfik' },
        { value: 'Ibne sina', label: 'Ibne sina' },
    ]

    //  to checkout 
    function checkIn() {
        const checkindata = {
            "name": name
        }
        const logdata = {
            "name": name,
            "accessType": accessType
        }
        dispatch(checkinAction(checkindata, logdata))
        setalert(false)
    }

    return (
        <div className='checkin'>
            <div className="container">
                <div className="checkin-main">
                    {alert? 
                    <div className="alert">
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <p className="message">are you sure?</p>
                        <div className="button-group">
                        <div className="yes-btn" onClick={checkIn}>Yes</div>
                        <div className="no-btn" onClick={() => setalert(false)}>No</div>
                        </div>
                    </div>
                    :
                    <div className="form">
                        <div className="heading">
                            <h3>Check in form</h3>
                        </div>
                        <div className="form-item st">
                            <Select options={options} onChange={(e) => setname(e.value)} />
                        </div>
                        <div className="form-item">
                            <div className="checkin-btn" onClick={() => setalert(!alert)}>Check in</div>
                        </div>
                    </div>
                    }
                    
                </div>
                { checkindata &&
                    <div className="alert-success">
                        <FontAwesomeIcon icon={faCheck} /> {checkindata}
                    </div>}
            </div>
        </div>
    )
}

export default Checkin
