"use client";


import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { FcGoogle } from "react-icons/fc";

import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
// export const metadata = {
//     title: "Register | Doc Appoint",
//     description: "Appoint best doctor for your Disease",
// };
const RegisterPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image,
            callbackURL: '/'

        })

        if (data) {
            toast.success("Account Created Successfully")
            redirect('/login')
        }
        if (error) {
            toast.error(error.message)
        }
    };
    // const GoogleSignIn = async () => {
    //     const data = await authClient.signIn.social({
    //         provider: "google",
    //     });
    // };
    return (
        <div className="container mx-auto my-10">
            <div className="w-1/3  shadow-2xl mx-auto p-5">
                <h2 className="text-4xl font-bold text-center">Register</h2>
                <Form className="flex w-96 flex-col gap-4 mx-auto my-3" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        name="image"
                        type="url"
                    >
                        <Label>Photo Url</Label>
                        <Input placeholder="image url" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={6}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button className={'w-full bg-[#14B8A6] rounded-[5px]'} type="submit">

                            Create Account
                        </Button>
                    </div>
                </Form>

                <div className="flex items-center gap-3 w-full my-2">
                    <Separator className="flex-1" />
                    <p className="text-sm text-gray-500 font-medium">Or</p>
                    <Separator className="flex-1" />
                </div>

                <Button className={'rounded-[5px] w-full text-[#14B8A6] border border-[#14B8A6]'} variant="outline"><FcGoogle />
                    Sing in with google</Button>
                <p className="text-sm text-right p-1 ">Already have an account?  <Link className="text-[#14B8A6] underline" href={'/login'}>Login</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage