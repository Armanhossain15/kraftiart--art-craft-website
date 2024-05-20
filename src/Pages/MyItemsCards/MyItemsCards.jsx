
import { FaStar } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";


const MyItemsCards = ({ item, allMyItems, setAllMyItems }) => {
    const { _id, image, item_name, rating, price, customization, stockStatus } = item
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/blogs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => console.log(data))

                const remainingBlogs = allMyItems.filter(blog => blog._id !== id)
                setAllMyItems(remainingBlogs
                )
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

            }
        });
    }
    return (
        <div className="  ">
            <div className=" bg-base-100 border border-gray-300 shadow-md rounded-2xl mb-8">
                <figure ><img src={image} alt="iamge" className='h-48 w-full rounded-t-2xl' /></figure>

                <div className=" ">
                    <div className="  space-y-2 px-5 mt-5 mb-3 ">
                        <div className='flex flex-row gap-x-1 items-center'>
                            <span><FaStar className='text-orange-400' /></span> {rating}
                        </div>
                    </div>
                    <div className='space-y-2 pl-5 mb-3 space-x-2'>
                        <span className='bg-orange-200 p-1 px-2 rounded-2xl text-[10px]'> customize : {customization}</span>
                        <span className='bg-orange-200 p-1 px-2 rounded-2xl text-[10px]'> stockStatus : {stockStatus}</span>
                    </div>
                    {/* travel_time $ totalVisitorsPerYear*/}


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
                            <div>
                                <div className="mt-3">
                                    <Link to={`/items/${_id}`}
                                     className="btn btn-sm btn-circle btn-outline border-2  border-black mr-4">
                                        <RiEdit2Fill className="text-lg text-black hover:text-white" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(_id)}
                                        className="btn btn-sm btn-circle btn-outline border-2  border-black mr-4 ">
                                        <MdDelete className="text-lg text-black hover:text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};
MyItemsCards.propTypes = {
    item : PropTypes.object,
    allMyItems : PropTypes.array,
    setAllMyItems: PropTypes.array
}
export default MyItemsCards;