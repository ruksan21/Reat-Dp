import React, { useState } from "react";

export default function Register() {
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    contact: "",
    dob: "",
    gender: "",
    district: "",
    city: "",
    ward: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      console.log("Registration successful", formValues);
      setFormValues(initialValues); // reset form
    }
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) errors.firstName = "First name is required";
    if (!values.lastName) errors.lastName = "Last name is required";
    if (!values.email) errors.email = "Email is required";
    else if (!emailRegex.test(values.email)) errors.email = "Invalid email address";
    if (!values.contact) errors.contact = "Contact number is required";
    if (!values.dob) errors.dob = "Date of birth is required";
    if (!values.gender || values.gender === "Select Gender") errors.gender = "Gender is required";
    if (!values.district) errors.district = "District is required";
    if (!values.city) errors.city = "City is required";
    if (!values.ward) errors.ward = "Ward number is required";
    if (!values.password) errors.password = "Password is required";
    else if (values.password.length < 8) errors.password = "Password must be at least 8 characters";
    return errors;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[420px]">
        <h2 className="text-2xl font-bold mb-2 text-center">Create your account</h2>
        <p className="text-center text-gray-500 mb-6">Please register to continue</p>

        {showSuccess && (
          <div className="text-green-600 font-semibold text-center mb-4">
            Registration successful!
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <p className="text-red-500 text-sm">{formErrors.firstName}</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Middle Name</label>
              <input
                type="text"
                name="middleName"
                value={formValues.middleName}
                onChange={handleChange}
                placeholder="Enter your middle name"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            <p className="text-red-500 text-sm">{formErrors.lastName}</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            <p className="text-red-500 text-sm">{formErrors.email}</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <input
              type="text"
              name="contact"
              value={formValues.contact}
              onChange={handleChange}
              placeholder="Enter your contact number"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            <p className="text-red-500 text-sm">{formErrors.contact}</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formValues.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            <p className="text-red-500 text-sm">{formErrors.dob}</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={formValues.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <p className="text-red-500 text-sm">{formErrors.gender}</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">District (Address)</label>
            <input
              type="text"
              name="district"
              value={formValues.district}
              onChange={handleChange}
              placeholder="Enter your district"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            <p className="text-red-500 text-sm">{formErrors.district}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">City (Address)</label>
              <input
                type="text"
                name="city"
                value={formValues.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <p className="text-red-500 text-sm">{formErrors.city}</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Ward Number</label>
              <input
                type="text"
                name="ward"
                value={formValues.ward}
                onChange={handleChange}
                placeholder="Enter your ward number"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <p className="text-red-500 text-sm">{formErrors.ward}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            <p className="text-red-500 text-sm">{formErrors.password}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
