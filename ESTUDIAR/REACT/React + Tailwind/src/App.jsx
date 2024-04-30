import { useState } from "react";

import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog"
import Contact from "./pages/Contact";
import Menu from "./components/Menu";
/* import Sol from "./components/Sol"; */
/* import Users from "./components/Users"; */
/* import Logo from "./components/Logo"; */

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
function Layout() {
  return (
    <>
      <nav>
        <header className="bg-white shadow px-6">
          <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
           <Menu/>
            <div className="space-x-8 hidden md:flex">
              <Link className="px-3 py-2 text-sky-500" to="/">
                Home
              </Link>
              <Link
                className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
                to="/About"
              >
                About
              </Link>
              <Link
                className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
                to="/Blog"
              >
                Blog
              </Link>
              <Link
                className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
                to="Contact"
              >
                Contact
              </Link>
            </div>
            <div>
              <button className="rounded-full focus:ring-slate-500 hover:text-sky-500 transition-colors duration-200 focus:ring-2 focus:ring-offset-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </button>
               <button className="ml-4 rounded-full focus:ring-slate-500 hover:text-sky-500 transition-colors duration-200 focus:ring-2 focus:ring-offset-1">
        <img
          className="h-6 w-6 rounded-full"
          src="https://ui-avatars.com/api?name=Jean+Carlos"
          alt=""
        />
      </button>
            </div>
          </div>
        </header>
      </nav>
      <Outlet />
    </>
  );
}
export default App;
