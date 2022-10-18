
const User = ({user}) => {
    return (
        <div className="mt-5">
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className="">User Id: {user?.id}</p>
                    <h2 className="text-xl">Name: {user?.name}</h2>
                    <h2 className="text-xl">E-mail: {user?.email}</h2>

                    <div className="card-actions justify-end">
                        <button className="btn btn-outline">Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default User;