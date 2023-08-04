// import React from 'react';
// import 'semantic-ui-css/semantic.min.css'; // Import Semantic UI CSS

// const CheckoutForm = () => {
//   return (
//     <div className="ui container">
//       <div className="ui segment">
//         {/* Header and Navigation */}
//         <h5 className="ui header">Company name</h5>
//         <nav className="ui secondary menu">{/* Navigation links */}</nav>
//       </div>

//       {/* Main content */}
//       <div className="ui segment">
//         <h2>Checkout form</h2>
//         <p className="lead">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry...
//         </p>

//         {/* Your cart */}
//         <div className="ui segment">
//           <h4 className="ui header">Your cart</h4>
//           {/* Cart items */}
//         </div>

//         {/* Promo code form */}
//         <form className="ui form">
//           {/* Promo code input */}
//           <button className="ui button" type="submit">
//             Redeem
//           </button>
//         </form>
//       </div>

//       {/* Billing address */}
//       <div className="ui segment">
//         <h4 className="ui header">Billing address</h4>
//         <form className="ui form">{/* Billing address form fields */}</form>
//       </div>

//       {/* Payment */}
//       <div className="ui segment">
//         <h4 className="ui header">Payment</h4>
//         <form className="ui form">{/* Payment form fields */}</form>
//       </div>

//       {/* Continue to checkout button */}
//       <button className="ui primary button" type="button">
//         Continue to checkout
//       </button>

//       {/* Footer */}
//       <footer className="ui segment">
//         <p className="mb-1">&copy; 2020-2021 therichpost.com</p>
//         <ul className="list-inline">
//           <li className="list-inline-item">
//             <a href="#">Privacy</a>
//           </li>
//           <li className="list-inline-item">
//             <a href="#">Terms</a>
//           </li>
//           <li className="list-inline-item">
//             <a href="#">Support</a>
//           </li>
//         </ul>
//       </footer>
//     </div>
//   );
// };

// export default CheckoutForm;

import React from 'react';
import {
  Button,
  Card,
  Image,
  Container,
  Grid,
  Header,
  Icon,
  Input,
  Label,
  List,
  Segment,
} from 'semantic-ui-react';

export default function PaymentMethods() {
  return (
    <Segment className="h-100 gradient-custom">
      <Container className="py-5 h-100">
        <Grid centered>
          <Grid.Column width={8}>
            <Card fluid className="mb-4">
              <Card.Content>
                <Header as="h5">Cart - 2 items</Header>
              </Card.Content>
              <Card.Content>
                <Grid columns={3}>
                  <Grid.Column width={3}>
                    <Image
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                      ></div>
                    </a>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <p>
                      <strong>Blue denim shirt</strong>
                    </p>
                    <p>Color: blue</p>
                    <p>Size: M</p>
                    <Label as="a" color="red" circular>
                      <Icon name="trash" />
                    </Label>
                    <Label as="a" color="red" circular>
                      <Icon name="heart" />
                    </Label>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                      <Button icon="minus" />
                      <Input
                        defaultValue={1}
                        min={0}
                        type="number"
                        label="Quantity"
                      />
                      <Button icon="plus" />
                    </div>
                    <p className="text-start text-md-center">
                      <strong>$17.99</strong>
                    </p>
                  </Grid.Column>
                </Grid>
              </Card.Content>
            </Card>

            <Card fluid className="mb-4">
              <Card.Content>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </Card.Content>
            </Card>

            <Card fluid className="mb-4 mb-lg-0">
              <Card.Content>
                <p>
                  <strong>We accept</strong>
                </p>
                <Card.Group itemsPerRow={4}>
                  <Card>
                    <Image
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                      size="mini"
                    />
                  </Card>
                  <Card>
                    <Image
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                      size="mini"
                    />
                  </Card>
                  <Card>
                    <Image
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                      size="mini"
                    />
                  </Card>
                  <Card>
                    <Image
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                      alt="PayPal acceptance mark"
                      size="mini"
                    />
                  </Card>
                </Card.Group>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <Card fluid className="mb-4">
              <Card.Content>
                <Header as="h5">Summary</Header>
              </Card.Content>
              <Card.Content>
                <List divided relaxed>
                  <List.Item>
                    <List.Content floated="right">$53.98</List.Content>
                    <List.Content>Products</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content floated="right">Gratis</List.Content>
                    <List.Content>Shipping</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content floated="right">
                      <strong>$53.98</strong>
                      <p>(including VAT)</p>
                    </List.Content>
                    <List.Content>
                      <strong>Total amount</strong>
                    </List.Content>
                  </List.Item>
                </List>
              </Card.Content>
              <Card.Content>
                <Button fluid size="large">
                  Go to checkout
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
}
