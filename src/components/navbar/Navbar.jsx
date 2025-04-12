import { useState } from "react";
import { ImCross } from "react-icons/im";
import { MdMenu } from "react-icons/md";

const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = navItems.map(route => <li key={route.id}><a href={route.path}>{route.name}</a></li>)

    return (
        <nav className="flex justify-between px-5 my-5">
            <span className="flex items-center gap-3" onClick={() => setOpen(!open)}>
                {open ? <ImCross className="md:hidden w-8" /> : <MdMenu className="md:hidden text-2xl w-8" />}
                <ul className={`md:hidden bg-gray-50 text-black left-8 w-20  absolute ${open?'top-12':'-top-40'}`}>
                    {links}
                </ul>
                <h3>MY Navbar</h3>
            </span>
            <ul className="md:flex justify-center hidden gap-5 ">
                {links}
            </ul>
            <h3>Sign In</h3>
        </nav>
    );
};

export default Navbar;