"use client";

import { addDoc, collection, getFirestore } from "firebase/firestore";
import firebaseApp from "../lib/firebase";

export default function TestPage() {
  const saveData = async () => {
    try {
      const db = getFirestore(firebaseApp);

      await addDoc(collection(db, "contactRequests"), {
        name: "Indhu",
        email: "test@gmail.com",
        message: "Firebase Connected",
        createdAt: new Date(),
      });

      alert("Data Saved Successfully");
    } catch (error) {
      console.error(error);
      alert("Error");
    }
  };

  return (
    <div className="p-10">
      <button
        onClick={saveData}
        className="btn btn-primary"
      >
        Test Firebase
      </button>
    </div>
  );
}