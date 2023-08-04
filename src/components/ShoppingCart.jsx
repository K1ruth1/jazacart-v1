// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ShoppingCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [items, setItems] = useState([]);

//   // Fetch product information from the API using Axios and update the items state
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           'http://ecommerce.muersolutions.com/api/v1/products'
//         );
//         setItems(response.data);
//       } catch (error) {
//         console.error('Failed to fetch product information:', error);
//         // Handle error by showing an error message to the user or retry the request.
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Add item to cart
//   const addToCart = (item) => {
//     const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (itemInCart) {
//       const updatedCartItems = cartItems.map((cartItem) =>
//         cartItem.id === item.id
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem
//       );
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };

//   // Calculate total quantity of items in cart
//   const totalQuantity = cartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity,
//     0
//   );

//   // Calculate total price of items in cart
//   const totalPrice = cartItems.reduce(
//     (total, cartItem) => total + cartItem.unit_price * cartItem.quantity,
//     0
//   );

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.unit_price}
//             <button onClick={() => addToCart(item)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//       <h3>Cart Summary</h3>
//       <p>Total Quantity: {totalQuantity}</p>
//       <p>Total Price: ${totalPrice}</p>
//       <h3>Cart Items</h3>
//       <ul>
//         {cartItems.map((cartItem) => (
//           <li key={cartItem.id}>
//             {cartItem.name} - Quantity: {cartItem.quantity} - Total Price: $
//             {cartItem.price * cartItem.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ShoppingCart;

import React, { useState } from 'react';
import { Image, Table, Input, Button, Icon, Grid } from 'semantic-ui-react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const itemInCart = cartItems.find((item) => item.id === product.id);
    if (itemInCart) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (product) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.unit_price * item.quantity,
      0
    );
  };

  return (
    <div>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell>Format</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cartItems.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>
                <Grid>
                  <Grid.Column width={4}>
                    <Image src={product.image} size="tiny" rounded />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <div>
                      <p>{product.title}</p>
                      <p>{product.description}</p>
                    </div>
                  </Grid.Column>
                </Grid>
              </Table.Cell>
              <Table.Cell>{product.format}</Table.Cell>
              <Table.Cell>
                <div className="d-flex flex-row align-items-center">
                  <Button icon basic onClick={() => decreaseQuantity(product)}>
                    <Icon name="minus" />
                  </Button>
                  <Input
                    size="mini"
                    type="number"
                    value={product.quantity}
                    readOnly
                    style={{ width: '50px', textAlign: 'center' }}
                  />
                  <Button icon basic onClick={() => addToCart(product)}>
                    <Icon name="plus" />
                  </Button>
                </div>
              </Table.Cell>
              <Table.Cell>{product.unit_price}</Table.Cell>
              <Table.Cell>
                <Button icon basic onClick={() => removeItem(product)}>
                  <Icon name="trash alternate outline" />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div
        className="d-flex justify-content-between"
        style={{ fontWeight: '500' }}
      >
        <p className="mb-2">Subtotal</p>
        <p className="mb-2">Ksh{calculateTotalPrice().toFixed(2)}</p>
      </div>
      <Button fluid color="blue">
        Checkout
      </Button>
    </div>
  );
};

export default ShoppingCart;
