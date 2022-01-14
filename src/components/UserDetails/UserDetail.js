import React from 'react';

import './UserDetails.css'

const UserDetail = ({user, getUserId}) => {
    return (
        <>
            {
                user && <div className={'DetailWrap'}>
                    <h3> User :{user.username}</h3>
                    <h3> @mail :{user.email}</h3>
                    <h3> Street :{user.address.street}</h3>
                    <h3> City :{user.address.city}</h3>
                    <h3> Zip :{user.address.zipcode}</h3>
                    <h3> latitude : {user.address.geo.lat}</h3>
                    <h3> longitude : {user.address.geo.lng}</h3>
                    <button onClick={() => getUserId(user.id)}>InfoPost</button>
                </div>
            }
        </>
    );
};

export default UserDetail;