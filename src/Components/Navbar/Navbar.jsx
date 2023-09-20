import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

  
const Navbar = () => {
    const [open, setOpen]=useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'UserProfile', path: '/profile/:id' }
      ];
      
    return (
        <nav className="text-black bg-slate-300 p-6 ">
            <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
                {
                    open === true ?
                     <AiOutlineCloseCircle></AiOutlineCloseCircle>
                     : <AiOutlineMenu ></AiOutlineMenu>
                }
            
            </div>
         <ul className={`md:flex duration-1000 absolute md:static
         ${open? 'top-16':'-top-60'}
         bg-slate-300 px-6 `}>
         {
                routes.map(route => <Link key={route.id} route={route}>
            </Link>)
            }
         </ul>
        </nav>
    );
};

export default Navbar;