OnFirstJoin is triggered when it is the first time the player has ever joined and there is no data stored in the db about the player.

```ts
// source: number
// license: string (rockstar license)
NW.Functions.OnFirstJoin(source, license);
```

## With exports

### Lua

```lua
exports.NewWheel:OnFirstJoin(...args)
```

### JS/TS

```ts
global.exports.NewWheel.OnFirstJoin(...args);
```
