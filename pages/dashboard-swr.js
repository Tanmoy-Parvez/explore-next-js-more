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
        <div>

        </div>
    );
};

export default DashboardSWR;