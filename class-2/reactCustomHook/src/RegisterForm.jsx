import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setErrors({});
  }, [formState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmitHandler = (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = formState;

    // Validate the form
    if (name.trim() === "") {
      setErrors({ name: "Please enter your name" });
      return;
    }

    if (!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }

    if (password.trim() === "") {
      setErrors({ password: "Please enter a password" });
      return;
    }

    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    event.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmitHandler}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formState.name}
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={formState.confirmPassword}
        onChange={handleChange}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;