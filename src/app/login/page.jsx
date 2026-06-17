import Login from "@/Components/Login";

export const metadata = {
    title: "Login | Doc Appoint",
    description: "Appoint best doctor for your Disease",
};
const LoginPage = () => {

    return (
        <div className="container mx-auto my-10">
            <Login></Login>
        </div>
    )
}

export default LoginPage