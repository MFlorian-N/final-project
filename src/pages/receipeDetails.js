import { useParams, Link } from "react-router-dom";
import { Navbar, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getReceipeById } from "../services/spoonaciularApi"
import Flag from "../components/flag";
import './style.css'


const ReceipeDetails = () => {
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getReceipeById(id)
                .then(res => {
                    if (res.status === 200) {
                        setData(res.data)
                    }
                    console.log(res.data)
                })
                .catch(error => console.log(error))
        }

    }, [id])

    return (
        <div  className="home-background">
            <Navbar className="bg-light justify-content-between">
                <Navbar.Brand href='#' className='brand-font'>RecipeRadar</Navbar.Brand>
                <button className="btn-home"><Link to="/" className="nav-link">Back to Receipes List</Link></button>
            </Navbar>
            <main style={{ maxWidth: "60rem", margin: "auto" }} className="page-details">
                <h3 className="mt-3">{data?.title}</h3>
                <div>
                    <span>Ready in: {data?.readyInMinutes}min</span>
                    <Flag label="vegan" is={data?.vegan} className="" />
                    <Flag label="vegetarian" is={data?.vegetarian} />
                </div>
                <hr />
                <h4 className="sum-font">Summary</h4>
                <p>
                    <img src={data?.image} alt={data?.title} style={{
                        float: "left",
                        borderRadius: "5px",
                        width: "150px",
                        marginRight: "1rem",
                    }} />
                    <div dangerouslySetInnerHTML={{ __html: data?.summary }} />
                </p>
                <hr />
                <h4 className="ingr-font">Ingredients</h4>
                <ul>
                    {data?.extendedIngredients.map(obj => (
                        <li key={obj.id}><span className="font-weight-bold">{obj.name}</span>:<span className="ms-2">{obj?.measures?.metric?.amount}{obj?.measures?.metric?.unitShort}</span></li>
                        // <Card className="recipe-card my-3 mx-auto">
                        //     <Card.Img variant="top" src={data?.image} alt={data?.title} />
                        //     <Card.Body>
                        //         <h3 className="text-center">{data?.title}</h3>
                        //         <Card.Text dangerouslySetInnerHTML={{ __html: data?.summary }} />
                        //     </Card.Body>
                        // </Card>
                    ))}
                </ul>
                <hr />
                <h4 className="steps-font">Steps</h4>
                <div dangerouslySetInnerHTML={{ __html: data?.instructions }}></div>
                <hr />
                <footer className="ft-page">RecipeRadar made with love</footer>
            </main>
        </div>
    )
}

export default ReceipeDetails;