import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import styles from './styles.module.css'
import { useDispatch } from 'react-redux';
import { staffLogout } from '../../redux/actions/staffActions';

const Navbar = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(staffLogout())
        navigate("/staff")
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.url}>
                <ul>
                    <li><Link to="/staff/dashboard">Dashboard</Link></li>
                    {/* <li><Link to="/staff/guest">My Guest</Link></li> */}
                    <li><Link to="/staff/prebook">Prebook a Guest</Link></li>
                    <li><Link to="/staff/logs">Logs</Link></li>
                    <li><Link to="/staff/#logout" onClick={logoutHandler}>Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
