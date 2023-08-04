import React from 'react';
import { Form, Input, Checkbox, Button, Grid } from 'semantic-ui-react';

const ReloadButton = () => {
  const handleReload = () => {
    // Set the URL to the homepage
    const homepageURL = '/'; // Change this to your homepage URL if it's different

    // Reload the page
    window.location.href = homepageURL;
  };
};

const Sign_In = () => {
  return (
    <div
      className="form-login"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Form>
        <Form.Field>
          <label>Email address</label>
          <Input type="email" placeholder="Email address" />
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <Input type="password" placeholder="Password" />
        </Form.Field>

        <Grid columns={2} stackable>
          <Grid.Column>
            <Form.Field>
              <Checkbox label="Remember me" defaultChecked />
            </Form.Field>
          </Grid.Column>
          <Grid.Column>
            <a href="#!">Forgot password?</a>
          </Grid.Column>
        </Grid>

        <Button type="submit" fluid onClick={ReloadButton}>
          Sign in
        </Button>
      </Form>
    </div>
  );
};

export default Sign_In;
