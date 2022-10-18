import User from "../components/User/User";

const Users = (props) => {
    const {users} = props;
    return (
        <div>
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