import React, { useContext } from 'react';
import { userInfo } from '../../context/AuthProvider';
import AddAProuct from '../AddAProuct/AddAProuct';

const UserRole = () => {
    const {role} = useContext(userInfo);
    return (
        <div>
            {
                role === 'seller' ? <AddAProuct></AddAProuct> : undefined
            }
        </div>
    );
};

export default UserRole;