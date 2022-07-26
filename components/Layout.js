import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import nProgress from "nprogress";
import NProgress from "nprogress";


const Layout = ({ children , title ,  footer = true, dark = false }) => {
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
        <Navbar />

        <main>
            {title && (
                <h1>
                    {title}
                </h1>
            )}
            {children}
        </main>

                                {/* - {new Date().getFullYear()} */}
        {
            footer && (
                <footer className="bg-[#ffedd5]/50 text-black font-footer font-bold text-sm text-center">
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

export default Layout;