
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h1>DEV@Deakin</h1>
        <input type="text" placeholder="Search..." />
        <div className="buttons">
          <button>Post</button>
          <button>Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;