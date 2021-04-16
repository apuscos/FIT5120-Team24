import React, {useState} from 'react';
import Navbar from "./Navigation/NavBar";
import styled from "styled-components";
import { useForm } from "react-hook-form";


const CheckEligibilityTitle = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 700;
  font-size: 5em;
  color: black;
  margin-left: calc(15% + 40px);
`;


function CheckEligibility(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <>
            <Navbar/>
            <CheckEligibilityTitle>Check Eligibility</CheckEligibilityTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </>
    );
}

export default CheckEligibility;