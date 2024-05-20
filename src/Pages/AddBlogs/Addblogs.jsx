import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { authContext } from '../../Context/AuthProvider';


const Addblogs = () => {


    const { user } = useContext(authContext)
    const handleSubmitProperty = e => {
        e.preventDefault()
        const form = e.target
        const image = form.photoURL.value
        const item_name = form.item_name.value
        const subcategory_Name = form.subcategory_Name.value
        const short_description = form.short_description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const processing_time = form.processing_time.value
        const stockStatus = form.stockStatus.value

        const authorEmail = user.email
        const authorName = user.displayName
        // const checked = form.rent.checked
        const newBlog = { image, item_name, subcategory_Name, rating, short_description, price, customization, processing_time, stockStatus, authorEmail, authorName };
        console.log(newBlog);
        fetch('http://localhost:5000/addblogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Blog Added Successfully!')
                }
                form.reset()
            })
    }
    return (
        <div className="border pt-14 pb-24">
            <h1 className="text-3xl md:text-4xl text-center mb-6 font-bold">Add new Items!</h1>
            <div className="">
                <div className="w-[90%] lg:w-2/5 mx-auto shadow-xl border  card-body">
                    <form onSubmit={handleSubmitProperty}>
                        <div className="">
                            <label className="label">
                                <span className="label-text">item name</span>
                            </label>
                            <input type="text" name="item_name" placeholder="item name" className=" input input-bordered rounded-none w-full" required />
                        </div>
                        <div className="flex flex-col lg:flex-row  lg:gap-x-5">
                            <div className="lg:w-1/2">
                                <label className="label">
                                    <span className="label-text">subcategory Name</span>
                                </label>
                                <select  name="subcategory_Name"  className="select select-bordered  w-full rounded-none">
                                    
                                    <option>Landscape Painting</option>
                                    <option>Portrait Drawing</option>
                                    <option>Watercolour Painting</option>
                                    <option>Oil Painting</option>
                                    <option>Charcoal Sketching</option>
                                    <option>Cartoon Drawing</option>
                                </select>
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text">rating</span>
                                </label>
                                <input type="text" name="rating" placeholder="rating" className=" input input-bordered rounded-none w-full" />
                            </div>


                        </div>

                        <div className="flex flex-col lg:flex-row  lg:gap-x-5">
                            <div className="lg:w-1/2">
                                <label className="label">
                                    <span className="label-text">processing time</span>
                                </label>
                                <input type="text" name="processing_time" placeholder="like- 7 days" className=" input input-bordered rounded-none w-full" required />
                            </div>
                            <div className="lg:w-1/2">
                                <label className="label">
                                    <span className="label-text">stockStatus </span>
                                </label>
                                <select name='stockStatus' className="select select-bordered w-full  rounded-none" >
                                    
                                    <option>In stock</option>
                                    <option>Made to Order</option>
                                </select>
                            </div>

                        </div>

                        <div className='flex flex-col lg:flex-row  lg:gap-x-5'>
                            <div className='lg:w-1/2'>
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price" className=" input input-bordered rounded-none w-full" required />
                            </div>
                            <div className='lg:w-1/2'>
                                <label className="label">
                                    <span className="label-text">customization</span>
                                </label>
                                <select name='customization' className="select select-bordered w-full  rounded-none" >
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>




                        <div className="">
                            <label className="label">
                                <span className="label-text">Paragraph</span>
                            </label>
                            <textarea placeholder="short description" name="short_description" className="textarea textarea-bordered textarea-lg w-full rounded-none" ></textarea>
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photo URL" className="rounded-none input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-[#b18b5e] hover:bg-[#997850] text-white rounded-none text-base">Add Property</button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Addblogs;