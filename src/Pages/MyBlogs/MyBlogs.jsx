import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/AuthProvider";
import MyItemsCards from "../MyItemsCards/MyItemsCards";


const MyBlogs = () => {
    const { user } = useContext(authContext)
    const [allMyItems, setAllMyItems] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/myblog/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllMyItems(data)
            })
    }, [user.email])
    return (
        <div className="max-w-6xl mx-auto pt-6 px-8 pb-12 ">
            <div className="grid grid-cols-1 gap-x-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        allMyItems?.map((item, index) => <MyItemsCards 
                        key={item._id} 
                        item={item}
                        index= {index}
                        allMyItems = {allMyItems}
                        setAllMyItems = {setAllMyItems}
                        ></MyItemsCards>)
                    }
            </div>

        </div>
    );
};

export default MyBlogs;