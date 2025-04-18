import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const defaultFn = () => {};

function Tabs({ defaultIndex = 0, children, onChange = defaultFn }) {
    const [currentIndex, setCurrentIndex] = useState(defaultIndex);
    const prevIndex = useRef(defaultIndex);

    const tabs = React.Children.toArray(children);

    useEffect(() => {
        if (prevIndex.current !== currentIndex) {
            onChange(currentIndex);
        }
        prevIndex.current = currentIndex;
    }, [currentIndex, onChange]);

    const currentUser = useSelector((state) => state.auth.currentUser);

    return (
        <div className="tabs-container">
            {currentUser && <p>Hi, {currentUser.firstName}</p>}
            <div className="tabs-list">
                {tabs.map((child, index) => {
                    const active = index === currentIndex;
                    return (
                        <button
                            key={index}
                            className="tab-item"
                            style={{
                                color: active ? "red" : "#333",
                                fontWeight: active ? "bold" : "normal",
                            }}
                            onClick={() => setCurrentIndex(index)}
                        >
                            {child.props.title}
                        </button>
                    );
                })}
            </div>
            <div className="tabs-content">{tabs[currentIndex]}</div>
        </div>
    );
}

Tabs.propTypes = {
    defaultIndex: PropTypes.number,
    children: PropTypes.node,
    onChange: PropTypes.func,
};

export default Tabs;
