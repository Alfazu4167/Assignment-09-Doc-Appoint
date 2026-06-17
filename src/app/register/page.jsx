import Register from "@/Components/Register"

export const metadata = {
    title: "Register | Doc Appoint",
    description: "Appoint best doctor for your Disease",


};
const RegisterPage = () => {
   
    return (
        <div className="container mx-auto my-10">
          <Register/>
        </div>
    )
}

export default RegisterPage