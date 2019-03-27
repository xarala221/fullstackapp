import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component {
	static propTypes = {
		login: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { username, password } = this.state;
		const { login } = this.props;
		login(username, password);
	};

	render() {
		return (
      <Container fluid="True" style={{ height: '100vh' }}>
      <Row className="h-100 align-items-center">
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                onChange={e => this.setState({ username: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (username, password) => {
			return dispatch(login(username, password));
		}
	};
};

export default connect(null, mapDispatchToProps)(Login);
