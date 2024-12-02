import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../../.env")
});

const env = createEnv({
  server: {
    API_KEY: z.string()
  },
  runtimeEnv: {
    API_KEY: process.env.API_KEY
  }
});

export default env;
