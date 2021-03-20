import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { actionGetUserData } from '../../redux/actions/userAction';
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [userId, setUserId] = useState('');

    useEffect(() => {
        if(user && user.id) {
            history.push('/');
        }
    }, [user]);

    const handleLogin = () => {
        if(userId.length) {
            dispatch(actionGetUserData(userId))
        }
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="User ID"
                        name="userId"
                        value={userId}
                        onChange={e => setUserId(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary"
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default LoginPage;