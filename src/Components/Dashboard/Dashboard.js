import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Dashboard.css'
import { useDispatch, useSelector } from 'react-redux';
import { accessLog } from '../../redux/Action/accesslogAction';

const Dashboard = () => {
    const dispatch = useDispatch()

    const log = useSelector(state => state.log)
    const { accessloading, accesslog } = log

    React.useEffect(() => {
        dispatch(accessLog())
    }, [dispatch])
    return (
        <div className='dashboard'>
            <div className="container">
                <div className="dashboard-main">
                    {accessloading? 
                    <div className='loading'>
                        loading...
                    </div>
                    :
                    <>
                    <div className="access-log">
                        <div className="icon">
                            Icon
                        </div>
                            <div className="name">Employe Name</div>
                            <div className="date">Date</div>
                            <div className="time">Time</div>
                            <div className="access-type">Access Type</div>
                    </div>
                    {accesslog && 
                        accesslog.map((ele) => (
                        <div className="access-log" key={ele._id}>
                            <div className="icon">
                                <FontAwesomeIcon icon={ele.accessType && ele.accessType === 'Checkout'? faSignInAlt : faClipboardCheck} style={ele.accessType && ele.accessType === 'Checkout'?{color: `tomato`}: {color: `#056019`}} />
                            </div>
                            <div className="name">{ele.name}</div>
                            <div className="date">{ele.accessTime && ele.accessTime.slice(0, 10)}</div>
                            <div className="time">{ele.accessTime && parseInt(ele.accessTime.slice(11, 13), 10) > 12 ? (parseInt(ele.accessTime.slice(11, 13), 10) - 12) -6 : parseInt(ele.accessTime.slice(11, 13), 10) }:{ele.accessTime && ele.accessTime.slice(14, 16)}<span>{ele.accessTime && (parseInt(ele.accessTime.slice(11, 13), 10) - 6) > 12 ? 'AM': 'PM'}</span></div>
                            <div className="access-type">{ele.accessType}</div>
                        </div>
                        ))
                    }
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard
