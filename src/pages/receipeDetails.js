import { useParams, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getReceipeById } from "../services/spoonaciularApi";

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
        <div>
            <Navbar className="bg-light justify-content-between">
                <Navbar.Brand href='#' className='brand-font'>RecipeRadar</Navbar.Brand>
                <Link to="/" className="nav-link">Back to Receipes List</Link>
            </Navbar>
            <main style={{maxWidth: "60rem", margin: "auto"}}>
                <h1 className="text-center">{data?.title}</h1>
                <p dangerouslySetInnerHTML={{__html: data?.summary}} className="m-3"></p>
            </main>
        </div>
    )
}

export default ReceipeDetails