import { useEffect, useState } from "react";
import { Recruiter } from "./types";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function RecruitmentDashBoard() {
  const [recruiters, setRecruiters] = useState<Recruiter[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/recruiters")
      .then(res => res.json())
      .then(setRecruiters)
      .catch(console.error);
  }, []);

  const handleEdit = (id: string) => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <h2>Recruiters</h2>

      <table border={1} cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {recruiters.map(r => (
            <tr key={r.id}>
              <td>{r.recruiter_name}</td>
              <td>{r.companyName}</td>
              <td>{r.phoneNumber}</td>
              <td>
                <button onClick={() => handleEdit(r.id)}>✏️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default RecruitmentDashBoard;