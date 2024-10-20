import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required";
    if (!formData.lastName) formErrors.lastName = "Last name is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Email address is invalid";

    if (!formData.password) formErrors.password = "Password is required";
    if (!formData.confirmPassword)
      formErrors.confirmPassword = "Confirm password is required";
    else if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Save user data to localStorage for login validation
      localStorage.setItem("registeredUser", JSON.stringify(formData));
      navigate("/login");
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">Register</h2>

        {/* First Name Field */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="input input-bordered"
          />
          {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
        </div>

        {/* Last Name Field */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="input input-bordered"
          />
          {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
        </div>

        {/* Email Field */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="input input-bordered"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>

        {/* Password Field */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="input input-bordered"
          />
          {errors.password && <span className="text-red-500">{errors.password}</span>}
        </div>

        {/* Confirm Password Field */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="input input-bordered"
          />
          {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
        </div>

        <button className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
}

export default Register;
