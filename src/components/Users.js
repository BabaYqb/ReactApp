import React, { Component } from 'react'
import User from './User'
 class Users extends Component {
     render() {
         const { users } = this.props; 
        return (
            <div>
                {
                    users.map(user => {
                        return (
                            <User
                                id = {user.id}
                                name = {user.name}
                                surname = {user.surname}
                                salary = {user.salary}
                            />
                        )
                    })
                }
            </div>
        )
    }
}


export default Users;