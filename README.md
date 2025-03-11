# eslint-plugin-neverthrow-must-use

An ESLint plugin enforcing proper handling of `neverthrow` `Result` values.

You are forced to consume the result in one of the following three ways:

* Calling .match
* Calling .unwrapOr
* Calling ._unsafeUnwrap

## 📦 Installation

Install the plugin and required dependencies:

```sh
npm install neverthrow
npm install --save-dev eslint-plugin-neverthrow-must-use eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript
```

---

## ⚙️ Configuration

### **1️⃣ Create `eslint.config.mjs`**

```js
import neverthrowMustUse from "eslint-plugin-neverthrow-must-use"; // Import plugin
import tsPlugin from "@typescript-eslint/eslint-plugin"; // Import TypeScript plugin
import tsParser from "@typescript-eslint/parser"; // Import TypeScript parser

export default [
	{
		files: ["src/**/*.ts", "src/**/*.tsx"], // Apply to TypeScript files
		languageOptions: {
			parser: tsParser, // Set TypeScript parser
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				project: "./tsconfig.json", // Ensure ESLint reads tsconfig
				tsconfigRootDir: process.cwd(),
			},
		},
		plugins: {
			"@typescript-eslint": tsPlugin, // Enable TypeScript ESLint rules
			"neverthrow-must-use": neverthrowMustUse, // Register the plugin
		},
		rules: {
			"@typescript-eslint/no-unused-vars": "error", // Example TypeScript rule
			"neverthrow-must-use/must-use-result": "error", // Enforce `neverthrow` rule
		},
	},
];
```

---

### **2️⃣ Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

### ❌ Incorrect Usage:
```ts
import { ok, err, Result } from "neverthrow";

function divide(a: number, b: number): Result<number, Error> {
  return b === 0 ? err(new Error("Cannot divide by zero")) : ok(a / b);
}

function main() {
  const result = divide(10, 2);
  result.map((value) => {
    console.log(value); // ❌ ESLint will throw an error
  });
}
```

### ✅ Correct Usage:
```ts
import { ok, err, Result } from "neverthrow";

function divide(a: number, b: number): Result<number, Error> {
  return b === 0 ? err(new Error("Cannot divide by zero")) : ok(a / b);
}

function main() {
  const result = divide(10, 2);
  result.match({
    ok: (value) => console.log(value),
    err: (error) => console.error(error),
  }); // ✅ Proper handling
}
```

---

## 🛠 **Troubleshooting**

### **1️⃣ Ensure ESLint is detecting the plugin**
Run:
```sh
npx eslint --debug
```
You should see output showing that `neverthrow-must-use` is loaded.

### **2️⃣ If ESLint isn't enforcing the rule**
Check that the plugin is installed:
```sh
npm ls eslint-plugin-neverthrow-must-use
```
If missing, reinstall it:
```sh
npm install --save-dev eslint-plugin-neverthrow-must-use
```

### **3️⃣ Ensure ESLint can find `tsconfig.json`**
Run:
```sh
npx eslint --ext .ts,.tsx src
```
If you see an error like:
```
Cannot read file 'tsconfig.json': ENOENT: no such file or directory
```
Make sure `tsconfig.json` exists in your project.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 💡 Contributing
Contributions are welcome! If you find a bug or have a feature request, please [open an issue](https://github.com/tmountain/eslint-plugin-neverthrow-must-use/issues).

---

## 📢 Acknowledgments
Inspired by functional programming best practices and the [neverthrow](https://github.com/supermacro/neverthrow) library.

