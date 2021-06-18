import { Link} from 'react-scroll';


const offset = -140
const minDuration = 500

function TopNavLink( {to, handleSetActive, name}) {
    return (
        <>
            <Link to={to} smooth={true} spy={true} duration={minDuration} offset={offset} onSetActive={handleSetActive} activeClass="active" style={{color:'grey', padding:15}}>{name}</Link>
        </>
    );
}


export default TopNavLink;
