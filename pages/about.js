import Head from "next/head";
import { useRouter } from "next/router";

const About = () => {
    const router = useRouter();
    const handleBack = () => {
        router.push("/")
    }
    return (
        <>
            <Head>
                <title>
                    Next.JS-About
                </title>
            </Head>
        <div className="container mx-auto mt-10">
            <div className="mockup-code p-10">
                <h5 className="text-3xl">Q: What is Next.JS</h5>
                <p>Ans: Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites. React documentation mentions Next.js among Recommended Toolchains advising it to developers as a solution when Building a server-rendered website with Node.js.[4] Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side. [From: wikipedia];
                </p>
                <button onClick={handleBack} className="btn btn-xs btn-outline">Back</button>
            </div>
        </div>
        </>
    );
};

export default About;