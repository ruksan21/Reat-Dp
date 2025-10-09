import React, { useState } from "react";

function Login() {
  const initialValues = { Email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(formValues);
    setFormErrors(errs);
    setIsSubmitting(true);
    if (Object.keys(errs).length === 0) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000); 
      console.log("Login successful", formValues);
    }
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Email) errors.Email = "Email is required!";
    else if (!emailRegex.test(values.Email))
      errors.Email = "Enter a valid email address";
    if (!values.password) errors.password = "Password is required!";
    else if (values.password.length < 8)
      errors.password = "Password must be at least 8 characters";
    return errors;
  };

  return (
    <div className="flex justify-center items-center min-h-screen font-sans">
      {/* Success notification */}
      {showSuccess && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50">
          Login successful!
        </div>
      )}
      <div className="p-8 rounded-[10px] shadow-lg bg-white max-w-md">
        <div className="text-center mb-5">
          <h1 className="text-[rgb(45,201,45)] font-bold text-2xl">
            CLMS Staff Login
          </h1>
          <p>Staff access only. Please login to continue</p>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="usernameorEmail">Email</label>
            <div className="relative w-full">
              <i className="fa-regular fa-user absolute left-2 top-1/2 -translate-y-1/2 text-[rgb(65,239,65)]"></i>
              <input
                type="email"
                name="Email"
                placeholder="Enter your email"
                value={formValues.Email}
                onChange={handleChange}
                className={`w-full py-2 pl-9 pr-2 text-base rounded-md border focus:outline-none focus:ring-2 ${
                  formErrors.Email && isSubmitting
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
            </div>
            {formErrors.Email && isSubmitting && (
              <p className="text-red-500 text-sm mt-1">{formErrors.Email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <div className="relative w-full">
              <i className="fa-solid fa-lock absolute left-2 top-1/2 -translate-y-1/2 text-[rgb(65,239,65)]"></i>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formValues.password}
                onChange={handleChange}
                maxLength={10}
                className={`w-full py-2 pl-9 pr-2 text-base rounded-md border focus:outline-none focus:ring-0 ${
                  formErrors.password && isSubmitting
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
            </div>
            {formErrors.password && isSubmitting && (
              <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full mt-5 py-2 bg-[rgb(45,201,45)] text-white rounded-md font-semibold"
          >
            Login
          </button>
        </form>
        <div className="mt-2 text-center">
          <a
            href="#"
            className="no-underline text-[rgb(36,141,36)] hover:underline "
          >
            Forgot Password?
          </a>
        </div>
        <div className="mt-2 text-center text-gray-500 text-base ">
          <p>
            <i className="fa-regular fa-copyright"></i>
            2025 CLMS System. Staff access only
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
