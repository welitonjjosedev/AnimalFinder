import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import ReactPaginate from 'react-paginate';

import Header from "../Components/Header";
import Search from "../Components/Search";
import Finder from "../Components/Finder";
const Homepage = () => {

    //paginate
    const handlePageClick = () => {
        alert('proximo')
    }

    return (
        <>
            <Header />
            <Container style={{marginTop: "80px"}}>
                <Row>
                    <Col>
                        <h3>Pet Desaparecidos</h3>
                    </Col>
                    <Col className="col-4">
                        <Search />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://via.placeholder.com/80px80" />
                            <Card.Body>
                                <Card.Title>Lupita</Card.Title>
                                <Card.Text>
                                    <Badge variant="danger">Desaparecida</Badge>{' '}
                                    la é pre'ta com peito e queixo bran'cos, peitoral grande, cintura fina e olhos castanhos. Porte pequeno. Castrada. É dócil, mas é muito assustada e corre muito. Estava usando uma peiteira verde, rosa e colorida no momento da fuga.
                                </Card.Text>
                                <Finder />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div  className="p-5">
                            <ReactPaginate
                            
                                previousLabel={'Anterior'}
                                nextLabel={'Proximo'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={10}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                                />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Homepage;
