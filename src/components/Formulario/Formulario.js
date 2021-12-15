import { useState } from 'react'; 
import './formulario.style.css';

function Formulario() {
  const [formValues, setFormValues] = useState ({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    console.log('***handleInputChange', name, value);
    setFormValues({...formValues, [name]: value})
  };

 /* const [value, setValue] = useState('');

  const handleInputChange = (e) =>{
    console.log('*** handleInputChange', e.target.value);
    setValue(e.target.value)
  }*/

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData)
   
    console.log('*** handleSubmit', data);
  }; 

  console.log('**** formValues', formValues)

  return (
   <form onSubmit={handleSubmit}>
     <input type = "text" name = "address" placeholder= "endereço" onChange={handleInputChange} value = {formValues.address || ''}  />
     <input type = "number" name = "number" placeholder= "numero" onChange={handleInputChange} value = {formValues.number || ''} />

      <select name="Estado" onChange={handleInputChange} value = {formValues.Estado|| ''}>
        <option values ="São Paulo">São Paulo</option>
        <option values ="Minas Gerais">Minas Gerais</option>
        <option values ="Rio de Janeirp">Rio de Janeirp</option>
      </select>

      

      <button type = "submit">Enviar</button>
   </form>
  );
}

export default Formulario
