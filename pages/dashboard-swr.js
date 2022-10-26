import Head from "next/head";
import useSWR from "swr";

const fetcher = async () => {
    const response = await fetch('http://localhost:5000/dashboard');
    const data = await response.json();
    return data;
}


const DashboardSWR = () => {
    const { data, error } = useSWR('dashboard', fetcher);
    console.log(data);

    if (error) return "Some error occurred"
    if (!data) return "No data found"

    return (
        <div className="text-white">
            <Head>
                <title>Next.JS-User/Dashboard</title>
            </Head>
            <h1 className="text-2xl">User Dashboard</h1>
            <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        <p>Total Users: {data.users}</p>
                    </a>
                </li>
                
            </ul>
        </div>
    );
};

export default DashboardSWR;