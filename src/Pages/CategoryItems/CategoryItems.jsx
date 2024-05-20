import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Estate from "../../Component/Estate/Estate";



const CategoryItems = () => {

    const { categoryName } = useParams()
    // console.log(categoryName);
    const [categoryItemsData, setCategoryItemsData] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/search/${categoryName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategoryItemsData(data)
            })
    }, [categoryName])

    return (
        <div className="max-w-[1250px] mx-auto px-4 md:px-5 lg:px-2 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {
                categoryItemsData?.map(item => <Estate key={item._id} card={item}></Estate>)
            }
        </div>
    );
};

export default CategoryItems;