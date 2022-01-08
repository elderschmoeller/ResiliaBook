import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Livros(){

    useEffect(() => {
        axios.get('http://localhost:3005/livros')
        .then((response) => {
            console.log(response.data);
        })
        .catch(() => {
            console.log('A requisição deu errado!');
        })
    }, [])



    return (
    <div>
        LIVROS
    </div>
    )
}

export default Livros