import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form';
import authService from '../appwrite/auth';
import { login } from '../store/authSlice';
import { Input, Button, Logo } from './index';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

    const signup = async (data) => {
        setError('')
        try {
            const createdAccount = await authService.createAccount(data)
            if (createdAccount) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Create your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center' >{error}</p>}
                <form onSubmit={handleSubmit(signup)}>
                    <div className="space-y-5">
                        <Input
                            label="Name: "
                            placeholder="Enter your name"
                            type="text"
                            {...register("name", {
                                required: true
                            })}
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register('email', {
                            required: true
                        })}
                        />
                        <Input
                        label='Password: '
                        placeholder="Enter your password"
                        type="password"
                        {...register("password", {
                            required: true
                        })}
                        />
                        <Button
                        type='submit'
                        className='w-full'
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
