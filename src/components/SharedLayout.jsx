import { Suspense } from "react";
import { ResponsiveContainer } from "../styles/ResponsiveContainer";
import { Outlet } from "react-router-dom";
import { Header } from "./website/components/Header/Header";



const SharedLayout = () => {
    return (
        <>
            <ResponsiveContainer>
                <Header />
                <div style={{ minHeight: "300vh" }}>
                    <Suspense fallback={<div>Loading...</div>} >
                        <Outlet />
                    </Suspense>
                </div>
            </ResponsiveContainer>
        </>

    );
}

export default SharedLayout;