import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="border-2 w-11/12 mx-auto flex items-center justify-between">
            <div className="font-bold text-3xl"><span className="text-red-700">Crowd</span><span className="text-gray-400">Cube</span></div>
            <div className="flex gap-4">
                <NavLink>Home</NavLink>
                <NavLink>All Campaign</NavLink>
                <NavLink>Add New Campaign</NavLink>
                <NavLink>My Campaign</NavLink>
                <NavLink>My Donations</NavLink>
            </div>
            <div></div>
        </div>
    );
};

export default Header;