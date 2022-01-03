import React from 'react';

export const ListLivro = () => {

    return (
        <div>
            <h1>
                Livros
            </h1>
            <ul id='Livros' style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                <li>
                    <h2>Nome: </h2>
                    <h3>Editora: </h3>
                </li>
            </ul>
        </div>
    );
};

export default ListLivro;