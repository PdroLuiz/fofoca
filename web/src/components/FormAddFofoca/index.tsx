import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { createFofoca } from "../../services/FofocaAPI";
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, Button, Input } from "reactstrap";


const FormAddFofoca: React.FC = () => {
    
    const [redirect, setRedirect] = useState(false);


    const handleClose = () => setRedirect(true);

    const handleCreate = () => {
        const text  = (document.getElementById("fofocaText") as HTMLInputElement).value;
        createFofoca(text).then(fofocaResponse => {
            setRedirect(true);
        });
    }
    
    return (<div>
        {redirect ? <Redirect to="/"/> : null}
        <Form>
            <div>
                <Modal isOpen={true} onSubmit={handleCreate}  style={{marginTop: "15vh"}}>
                    <ModalHeader>
                        Adicione uma fofoca
                    </ModalHeader>
                    <ModalBody >
                        <div style={{height: "30vh"}}>
                            <Input type="textarea" name="text" id="fofocaText" style={{height: "30vh"}}/>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" onClick={handleCreate}>Enviar</Button>
                        <Button type="button" onClick={handleClose}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </div>
            
        </Form>
        
    </div>)
}

export default FormAddFofoca;