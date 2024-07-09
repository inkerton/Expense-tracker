/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      connectionString: ProcessingInstruction.env.DATABASE_URL,
    }
  };