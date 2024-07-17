import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

function Home() {
    return (
        <Navbar className="bg-body-tertiary justify-content-between">

            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search recipe"
                            className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Navbar>
    );
}

export default Home;