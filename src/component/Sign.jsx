import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Sign = () => {

    const{createUser}= useContext(AuthContext)
    const handleSignUp = e=>{
        e.preventDefault();
        const form= e.target;
        const email= form.email.value;
        const password = form.password.value;
        console.log(email, password)
        createUser(email, password)
        .then(result=>{
            console.log(result.user)
            // new user create time
            const createdAt = result.user?.metadata?.creationTime;

            // new user
            const userCoffee = {email, createdAt: createdAt};
            fetch('https://coffee-store-server-three-sand.vercel.app/userCoffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.insertedId) {
                alert('coffee item added successfully')
                form.reset();
                
            }
        })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign up now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Sign;