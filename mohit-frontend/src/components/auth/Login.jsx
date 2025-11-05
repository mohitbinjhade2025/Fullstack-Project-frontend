import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from "@/components/ui/input"
import { RadioGroup } from '@radix-ui/react-radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom';
import { USER_API_END_POINT } from '../constant'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

function Login() {
    // const naviagte = useNavigate();
    const [input, setInput] = useState({
        email:"",
        password:"",
        role:"",
    });
    const { loading } = useSelector(store => store.auth) 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]:e.target.value});
    }

    const submitHandler = async (e) => {
        e.preventDefault(); 
        // console.log(input);
        try{
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input,{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true,
            } );
            if(res.data.success){
                dispatch(setUser(res.data.user));
                navigate("/"); ///home
                toast.success(res.data.message);
            }
        }catch(error){
            console.log(error)
            toast.error(error.response.data.message);
        }finally{
            dispatch(setLoading(false));
            // const [loading, setLoading] = useState(false);
        }
        // console.log(input);
    };

  return (
    
    <div>
            <Navbar />
            <div className="flex items-center justify-center max-w-7xl mx-auto">
                <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10 shadow-sm">
                    <h1 className="font-bold text-xl mb-5 text-center">Login</h1>

                    <div className="my-4">
                        <Label className="block mb-1">Email</Label>
                        <Input 
                            type="text" 
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="mohitbinjhade9@gmail.com" 
                        />
                    </div>

                    <div className="my-4">
                        <Label className="block mb-1">Password</Label>
                        <Input 
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="********" 
                        />
                    </div>

                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                {/* <RadioGroupItem value="default" id="r1" /> */}
                                <Input 
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}  ///////////not compelsury
                                    className="cursor-pointer">
                                </Input>
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                {/* <RadioGroupItem value="comfortable" id="r2" /> */}
                                <Input
                                    type="radio"
                                    name="role"
                                    value="organizer"
                                    checked={input.role === "organizer"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">organizer</Label>

                            </div>
                        </RadioGroup>
                    </div>
                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>: <Button type='submit' className="w-full my-4">Login</Button> 
                    }
                    
                    {/* <Button type='submit' className="w-full my-4">Login</Button> */}
                    <span className="text-sm">Don't have an account please? <Link to="/signup" className="hover:text-[#096e07] cursor-pointer">SignUp</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login