import React, { useState, useEffect } from "react";
import { getRandom } from "../../services/FofocaAPI";
import { Card, CardBody, CardText, Button, CardFooter } from "reactstrap";

const FofocaRender: React.FC = () => {

    
    

    const [fofocaText, setFofocaText] = useState("");
    const [reload, setReaload] = useState(true);

    const handleReload = () => setReaload(!reload);

    useEffect(() => {
        getRandom().then(getRandomResponse => {
            setFofocaText(getRandomResponse.text);
        })
    }, [reload]);
    
    return (<div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10vh"}}>
        <Card style={{width: "30vw"}} className="bg-light">
            <CardBody>
                <CardText>
                    <div style={{height: "50vh"}}>
                        <div style={{padding: 15, height: "100%", width: "100%",  backgroundColor: "white"}} >
                            {fofocaText}
                        </div>
                    </div>
                </CardText>
                <CardFooter className="bg-light">
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <Button onClick={handleReload}>Próxima</Button>
                </div>
                </CardFooter>
                
            </CardBody>
        </Card>
    </div>)
}

export default FofocaRender;