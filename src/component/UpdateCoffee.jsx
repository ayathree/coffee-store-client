import { useLoaderData } from "react-router-dom";



const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id,name,quantity,supplier,taste,category,details,photo} =coffee;
    const handleUpdate = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity= form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee={name,quantity,supplier,taste,category,details,photo}

        console.log(updateCoffee)

        // send data to the server(backend)
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount>0) {
                alert('coffee item updated successfully')
                
            }
        })

    }

    return (
        <div className="bg-purple-300 p-24">
            <h1>add coffee:{name}</h1>
            <form onSubmit={handleUpdate}>
            <div className="flex gap-7 justify-center">
            <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Coffee Name</span>
    
  </div>
  <input type="text" placeholder="Type here" name="name" defaultValue={name} className="input input-bordered w-full max-w-xs" />
  <div className="label">
    
  </div>
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Available Quantity</span>
   
  </div>
  <input type="text" placeholder="Type here" name="quantity" defaultValue={quantity} className="input input-bordered w-full max-w-xs" />
  <div className="label">
    
  </div>
</label>
            </div>
            <div className="flex gap-7 justify-center">
            <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Supplier</span>
    
  </div>
  <input type="text" placeholder="Type here" name="supplier" defaultValue={supplier} className="input input-bordered w-full max-w-xs" />
  <div className="label">
    
  </div>
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Taste</span>
   
  </div>
  <input type="text" placeholder="Type here" name="taste" defaultValue={taste} className="input input-bordered w-full max-w-xs" />
  <div className="label">
    
  </div>
</label>
            </div>
            <div className="flex gap-7 justify-center">
            <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Category</span>
    
  </div>
  <input type="text" placeholder="Type here" name="category" defaultValue={category} className="input input-bordered w-full max-w-xs" />
  <div className="label">
    
  </div>
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Details</span>
   
  </div>
  <input type="text" placeholder="Type here" name="details" defaultValue={details} className="input input-bordered w-full max-w-xs" />
  <div className="label">
    
  </div>
</label>
            </div>
            <div className=" flex justify-center">
            <label className="form-control w-1/2 ">
  <div className="label">
    <span className="label-text">Photo</span>
    
  </div>
  <input type="text" placeholder="Type here" name="photo" defaultValue={photo} className="input input-bordered w-full " />
  <div className="label">
    
  </div>
</label>

            </div>
           <div className="flex justify-center">
           <input type="submit" value="Update Coffee" className="btn btn-wide bg-purple-600" />
           </div>
           

            </form>
        </div>
    );
};

export default UpdateCoffee;