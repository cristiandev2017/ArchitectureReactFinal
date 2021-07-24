import React from "react";
import {Link} from "react-router-dom";
import architecture from '../static/images/architecture.png'

const Home = () => {
    return (
        <div className="container text-center mt-4">
                    <h1 className="cover-heading mt-10 font-weight-bold">Arquitectura con React 🕋</h1>
                    <br/>
                    <h4>Proyecto con fines educativos de una arquitectura simple de clean architecture</h4>
                    <img src={architecture} style={{width:"340px"}}/>
                    <Link className=" mt-5 btn btn-outline-danger btn-block" to={"/login"}>Autenticación</Link>                
        </div>
    )
}

export default Home;