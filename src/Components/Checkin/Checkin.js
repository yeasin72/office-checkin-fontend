import React, { useState } from 'react'
import './Checkin.css'
import { faExclamationTriangle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import { checkinAction } from '../../redux/Action/checkinAction'
import { getuserAction } from '../../redux/Action/getuserAction'

const Checkin = () => {
    const dispatch = useDispatch()
    const [alert, setalert] = useState(false)
    const [name, setname] = useState('')

    // response from server
    const checkIN = useSelector(state => state.checkIN);
    const { checkindata, warning } = checkIN
    const grtalluser = useSelector(state => state.grtalluser);
    const { users, userloading } = grtalluser

    let userdata = []
    if (users !== null ) {
        for (let e = 0; e < users.length; e++) {
            userdata.push({
                label: users[e].label,
                value: users[e]._id
            })
        }
    }


    React.useEffect(() => {
        dispatch(getuserAction())
    }, [dispatch])

    //  to checkout 
    function checkIn() {
        const updatedData = users.find(x => x._id === name)
    
        dispatch(checkinAction(updatedData))
        setalert(false)
        userdata.slice(0, userdata.length)
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
                        {userloading ?
                        <div className="loading" style={{height: `173px`}}>
                            Loading...
                        </div>
                        :
                        <>
                            <div className="heading">
                                <h3>Check in form</h3>
                            </div>
                            <div className="form-item st">
                                {userdata &&
                                <Select options={userdata} onChange={(e) => setname(e.value)} />
                                }
                            </div>
                            <div className="form-item">
                                <div className="checkin-btn" onClick={() => setalert(!alert)}>Check in</div>
                            </div>
                        </>
                        }
                    </div>
                    }
                    
                </div>
                { (checkindata || warning)&&
                    <div className={checkindata ? "alert-success" : "alert-warning"}>
                        <FontAwesomeIcon icon={checkindata? faCheck : faExclamationTriangle} /> {checkindata ? checkindata : warning}
                    </div>}
            </div>
        </div>
    )
}

export default Checkin
