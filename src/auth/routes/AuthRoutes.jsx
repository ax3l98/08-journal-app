// React Router Dom
import { Navigate, Route, Routes } from "react-router-dom"

// Componentes React - Pages
import { LoginPage, RegisterPage } from "../pages"


export const AuthRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />

                <Route path="/*" element={<Navigate to="/auth/login" />} />
            </Routes>
        </>
    )
}
