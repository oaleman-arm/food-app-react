import { Route, Routes } from "react-router-dom";
import {FoodRoutes} from "../food";
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoute } from "../auth/routes/PrivateRoute";
export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="inicio/*" element={
                    <PrivateRoute>
                        <FoodRoutes />
                    </PrivateRoute>
                } />
                <Route path="/*" element={<LoginPage />} />
            </Routes>
        </>
    );
}