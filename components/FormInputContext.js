import { useController, useFormContext } from 'react-hook-form'
import React, { useEffect } from 'react'
import PropTypes from "prop-types"

import { FormInput, FormInputBig } from './FormInput'

const ControlledInput = React.forwardRef((props, forwardedRef) => {
    const { name, rules, defaultValue = '', ...inputProps } = props
  
    const formContext = useFormContext()
    const { control, errors } = formContext

    const { field } = useController({ name, control, rules, defaultValue })

    return (
        <FormInput
            {...inputProps}
            // error={errors[name]?.message}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            ref={forwardedRef}
        />
    )
})

const ControlledInputBig = React.forwardRef((props, forwardedRef) => {
    const { name, rules, defaultValue = '', ...inputProps } = props
  
    const formContext = useFormContext()
    const { control, errors } = formContext

    const { field } = useController({ name, control, rules, defaultValue })
  
    return (
        <FormInputBig
            {...inputProps}
            error={errors[name]?.message}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            ref={forwardedRef}
      />
    )
})

const FormInputContext = React.forwardRef((props, forwardedRef) => {
    const { name, ...inputProps } = props
    const formContext = useFormContext()
    
    useEffect(()=>{
        console.log("errorspiki", formContext)
    },[formContext])

    if (!formContext || !name) {
      const errorMessage = !name
        ? `Form field must have "name" prop!`
        : 'Form field must be a descendant of `FormProvider` as it uses `useFormContext`!'
        return( 
            <ControlledInput 
                {...inputProps} 
                error={errorMessage} 
                editable={false}
            />  
        )
    }  
    return <ControlledInput {...props} ref={forwardedRef} />
})

const FormInputBigContext = React.forwardRef((props, forwardedRef) => {
    const { name, ...inputProps } = props
    const formContext = useFormContext()
  
    if (!formContext || !name) {
      const errorMessage = !name
        ? 'Form field must have a "name" prop!'
        : 'Form field must be a descendant of `FormProvider` as it uses `useFormContext`!'
        return( 
            <ControlledInputBig 
                {...inputProps} 
                error={errorMessage} 
                editable={false} 
            />
        )
    }
    return <ControlledInputBig {...props} ref={forwardedRef} />
})

FormInputContext.displayName = 'FormInputContext'
ControlledInput.displayName = 'ControlledInput'
FormInputContext.propTypes = {
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
    defaultValue: PropTypes.any,
}
ControlledInput.propTypes = FormInputContext.propTypes

FormInputBigContext.displayName = 'FormInputBigContext'
ControlledInputBig.displayName = 'ControlledInputBig'
FormInputBigContext.propTypes = {
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
    defaultValue: PropTypes.any,
}
ControlledInputBig.propTypes = FormInputBigContext.propTypes

export {FormInputContext, FormInputBigContext}