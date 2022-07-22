import NavBarSpa from "./NavBarSpa";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import nProgress from "nprogress";
import NProgress from "nprogress";


const LayoutSpa = ({ children , title ,  footer = true, dark = false }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouterChange = (url) => {
            console.log(url);
            NProgress.start();
        };

        router.events.on("routeChangeStart", handleRouterChange);
        router.events.on("routeChangeComplete", () => NProgress.done());
        router.events.on("routeChangeError", () => nProgress.done());

        return () => {
            router.events.off("routeChangeStart", handleRouterChange);
        };
    }, []);


    return (
        <>
        <NavBarSpa />

        <main className="main">
            {title && (
                <h1 className="bg-light">
                    {title}
                </h1>
            )}
            {children}
        </main>

                                {/* - {new Date().getFullYear()} */}
        {
            footer && (
                <footer className="bg-[#3498DB] text-black text-center">
                    <div>
                        <h6>&copy; Luciana Pilar Sanchez Portfolio</h6>
                        <p>2022. All rights reserved</p>
                    </div>
                </footer>
            )
        }
    </>
    );
};

export default LayoutSpa;