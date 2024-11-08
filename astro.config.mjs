// @ts-check
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless'
import dotenv from 'dotenv';

dotenv.config();

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel(),
});
