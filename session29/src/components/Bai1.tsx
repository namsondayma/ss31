import React from 'react';

interface State {
    name: string;
}
class Ex1 extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'Nguyễn Nam Sơn',
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}!</h1>
            </div>
        );
    }
}
export default Ex1;