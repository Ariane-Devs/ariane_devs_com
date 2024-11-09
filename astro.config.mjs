// @ts-check
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify/functions";
import dotenv from "dotenv";

dotenv.config();

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://RamirezSebastianJ.github.io",
  base: "ariane-devs",
});
