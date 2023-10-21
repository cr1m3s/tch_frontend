import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ResponsiveContainer } from '../styles/ResponsiveContainer';
import { Header } from "./website/components/Header/Header";
import Loader from "./common/Loader/Loader";



const SharedLayout = () => {
    return (
        <>
            <ResponsiveContainer>
                <Header />
                <Suspense fallback={<Loader/>} >
                    <Outlet />
                </Suspense> 

            </ResponsiveContainer>
        </>

    );
}

export default SharedLayout;