import { Route, Routes } from "react-router-dom";
import {FoodRoutes} from "../food";
import { LoginPage } from "../auth";
export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="inicio" element={<FoodRoutes />} />
                <Route path="/*" element={<LoginPage />} />
            </Routes>
        </>
    );
}