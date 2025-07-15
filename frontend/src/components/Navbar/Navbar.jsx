// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";
import './Navbar.css';

// TypeScript ignore for JSX import
// @ts-nocheck

const links = [
  { label: "Home", to: "/" },
  { label: "Forum", to: "/forum" },
  { label: "Events", to: "/events" },
  { label: "About", to: "/about" },
  { label: "Marketplace", to: "/marketplace" },
 
  { label: <img src={bell} alt="Notifications" className="h-6 w-6 inline ml-10" />, to: "/notification" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow" id="header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8" >
       
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="CampusConnect logo" className="h-10 w-auto" />
          
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  aria-label={typeof label === "string" ? label : "Notifications"}
                  className="text-gray-700 transition hover:text-orange-600"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

       
         
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 ring-orange-600 focus:outline-none focus:ring-2 md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="space-y-1 bg-white px-4 pb-4 md:hidden">
          <ul className="space-y-1">
            {links.map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-gray-700 hover:bg-orange-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

        
        </div>
      )}
    </nav>
  );
}
