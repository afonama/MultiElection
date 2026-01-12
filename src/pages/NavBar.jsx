import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoIosMoon, IoMdSunny } from 'react-icons/io';
// 1. Import useLocation
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

const NavBar = ({ darkTheme, setDarkTheme, isAuthenticated, setIsAuthenticated }) => {
  const [showNav, setShowNav] = useState(window.innerWidth >= 600);
  const navigate = useNavigate();
  
  // 2. Get the current page path
  const location = useLocation();

  // 3. Define which pages should NEVER show the menu links
  const isAuthPage = ['/', '/login', '/register'].includes(location.pathname);

  useEffect(() => {
    const handleResize = () => setShowNav(window.innerWidth >= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeNavMenu = () => {
    if (window.innerWidth < 600) setShowNav(false);
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav__logo' onClick={closeNavMenu}>LUMIX</Link>
        
        <div className="nav__menu-flex">
         
          {isAuthenticated && !isAuthPage && showNav && (
            <menu>
              <NavLink to="/elections" onClick={closeNavMenu}>Elections</NavLink>
              <NavLink to="/results" onClick={closeNavMenu}>Results</NavLink>
              <NavLink to="/logout" onClick={closeNavMenu}>Logout</NavLink>
            </menu>
          )}
          
          <div className="nav__btns">
            <button className="theme__toggle-btn" onClick={() => setDarkTheme(!darkTheme)}>
              {darkTheme ? <IoMdSunny /> : <IoIosMoon />}
            </button>
            
            {/* Also hide the hamburger menu on Auth pages */}
            {isAuthenticated && !isAuthPage && (
              <button className="nav__toggle-btn" onClick={() => setShowNav(!showNav)}>
                {showNav ? <AiOutlineClose /> : <HiOutlineBars3 />}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;






// import React, { useState, useEffect } from 'react';
// import { AiOutlineClose } from 'react-icons/ai';
// import { HiOutlineBars3 } from 'react-icons/hi2';
// import { IoIosMoon, IoMdSunny } from 'react-icons/io';
// import { Link, NavLink, useNavigate } from 'react-router-dom';

// const NavBar = ({ darkTheme, setDarkTheme, isAuthenticated, setIsAuthenticated }) => {
//   const [showNav, setShowNav] = useState(window.innerWidth >= 600);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => setShowNav(window.innerWidth >= 600);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const closeNavMenu = () => {
//     if (window.innerWidth < 600) setShowNav(false);
//   };

//   return (
//     <nav>
//       <div className="container nav__container">
//         <Link to="/" className='nav__logo' onClick={closeNavMenu}>LUMIX</Link>
        
//         <div className="nav__menu-flex">
//           {/* CONDITION: 
//               1. Must be Authenticated to see any links.
//               2. showNav must be true (for mobile toggle/desktop view).
//           */}
//           {isAuthenticated && showNav && (
//             <menu>
//               <NavLink to="/elections" onClick={closeNavMenu}>Elections</NavLink>
//               <NavLink to="/results" onClick={closeNavMenu}>Results</NavLink>
//               <NavLink to="/logout" onClick={closeNavMenu}>Logout</NavLink>
//             </menu>
//           )}
          
//           <div className="nav__btns">
//             <button className="theme__toggle-btn" onClick={() => setDarkTheme(!darkTheme)}>
//               {darkTheme ? <IoMdSunny /> : <IoIosMoon />}
//             </button>
            
//             {/* Toggle button only shows if authenticated so user can't open an empty menu */}
//             {isAuthenticated && (
//               <button className="nav__toggle-btn" onClick={() => setShowNav(!showNav)}>
//                 {showNav ? <AiOutlineClose /> : <HiOutlineBars3 />}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;