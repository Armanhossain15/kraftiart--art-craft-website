

import { Link } from "react-router-dom";



const Categories = ({ categorysData }) => {

    return (
        <div className="max-w-[1250px] mx-auto px-4 md:px-5 lg:px-2 pb-14 ">
            <h1 className="text-center text-3xl md:text-5xl font-bold py-5">Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    categorysData?.map(category => <div key={category._id}>
                        <div className="card  bg-base-100 shadow-sm border p-4 rounded-none">
                            <figure className=" h-64">
                                <img className="w-full" src={category.categoryURL} />
                            </figure>
                            <div className=" text-center ">
                                <h2 className="text-2xl font-bold py-4">{category.cetegory}</h2>
                                <div className="  ">
                                    <Link
                                        to={`/CategoryItems/${category.cetegory}`}
                                        className="bg-[#b18b5e]  text-white hover:bg-[#997850] rounded-none btn  btn-wide">Click Here</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;