import { Result } from "postcss";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Signup = () => {

    const {createUser,updateUser}=useContext(AuthContext);
    const [signUpError,setsignUpError]=useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignup = (data) => {
    console.log(data);
    setsignUpError('')
    createUser(data.email,data.password)
    .then(
       result=>{
        const user=result.user;
        console.log(user);
        toast('User Created Successfully');

        // seting the user name and photoURl start
        const userInfo={
            displayName:data.name
        }
        updateUser(userInfo)
        .then(()=>{})
        .catch(error=>console.log(error));
        // seting the user name and photoURl end
        
       } 
    )
    .catch(error=>{console.log(error)
    setsignUpError(error.message)
    
    })
  };

  return (
    <div>
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7 ">
          <h1 className="text-xl text-center">Signup</h1>
          <form onSubmit={handleSubmit(handleSignup)}>

          <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="password"
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                  pattern:{
                    value:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    message:'Password Must be Strong'
                  }
                 
                })}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}

       
            </div>

            <input
              className="btn btn-accent w-full text-white mt-4"
              value="SignUp"
              type="submit"
            />
            {
               signUpError && <p className="text-red-600">{signUpError}</p> 
            }
          </form>
          <p>
            Already Have an Account ?{" "}
            <Link className="text-secondary" to="/login">
              Login{" "}
            </Link>{" "}
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
