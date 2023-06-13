import React, {useContext} from 'react'
import { Navbar } from '../components'
const Layout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto h-screen'>
                <div className='grow'>
                    <Navbar />
                    <div className='m-5'>{children}</div>
                </div>
                {/* <ToastContainer /> */}
            </div>
        </>
    )
}

export default Layout