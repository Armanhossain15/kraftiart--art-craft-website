import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import ALlEstateCard from "../../Component/ALlEstateCard/ALlEstateCard";
import { useEffect, useState } from "react";
import Search from "../../Component/SearchSection/Search";
import Categories from "../../Component/Categories/Categories";


const Home = () => {
    const [categorysData, setCategorysData] = useState()
    useEffect(() => {
        document.title = 'KraftiArt | Home';
        fetch(`http://localhost:5000/categorys`)
        .then(res => res.json())
        .then(data => {
            setCategorysData(data)
            console.log(data);
        })
    }, [])


    const allData = useLoaderData()
    const [allItemsData, setAllItemsData] = useState(allData)
    // console.log(allData)

    return (
        <div>
            <Banner />
            <Search
                setAllItemsData={setAllItemsData}
            ></Search>
            <ALlEstateCard
                allData={allItemsData}
            ></ALlEstateCard>
            <Categories categorysData ={categorysData}></Categories>
        </div>
    );
};

export default Home;