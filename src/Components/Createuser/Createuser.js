import React, { useState } from 'react'
import './../Checkin/Checkin.css'
import { faExclamationTriangle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createuserAction } from '../../redux/Action/createuserAction';

const Createuser = () => {
    const dispatch = useDispatch()
    const [alert, setalert] = useState(false)
    const [name, setname] = useState('')

    // response from server
    const createUser = useSelector(state => state.createUser);
    const { user, userloading } = createUser



    //  to checkout 
    function checkOut() {
        if (name.length > 2) {
            
            const createuserdata = {
                "value": name,
                "label": name,
            }
            
            dispatch(createuserAction(createuserdata))
        }else{
            console.log("put valid name");
        }
        setalert(false)
    }

    return (
        <div className='checkin'>
            {userloading ?
                <div className="loading">
                    loading...
                </div>
            :
            
            <div className="container">
                <div className="checkin-main">
                    {alert? 
                    <div className="alert">
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <p className="message">are you sure?</p>
                        <div className="button-group">
                        <div className="yes-btn" onClick={checkOut}>Yes</div>
                        <div className="no-btn" onClick={() => setalert(false)}>No</div>
                        </div>
                    </div>
                    :
                    <div className="form">
                        <div className="heading">
                            <h3>Create user</h3>
                        </div>
                        <div className="form-item st">
                            <input type="text" placeholder='Employee Name' onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div className="form-item">
                            <div className="checkin-btn" onClick={() => setalert(!alert)}>Create</div>
                        </div>
                    </div>
                    }
                </div>
                { user &&
                    <div className="alert-success">
                        <FontAwesomeIcon icon={faCheck} /> {user}
                    </div>}
            </div>
            }
        </div>
    )
}

export default Createuser
