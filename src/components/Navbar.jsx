import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <>


<div className="relative w-full bg-teal-100">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
      <Link to="/">
        <span className="font-bold">Spend-Buddy</span>
      </Link>
    </div>
    <div className="lg:block">
      <ul className="inline-flex space-x-8">
        <li>
          <NavLink
            to="/home"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Home
          </NavLink>
        </li>
       
        <li>
          <NavLink
            to="/feedback"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Feedback
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</div>

    </>
  )
}
