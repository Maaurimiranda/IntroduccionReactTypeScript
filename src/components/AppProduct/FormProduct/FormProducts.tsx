import { Form } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm";
import { FC } from "react";
import Button from 'react-bootstrap/Button';

interface IPropsFromProducts {
    handleAddProduct: Function;
}

export const FormProducts : FC <IPropsFromProducts>  = ({handleAddProduct}) => {

    const {handleChange, values, resetForm} = useForm({
        nombre: "",
        imagen: "",
        precio: 0
    });

    const handleSubmitForm = () => {
        handleAddProduct(values);
        resetForm();
    }

    return (
        <Form className="p-4 border rounded m-3">
            <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Ingrese el nombre del producto" 
                    name = "nombre"
                    value = { values.nombre }
                    onChange = {handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formNombre">
                <Form.Label>Imagen</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Ingrese la imagen del producto" 
                    name = "imagen"
                    value = { values.imagen }
                    onChange = {handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formNombre">
                <Form.Label>Precio</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Ingrese el precio del producto" 
                    name = "precio"
                    value = { values.precio }
                    onChange = {handleChange}
                />
            </Form.Group>
            
            <div className= "d-flex justify-content-center mt-4">
                <Button onClick = {handleSubmitForm} variant = "primary">
                    Enviar producto 
                </Button>
            </div>
        </Form>
    )
}
