import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from "react-router-dom";

const offset = -140
const minDuration = 500

function TopNavLink({ to, handleSetActive, name, place, onClick }) {
    return (
        <>
            { place === "a" ?
                <ScrollLink onClick={onClick} to={to} smooth={true} spy={true} duration={minDuration} offset={offset} onSetActive={handleSetActive} activeClass="active" style={{ color: 'grey', padding: 15 }}>{name}</ScrollLink>
                :
                <RouterLink to="/" style={{ color: 'grey', padding: 15 }}>{name}</RouterLink>
            }</>

    );
}


export default TopNavLink;



