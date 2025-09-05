const NavLinks = ({ links, className }) => {
    return (
        <ul
            className={`flex gap-7 p-5 bg-transparent text-white justify-between rounded-2xl ${className}`}
        >
            {links.map((link, index) => (
                <li key={index}>
                    <a
                        href={link.href}
                        // onClick={() => setActiveLink(link.text)}
                        className="transition-colors duration-300 hover:text-[#FF6B3D] "
                    >
                        <span>{link.text}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;