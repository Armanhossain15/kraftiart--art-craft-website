

const Search = ({ setAllItemsData}) => {

    const handleSubmit = e => {
        e.preventDefault()
        const categoryName = e.target.category.value
        // console.log(categoryName);
        fetch(`http://localhost:5000/search/${categoryName}`)
        .then(res => res.json())
        .then(data => {
            setAllItemsData(data)
        })
    }
    return (

        <div className="max-w-[1250px] mx-auto px-6 md:px-5  py-12 bg-gray-100 mt-6 mb-10 rounded-lg">
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center md:gap-x-5 space-y-5 md:space-y-0">
                    <select name="category" defaultValue="Landscape Painting" className="select select-bordered  w-full  border-[#b18b5e]  ">
                        <option disabled selected>Select category</option>
                        <option>Landscape Painting</option>
                        <option>Portrait Drawing</option>
                        <option>Watercolour Painting</option>
                        <option>Oil Painting</option>
                        <option>Charcoal Sketching</option>
                        <option>Cartoon Drawing</option>
                    </select>
                    {/* <select className="select select-bordered  w-full max-w-md border-blue-700 ">
                        <option disabled selected>Select Tourish Spot</option>
                        <option>Auto</option>
                        <option>Dark mode</option>
                        <option>Light mode</option>
                    </select> */}

                    <button className="btn md:btn-wide bg-[#b18b5e] hover:bg-[#997850] text-white ">SEARCH</button>
                </form>
            </div>
        </div>
    );
};

export default Search;