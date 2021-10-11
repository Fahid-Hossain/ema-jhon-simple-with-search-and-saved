import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth/useAuth';
import "./Shipping.css"

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const {user}=useAuth();

    return (
        <div className="shipping-header">
            <h1>Shipping</h1>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="shipping-form-input" defaultValue={user.displayName} {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input className="shipping-form-input" defaultValue={user.email} {...register("name", { required: true })} />

            <input className="shipping-form-input" placeholder="city" {...register("city", { required: true })} />

            <input className="shipping-form-input" placeholder="phone" {...register("phone", { required: true })} />

            {/* errors will return when field validation fails  */}
            {errors.email && <span className="email">This field is required</span>}


            <input className="shipping-form-input" type="submit" />
        </form>
        </div>
    );
};

export default Shipping;