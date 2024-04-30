import React from "react";
import Sol from "./components/Sol";
import Users from "./components/Users"
import Menu from "./components/Menu"
const Header = ()=>{
    return(
     <header className="bg-white shadow px-6">
          <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
            <Menu />
            <div className="flex -mr-4 items-center">
             <Logo />
             
              <div className="space-x-8 hidden md:flex">
                <a className="px-3 py-2 text-sky-500" href="#">
                  <Link to="/">Home</Link>
                </a>
                <a className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors ">
                  <Link to={"/About"}>About</Link>
                </a>
                <a className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors">
                  Blog
                </a>
                <a
                  className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"

                >
                  Contact
                </a>
              </div>
            </div>
            <div>
             l <Sol />
              <Users />
            </div>
          </div>
        </header>
      
    )
}

export default Header