
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit,formState: { errors } } = useForm();
const handleLogin=(data)=>{
    console.log(data)

}
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 ">
      <h1 className="text-xl text-center">Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
     

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
         
          </label>
          <input  className="input input-bordered w-full max-w-xs"    type="email" {...register("email",{required:"Email is required"})}  />
          {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
     
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
         
          </label>
          <input  className="input input-bordered w-full max-w-xs"    type="password" {...register("password",{required:"Password is Required",minLength:{value:6,message:'Password must be 6 characters or longer'}})}  />
          {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
        
          <label className="label">
            <span className="label-text">Forget Password ?</span>
         
          </label>
      
     
        </div>

      
        <input className="btn btn-accent w-full text-white" value='Login'type="submit" />
      </form>
      <p>New to Doctor's Portal ? <Link className="text-secondary" to='/signup'>Create New Account </Link> </p>
      <div className="divider">
        OR

      </div>
      <button className="btn btn-outline w-full">Continue With Google</button>
      </div>
    </div>
  );
};

export default Login;
