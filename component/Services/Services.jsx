import React from 'react'
import { FaCheckCircle, FaHeadphonesAlt } from 'react-icons/fa'
import { FaCarSide, FaWallet } from 'react-icons/fa6'

const ServicesData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
        title: 'Free Shipping',
        description: "Free Shipping on All Order",
    },
    {
        id: 2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
        title: 'Safe Money',
        description: "30 Days Money Back",
    },
    {
        id: 3,
        icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
        title: 'Secure Payment',
        description: "All Payment Secure",
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
        title: 'Online Support 24/7',
        description: "Technical Support 24/7",
    },

]
const Services = () => {
    return (
        <div>
            <div className="container">
                <div className="grid">
                    <div>
                         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services