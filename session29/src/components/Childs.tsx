import React from 'react';

interface Props {
    product: {
        id: number;
        name: string;
        price: number;
        quantity: number;
    };
}
class Childs extends React.Component<Props> {
    render() {
        const { product } = this.props;

        return (
            <div>
                <h2>Childs</h2>
                <p>ID: {product.id}</p>
                <p>Name: {product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
            </div>
        );
    }
}
export default Childs;