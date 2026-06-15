export const getDoctorsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/doctors`)
    const data = await res.json();
    return data
}

export const getDoctorsDataById = async(id)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/doctors/${id}`)
    const data = await res.json();
    return data
}
