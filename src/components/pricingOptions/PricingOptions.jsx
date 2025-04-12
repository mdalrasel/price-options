import React, { use } from 'react';
import PricingOptionsCard from './PricingOptionsCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    console.log(pricingData)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3'>
                {
                    pricingData.map(pricing=><PricingOptionsCard key={pricing.id} pricing={pricing}></PricingOptionsCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;