import React from "react";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[420px]">
        <h2 className="text-2xl font-bold mb-2 text-center">Create your account</h2>
        <p className="text-center text-gray-500 mb-6">Please register to continue</p>

        <form className="space-y-4">
          {/* Name Fields in one row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Middle Name</label>
              <input
                type="text"
                placeholder="Enter your middle name"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <input
              type="text"
              placeholder="Enter your contact number"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">District (Address)</label>
            <input
              type="text"
              placeholder="Enter your district"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">City (Address)</label>
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Ward Number</label>
              <input
                type="text"
                placeholder="Enter your ward number"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
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
