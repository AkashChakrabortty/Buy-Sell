// import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AllBuyers = () => {
    const [users,setUsers] = useState([]);
    const notify = () => toast("Delete successfuly!");
    useEffect(()=>{
        fetch('https://server-v-2.vercel.app/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    // const {users=[]} = useQuery({
    //   queryKey: ['user'],
    //   queryFn: ()=>  fetch('https://server-v-2.vercel.app/user')
    //   .then((res) => res.json())
    // })
    const handleDelete =(user)=> {
        console.log(user.email)
        fetch(`https://server-v-2.vercel.app/deleteUser/${user.email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          notify();
         });
    }
    return (
        <div className='container'>
        <div className="row row-cols-1 row-cols-sm-2">
           {
             users?.map(user => {
                 return <>
                 {
                     user.role === 'buyer' ? <div class="card">
                     <img
                       src={user.photoUrl}
                       class="card-img-top"
                       alt={user.name}
                     />
                     <div class="card-body">
                       <h5 class="card-title">Name:{user.name}</h5>
                       <h5 class="card-title">
                         Email:{user.email}
                       </h5>
                      
                     </div>
                      
                     <button
                         className="w-100 btn btn-outline-primary"
                         type="submit" onClick={ ()=> handleDelete(user)}
                       >
                      Delete
                       </button>
                       </div>  : undefined
                 }
                
                </>
             })
           }
        </div>
     </div>
    );
};

export default AllBuyers;