import { useState } from "react";

interface User {
    username: string;
    password: string
}

function Login() {
    const [user , setUser] = useState<User | null>(null);




  const handleSubmit = (e: React.FormEvent) => {
        
  };


  const handleChange = (e: any) => {
      setUser({...user!,[e.target.name!]:e.target.value});
  }

    return (<>
    <form onSubmit={handleSubmit}>
       <label > UserName :</label>
       <input type="text"  name="username" value={user?.username} required/>
       <br/>
       <label> Password:</label>
       <input type = "password" name="password" value={user?.password} required />
       <button onClick={handleSubmit}>Login </button>
    </form>
    </>)
}

export default Login;