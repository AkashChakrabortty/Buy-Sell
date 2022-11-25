import React, { useContext } from 'react';
import { userInfo } from '../../context/AuthProvider';
import AddAProuct from '../AddAProuct/AddAProuct';
import AllSellers from '../AllSellers/AllSellers';

const UserRole = () => {
    const {role} = useContext(userInfo);
    return (
        <div>
            {
                role === 'seller' ? <AddAProuct></AddAProuct> : undefined
            }
            {
                role === 'admin' ? <AllSellers></AllSellers> : undefined
            }
        </div>
    );
};

export default UserRole;