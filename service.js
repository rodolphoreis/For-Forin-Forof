const axios = require("axios");
const { response } = require("express");
const baseUrl = "https://swapi.dev/api/people";

async function getPeople(name) {
  try {
    const url = `${baseUrl}/?search=${name}&format=json`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Erro interno!", error);
  }
}
getPeople("Luke")
  .then(function (resultado) {
    console.log("Resultado", resultado);
  })
  .catch(function (error) {
    console.error(error);
  });

module.exports = {
  getPeople,
};
