import { Form } from "react-bootstrap";
import _ from "lodash";
import FormLabel from "./FormLabel";

interface FormInputProps {
	name: string;
	register: any;
	errors: any;
	className?: string;
	title: string;
	options: string[];
	disabled?: boolean;
}

function FormRadio({
	name,
	errors,
	className = "mt2",
	title,
	register,
	options = [],
	disabled,
}: FormInputProps) {
	return (
		<Form.Group className={className}>
			<FormLabel title={title} />
			<div>
				{options.map((option: string) => (
					<Form.Check
						key={option}
						{...register(name)}
						inline
						label={option}
						value={option}
						type={"radio"}
						disabled={disabled}
					/>
				))}
			</div>

			{errors && _.get(errors, name) ? (
				<Form.Control.Feedback type="invalid">
					{_.get(errors, name).message}
				</Form.Control.Feedback>
			) : null}
		</Form.Group>
	);
}

export default FormRadio;
