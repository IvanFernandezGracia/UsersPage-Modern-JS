const urlUsuarios = "https://reqres.in/api/users?page=2";

////////////////////////
// Usuarios-Page
//////////////////////////
const obtenerUsuarios = async () => {
  const resp = await fetch(urlUsuarios);
  const { data: usuarios } = await resp.json(); // renombrar property objet
  return usuarios;
};


export {obtenerUsuarios };
