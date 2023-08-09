import { Router } from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => {
    NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
    NProgress.done();
});

Router.events.on("routeChangeError", () => {
    NProgress.done();
});

type Props = {
    children: React.ReactNode
}

const Nprogress = (props: Props) => {
    return (
        <div>{props.children}</div>
    )
}

export default Nprogress