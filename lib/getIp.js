import axios from "axios";

/**
 * Función para conseguir la ip desde el lado del cliente usando la api de ipify
 * @todo Pasar todo el formulario al backend, ya qeu es bloqueado por adblockers.
 */
export default async function giveIP() {
  const url = "https://api.ipify.org";
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log("Error IP: " + err);
    return "No conseguida";
  }
}
