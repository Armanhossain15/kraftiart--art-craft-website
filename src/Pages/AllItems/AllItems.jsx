import { useLoaderData } from "react-router-dom";
import ALlEstateCard from "../../Component/ALlEstateCard/ALlEstateCard";


const AllItems = () => {
    const allItemsData = useLoaderData()
    console.log(allItemsData); 
    return (
        <div className="pt-12">
            <h1 className="text-3xl md:text-4xl  font-bold text-center pb-9">ALl Items Data</h1>
           <ALlEstateCard allData={allItemsData}></ALlEstateCard>
        </div>
    );
};

export default AllItems;