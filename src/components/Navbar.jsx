import React, { useContext, useRef, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = ({ onSearch }) => {
const { theme, toggleTheme } = useContext(ThemeContext);
const searchRef = useRef(null);

useEffect(() => {
    searchRef.current.focus();
}, []);

return (
    <nav className={`navbar ${theme}`}>
        <div className="nav-brand">🌐 VidicConnect</div>
        <div className="nav-search">
        <input 
            type="text" 
            placeholder="Cari teman..." 
            ref={searchRef}
            onChange={(e) => onSearch(e.target.value)}
            className="search-input"
        />
        </div>
        <button onClick={toggleTheme} className="theme-btn">
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
    </nav>
    );
};

export default Navbar;