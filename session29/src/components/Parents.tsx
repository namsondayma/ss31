import React from 'react';
import Childs from './Childs';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

class Parents extends React.Component {
    render() {
        const product: Product = {
            id: 1,
            name: 'Product A',
            price: 10,
            quantity: 5,
        };

        return (
            <div>
                <h1>Parent Component</h1>
                <Childs product={product} />
            </div>
        );
    }
}

export default Parents;