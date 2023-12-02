import React, { forwardRef, useId } from 'react'

const Select = ({
    label,
    options = [],
    className = '',
    ...props
}, ref) => {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label className='' htmlFor={id} >{label}</label>}
            <select
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none duration-200 focus:bg-gray-50 border border-gray-200 w-full ${className}`}
                {...props}
                id={id}
                ref={ref}
            >
                {options.length > 0 ? (
                    options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))
                ) : null}
            </select>
        </div>
    )
}

export default forwardRef(Select)
