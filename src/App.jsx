// // App.jsx

// import React from 'react';
// import Footer from './components/Footer.jsx';
// import 'semantic-ui-css/semantic.min.css';
// import './App.css';
// import Header from './components/Header.jsx';
// import ItemsDisplay from './components/ItemsDisplay.jsx';

// function App() {
//   return (
//     <>
//       {/* Add your other components here */}
//       <Header />
//       <Footer />
//       <ItemsDisplay />
//     </>
//   );
// }

// export default App;

// App.js;
/////////////////////////////////////////////////////

// import React from 'react';
// import Footer from './components/Footer.jsx';
// import 'semantic-ui-css/semantic.min.css';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavigationBar from './components/NavigationBar.jsx';
// import ItemsDisplay from './components/ItemsDisplay.jsx';
// import Checkout from './components/Checkout.jsx';

// function App() {
//   return (
//     <Router>
//       <>
//         {/* Add your other components here */}
//         <NavigationBar />
//         <Switch>
//           <Route exact path="/" component={ItemsDisplay} />
//           <Route path="/shopping" component={Checkout} />
//         </Switch>
//         <Footer />
//       </>
//     </Router>
//   );
// }

// export default App;
////////////////////////////////////////////

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shopping';
import NavBar from './components/NavBar';
import Sign_In from './pages/Sign_In';
import Register from './pages/Register';
import { Fragment } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign_in" element={<Sign_In />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
