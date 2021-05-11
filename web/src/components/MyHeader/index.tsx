import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import {  NavLink } from "react-router-dom";


const MyHeader : React.FC = () => {
    return (<div>
        <Navbar color="light" light expand="md" className="flex-row-reverse">
            <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/create" style={{marginLeft: "1vw", marginRight: "1vw"}}>Enviar</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/delete" style={{marginLeft: "1vw", marginRight: "2vw"}}>Deletar</NavLink>
                </NavItem>
                
            </Nav>
        </Navbar>
    </div>)
}

export default MyHeader;