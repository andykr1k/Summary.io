import React, {useContext} from 'react'
import { Navbar } from '../components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto h-screen'>
                <div className='grow'>
                    <Navbar />
                    <div className='m-5'>{children}</div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Layout