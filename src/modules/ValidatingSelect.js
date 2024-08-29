import {useState, useEffect, useRef} from "react";
import Select from 'react-select';
import "../scss/Scss.scss"
import styles from "../scss/ValidatingSelect.module.scss"


const ValidatingSelect = ({required = false, inputId, options, value, placeholder, getOptionLabel, getOptionValue, onChange, invalidText }) => {

    const [isValid, setIsValid] = useState(false);
    const [hasBeenFocused, setHasBeenFocused] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const warningRef = useRef(null);

    useEffect(() => {
        if(value !== undefined && value !== null && value.length !== undefined && value.length !== 0){
            setIsValid(true);
        }
        else{
            setIsValid(false);
        }
    }, [value, options]);

    const handleChange = (e) => {
        onChange(e);
        setIsValid(true);
    }

    const handleFocus = (e) => {

        warningRef.current.classList.remove("invalid-select-warning");
        setIsFocused(true);
        if(value !== undefined && value !== null && value.length !== undefined && value.length !== 0){
            setIsValid(true);
        }
        else{
            setIsValid(false);
        }
    }

    const handleBlur = (e) => {
        
        setHasBeenFocused(true);
        setIsFocused(false);
    }

    const warningMessage = () => {
        return (
            <div ref={warningRef} className={`${isValid === false && hasBeenFocused === true && isFocused === false ? "invalid-select-warning" : ""} select-warning`}>
                <span>
                    {invalidText}
                </span>
            </div>
        )
    }

    return (
        <>
            <div data-isvalid={isValid}>
                <Select
                // className={required === true ? `select-to-valid` : ""}   //class `select-to-valid` is needed for validation
                inputId={inputId}
                options={options}
                value={options !== undefined ? value : []}
                placeholder={placeholder}
                getOptionLabel ={getOptionLabel}
                getOptionValue ={getOptionValue}
                onChange={handleChange}
                onBlur={required === true ? handleBlur : ()=>{}}
                onFocus={required === true ? handleFocus : ()=>{}}
                classNames={{
                    control: (state) =>
                    state.isFocused ? {} : isValid === true ? styles["validating-selector"] : hasBeenFocused === true ? styles["invalid-selector"] : styles["validating-selector"],
                }}
                styles={{
                    menu: (props) => {
                        return {
                            ...props,
                            margin: 0,
                        };
                    },
                }}
                />

                {warningMessage()}
            </div>
        </>
    )
}

export {ValidatingSelect};