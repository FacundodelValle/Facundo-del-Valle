#!/bin/nodejs

const prompt = require("prompt-sync")({ sigint: true });
const axios = require("axios");
const fs = require("fs");

const main = async () => {
  const siteId = prompt("Indique en site va a realizar la busqueda ");
  const userId = prompt(
    "Indique el id del usuario en que desea ver sus publicaciones "
  );
  try {
    const { data } = await axios.get(
      `https://api.mercadolibre.com/sites/${siteId}/search?seller_id=${userId}`
    );
      const { results } = data;
      const formated = await Promise.all(
      results.map(async (result) => {
      const { id, title, category_id } = result;
      const { data } = await axios.get(
        `https://api.mercadolibre.com/categories/${category_id}`
      );
      const { name } = data;
      return { id, title, category_id, name };
    })
  );
  fs.writeFileSync(`log-${userId}.json`, JSON.stringify(formated));
  } catch (err) {
    console.log("No existe el usuario o el site");
    return;
  }
};

main();

