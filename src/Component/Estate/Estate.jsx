import PropTypes from 'prop-types';
import { FaFileAlt } from 'react-icons/fa';
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";


const Estate = ({ card }) => {
    // const status = card.status
    const { _id, image, item_name, subcategory_Name, rating, price, customization, processing_time, stockStatus } = card
    return (
        <div className="  ">
            <div className=" bg-base-100 border border-gray-300 shadow-md rounded-2xl ">
                <figure ><img src={image} alt="iamge" className='h-48 w-full rounded-t-2xl' /></figure>

                <div className=" ">
                    <div className='space-y-2 pl-5 mt-5 mb-3 space-x-2'>
                        <span className='bg-orange-200 p-1 px-2 rounded-2xl text-xs'> customize : {customization}</span>
                        <span className='bg-orange-200 p-1 px-2 rounded-2xl text-xs'> stockStatus : {stockStatus}</span>
                    </div>
                    {/* travel_time $ totalVisitorsPerYear*/}
                    <div className="  space-y-2 px-5  mb-3">
                        <div className='flex flex-row gap-x-1 items-center'>
                            <span><FaStar className='text-orange-400' /></span> {rating}
                            <h3 className='text-xs flex items-center text-gray-600'>
                            <FaCalendarAlt className='text-sm text-gray-400  ml-2 mr-1'/>
                                 {processing_time}</h3>
                            <h3 className='text-xs flex items-center text-gray-600'>
                            <FaFileAlt className='text-sm text-gray-400   ml-2 mr-1'/>
                                 {stockStatus}</h3>
                        </div>
                        <h3 className='text-xs flex items-center text-gray-600'>
                            <FaFileAlt className='text-base text-gray-400  mr-2' />  {subcategory_Name}</h3>
                    </div>

                    {/* tourists_spot_name */}

                    <div className='flex justify-between items-center  px-5'>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">{item_name}</h2>
                        </div>
                    </div>


                    <div className=''>
                        <div className="border-t-2 my-4"></div>
                        <div className='flex justify-between items-center mb-4 px-5 '>
                            <div>
                                <h3 className='text-lg font-bold'> {price} Tk</h3>
                            </div>
                            <div className='  card-actions'>
                                <Link to={`/estate/${_id}`} className="btn  bg-[#b18b5e]  text-white hover:bg-[#997850]">View Property</Link>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};
Estate.propTypes = {
    card: PropTypes.object
}
export default Estate;