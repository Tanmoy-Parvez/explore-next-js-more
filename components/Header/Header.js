import Link from "next/link";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Next.JS</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link href="/blog">
                        <a>Blog</a>
                    </Link></li>
                    <li tabIndex={0}>
                        <a>
                            Products
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li>
                                <Link href="/products/1">
                                    <a>Product-1</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/2">
                                    <a>Product-2</a>
                                </Link>
                            </li>
                            
                        </ul>
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