import Link from "next/link";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/">
                    <a className="btn btn-ghost normal-case text-xl">Next.JS</a>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link href="/users">
                            <a>Users</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts">
                            <a>Posts</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/comments">
                            <a>Comments</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;