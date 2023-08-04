<<<<<<< HEAD
// import React, { useEffect, useState } from 'react';
// import ItemCard from './ItemCard';
// import { Dimmer, Loader, Grid } from 'semantic-ui-react';
// import Login from './Login';
// import RegisterForm from './RegisterForm';
// import './registerForm.css';
// import ShoppingCart from './ShoppingCart';

// function ItemsDisplay() {
//   const [products, setProducts] = useState([]);

//   const getProductsForMe = async () => {
//     try {
//       const res = await fetch(
//         `http://ecommerce.muersolutions.com/api/v1/products`,
//         {
//           method: 'GET',
//           Accept: 'application.json',
//         }
//       );
//       if (res.ok) {
//         const data = await res.json();
//         setProducts(data);
//         console.log(data);
//       } else {
//         console.log('Failed to fetch data:', res.status, res.statusText);
//       }
//     } catch (error) {
//       console.log('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     getProductsForMe();
//   }, []);

//   const renderProducts = products?.map((product) => (
//     <Grid.Column key={product.id}>
//       <ItemCard product={product} />
//     </Grid.Column>
//   ));

//   return (
//     <div>
//       <RegisterForm />
//       <div className="items-display-container">
//         {products.length === 0 ? (
//           <Dimmer active>
//             <Loader>Loading</Loader>
//           </Dimmer>
//         ) : (
//           <Grid relaxed columns={4} stackable>
//             {renderProducts}
//           </Grid>
//         )}
//       </div>
//       <Login />
//       <ShoppingCart />
//     </div>
//   );
// }

// export default ItemsDisplay;

/////////////////////////////////////////////////////////

// import React, { useContext } from 'react';
// import { Dimmer, Grid, Loader } from 'semantic-ui-react';
// import ItemCard from './ItemCard';
// import { ProductContext } from '../context/ProductContext';

// function ItemsDisplay() {
//   const { products } = useContext(ProductContext);

//   const renderProducts = products.map((product) => (
//     <Grid.Column key={product.id}>
//       <ItemCard product={product} />
//     </Grid.Column>
//   ));

//   return (
//     <div>
//       <div className="items-display-container">
//         {products.length === 0 ? (
//           <Dimmer active>
//             <Loader>Loading</Loader>
//           </Dimmer>
//         ) : (
//           <Grid relaxed columns={4} stackable>
//             {renderProducts}
//           </Grid>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ItemsDisplay;

////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { Dimmer, Loader, Grid } from 'semantic-ui-react';
import RegisterForm from './RegisterForm';
import ShoppingCart from './ShoppingCart';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 method from uuid to generate a unique key

function ItemsDisplay() {
  const [products, setProducts] = useState([]);

  const getProductsForMe = async () => {
    try {
      const res = await fetch(
        `http://ecommerce.muersolutions.com/api/v1/products`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      } else {
        console.log('Failed to fetch data:', res.status, res.statusText);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getProductsForMe();
  }, []);

  const renderProducts = products?.map((product) => (
    <Grid.Column key={uuidv4()}>
      {' '}
      <ItemCard product={product} />
    </Grid.Column>
  ));

  return (
    <div>
      <RegisterForm />
      <div className="items-display-container">
        {products.length === 0 ? (
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        ) : (
          <Grid relaxed columns={4} stackable>
            {renderProducts}
          </Grid>
        )}
      </div>
    </div>
  );
}

export default ItemsDisplay;
=======
import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { Segment, Card, Image, Button, Grid } from 'semantic-ui-react';

function ItemsDisplay() {
  const [products, setProducts] = useState([]);
  // const BASE_URL = 'http://api.fakeshop-api.com';
  // const Endpoint = '/products/getAllProducts';
  // const apiURL =  BASE_URL`${Endpoint}`

  // Fetching data operation

  const getProductsForMe = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`, {
        method: 'GET',
        Accept: 'application.json',
      });
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
        console.log(data);
      } else {
        console.log('Failed to fetch data:', res.status, res.statusText);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getProductsForMe();
  }, []);

  const renderProducts = products?.map((product) => (
    <Grid.Column key={product.id}>
      <ItemCard product={product} />
    </Grid.Column>
  ));

  return (
    <Segment.Group horizontal>
      <div className="items-display-container">
        <Grid relaxed columns={4}>
          {renderProducts}
        </Grid>
      </div>
    </Segment.Group>
  );
}

export default ItemsDisplay;
>>>>>>> a641d4d (updated ItemDisplay component)
