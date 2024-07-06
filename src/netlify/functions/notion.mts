import type { Handler } from "@netlify/functions";

const { Client } = require('@notionhq/client');

const notion = new Client({
    auth: 'YOUR_NOTION_API_KEY',
  });
  export const handler: Handler = async () => {
    try {
        const response = await notion.databases.query({
          database_id: 'DATABASE_ID',
        });
    
        return {
          statusCode: 200,
          body: JSON.stringify(response),
        };
      } catch (error: any) {
        return { statusCode: 500, body: error.toString() };
      }
  }