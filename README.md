- esbuild issue: https://github.com/evanw/esbuild/issues/2762

- Run `npm ci` to install dependencies
- Run `npm run build` to build the project

This will succeed as it uses version `0.16.7`.

- Run `npm i esbuild@0.16.8` or above to update `esbuild` to a version that fails

This will fail with the following error:

```
Error: Build failed with 1 error:
error: Could not resolve "E:\\esbuild-replication\\node_modules\\@esbuild-plugins\\node-globals-polyfill\\_virtual-process-polyfill_.js"
    at failureErrorWithLog (E:\esbuild-replication\node_modules\esbuild\lib\main.js:1594:15)
    at E:\esbuild-replication\node_modules\esbuild\lib\main.js:1050:28
    at runOnEndCallbacks (E:\esbuild-replication\node_modules\esbuild\lib\main.js:1466:61)
    at buildResponseToResult (E:\esbuild-replication\node_modules\esbuild\lib\main.js:1048:7)
    at E:\esbuild-replication\node_modules\esbuild\lib\main.js:1160:14
    at responseCallbacks.<computed> (E:\esbuild-replication\node_modules\esbuild\lib\main.js:697:9)
    at handleIncomingPacket (E:\esbuild-replication\node_modules\esbuild\lib\main.js:752:9)
    at Socket.readFromStdout (E:\esbuild-replication\node_modules\esbuild\lib\main.js:673:7)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:324:12) {
  errors: [
    {
      detail: undefined,
      id: '',
      location: null,
      notes: [],
      pluginName: '',
      text: 'Could not resolve "E:\\\\esbuild-replication\\\\node_modules\\\\@esbuild-plugins\\\\node-globals-polyfill\\\\_virtual-process-polyfill_.js"'
    }
  ],
  warnings: []
}
```
