import { useState } from "react";

type FormData = {
  salary?: number
}

export default function App() {
  
  const[formData, setFormData] = useState<FormData>({});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleInputChange(event: any){
    const value = event.target.value;
    const name = event.target.name;

    setFormData({...formData, [name]: value});
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(formData.salary || 0);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      onChange={handleInputChange} 
      name="salary"
      value={formData.salary || ""}
      placeholder="Digite um numero" />
      
      <button type="submit">Enviar</button>
    </form>
  );
}

