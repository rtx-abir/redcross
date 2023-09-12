// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         Navbar
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNavDropdown"
//         aria-controls="navbarNavDropdown"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarNavDropdown">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">
//               Home <span className="sr-only">(current)</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Features
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Pricing
//             </a>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdownMenuLink"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Dropdown link
//             </a>
//             <div
//               className="dropdown-menu"
//               aria-labelledby="navbarDropdownMenuLink"
//             >
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const navStyle = {
    backgroundColor: 'white', // Change this to your preferred color
    borderBottom: '1px solid #dee2e6' // Change this to your preferred color
  };

  const brandStyle = {
    color: '#007bff', // Change this to your preferred color
    fontWeight: 'bold',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  };

  const dropdownStyle = {
    left: '5%'
  }

  return (
    <Navbar style={navStyle} expand="lg">
      <Navbar.Brand href="#home" style={brandStyle}>
        <img
          src="https://banner2.cleanpng.com/20180406/qcw/kisspng-american-red-cross-logo-clip-art-ambulance-5ac7db47cd4a71.8400430015230472398409.jpg" // Replace with the path to your logo
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' '}
        DisasterAnalytics
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-left">
        <Nav>
          <NavDropdown style={dropdownStyle} title={<FontAwesomeIcon icon={faBars} />} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/upload">Upload</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/analytics">Analytics</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
