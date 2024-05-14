import React from 'react';

interface Props {
    name: string;
}
class Child extends React.Component<Props> {
    render() {
        const { name } = this.props;

        return (
            <div>
                <h2>Child Component</h2>
                <p>Tên: {name}</p>
            </div>
        );
    }
}
export default Child;