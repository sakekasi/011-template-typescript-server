import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  port: parseInt(required("PORT", process.env.PORT), 10),
} as const;

function required(key: string, value: string | undefined): string {
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is required`);
  }
  return value;
}
