import React from 'react';

interface User {
    id: number;
    name: string;
    address: string;
}
interface State {
    users: User[];
}
class Ex3 extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: 'Nam Sơn', address: 'HBT' },
                { id: 2, name: 'Minh Anh', address: 'Cầu giấy' },
                { id: 3, name: 'Trung Dũng', address: 'Hoàng Mai' },
            ],
        };
    }
    render() {
        const { users } = this.state;

        return (
            <div>
                <h1>Danh sách người dùng</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <p>ID: {user.id}</p>
                            <p>Tên: {user.name}</p>
                            <p>Địa chỉ: {user.address}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Ex3;