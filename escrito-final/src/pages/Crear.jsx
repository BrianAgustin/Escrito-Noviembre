import { useState } from "react";

export default function Crear() {
  const [crearUsuario, setCrearUsuario] = useState({
    nombre: "",
    email: "",
    celular: "",
  });

  const setForm = async () => {
    try {
      fetch("https://654acfad5b38a59f28ee3f86.mockapi.io/api/users").then(
        (response) => {
          if (response.status === 200) {
            setCrearUsuario(response);
            console.log(response);
          } else {
            throw new Error("No se pudo crear usuario");
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="form-container">
      <form>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input type="text" placeholder="Nombre" value={crearUsuario.nombre} />
        </div>
        <div>
          <input type="email" placeholder="Email" value={crearUsuario.email} />
        </div>
        <div>
          <input
            type="number"
            placeholder="Telefono celular"
            value={crearUsuario.celular}
          />
        </div>
        <div>
          <button onSubmit={handleSubmit}>Crear usuario</button>
        </div>
      </form>
    </div>
  );
}
