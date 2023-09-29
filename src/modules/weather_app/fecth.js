import example from "./example.json";

const apiKey = '598fc5cf55c4425ea3f50ac4b76a5cbc';
const apiUrl = 'https://api.weatherbit.io/v2.0/current';


// Función para realizar la consulta a la API
export default async function getWeatherData({city, countryCode}) {
  try {
   const url = `${apiUrl}?key=${apiKey}&city=${city},${countryCode}`;
    const response = await fetch(url);
    const data = await response.json();

    // Extraer datos relevantes
    //const temperature = data.data[0].temp;
    //const cityName = data.data[0].city_name;
    //const country = data.data[0].country_code;

    // Imprimir los datos
    //console.log(`Temperatura en ${cityName}, ${country}: ${temperature}°C`);
    //console.log(data.data[0]);

    return data.data[0];

    //return example.data[0]
  } catch (error) {
    return {error: "Error al comunicarse con la API"}
  }
}