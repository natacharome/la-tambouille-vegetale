import type { Handler } from "@netlify/functions";

const { Client } = require('@notionhq/client');
const notion = new Client({
    auth: process.env.NOTION_KEY,
  });
  export const handler: Handler = async () => {
    try {
        const response = await notion.databases.query({
          database_id: process.env.DATABASE_ID,
        });
    
        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*', // Autorise tous les domaines à accéder à cette fonction
        },
          body: JSON.stringify(response),
        };
      } catch (error: any) {
        return { statusCode: 500, body: error.toString() };
      }
  }