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
        <div className="text-white text-center">
            <Head>
                <title>Next.JS-User/Dashboard</title>
            </Head>
            <h1 className="text-2xl">User Dashboard</h1>
            <p>Total Users: {data.users}</p>
            <p>Total Posts: {data.posts}</p>
            <p>Total Likes: {data.likes}</p>
            <p>Total Comments: {data.comments}</p>
        </div>
    );
};

export default DashboardSWR;