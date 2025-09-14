import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router";
const Register = () => {
    return (
        <div>
            <h1 className="text-2xl font-medium text-center font-sans">Register Here!</h1>
            <form className="flex flex-col gap-4 max-w-[600px] mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name2">Your Name</Label>
                    </div>
                    <TextInput id="name2" type="text" placeholder="Name" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="photo2">Your Photo</Label>
                    </div>
                    <TextInput id="photo2" type="text" placeholder="photoUrl" shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2">Your email</Label>
                    </div>
                    <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2">Your password</Label>
                    </div>
                    <TextInput id="password2" type="password" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password">Repeat password</Label>
                    </div>
                    <TextInput id="repeat-password" type="password" required shadow />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-[14px]">Already have account?<Link to={'/login'} className="text-sky-600">Login Now</Link></p>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                        I agree with the&nbsp;
                        <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            terms and conditions
                        </Link>
                    </Label>
                </div>
                <Button type="submit">Register new account</Button>
            </form>
        </div>
    );
};

export default Register;