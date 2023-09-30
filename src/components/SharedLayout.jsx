import { Suspense } from "react";
import { ResponsiveContainer } from "../styles/ResponsiveContainer";
import { Outlet } from "react-router-dom";
import { Header } from "./website/components/Header/Header";



const SharedLayout = () => {
    return (
        <>
            <ResponsiveContainer>
                <Header />
                <Suspense fallback={<div>Loading...</div>} >
                    <Outlet />
                </Suspense>
            </ResponsiveContainer>
        </>

    );
}

export default SharedLayout;