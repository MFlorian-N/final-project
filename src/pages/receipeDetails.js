import { useParams, Link } from "react-router-dom";
import { Navbar, Card} from "react-bootstrap";
import { useEffect, useState } from "react";
import { getReceipeById } from "../services/spoonaciularApi"
import './style.css'

const ReceipeDetails = () => {
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getReceipeById(id)
                .then(res => {
                    if(res.status === 200){
                        setData(res.data)
                    }
                    console.log(res.data)
                })
                .catch(error => console.log(error))
        }

    }, [id])

    return (
        <div className="home-background">
            <Navbar className="bg-light justify-content-between">
                <Navbar.Brand href='#' className='brand-font'>RecipeRadar</Navbar.Brand>
                <button className="btn-home"><Link to="/" className="nav-link">Back to Receipes List</Link></button>
            </Navbar>
            <main style={{maxWidth: "60rem", margin: "auto"}}>
                <h1 className="text-center">{data?.title}</h1>
                    <Card className="recipe-card m-3">
                        <Card.Img variant="top" src={data.image} alt={data.title} />
                        <Card.Body>
                            <Card.Text dangerouslySetInnerHTML={{__html: data.summary}} />
                        </Card.Body>
                    </Card>
            </main>
        </div>
    )
}

export default ReceipeDetails;