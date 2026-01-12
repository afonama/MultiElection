import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import { elections as initialElections, voters as initialVoters } from '../Data';

const RootLayout = () => {
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('voting-app-theme') === 'dark');
  
  // FIX: Check if it equals 'true', not 'false'
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

  const [elections, setElections] = useState(() => {
    const saved = localStorage.getItem('elections');
    return saved ? JSON.parse(saved) : initialElections;
  });

  // --- NEW: Global Voter State ---
  const [allVoters, setAllVoters] = useState(() => {
    const savedVoters = localStorage.getItem('allVoters');
    // Using initialVoters as dummy data if storage is empty
    return savedVoters ? JSON.parse(savedVoters) : initialVoters;
  });

  useEffect(() => {
    localStorage.setItem('elections', JSON.stringify(elections));
    localStorage.setItem('allVoters', JSON.stringify(allVoters)); // Sync voters
    
    // OPTIONAL BUT RECOMMENDED: Ensure auth state and theme are saved here too so they don't desync
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('voting-app-theme', darkTheme ? 'dark' : 'light');

    document.body.className = darkTheme ? 'dark' : 'light';
  }, [elections, allVoters, darkTheme, isAuthenticated]);

  return (
    <div className="app">
      <NavBar 
        darkTheme={darkTheme} 
        setDarkTheme={setDarkTheme} 
        isAuthenticated={isAuthenticated} 
        setIsAuthenticated={setIsAuthenticated} 
      />
      {/* Added allVoters and setAllVoters to context */}
      <Outlet context={{ 
        isAuthenticated, 
        setIsAuthenticated, 
        elections, 
        setElections, 
        allVoters, 
        setAllVoters 
      }} />
      <Footer darkTheme={darkTheme} />
    </div>
  );
};

export default RootLayout;
// import React, { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import NavBar from './NavBar';
// import Footer from './Footer';
// import { elections as initialElections, voters as initialVoters } from '../Data';

// const RootLayout = () => {
//   const [darkTheme, setDarkTheme] = useState(localStorage.getItem('voting-app-theme') === 'dark');
//   const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'false');

//   const [elections, setElections] = useState(() => {
//     const saved = localStorage.getItem('elections');
//     return saved ? JSON.parse(saved) : initialElections;
//   });

//   // --- NEW: Global Voter State ---
//   const [allVoters, setAllVoters] = useState(() => {
//     const savedVoters = localStorage.getItem('allVoters');
//     // Using initialVoters as dummy data if storage is empty
//     return savedVoters ? JSON.parse(savedVoters) : initialVoters;
//   });

//   useEffect(() => {
//     localStorage.setItem('elections', JSON.stringify(elections));
//     localStorage.setItem('allVoters', JSON.stringify(allVoters)); // Sync voters
//     document.body.className = darkTheme ? 'dark' : 'light';
//   }, [elections, allVoters, darkTheme]);

//   return (
//     <div className="app">
//       <NavBar 
//         darkTheme={darkTheme} 
//         setDarkTheme={setDarkTheme} 
//         isAuthenticated={isAuthenticated} 
//         setIsAuthenticated={setIsAuthenticated} 
//       />
//       {/* Added allVoters and setAllVoters to context */}
//       <Outlet context={{ 
//         isAuthenticated, 
//         setIsAuthenticated, 
//         elections, 
//         setElections, 
//         allVoters, 
//         setAllVoters 
//       }} />
//       <Footer darkTheme={darkTheme} />
//     </div>
//   );
// };

// export default RootLayout;
