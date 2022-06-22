import { useController, useFormContext } from 'react-hook-form'
import React from 'react'
import { FormInput, FormInputBig } from './FormInput'

const ControlledInput = React.forwardRef((props, forwardedRef) => {
    const { name, rules, defaultValue = '', ...inputProps } = props
  
    const formContext = useFormContext()
    const { control, errors } = formContext
  
    const { field } = useController({ name, control, rules, defaultValue })
    return (
        <FormInput
            {...inputProps}            
            error={errors}
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
            // error={errors[0]?.message}
            // error={errors[name]?.message}
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
  
    if (!formContext || !name) {
      const errorMessage = !name
        ? 'Form field must have a "name" prop!'
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
        return <ControlledInputBig {...inputProps} error={errorMessage} editable={false} />
    }
    return <ControlledInputBig {...props} ref={forwardedRef} />
})

export {FormInputContext, FormInputBigContext}