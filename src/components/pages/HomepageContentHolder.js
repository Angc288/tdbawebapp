import { Container } from "react-bootstrap";

function HomepageContentHolder({ component, header }) {


    return (
        <div style={{
            backgroundColor: 'white',
            paddingTop: 150
        }}>
            <Container style={{}}>
                <h2 style={{ textAlign: 'left' }}>{header}</h2>
                {component}
            </Container>
        </div>
    );

}



export default HomepageContentHolder;