import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/UseAdmin';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email)



    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allusers'>All users</Link></li>
                                <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;