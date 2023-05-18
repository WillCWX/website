import Link from "next/link";
import Proptype from "prop-types";
import { forwardRef } from "react";

/**
 * A menuitem is an component that has a link encased in a box.
 */
export default function MenuItem({ link, description }) {
    return (
        <Link href={link} passHref legacyBehavior>
            <NavButton description={description} />
        </Link>
    );
}

const NavButton = forwardRef(function NavButton({ onClick, href, description }, ref) {
    return (
        <a href={href} onClick={onClick} ref={ref} className="menu-item-box">
            {description}
        </a>
    );
});

MenuItem.propTypes = {
    link: Proptype.string.isRequired,
    description: Proptype.string.isRequired,
};

NavButton.propTypes = {
    onClick: Proptype.any,
    href: Proptype.any,
    ref: Proptype.any,
    description: Proptype.string.isRequired,
};
