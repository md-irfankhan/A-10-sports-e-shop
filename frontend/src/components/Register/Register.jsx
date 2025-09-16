import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router";
import { useAuth } from "../../AuthProvider/AuthProvider";
import auth from "../../firebase/firebase.init";
const Register = () => {
    const {createUser,updateUser}=useAuth();
    
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        const formData={
            name,photo,email,password
        }
        console.log(formData);
        createUser(email,password).then(()=>{
            updateUser(name,photo).then(()=>{
                console.log(auth.currentUser);
                fetch('http://localhost:3000/adduser',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify({
                        name:auth.currentUser.displayName,
                        email:auth.currentUser.email,
                        photoUrl:auth.currentUser.photoURL,
                        creationTime:auth.currentUser.metadata.createdAt,
                        lastLogin:auth.currentUser.metadata.lastLoginAt
                    })
                }).then(res=>res.json()).then(data=>{
                        console.log(data);
                        
                })
                
                
            })
        })
        

    }
    return (
        
        <div>
            <h1 className="text-2xl font-medium text-center font-sans">Register Here!</h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-4 max-w-[600px] mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name2">Your Name</Label>
                    </div>
                    <TextInput id="name2" name="name" type="text" placeholder="Name" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="photo2">Your Photo</Label>
                    </div>
                    <TextInput name="photo" id="photo2" type="text" placeholder="photoUrl" shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2">Your email</Label>
                    </div>
                    <TextInput name="email" id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2">Your password</Label>
                    </div>
                    <TextInput name="password" id="password2" type="password" required shadow />
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