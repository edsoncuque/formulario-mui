import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import "./App.css";

function App() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  return (
    <>
      <div className="centrarElementos">
        <div id="contenedorcentrado">
          <div id="login">
            <form>
              <Typography className="titulo" variant="h5">
                Formulario de registro
              </Typography>
              <TextField
                fullWidth
                label="Correo Electronico"
                type="email"
                variant="outlined"
                value={correo}
                margin="normal"
                onChange={(e) => setCorreo(e.target.value)}
              />

              <TextField
                label="Contraseña"
                type="password"
                value={contraseña}
                variant="outlined"
                margin="normal"
                onChange={(e) => setContraseña(e.target.value)}
                fullWidth
                required
              />
              <button type="submit" title="Ingresar" name="Ingresar">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
