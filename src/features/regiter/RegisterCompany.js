import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { configureDetails, registerDetailsAsync } from './RegisterSlice';
import { useForm } from "react-hook-form";
export function RegisterCompany() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const [data,setData] = useState({});
  const testingFun = (values) =>{
    const newDAta = data
    dispatch(registerDetailsAsync(newDAta))
    setData(newDAta)
  }
  const vals = useSelector(configureDetails)
  console.log(data)
  console.log(vals)
  return (
    <div>

      <form action="" onSubmit={handleSubmit((data) => {
                testingFun(data)
              })}>
        <label htmlFor="companyname">companyname</label>
        <input type="text" {...register('companyName') } />
        <label htmlFor="ownerName">ownerName</label>
        <input type="text" {...register('ownerName') } />
        <label htmlFor="rolllno">rollno</label>
        <input type="text" {...register('rollNo') } />
        <label htmlFor="ownermail">ownermail</label>
        <input type="email" {...register('ownerEmail') } />
        <label htmlFor="accesscode">AccessCode</label>
        <input type="text" {...register('accessCode') } />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}
