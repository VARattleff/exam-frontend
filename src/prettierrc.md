# Prettier Configuration

This project uses [Prettier](https://prettier.io/) to maintain code consistency. The configuration for Prettier is defined in the `.prettierrc` file located in the root directory of the project.

## Configuration

The current Prettier configuration is as follows:

```json
{
    "trailingComma": "none",
    "tabWidth": 4,
    "semi": true,
    "bracketSpacing": true,
    "jsxBracketSameLine": false
}
```

in order to run the formattin on the entire program write the following command in the terminal:

```bash
npx prettier --write .
```
