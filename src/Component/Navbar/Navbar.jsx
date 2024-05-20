
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";
import { FaArrowRight } from "react-icons/fa6";



const Navbar = () => {
    const { user, logout } = useContext(authContext)
    const handleLogout = () => {
        logout()
    }
    const navItem = <>
        <li className="mr-4"><NavLink to=''>Home</NavLink></li>
        <li className="mr-4"><NavLink to='/allItems'>AllItems</NavLink></li>

        {
            user && <>
                <li className="mr-4"><NavLink to='/addblogs'>Add Craft Item</NavLink></li>
                <li className="mr-4"><NavLink to='/myblogs'>My Art & Craft List</NavLink></li>
            </>
        }

    </>
    return (
        <div className="bg-base-100 shadow">
            <div className="navbar  max-w-[1250px] mx-auto py-5 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="text-2xl md:text-4xl font-extrabold">Krafti<span className="text-[#b18b5e] ">Art</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="avatar mr-5 tooltip tooltip-left" data-tip={user.displayName}>
                                <div className="w-11 rounded-full ring ring-[#b18b5e] ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <a onClick={handleLogout} className="btn  rounded bg-[#b18b5e] hover:bg-[#997850] text-white">LogOut <FaArrowRight className="text-base mt-1 "/></a>
                        </> : <Link to='/login' className="btn rounded bg-[#b18b5e] hover:bg-[#997850] text-white px-7">Login <FaArrowRight className="text-base mt-1 "/>
</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;