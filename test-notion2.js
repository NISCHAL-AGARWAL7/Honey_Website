const { Client } = require("@notionhq/client");
const notion = new Client({ auth: "test" });
console.log("dataSources keys:", Object.keys(notion.dataSources));
