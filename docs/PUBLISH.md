# 🚀 Publishing `eslint-plugin-neverthrow-must-use` to npm

This guide outlines the steps to **publish** or **update** the ESLint plugin.

---

## ✅ Step 1: Ensure You Are Logged In
First, make sure you're logged into npm:

```sh
npm login
```

To verify your login:

```sh
npm whoami
```

If this prints your username, you're good to go! ✅

---

## ✅ Step 2: Verify `package.json`
Before publishing, make sure:
- The **name** is correct: `"eslint-plugin-neverthrow-must-use"`
- The **version** is updated (e.g., `0.1.0` → `0.1.1` for minor changes)
- `"type": "module"` is set (since we use ES modules)
- `"main": "index.js"` is set
- `"peerDependencies"` includes:
  ```json
  {
    "eslint": "^9.0.0",
    "@typescript-eslint/parser": "^8.0.0"
  }
  ```

---

## ✅ Step 3: Prepare for Publishing
Run this command to check what will be published:

```sh
npm pack
```

This creates a `.tgz` package file simulating what would be published.  
If everything looks good, proceed.

---

## ✅ Step 4: Publish the Package
To publish the package **for the first time**, run:

```sh
npm publish --access public
```

🚀 **Your package is now live on npm!** 🎉

---

## ✅ Step 5: Verify the Published Package
1️⃣ Check that it's live:
   ```sh
   npm info eslint-plugin-neverthrow-must-use
   ```
   Or visit:
   👉 [https://www.npmjs.com/package/eslint-plugin-neverthrow-must-use](https://www.npmjs.com/package/eslint-plugin-neverthrow-must-use)

2️⃣ Install it in another project to confirm:
   ```sh
   npm install --save-dev eslint-plugin-neverthrow-must-use
   ```

---

## ✅ Step 6: Updating the Package (New Version)
When making changes:
1. **Bump the version in `package.json`** (e.g., `0.1.0` → `0.1.1` for fixes)
2. **Commit and push the changes**:
   ```sh
   git add .
   git commit -m "Bump version to 0.1.1"
   git push
   ```
3. **Publish the new version**:
   ```sh
   npm publish --access public
   ```

---

## ✅ Step 7: Tag the Release on GitHub (Optional)
To create a GitHub release:
```sh
git tag v0.1.1
git push origin v0.1.1
```

Then, go to the GitHub repository and create a new **release**.

---

## 🎯 Future Notes
- **For major updates** (`0.x.0` → `1.0.0`), make sure to announce it clearly.
- **For minor fixes**, use **semantic versioning** (e.g., `0.1.0` → `0.1.1`).

---

🚀 **Now you have a structured process for publishing your ESLint plugin!** 🔥🔥🔥

