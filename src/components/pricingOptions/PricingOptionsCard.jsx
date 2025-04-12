import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PricingOptionsCard = ({ pricing }) => {
    const { price, name,description, features } = pricing;
    return (
        <div className="card   bg-base-100 shadow-sm border">
            <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <span className="text-xl">{price}</span>
                </div>
                <div><p>{description}</p></div>
                <ul className="mt-6 flex flex-col gap-2 text-xs h-full ">
                    {
                        features.map((feature, idx) => <li className='flex items-center gap-2' key={idx}><FaCheck className='text-green-600' />{feature}</li>)
                    }
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default PricingOptionsCard;