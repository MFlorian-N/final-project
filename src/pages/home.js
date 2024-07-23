import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


function Home() {
    return (
        <div className= "home-background">

        <Navbar className="bg-light justify-content-start">
            <Navbar.Brand href='#' className='brand-font'>RecipeRadar</Navbar.Brand>
            <Form inline>
                        <Form.Control
                            type="text"
                            placeholder="Search recipe"
                            className=" mr-sm-2"
                            />
                    
                    
                        <Button type="Discover">
                            Discover
                        <i class="bi bi-search"></i>
                            </Button>
    
            </Form>
        </Navbar>
       

     </div>
    );
}

export default Home;