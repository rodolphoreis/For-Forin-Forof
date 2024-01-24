const service = require("./service");

async function main() {
  try {
    const result = await service.getPeople("a");
    const namesFor = [];
    /* --------------------- For --------------------------- */
    console.time("tempo com For");
    for (let i = 0; i < result.results.length - 1; i++) {
      const people = result.results[i];
      namesFor.push(people.name);
    }
    console.timeEnd("tempo com For");
    /* --------------------- ForIn --------------------------- */
    const namesForIn = [];
    console.time("tempo com ForIn");
    for (let i in result.results) {
      const people = result.results[i];
      namesForIn.push(people.name);
    }
    console.timeEnd("tempo com ForIn");
    /* --------------------- ForOf --------------------------- */
    const namesForOf = [];
    console.time("tempo com ForOf");
    for (const people of result.results) {
      namesForOf.push(people.name);
    }
    console.timeEnd("tempo com ForOf");
    /* -------------------------------------------------------- */
    console.log("name (For)", namesFor);
    console.log("name (ForIn)", namesForIn);
    console.log("name (FoOf)", namesForOf);
  } catch (error) {
    console.error("Erro interno!", error);
  }
}
main();
