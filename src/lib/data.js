export const getDoctorsData = async (search = "") => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/doctors?search=${search}`)
    const data = await res.json();
    return data
}

export const getDoctorsDataById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/doctors/${id}`)
    const data = await res.json();
    return data
}
export const getTopDoctors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/top-doctors`)
    const data = await res.json()
    return data
}