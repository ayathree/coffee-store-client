import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const CoffeeUser = () => {
    const loadedCoffeeUsers = useLoaderData();
    const[coffeeUsers, setCoffeeUsers]= useState(loadedCoffeeUsers);
    const handleDelete=id=>{
        fetch(`http://localhost:5000/userCoffee/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if (data.deletedCount>0) {
                    console.log('deleted')
                //     // Swal.fire({
                //     //     title: "Deleted!",
                //     //     text: "Your coffee has been deleted.",
                //     //     icon: "success"
                //     //   });
                //     //   delete when click button from ui
                      const remaining = coffeeUsers.filter(cof=> cof._id !== id);
                      setCoffeeUsers(remaining)

                    
                }
            })

    }

    return (
        <div>
           <h1>User:{loadedCoffeeUsers.length}</h1> 
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        coffeeUsers.map(coffeeUser=><tr key={coffeeUser._id}>
            <th>1</th>
            <td>{coffeeUser.email}</td>
            <td>{coffeeUser.createdAt}</td>
            <td>{coffeeUser.lastLoggedAt}</td>
            <td>
                {/* delete user */}
                <button onClick={()=>handleDelete(coffeeUser._id)} className="btn">X</button>
            </td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default CoffeeUser;