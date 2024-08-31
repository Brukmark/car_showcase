export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "d102885bf9mshee73233102591cap1fd297jsn6e170adf4b29",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
