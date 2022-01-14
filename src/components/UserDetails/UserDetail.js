import React from 'react';

import './UserDetails.css'


const UserDetail = ({user, getUserId}) => {
    return (
        <>
            {
                user && <div className={'DetailWrap'}>
                    <h3> User :{user.username}</h3>
                    <h3> Pocta :{user.email}</h3>
                    <h3> City :{user.address.city}</h3>
                    <button onClick={() => getUserId(user.id)}>InfoPost</button>
                </div>
            }
        </>
    );
};

export default UserDetail;