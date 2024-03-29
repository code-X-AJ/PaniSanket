import Homepage from "../pages/Homepage"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Reporting from "../pages/Reporting"

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
    {
        name: <Reporting/>,
        path: 'report'
    }
]

export default authRoutes