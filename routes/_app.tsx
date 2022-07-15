/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
    return (
        <>
            <Head>
                <title>Beth and Josh Club</title>
                <meta name="description" content="Beth and Josh" />
                <meta property="og:image" content="/welcometotheclub.gif" />
            </Head>
            <props.Component />
        </>
    );
}
