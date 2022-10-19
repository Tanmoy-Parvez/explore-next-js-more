import Head from "next/head";
import Header from "../Components/Header/Header";
import User from "../components/User/User";

const Users = (props) => {
    const {users} = props;
    return (
        <div>
            <Header/>
            <Head>
                <title>
                    Next.JS-Users
                </title>
            </Head>
            {
                users.map((user) => <User key={user.id} user={user} />)
            }
        </div>
    );
};

export default Users;

export  const getStaticProps = async () => { 
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: {
            users: data, 
        }
    }
}