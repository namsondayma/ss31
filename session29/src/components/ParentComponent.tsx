import React from 'react';
import ChildComponent from './ChildComponent';

interface User {
    id: number;
    name: string;
    address: string;
    email: string;
}
class ParentComponent extends React.Component {
    render() {
        const users: User[] = [
            {
                id: 1,
                name: 'Nam Sơn',
                address: 'Hà Nội',
                email: 'kinhihi@gmail.com',
            },
            {
                id: 2,
                name: 'Mai Hoa',
                address: 'Hà Nội',
                email: 'Bong1710@gmail.com',
            },
        ];
        return (
            <div>
                <h1>Parent Component</h1>
                <ChildComponent users={users} />
            </div>
        );
    }
}
export default ParentComponent;