"use client";

import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import firebaseApp from "../lib/firebase";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const db = getFirestore(firebaseApp);
      await addDoc(collection(db, "contactRequests"), {
        ...formData,
        createdAt: new Date(),
      });
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err: any) {
  console.error("Firebase error:", err);
  setError(err?.message || JSON.stringify(err));
}
  };

  return (
    <main className="min-h-screen bg-base-100 py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-500 mb-8">
          Fill in the form below and we'll get back to you shortly.
        </p>

        {success && (
          <div className="alert alert-success mb-6">
            <span>Message sent successfully! We'll get back to you soon.</span>
          </div>
        )}

        {error && (
          <div className="alert alert-error mb-6">
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name *</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone *</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email *</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Required *</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="">Select a service</option>
              <option value="Welding">Welding</option>
              <option value="Structural Fabrication">
                Structural Fabrication
              </option>
              <option value="Sheet Metal">Sheet Metal</option>
              <option value="CNC Machining">CNC Machining</option>
              <option value="Custom Engineering">Custom Engineering</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Message *</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project or requirement..."
              className="textarea textarea-bordered w-full h-32"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}

