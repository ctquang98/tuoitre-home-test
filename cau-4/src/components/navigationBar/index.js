import React from 'react';
import { Navbar, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionRemoveUser } from '../../redux/actions/userAction';

const NavigationBar = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(actionRemoveUser());
    }

    return (
        <Navbar bg="primary" variant="dark" style={{ justifyContent: 'space-between' }}>
            <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
            <Form inline style={{ float: 'right' }}>
                {user && user.id
                 ? <>
                    <Navbar.Text>
                        <span style={{ marginRight: '10px', color: 'black' }}>
                            {user.name}
                        </span>
                    </Navbar.Text>
                    <Button variant="outline-light"
                        onClick={handleLogout}
                    >
                            Logout
                    </Button>
                   </>
                 : <Button variant="outline-light"
                        as={Link} to="/login"
                   >
                       Login
                    </Button>
                }
            </Form>
        </Navbar>
    );
}

export default NavigationBar;