// eslint-disable-next-line no-use-before-define
import React from 'react';
import Form from 'react-bootstrap/Form';

export default function PromoCreate() {
    return (
        <React.Fragment>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Calle</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Notas de la compra</Form.Label>
                    <Form.Control as="textarea" />
                </Form.Group>
            </Form>
        </React.Fragment>
    );
}
