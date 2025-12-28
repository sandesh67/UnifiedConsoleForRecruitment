import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateRecruit() {
  const [form, setForm] = useState({
    recruiter_name: "",
    companyName: "",
    phoneNumber: ""
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("http://localhost:3000/recruiters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    navigate("/recruiters");
  };

  return (
    <>
      <h2>Create Recruiter</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="recruiter_name"
          placeholder="Recruiter Name"
          onChange={handleChange}
          required
        />
        <br />

        <input
          name="companyName"
          placeholder="Company Name"
          onChange={handleChange}
          required
        />
        <br />

        <input
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default CreateRecruit;