import { useEffect, useState } from "react";

function RecruitmentDashBoard() {

    const [recruiter, setRecruiter] = useState(null);

  useEffect(() => {
  fetch('http://localhost:3000/recruiters')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log('Fetched data:', data); // Log the fetched data
      setRecruiter(data);
    })
    .catch((err) => console.error('Fetch error:', err));
}, []);

   return (
  <>
    <p>Hello Sandesh</p>
    {recruiter ? <pre>{JSON.stringify(recruiter, null, 2)}</pre> : <p>Loading...</p>}
  </>
);

}

export default RecruitmentDashBoard;