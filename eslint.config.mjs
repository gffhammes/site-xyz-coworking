import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});


const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {"@typescript-eslint/no-unused-vars": 'warn',
      "@typescript-eslint/no-empty-object-type": "off",
    },
  }),
];

export default eslintConfig;
