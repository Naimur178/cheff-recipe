import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='w-3/4 mx-auto py-4 bg-base-200 my-4 rounded-xl'>
            <h2 className='text text-center font-semibold text-2xl'>Our Terms and Conditions</h2>
            <ol className='p-8 list-decimal'>
            <li><p><span className='font-bold'>Reservation Policy:</span> We require that all reservations be made online, and must be made at least 24 hours in advance. We reserve the right to cancel reservations that are not made within this time frame</p></li>
                <li><p><span className='font-bold'>Payment Policy:</span> We accept payment by cash, credit card, and online payment services. Payment must be made in full at the time of service. We do not accept checks.</p></li>
                <li><p><span className='font-bold'>Refund Policy:</span> We do not offer refunds for any reason, except in the case of a cancellation by the restaurant. In the event of a cancellation, we will provide a full refund to the customer</p></li>
                <li><p><span className='font-bold'>Privacy Policy:</span> We respect your privacy and will not share your personal information with any third party. We collect only the information that is necessary to provide our services, and we use that information only for the purposes for which it was collected.</p></li>
                <li><p><span className='font-bold'>Disclaimer:</span> We make every effort to ensure that the information on our website is accurate and up-to-date. However, we cannot guarantee the accuracy of all information, and we are not responsible for any errors or omissions. We reserve the right to change our menu, prices, and policies at any time without notice.</p></li>
                
            </ol>
            <div className='flex flex-col items-center mx-auto'>
            <Link to='/register' className='btn btn-outline'>Go Back to Registration</Link>
            </div>
        </div>
    );
};

export default Terms;