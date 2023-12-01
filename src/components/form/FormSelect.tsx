import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import FormLabel from "./FormLabel";

interface FormSelectProps {
	name: string;
	title: string;
	errors?: any;
	control: any;
	options: any[];
	isCreatable?: boolean;
	isMulti?: boolean;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
}

function FormSelect({
	errors,
	title,
	name,
	control,
	options,
	isCreatable = false,
	isMulti,
	placeholder = "",
	className = "",
	disabled = false
}: FormSelectProps) {
	return (
		<Form.Group className={className}>
			<FormLabel title={title} />
			<Controller
				name={name}
				control={control}
				render={({ field }) =>
					isCreatable ? (
						<CreatableSelect
							isMulti={isMulti}
							placeholder=""
							isDisabled={disabled}
							styles={{
								valueContainer: (provided, state) => ({
									...provided,
									height: "42px",
								}),
							}}
							{...field}
							options={options}
						/>
					) : (
						<Select
							isMulti={isMulti}
							placeholder={placeholder}
							styles={{
								valueContainer: (provided, state) => ({
									...provided,
									// height: "42px",
								}),
							}}
							isDisabled={disabled}
							{...field}
							options={options}
						/>
					)
				}
			/>

			{errors && errors[name] ? (
				<div className="invalid-feedback d-block">
					{errors[name]["message"]}
				</div>
			) : null}
		</Form.Group>
	);
}

export default FormSelect;
