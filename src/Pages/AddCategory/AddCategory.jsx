import Swal from "sweetalert2";


const AddCategory = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const cetegory = form.cetegory.value
        const categoryURL = form.categoryURL.value
        const category = {cetegory, categoryURL};
        // console.log(category);
        fetch(`http://localhost:5000/addcategorys`, {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(category)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: "successful!",
                text: "Category added successfully!",
                icon: "success"
              });
        })
        form.reset()
    }
    return (
        <div className="px-20 my-20 ">
            <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-4 w-2/5 mx-auto">
                <input name="cetegory" type="text" placeholder="Type here category name" className="input input-bordered w-full " />
                <input name="categoryURL" type="text" placeholder="photoURL" className="input input-bordered w-full " />
                <input type="submit" value="Submit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default AddCategory;