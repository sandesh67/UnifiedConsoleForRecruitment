import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Recruiter } from "./types";

function EditRecruiter() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState<Recruiter | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/recruiters/${id}`)
      .then(res => res.json())
      .then(setForm);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!form) return;
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/recruiters/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    navigate("/recruiters");
  };

  if (!form) return <p>Loading...</p>;

  return (
    <>
      <h2>Edit Recruiter</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="recruiter_name"
          value={form.recruiter_name}
          onChange={handleChange}
        />
        <br />

        <input
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
        />
        <br />

        <input
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default EditRecruiter;