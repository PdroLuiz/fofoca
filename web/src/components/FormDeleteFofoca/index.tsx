import React, { useState } from "react";
import { deleteFromIp } from "../../services/FofocaAPI";
import { Redirect } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, Button } from "reactstrap";


const FormAddFofoca: React.FC = () => {
    
    const [redirect, setRedirect] = useState(false);


    const handleClose = () => setRedirect(true);

    const handleDelete = () => {
        deleteFromIp().then(_ => setRedirect(true));
    }
    
    return (<div>
        {redirect ? <Redirect to="/"/> : null}
        <Form>
            <div >
                <Modal isOpen={true} onSubmit={handleDelete} style={{marginTop: "15vh"}}>
                    <ModalHeader>
                        Remover todas as fofocas
                    </ModalHeader>
                    <ModalBody >
                        <div style={{height: "30vh"}}>
                            Ao clicar em "Remover" todas as fofocas enviadas do seu ip serão excluídas!
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" onClick={handleDelete}>Remover</Button>
                        <Button type="button" onClick={handleClose}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </div>
            
        </Form>
        
    </div>)
}

export default FormAddFofoca;