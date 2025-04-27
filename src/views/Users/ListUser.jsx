import React from 'react';
import axios from 'axios';
import './ListUsers.scss';

class ListUser extends React.Component {
    state = {
        listUser: []
    };

    async componentDidMount() {
        try {
            let res = await axios.get('https://reqres.in/api/users?page=2');
            this.setState({
                listUser: res && res.data && res.data.data ? res.data.data : []
            });
            console.log("check data: ",res);
            
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    render() {
        let { listUser } = this.state;
        return (
            <div className="list-user-container">
                <h1>List of Users</h1>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 ? (
                        listUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id}>
                                    <img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} />
                                    <div>
                                        {index + 1} - {item.first_name} {item.last_name}
                                    </div>
                                    <div>Email: {item.email}</div>
                                </div>
                            );
                        })
                    ) : (
                        <div>Loading users...</div>
                    )}
                </div>
            </div>
        );
    }
}

export default ListUser;