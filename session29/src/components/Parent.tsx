import React from 'react';
import Child from './Child';

interface State {
    name: string;
}
class Parent extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'Nam Sơn',
        };
    }
    render() {
        const { name } = this.state;

        return (
            <div>
                <h1>Parent</h1>
                <Child name={name} />
            </div>
        );
    }
}
export default Parent;