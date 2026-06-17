import { headers } from "next/headers";
import { auth } from "./auth";

export const getDoctorsData = async (search = "") => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/search?name=${search}`)
    const data = await res.json();
    return data
}

export const getDoctorsDataById = async (id) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
   console.log(token);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`,
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    )
    const data = await res.json();
    return data
}
export const getTopDoctors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/top-doctors`)
    const data = await res.json()
    return data
}