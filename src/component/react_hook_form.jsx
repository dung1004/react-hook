import React from "react";
import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  if(errors) {
    if(errors.firstName) {
      console.log(errors.firstName.type);

    }
  }
  

  //   console.log(watch("firstName"));

  return (
    <React.Fragment>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email address</label>
          <input
            name="email"
            defaultValue="nguyen dung"
            className="form-control"
            ref={register}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="passwordRequire"
            ref={register({ required: true })}
          />
          {errors.passwordRequire && <span>This is required</span>}
        </div>
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input className="form-control" name="firstName" ref={register({ required: true, maxLength: 20 })} />
          {
            errors.firstName && errors.firstName.type === 'required' ? <small className="form-text text-muted">Trường này k được để trống</small> : null
          }
          {
            errors.firstName && errors.firstName.type === 'maxLength' ? <small className="form-text text-muted">Trường này k được để  quá 20 ký tự</small> : null
          }
        </div>
        <div className="form-group">
          <input className="form-control" name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
          {errors.lastName && <small className="form-text text-muted">Trường này không được viết số</small>}
        </div>
        <div className="form-group">
          <input className="form-control" name="age" type="number" ref={register({ min: 18, max: 99 })} />
          {errors.age && <small className="form-text text-muted">Lớn hơn 18 và nhỏ hơn 99 </small>}
        </div>

        <input type="submit" />
      </form>
    </React.Fragment>
  );
}
