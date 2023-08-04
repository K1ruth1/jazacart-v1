// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { Icon, Menu, Input } from 'semantic-ui-react';

// const NavigationBar = () => {
//   const [activeItem, setActiveItem] = useState('home');
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleItemClick = (e, { name }) => setActiveItem(name);

//   const handleSearchChange = (e) => setSearchQuery(e.target.value);

//   const handleSearchSubmit = () => {
//     // Handle search query here, e.g., redirect to search results page
//     console.log('Search query:', searchQuery);
//   };

//   return (
//     <Menu inverted>
//       <Menu.Item
//         as={NavLink}
//         to="/"
//         name="home"
//         active={activeItem === 'home'}
//         onClick={handleItemClick}
//       >
//         Home
//       </Menu.Item>
//       <Menu.Item
//         as={NavLink}
//         to="/about"
//         name="about"
//         active={activeItem === 'about'}
//         onClick={handleItemClick}
//       >
//         About
//       </Menu.Item>
//       <Menu.Item
//         as={NavLink}
//         to="/shopping"
//         name="shopping"
//         active={activeItem === 'shopping'}
//         onClick={handleItemClick}
//       >
//         Shopping
//       </Menu.Item>
//       <Menu.Menu position="right">
//         <Menu.Item>
//           <Input
//             icon="search"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//         </Menu.Item>
//         <Menu.Item>
//           <Icon name="cart" size="large" />
//         </Menu.Item>
//       </Menu.Menu>
//     </Menu>
//   );
// };

// export default NavigationBar;

//////////////////////////////////////////////////

// import React from 'react';
// import { Container, Menu } from 'semantic-ui-react';
// import { NavLink } from 'react-router-dom';

// function NavBar() {
//   return (
//     <Menu inverted>
//       <Container>
//         <Menu.Item as={NavLink} exact to="/">
//           Home
//         </Menu.Item>
//         <Menu.Item as={NavLink} to="/store">
//           Store
//         </Menu.Item>
//         <Menu.Item as={NavLink} to="/about">
//           About
//         </Menu.Item>
//       </Container>
//     </Menu>
//   );
// }

// export default NavBar;

////////////////////////////////////////////////////

import React, { useState } from 'react';
import { Container, Menu, Icon, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu inverted fixed="top" size="large" color={'blue'}>
      <Container>
        <Menu.Item
          as={NavLink}
          exact
          to="/"
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/shop"
          name="shop"
          active={activeItem === 'shop'}
          onClick={handleItemClick}
        >
          Shop
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/about"
          name="about"
          active={activeItem === 'about'}
          onClick={handleItemClick}
        >
          About
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            as={NavLink}
            to="/login"
            name="login"
            active={activeItem === 'login'}
            onClick={handleItemClick}
          >
            Login
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/sign_in"
            name="sign_in"
            active={activeItem === 'sign_in'}
            onClick={handleItemClick}
          >
            Sign In
          </Menu.Item>
        </Menu.Menu>
        <div>
          <Icon name="shopping cart" size="large" color={'black'} />
        </div>
      </Container>
    </Menu>
  );
}

export default NavBar;
