const { Client } = require("@notionhq/client");
const notion = new Client({ auth: "test" });
console.log("databases:", Object.keys(notion.databases));
console.log("notion:", Object.keys(notion));
