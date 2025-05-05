import Home from "../pages/Home"
import Actividades from "../pages/Actividades"
import Consultas from "../pages/Consultas"
import App from "../App"
import Detalles from "../pages/Detalles"

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/Actividades',
                element: <Actividades/>,
            },
            {
                path: '/Consultorias',
                element: <Consultas/>,
            },
            {
                path:'/Detalle',
                element: <Detalles/>
            }
        ]
    }
]

export default routes