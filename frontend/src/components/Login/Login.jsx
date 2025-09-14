import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {Link} from 'react-router'
const Login = () => {
    return (
        <div className=" ">
            <h1 className="text-2xl font-medium text-center font-sans">Login Here!</h1>
            <form className="flex max-w-[600px] mx-auto  flex-col gap-4 my-4">
                <div>
                    <div className="mb-2 block w-full">
                        <Label htmlFor="email1">Your email</Label>
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1">Your password</Label>
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-[14px]">Haven't registered?<Link className="text-sky-600">Register Now</Link></p>
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