"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import firebaseApp from "../lib/firebase";
import * as XLSX from "xlsx";

const ADMIN_PASSWORD = "jcfab2026";

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: { seconds: number };
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setWrongPassword(false);
    } else {
      setWrongPassword(true);
    }
  };

  useEffect(() => {
    if (!authenticated) return;
    const fetchContacts = async () => {
      setLoading(true);
      try {
        const db = getFirestore(firebaseApp);
        const q = query(
          collection(db, "contactRequests"),
          orderBy("createdAt", "desc")
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ContactRequest[];
        setContacts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, [authenticated]);

  const exportToExcel = () => {
    const data = contacts.map((c) => ({
      Name: c.name,
      Email: c.email,
      Phone: c.phone,
      Service: c.service,
      Message: c.message,
      Date: c.createdAt
        ? new Date(c.createdAt.seconds * 1000).toLocaleDateString("en-IN")
        : "N/A",
    }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contact Requests");
    XLSX.writeFile(workbook, "contact-requests.xlsx");
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-base-100 flex items-center justify-center px-4">
        <div className="card bg-base-200 shadow-xl w-full max-w-sm p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="input input-bordered w-full"
                required
              />
              {wrongPassword && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    Incorrect password
                  </span>
                </label>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <p className="text-gray-500 mt-1">
              {contacts.length} contact request{contacts.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex gap-3">
            <button onClick={exportToExcel} className="btn btn-success">
              Export to Excel
            </button>
            <button
              onClick={() => setAuthenticated(false)}
              className="btn btn-ghost"
            >
              Logout
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No contact requests yet.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-base-300">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c, i) => (
                  <tr key={c.id}>
                    <td>{i + 1}</td>
                    <td className="font-medium">{c.name}</td>
                    <td>{c.email}</td>
                    <td>{c.phone}</td>
                    <td>
                      <span className="badge badge-outline">{c.service}</span>
                    </td>
                    <td className="max-w-xs truncate">{c.message}</td>
                    <td className="text-sm text-gray-500">
                      {c.createdAt
                        ? new Date(
                            c.createdAt.seconds * 1000
                          ).toLocaleDateString("en-IN")
                        : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}