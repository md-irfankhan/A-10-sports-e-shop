import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {Link, Navigate, useLocation, useNavigate} from 'react-router'
import { useAuth } from "../../AuthProvider/AuthProvider";
import Spinner from "../Spinner/Spinner";

const Login = () => {
    const {loginUser,user,loading}=useAuth();
    const location =useLocation();
    const navigate=useNavigate
    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return <Navigate to={location.state?location.state:'/'}></Navigate>
    }

    const handleLogin=(e)=>{
        e.preventDefault();
         const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const formData={
            email,password
        }
        loginUser(email,password).then((res)=>{
            console.log(res.user.displayName);
            fetch('http://localhost:3000/updateuser',{
                method:"PATCH",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({
                    name:res.user.displayName,
                    email:res.user.email,
                    photoUrl:res.user.photoURL,
                    creationTime:res.user.metadata.createdAt,
                    lastLogin:res.user.metadata.lastLoginAt
                })
            }).then(res=>res.json()).then((data)=>{
                console.log(data);
                
            })
           navigate(location.state?location.state:'/');
            
        }).catch(err=>{
            console.log(err);
            
        })

    }
    return (
        <div className=" ">
            <h1 className="text-2xl font-medium text-center font-sans">Login Here!</h1>
            <form onSubmit={handleLogin} className="flex max-w-[600px] mx-auto  flex-col gap-4 my-4">
                <div>
                    <div className="mb-2 block w-full">
                        <Label htmlFor="email1">Your email</Label>
                    </div>
                    <TextInput name="email" id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1">Your password</Label>
                    </div>
                    <TextInput name="password" id="password1" type="password" required />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-[14px]">Haven't registered?<Link state={location.state} to={'/register'} className="text-sky-600">Register Now</Link></p>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button className="bg-sky-300 hover:scale-w-20 hover:bg-sky-200 backdrop-blur-3xl text-white" type="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;