# Babel private async class properties bug repro

## Steps

```shell
yarn
yarn build
yarn start
open http://localhost:8080
```

Note: Bugs have only occured on:

- Mac OSX 10.10.5, Safari 10.1.2
- iOS 10.3.3, Safari 10.0
