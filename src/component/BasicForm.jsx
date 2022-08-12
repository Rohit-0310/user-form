import React from 'react'
import {useForm, useFieldArray, Controller} from 'react-hook-form';
import "./styles.scss"


// const defaultValues = {
//     users:[{firstname:"Rohit",lastname:"Kumar",email:"rohit@gmail.com"}]    
// }

const BasicForm = () => {
    const { register , handleSubmit, control , reset} = useForm({
        defaultValues:{
            users:[{firstname:"",lastname:"",email:""}]
        }
    });
    // users:[{firstname:"Rohit",lastname:"Kumar",email:"rohit@gmail.com"}]

    const {fields,append,remove} = useFieldArray({control, name: "users"})


    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='topInput'>
                <div className='inpitForm'>

                    <div>
                    {fields.map((item, index) => {
                     return (
                       <div key={item.id} className='inputBox'>
                         <input
                            placeholder='Enter Your FirstName' 
                            {...register(`users.${index}.firstname`, {
                                required: "Name is reuqired"
                            })}
                            />

                            <input
                            placeholder='Enter Your LastName' 
                            {...register(`users.${index}.lastname`)}
                            />

                            <input
                            placeholder='Enter Your Email' 
                            {...register(`users.${index}.email`, {
                                required: "Email is reuqired",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "This is not a valid email",
                                },
                            })}
                            />
                            <button type='button' onClick={() => remove(index)}>Delete</button>
                       </div>
                     );
                    })}
                    </div>
                    <div className='btnFunction'>
                        <button onClick={()=>{append()}} >Append</button>

                        <button onClick={() => reset()}>Reset</button>
                    </div>


                    
                    
            <button>Submit Form</button>
                    
                    
                </div>
            </div>
            {/* <h1>BasicForm</h1> */}




        </form>
    </div>
  )
}

export default BasicForm