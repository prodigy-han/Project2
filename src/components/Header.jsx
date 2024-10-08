import React from 'react';

const Header = ({ title, description, total }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <h3>{description}</h3>
      <h3>Total Cards: {total}</h3>
    </div>
  );
};

export default Header;