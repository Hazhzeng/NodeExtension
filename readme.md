### How To Start
1. Download the NodeJS worker from Hazhzeng branch
```
git clone -b hazeng/extensions https://github.com/Hazhzeng/azure-functions-nodejs-worker.git
```
2. Change local.settings.json => `languageWorkers:node:workerDirectory` to point to `<your worker folder>`
3. Change node_modules => NewExtension => index.js and point to `<your worker folder>/dist/src/public/Interfaces`
4. Go to your worker folder run `npm install` and `npm run build`