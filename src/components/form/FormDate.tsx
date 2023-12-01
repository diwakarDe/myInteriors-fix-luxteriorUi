import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import FormLabel from "./FormLabel";

interface FormDateProps {
	name: string;
	title: string;
	errors?: any;
	control: any;
	placeholder?: string;
	showTimeSelect?: boolean;
	dateFormat?: string;
	minDate?: Date;
	className?: string;
}

function FormDate({
	errors,
	title,
	name,
	control,
	placeholder,
	showTimeSelect = false,
	dateFormat = "MM/dd/yyyy",
	minDate,
	className,
}: FormDateProps) {
	return (
		<Form.Group className={className}>
			<FormLabel>{title}</FormLabel>

			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<DatePicker
						className="ps-3 form-control"
						placeholderText={placeholder}
						onChange={(date: any) => {
							field.onChange(date);
						}}
						selected={field.value}
						dateFormat={dateFormat}
						showTimeSelect={showTimeSelect}
						minDate={minDate}
					/>
				)}
			/>

			{errors && errors[name] ? (
				<div className="invalid-feedback d-block">
					{errors[name]["message"]}
				</div>
			) : null}
		</Form.Group>
	);
}

export default FormDate;
