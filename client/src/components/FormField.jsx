import React from 'react'

const FormField = ({labelName,type,name,placeholder,value,handleChange,isSurpriseMe,handleSurpriseMe}) => {
  return (
    <div className='flex items-center  gap-2 mb-2' >
      <label 
      htmlFor={name}
      className='block text-sm font-medium text-gray-900'
      >
        {labelName}
      </label>
      
    </div>
  )
}

export default FormField
