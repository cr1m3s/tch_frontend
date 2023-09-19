import { Suspense } from "react";
import { ResponsiveContainer } from "../styles/ResponsiveContainer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";



const SharedLayout = () => {
    return (
        <>
            <Header/>
            <ResponsiveContainer>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet/>
                </Suspense>
            </ResponsiveContainer>
        </>
        
    );
}
 
export default SharedLayout;