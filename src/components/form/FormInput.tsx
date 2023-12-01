import { Form } from "react-bootstrap";
import FormLabel from "./FormLabel";
import _ from "lodash";

interface FormInputProps {
	name: string;
	title: string;
	register?: any;
	errors?: any;
	placeholder?: string;
	type?: string;
	className?: string;
	rows?: number;
	extra?: JSX.Element;
}

function FormInput({
	errors,
	title,
	name,
	register,
	placeholder,
	type = "text",
	className,
	rows = 3,
	extra,
	...rest
}: FormInputProps | any) {
	return (
		<Form.Group className={className}>
			<FormLabel title={title} />

			{type === "textarea" ? (
				<Form.Control 
				
					isInvalid={Boolean(_.get(errors, name))}
					placeholder={placeholder}
					as={type}
					rows={rows}
					{...rest}
					{...register(name)}
				/>
			) : (
				<Form.Control
					isInvalid={Boolean(_.get(errors, name))}
					placeholder={placeholder}
					type={type}
					{...rest}
					{...register(name)}
				/>
			)}

			{errors && _.get(errors, name) ? (
				<Form.Control.Feedback type="invalid">
					{_.get(errors, name).message}
				</Form.Control.Feedback>
			) : null}
			{extra}
		</Form.Group>
	);
}

export default FormInput;
