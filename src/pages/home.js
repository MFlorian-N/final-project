import { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getReceipesByIngredients } from "../services/spoonaciularApi";
import { useNavigate } from "react-router-dom";
import background from "../assets/images/pexels-enginakyurt-1435895.jpg";

function Home() {
    const [receipes, setReceipes] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "RecipeRadar - Home";
        
        const storedDataStr = sessionStorage.getItem("receipes");
        const storedList = storedDataStr ? JSON.parse(storedDataStr) : [];
        setReceipes(storedList);
    }, []);

    const getReceipes = async (e) => {
        e.preventDefault();
        const ingerdients = e.target[0].value.split(",");
        if (ingerdients.length > 0) {
            try {
                const res = await getReceipesByIngredients(ingerdients);
                if (res.status === 200) {
                    setReceipes(res.data);
                    sessionStorage.setItem("receipes", JSON.stringify(res.data));
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleRedirect = (receipeId) => {
        console.log(receipeId);
        navigate(`/details/${receipeId}`);
    };
    

    return (
        <div style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}} className="home-background">
            <Navbar className="bg-light justify-content-between">
                <Navbar.Brand href='#' className='brand-font'>RecipeRadar</Navbar.Brand>
                <Form className="d-flex justify-content-start align-items-center" onSubmit={getReceipes}>
                    <Form.Control className="bc"
                        type="text"
                        placeholder="Search recipe"
                    />
                    <Button type="submit" className="text-nowrap custom-search-button">
                        <span>Discover</span>
                        <i className="bi bi-search ms-2"></i>
                    </Button>
                </Form>
            </Navbar>
            <main className="m-3">
            {(!receipes || receipes.length === 0) && (
                    <p className="d-flex justify-content-center text-center w-content">
                        Welcome to RecipeRadar!<br/> Just type in an ingredient you have on hand, and we'll help you find delicious recipes to make with it. Happy cooking!
                    </p>
                )}
                <div className="d-flex justify-content-center flex-wrap gap-3">
                    {receipes?.length > 0 && receipes.map(receipe => (
                        <Card style={{ width: '18rem', minHeight: "25rem" }} key={receipe.id}>
                            <Card.Img variant="top" src={receipe.image} />
                            <Card.Body className="position-relative">
                                <Card.Title>{receipe.title}</Card.Title>
                                <Button className="position-absolute fixed-bottom" variant="primary" onClick={() => handleRedirect(receipe.id)}>Start Cooking</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                <footer className="ft-page">RecipeRadar</footer>
            </main>
        </div>
    );
}

export default Home;
