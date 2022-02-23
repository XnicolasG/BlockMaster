import { useState } from "react";


const UseForm = () => {
    const[busq, setBusq] = useState('')

    const handleInput = ({target}) =>{
        setBusq({
            [target.name]: target.value
        })
    }
    const resetForm = () =>{
        setBusq('')
    }
  return [busq, handleInput, resetForm]
};

export default UseForm;