import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="h-full border">
      <div className="card w-96 bg-base-100 shadow-xl sticky top-1/2 ">
        <div className="card-body">
          <h2 className="text-3xl text-center py-5 border-b-4 border-b-success">
            Send your message
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label uppercase ">Enter Your name</label>
            <input
              className="input input-success w-full"
              type="text"
              placeholder="input name"
              {...register("name", { required: true, maxLength: 80 })}
            />
            {errors.name?.type === "required" && (
              <p className="text-warning py-2"> First name is required</p>
            )}

            <label className="label uppercase">Enter Your email</label>

            <input
              className="input input-success w-full"
              type="email"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            {errors.Email?.type === "required" && (
              <p className="text-warning py-2"> Email is required</p>
            )}
            <label className="label uppercase"> phone number</label>

            <input
              className="input input-success w-full "
              type="text"
              placeholder="phone "
              {...register("phone ")}
            />

            <label className="label uppercase">Enter Message</label>

            <textarea
              className="textarea input-success w-full"
              rows="4"
              placeholder="Message"
              {...register("Message", { required: true })}
            ></textarea>
            {errors.Message?.type === "required" && (
              <p className="text-warning py-2"> Message is required</p>
            )}
            <input className="btn w-full " type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
