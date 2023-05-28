# Requirement environment

## Node version
`>=18.16.0`

## yarn version
`>=3.x`

## Environment
Duplicate `example.env`, rename duplicated file to `.env`, then add full information before run the app

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### To run the ap in development mode
```bash
yarn start
```

### Launches the test runner in the interactive watch mode.
```bash
yarn test
```

### Builds the app for production to the `dist` or `build` folder.
```bash
yarn build
```

# Commit code
## Theo chuẩn Angular (chuẩn mà ta sử dụng ở bài này), 1 commit message sẽ theo cấu trúc như sau:

`type(scope?): subject`

`type` ở trên có thể là:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)
- chore: add something without touching production code (Eg: update npm dependencies)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- revert: Reverts a previous commit
- style: Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

`scope` thì là optional, và nếu có thì nó nên là tên của package mà commit hiện tại làm ảnh hưởng. Mình thấy scope thường dùng ở các repository mà chứa nhiều packages dạng monorepo/

`subject` là nội dung của commit

