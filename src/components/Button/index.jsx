import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

import styles from "./Button.module.scss";
// import { useEffect } from "react";

const Button = ({
    children,
    icon,
    to = "",
    href = "",
    className = "",
    primary = false,
    secondary = false,
    rounded = false,
    disabled = false,
    loading = false,
    onClick,
}) => {
    // useEffect(() => {
    //     console.log("Mounted");

    //     return () => {
    //         console.log("Clean up");
    //     };
    // }, []);

    let Component = "button";
    const passProps = {};

    if (to) {
        Component = Link;
        passProps.to = to;
    }
    if (href) {
        Component = "a";
        passProps.href = href;
    }

    const handleClick = () => {
        if (disabled || loading) return;
        // Logic...
        onClick();
    };

    return (
        <Component
            {...passProps}
            className={clsx(styles.wrapper, className, {
                [styles.primary]: primary,
                [styles.secondary]: secondary,
                [styles.rounded]: rounded,
                [styles.disabled]: disabled || loading,
            })}
            onClick={handleClick}
        >
            {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
                <div>
                    {icon && <FontAwesomeIcon icon={icon} />}
                    <span>{children}</span>
                </div>
            )}
        </Component>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.object,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
