import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../Shared/Nav/Nav';

const News = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <Nav></Nav>
            <h1>{id}</h1>
        </div>
    );
};

export default News;