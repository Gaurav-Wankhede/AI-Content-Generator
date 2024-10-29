/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Ai-Content-Generator_owner:zqBvdPEWh84x@ep-weathered-cloud-a1j1hlyv.ap-southeast-1.aws.neon.tech/Ai-Content-Generator?sslmode=require',
    }
  };