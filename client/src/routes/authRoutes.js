import Homepage from "../pages/Homepage"
import Signup from "../pages/Signup"
import Login from "../pages/Login"

const authRoutes = [
    {
        name: <Signup />,
        path: 'signup'
    },
    {
        name: <Login />,
        path: 'login'
    },
    {
        name: <Homepage />,
        path: 'home'
    },
]

export default authRoutes