import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    useEffect(() => {
        document.title = 'BizBazaar | Register'
    }, [])
    const { setUser, createUserByEmailAndPassword,
        UpdateUserProfile, SignInWithGoogle, SignInWithGithub } = useContext(authContext)
    const [passVisible, setPassVisible] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photourl = e.target.photourl.value
        const password = e.target.password.value
        const checked = e.target.terms.checked
        if (!checked) {
            toast.error('You must be agree with our tarms & conditions')
            return
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            toast.error('password must be atleast 1 uppercase and lowercase letter & at least 6 characters')
            return
        }
        createUserByEmailAndPassword(email, password)
            .then(result => {
                console.log(result.user)
                navigate('/')
                toast.success('account create successfully');
                UpdateUserProfile(name, photourl)
                    .then(() => {
                        console.log('profile updated')
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
                setUser({
                    displayName: name,
                    email: email,
                    photoURL: photourl
                })

            })
            .catch(error => {
                toast.error(error.message)
                console.log(error.message)
            })
    }
    const hanldeGoogleSignIn = () => {
        SignInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const hanldeGithubSignIn = () => {
        SignInWithGithub()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="border pt-14 pb-24">
            <h1 className="text-3xl md:text-4xl text-center mb-6 font-bold">Create Your Account!</h1>
            <div className="">
                <div className="w-[90%] lg:w-2/5 mx-auto shadow-xl border  card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col lg:flex-row  lg:gap-x-5">
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className=" input input-bordered rounded-none w-full" required />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className=" input input-bordered rounded-none w-full" required />
                            </div>

                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photourl" placeholder="Photo URL" className="rounded-none input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 rounded-none">
                                <input
                                    type={
                                        passVisible ? 'text' : 'password'
                                    }
                                    className="grow"
                                    placeholder="Password"
                                    name="password" />
                                <span
                                    onClick={() => setPassVisible(!passVisible)}
                                    className="text-2xl -ml-16">
                                    {
                                        passVisible ? <FiEyeOff /> : <FiEye />
                                    }

                                </span>
                            </label>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="py-4 flex items-center gap-2">
                            <input type="checkbox" name="terms" className="checkbox checkbox-sm" /> <span>I agree to the <Link className=" underline">Terms, and Privecy Policy</Link> </span>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-[#b18b5e] hover:bg-[#997850] text-white rounded-none text-base">Register</button>
                        </div>

                        <p className="mt-3">Alreay have an account ? <Link to='/login' className="font-bold underline ">Sign In</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <button onClick={hanldeGoogleSignIn} className="btn flex-1 rounded-none bg-white border border-gray-300"> <FcGoogle className="text-2xl" /> Sign Up With Goggle</button>
                        <button onClick={hanldeGithubSignIn} className="btn flex-1 rounded-none bg-white border border-gray-300">
                            <FaGithub className="text-xl" />  Sign Up With Github</button>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Register;