// import React from 'react';
// import logoImage from '../images/logo.png';
// import SearchBar from './SearchBar';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo-container">
//         <img src={logoImage} alt="JAZACART Logo" />
//         <h2>JAZACART</h2>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { Menu, Segment, Input } from 'semantic-ui-react';

// const Header = () => {
//   const [activeItem, setActiveItem] = useState('home');

//   const handleItemClick = (e, { name }) => setActiveItem(name);

//   return (
//     <Segment inverted>
//       <Menu inverted secondary>
//         <Menu.Item
//           name="home"
//           active={activeItem === 'home'}
//           onClick={handleItemClick}
//         />
//         <Menu.Item
//           name="Register"
//           active={activeItem === 'messages'}
//           onClick={handleItemClick}
//         />
//         <Menu.Item
//           name="Login"
//           active={activeItem === 'friends'}
//           onClick={handleItemClick}
//         />
//         <Menu.Item position="right">
//           <Input className="icon" icon="search" placeholder="Search..." />
//         </Menu.Item>
//       </Menu>
//     </Segment>
//   );
// };

// export default Header;






import React from 'react';
import Navigation from './Navigation';
import ShoppingCart from './ShoppingCart';

const Header = ({ quantity, amountToPay }) => {
  return (
    <header>
      <Navigation />
      <ShoppingCart quantity={quantity} amountToPay={amountToPay} />
    </header>
  );
};

export default Header;
