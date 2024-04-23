import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id,name,quantity,supplier,taste,photo} =coffee;
    // delete
    const handleDelete =_id=>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             

            fetch(`https://coffee-store-server-three-sand.vercel.app/coffee/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if (data.deletedCount>0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                      });
                    //   delete when click button from ui
                      const remaining = coffees.filter(cof=> cof._id !== _id);
                      setCoffees(remaining)

                    
                }
            })
            }
          });

    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mb-16">
  <figure><img src={photo} alt=""/></figure>
  <div className="flex justify-between w-full pr-4">
    <div className="ml-2">
    <h2 className="card-title">Name:{name}</h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{taste}</p>
    </div>
    <div className="card-actions justify-end ">
    <div className="join join-vertical space-y-4">
  <button className="btn join-item">view</button>
  {/* update */}
  <Link to={`updateCoffee/${_id}`}><button className="btn join-item">edit</button></Link>
  {/* delete */}
  <button 
  onClick={()=> handleDelete(_id)}
  className="btn bg-red-500 join-item">X</button>
</div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default CoffeeCard;