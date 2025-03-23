import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ children, icon }) {
    return (
        <button>
            {icon && <FontAwesomeIcon icon={icon} />}
            <span>{children}</span>
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.object,
};

export default Button;
