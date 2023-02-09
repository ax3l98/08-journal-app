// Hooks
import { useCheckAuth } from "../hooks"

// React Router Dom
import { Navigate, Route, Routes } from "react-router-dom"

// Componentes de React - Routes
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/"

export const AppRouter = () => {

    const status = useCheckAuth();

    if( status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>

            {
                (status === 'authenticated')
                    ? <Route path="/*" element={<JournalRoutes />} />
                    : <Route path="/auth/*" element={<AuthRoutes />} />
            }

            <Route path='/*' element={ <Navigate to='/auth/login' /> } />

            {/* Login y registro */}
            {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

            {/* JournalApp */}
            {/* <Route path="/*" element={<JournalRoutes />} /> */}

        </Routes>
    )
}
