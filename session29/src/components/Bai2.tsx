import React from 'react';

interface State {
    id: number;
    name: string;
    dateOfBirth: string;
    address: string;
}
class Ex2 extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            name: 'Nguyễn Nam Sơn',
            dateOfBirth: '16/01/2005',
            address: 'Hà Nội',
        };
    }
    render() {
        const { id, name, dateOfBirth, address } = this.state;

        return (
            <div>
                <h1>Thông tin cá nhân</h1>
                <p>ID: {id}</p>
                <p>Tên: {name}</p>
                <p>Ngày sinh: {dateOfBirth}</p>
                <p>Địa chỉ: {address}</p>
            </div>
        );
    }
}
export default Ex2;