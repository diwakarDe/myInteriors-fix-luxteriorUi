import { Form } from "react-bootstrap";

interface FormLabelProps {
    title: string;
}

function FormLabel({
    title,
}: FormLabelProps | any) {
    return (
        <Form.Label>{title}</Form.Label>
    );
}

export default FormLabel;
