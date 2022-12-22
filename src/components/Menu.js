import React from "react";
import "../App.css";

const Menu = ({setLineColor, setLineWidth, setLineOpacity}) => {

    const onChangeHandlerColor = (event) => {
        setLineColor(event.target.value);
    }

    const onChangeHandlerWidth = (event) => {
        setLineWidth(event.target.value);
    }

    const onChangeHandlerTransparency = (event) => {
        setLineOpacity(event.target.value / 100);
    }

    return (
        <div className="Menu">
            <label>Цвет кисти</label>
            <input
                type="color"
                onChange={onChangeHandlerColor}
            />
            <label>Ширина кисти</label>
            <input
                type="range"
                min="3"
                max="20"
                onChange={onChangeHandlerWidth}
            />
            <label>Непрозрачность кисти</label>
            <input
                type="range"
                min="1"
                max="100"
                onChange={onChangeHandlerTransparency}
            />
        </div>
    );
};

export default Menu;
