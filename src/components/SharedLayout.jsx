import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ResponsiveContainer } from '../styles/ResponsiveContainer';
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