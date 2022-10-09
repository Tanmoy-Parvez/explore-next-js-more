import Head from "next/head";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/dashboard')
            .then(res => res.json())
            .then(data => {
                setDashboardData(data);
                setIsLoading(false);
        })
    }, [])

    if (isLoading) {
        return <p className="text-3xl text-white text-center mt-64">Loading........</p>
    }
    
    return (
        <div className="text-white text-center">
            <Head>
                <title>Next.JS-User/Dashboard</title>
            </Head>
            <h1 className="text-2xl">User Dashboard</h1>
            <p>Total Users: {dashboardData.users}</p>
            <p>Total Posts: {dashboardData.posts}</p>
            <p>Total Likes: {dashboardData.likes}</p>
            <p>Total Comments: {dashboardData.comments}</p>
        </div>
    );
};

export default Dashboard;