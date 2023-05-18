import MenuItem from "./MenuItem";


/**
 * The NavBar is a navigation banner that is present throughout the website.
 * @returns 
 */
export default function NavBar() {

    return (
        <nav className="background-black menu-box">
            <MenuItem link="/" description="Homepage" />
            <MenuItem link="/projects" description="My Projects" />
        </nav>
    );
}
