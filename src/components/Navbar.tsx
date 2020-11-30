import React from 'react'
import { NavLink } from 'react-router-dom'

interface IParamsNavbar {
    cartOnClik: (event:React.MouseEvent<HTMLButtonElement>)=>void,
    countItems: number
}

const Navbar = (props : IParamsNavbar) => {
    const [toogle, setToogle] = React.useState<boolean>(false);
    return (
        <nav className="bg-white  border-b-2 border-yellow-400">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                <div className="relative flex items-center justify-between h-12">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button onClick={() => setToogle(!toogle)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/* <!-- Icon when menu is closed. -->
                                <!--
                                Heroicon name: menu
                    
                                Menu open: "hidden", Menu closed: "block"
                                --> */}
                            <svg className={`block ${toogle ? 'hidden' : 'block'} h-6 w-6  fill-current text-yellow-600`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* <!-- Icon when menu is open. -->
                                    <!--
                                    Heroicon name: x
                        
                                    Menu open: "block", Menu closed: "hidden"
                                    --> */}
                            <svg className={`${toogle ? 'block' : 'hidden'} h-6 w-6  fill-current text-yellow-600`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            {/* <span className="block lg:hidden h-8 w-auto text-sm font-medium text-gray-700 bg-gray-900">ICafe</span> */}
                            <img className="block lg:hidden h-8 w-auto fill-current text-green-600" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                            <img className="hidden lg:block h-8 w-auto fill-current text-green-600" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <NavLink exact to="/" activeClassName="text-yellow-600" className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gray-700">QR Mobile</NavLink>
                                <NavLink to="/menu" activeClassName="text-yellow-600" className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gray-700">Menu</NavLink>
                                <NavLink to="/table" activeClassName="text-yellow-600" className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gray-700">Table</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* <!-- Profile dropdown --> */}
                    * <div className="ml-3 relative">
                            <div>
                                <button onClick={props.cartOnClik} className="flex text-sm focus:outline-none " id="user-menu" aria-haspopup="true">
                                    <span className="relative inline-block">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full">
                                        1
                                    </span> */}
                                        <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full"></span>
                                    </span>


                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--
                Mobile menu, toggle classes based on menu state.

                Menu open: "block", Menu closed: "hidden"
            --> */
            }

            <div className={`${toogle ? 'block' : 'hidden'} sm:hidden   `}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <NavLink exact to="/" activeClassName="text-yellow-600" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gray-700">QR Mobile</NavLink>
                    <NavLink to="/menu" activeClassName="text-yellow-600" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gray-700">Menu</NavLink>
                    <NavLink to="/table" activeClassName="text-yellow-600" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gray-700">Table</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;