import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateData = () => {

    const [currentItem, setCurrentItem] = useState(null)
    const navigate = useNavigate()
    const ItemId = useParams()
    const id = ItemId.id
    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentItem(data)
            })
    }, [id])

    const currentItemsData = currentItem ? currentItem[0] : null;
    // console.log(currentItemsData.item_name);


    const handleSubmitData = e => {
        e.preventDefault()
        const form = e.target
        const image = form.photoURL.value || currentItemsData.image
        const item_name = form.item_name.value || currentItemsData.item_name
        const subcategory_Name = form.subcategory_Name.value || currentItemsData.subcategory_Name
        const short_description = form.short_description.value || currentItemsData.short_description
        const price = form.price.value || currentItemsData.price
        const rating = form.rating.value || currentItemsData.rating
        const customization = form.customization.value || currentItemsData.customization
        const processing_time = form.processing_time.value || currentItemsData.processing_time
        const stockStatus = form.stockStatus.value || currentItemsData.stockStatus
        // const checked = form.rent.checked
        const newItemData = { image, item_name, subcategory_Name, rating, short_description, price, customization, processing_time, stockStatus };
        console.log(newItemData);

        fetch(`http://localhost:5000/items/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newItemData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: "Good job!",
                    text: "Data Updated successfully!",
                    icon: "success"
                });
                navigate('/myblogs')
            })

    }
    return (
        <div className="border pt-14 pb-24">
            <h1 className="text-3xl md:text-4xl text-center mb-6 font-bold">Update Items Data!</h1>
            <div className="">
                <div className="w-[90%] lg:w-2/5 mx-auto shadow-xl border  card-body">
                    <form onSubmit={handleSubmitData}>
                        <div className="">
                            <label className="label">
                                <span className="label-text">item name</span>
                            </label>
                            <input type="text" name="item_name" placeholder="item name" className=" input input-bordered rounded-none w-full" />
                        </div>
                        <div className="flex flex-col lg:flex-row  lg:gap-x-5">
                            <div className="lg:w-1/2">
                                <label className="label">
                                    <span className="label-text">subcategory Name</span>
                                </label>
                                <select name="subcategory_Name" defaultValue="Bangladesh" className="select select-bordered  w-full rounded-none">
                                    <option disabled selected>Select Country</option>
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
                                <input type="text" name="processing_time" placeholder="like- 7 days" className=" input input-bordered rounded-none w-full" />
                            </div>
                            <div className="lg:w-1/2">
                                <label className="label">
                                    <span className="label-text">stockStatus </span>
                                </label>
                                <select name='stockStatus' className="select select-bordered w-full max-w-xs rounded-none">
                                    <option disabled selected></option>
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
                                <input type="text" name="price" placeholder="Price" className=" input input-bordered rounded-none w-full" />
                            </div>
                            <div className='lg:w-1/2'>
                                <label className="label">
                                    <span className="label-text">customization</span>
                                </label>
                                <select name='customization' className="select select-bordered w-full max-w-xs rounded-none">
                                    <option disabled selected></option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text">Paragraph</span>
                            </label>
                            <textarea placeholder="short description" name="short_description" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photo URL" className="rounded-none input input-bordered" />
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-[#b18b5e] hover:bg-[#997850] text-white rounded-none text-base">Update Data</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateData;