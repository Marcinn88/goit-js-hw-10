// export const fetchCounries = countryName => {
//   const BASE_URL = 'https://restcountries.com/v3.1/name/';
//   const SEARCH_PARAMS = '?fields=name,capital,population,flags,languages';

//   return fetch(`${BASE_URL}${countryName}${SEARCH_PARAMS}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// };

const BASE_URL = 'https://restcountries.com/v3.1/name';

const fetchCountries = name => {
  return fetch(
    `${BASE_URL}/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (response.status === 404) {
      return Promise.reject(new Error());
    }
    return response.json();
  });
};

export { fetchCountries };
