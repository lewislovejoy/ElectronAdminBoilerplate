import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './SplashScreen.css';

const rainbow = { src: undefined };

function SplashScreen() {
  return (
    <div>
      <div style={{ padding: 50, height: '100vh' }}>
        <div style={{ width: '50%', float: 'left', height: '100%' }}>
          <div
            className="bk-primary"
            style={{
              backgroundImage: `url(${rainbow.src})`,
              borderRadius: '2.5rem',
              height: '100%',
              textAlign: 'center',
            }}
          >
            <div style={{ color: 'white', padding: 40 }}>
              <p
                style={{
                  fontSize: 18,
                  marginBottom: 15,
                  fontWeight: 500,
                  lineHeight: 1.3,
                  marginTop: 60,
                }}
              >
                Log in to your admin dashboard with your credentials
              </p>
              <h1
                style={{
                  fontSize: 50,
                  lineHeight: 1.2,
                  fontWeight: 700,
                  marginBottom: '1.4rem',
                }}
              >
                Electron Wizard Admin
              </h1>
              <p style={{ opacity: 0.8 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit
              </p>
            </div>
          </div>
        </div>

        <div style={{ width: '50%', float: 'left' }}>
          <div style={{ padding: 20, paddingTop: 40 }}>
            <div style={{ textAlign: 'center' }}>
              <h3>Welcome</h3>
              <p>Login below to access the Admin Console.</p>
              <h6 className="text-bar">
                <span style={{ padding: '0 20px' }}>
                  Login
                </span>
              </h6>
            </div>

            <Form
              onSubmit={() => {
                window.postMessage({
                  cmd: 'login',
                  email: 'fred', // document.getElementById('email').value,
                  password: 'whatever', // document.getElementById('userCode').value
                });
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control size="lg" type="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control size="lg" type="password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <div className="text-center mb-4">
                <Button variant="primary" type="submit">
                  Sign In
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
