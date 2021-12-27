import React, { useState } from 'react'
import './../Checkin/Checkin.css'
import { faExclamationTriangle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'
import { checkoutAction } from '../../redux/Action/checkoutAction';
import { getuserAction } from '../../redux/Action/getuserAction';

const Checkout = () => {
    const dispatch = useDispatch()
    const [alert, setalert] = useState(false)
    const [name, setname] = useState('')

    // response from server
    const checkOUT = useSelector(state => state.checkOUT);
    const { checkoutdata, warning } = checkOUT
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
    function checkOut() {
        const updatedData = users.find(x => x._id === name)
        dispatch(checkoutAction(updatedData))
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
                        <div className="yes-btn" onClick={checkOut}>Yes</div>
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
                                <h3>Check out form</h3>
                            </div>
                            <div className="form-item st">
                                {userdata &&
                                <Select options={userdata} onChange={(e) => setname(e.value)} />}
                            </div>
                            <div className="form-item">
                                <div className="checkin-btn" onClick={() => setalert(!alert)}>Check Out</div>
                            </div>
                        </>
                        }
                    </div>
                    }
                </div>
                { (checkoutdata || warning) &&
                    <div className={checkoutdata ? "alert-success": "alert-warning"}>
                        <FontAwesomeIcon icon={checkoutdata ? faCheck : faExclamationTriangle} /> {checkoutdata ? checkoutdata : warning}
                    </div>}
            </div>
        </div>
    )
}

export default Checkout
