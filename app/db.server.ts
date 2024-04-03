import { Resource } from "sst";
import { drizzle } from "drizzle-orm/aws-data-api/pg";
import { migrate } from "drizzle-orm/aws-data-api/pg/migrator";
import { RDSDataClient } from "@aws-sdk/client-rds-data";

const sql = new RDSDataClient({});
export const db = drizzle(sql, {
  database: Resource.MyDatabase.database,
  secretArn: Resource.MyDatabase.secretArn,
  resourceArn: Resource.MyDatabase.clusterArn,
});

await migrate(db, { migrationsFolder: "app/drizzle" });
