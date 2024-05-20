import { FaLocationDot } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { FaFileAlt, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";


const EstateDetails = () => {
    const [currentItem, setCurrentItem] = useState()
    const ItemId = useParams()
    const id = ItemId.id
    console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentItem(data)
            })
    }, [id])

    const currentItemsData = currentItem ? currentItem[0] : '';
    // console.log(currentItemsData._id);
    const {  image, item_name, subcategory_Name, rating, price, customization, processing_time, stockStatus } = currentItemsData


    return (
        <div className="max-w-[1250px] mx-auto py-10">
            <div className=" bg-base-100 border border-gray-300 shadow-md rounded-2xl flex flex-col md:flex-row justify-center p-5 items-center">
                <div className="md:w-2/5">
                    <figure ><img src={image}  alt="iamge" className='h-72 w-full' /></figure>
                </div>

                <div className="md:flex-1 ">
                    <div className='space-y-2 md:pl-5 mt-5 mb-3 space-x-2'>
                        <span className='bg-orange-200 p-1 px-2 rounded-2xl text-xs'> customize : {customization}</span>
                        <span className='bg-orange-200 p-1 px-2 rounded-2xl text-xs'> stockStatus : {stockStatus}</span>
                    </div>
                    {/* travel_time $ totalVisitorsPerYear*/}
                    <div className="  space-y-2 md:px-5  mb-3">
                        <div className='flex flex-row gap-x-1 items-center'>
                            <span><FaStar className='text-orange-400' /></span> {rating}
                            <h3 className='text-xs flex items-center text-gray-600'><FaLocationDot className='text-sm text-gray-400  mr-2' /> {processing_time}</h3>
                            <h3 className='text-xs flex items-center text-gray-600'><FaLocationDot className='text-sm text-gray-400  mr-2' /> {stockStatus}</h3>
                        </div>
                        <h3 className='text-xs flex items-center text-gray-600'>
                            <FaFileAlt className='text-base text-gray-400  mr-2' />  {subcategory_Name}</h3>
                    </div>

                    {/* tourists_spot_name */}

                    <div className='flex justify-between items-center  md:px-5'>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">{item_name}</h2>
                        </div>
                    </div>


                    <div className=''>
                        <div className="border-t-2 my-4"></div>
                        <div className='flex justify-between items-center mb-4 md:px-5 '>
                            <div>
                                <h3 className='text-lg font-bold'> {price} Tk</h3>
                            </div>
                            <div className='  card-actions'>
                                <Link to={-1} className="btn  bg-[#b18b5e]  text-white hover:bg-[#997850]">GO BACK</Link>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div >
    );
};

export default EstateDetails;