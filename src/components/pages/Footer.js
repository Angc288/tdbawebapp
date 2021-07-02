import talbaImg from "../../img/talba.png"
import tdbaImg from "../../img/tdba.png"
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


function Footer() {
  return (
    <div style={{ backgroundColor: 'lightgrey' }}>
      <Container style={{
        marginTop: 300, height: 350, display: 'flex',
        flexDirection: 'row'
      }}>
        <div style={{ textAlign: 'left' }}>
          <img src={tdbaImg} alt="" width="250" height="250"></img>
          <span>Thurrock and District Bowls Accociation</span>
        </div>
        <div>
          <Link to="/termsofuse">Terms of Use</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span>Thurrock Area Ladies Bowls Accociation</span>
          <img src={talbaImg} alt="" width="250" height="250"></img>
        </div>
      </Container>
      <div>
        Copyright @ T&DBA 2021
      </div>
    </div>
  );
}


export default Footer;
