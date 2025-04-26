import PropsTypes from "prop-types";

function TextInput({ type = "text", value, name, register, message }) {
    return (
        <div>
            <input type={type} name={name} value={value} {...register} />
            {message && <p>{message}</p>}
        </div>
    );
}

TextInput.propTypes = {
    type: PropsTypes.string,
    name: PropsTypes.string,
    value: PropsTypes.string,
    message: PropsTypes.string,
    register: PropsTypes.object,
};

export default TextInput;
