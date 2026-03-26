import {useEffect, useState} from "react";
import {colorClassNameMap} from "../../consts/common-consts";
import './ColorBlock.css'
import Button from "./Button";

export function ColorBlock({children, className}) {
    const [color, setColor] = useState(colorClassNameMap.red)

    const getColorKeyByValue = (value) => {
        return Object.entries(colorClassNameMap).find(
            ([k, v]) => v === value
        )?.[0]
    }

    const handleColorChange = () => {
        const currentColorKey = getColorKeyByValue(color)
        const colorKeys = Object.keys(colorClassNameMap)
        const nextColorKey = colorKeys[colorKeys.indexOf(currentColorKey) + 1]
        setColor(_c => colorClassNameMap[nextColorKey || colorKeys[0]])
    }

    useEffect(() => {
        console.log(`Поточний колір: ${getColorKeyByValue(color)}`)
    }, [color])
    return (
        <div className={`flex justify-between ${className} ${color}`}>
            {children}
            <Button
                onClick={handleColorChange}
            >
                Змінити колір
            </Button>
        </div>
    )
}