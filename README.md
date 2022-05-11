# Subquery UI Components Library
Intiated by forking https://github.com/hugh-onf/components-lib

# Usage

```
yarn add @hugh-onf/components-lib
```

Main entry

```
import "@hugh-onf/components-lib/dist/style.css";
```

Imports

```
import { Button } from "@hugh-onf/components-lib";
```

# Notes

- Because of zero deps strategy, `antd` typings not included. So if we need typings for `antd`, we need to install `yarn add antd` on the consumer projects
- The bundle size is still big and it can be improved by
  - Importing the override components LESS files only not the whole AntD CSS
  - Optional or not sure if it helps if we configure it to build a file per component, for example `Button.js` instead of a big `index.es.js`, and only import by files. Might not worth it because the ES bundle should support tree shaking on the consumer - maybe need to verify that
