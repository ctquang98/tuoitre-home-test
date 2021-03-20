import React, { useState, useEffect } from 'react';
import { getPosts } from '../../api';
import { Card } from 'react-bootstrap';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPostsData() {
            try {
                const data = await getPosts();
                if(data) {
                    setPosts(data);
                }
            }
            catch(err) {
                console.log(err);
            }
        }
        getPostsData();
    }, []);

    return (
        <div>
            {Array.isArray(posts) && posts.length
             ? posts.map((p, i) => (
                <Card key={i}>
                    <Card.Body>
                        <Card.Title>{p.title}</Card.Title>
                        <Card.Text>{p.body}</Card.Text>
                    </Card.Body>
                </Card>
             ))
             : null
            }
        </div>
    );
}

export default HomePage;