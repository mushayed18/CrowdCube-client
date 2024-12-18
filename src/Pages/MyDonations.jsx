import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyDonation from '../Component/MyDonation';

const MyDonations = () => {
    const myDonations = useLoaderData();

    return (
        <div className='my-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {myDonations.map((myDonation) => {
                return <MyDonation key={myDonation._id} myDonation={myDonation}></MyDonation>
            })}
        </div>
    );
};

export default MyDonations;