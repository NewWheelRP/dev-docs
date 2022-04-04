---
title: "Static Methods"
---

**IMPORTANT || This is for dev only, and will only work from within the NewWheel resource itself\***

### Load

The load method is used to convert a data object retrieved from the database to a new Player instance

```ts
// source: number
// data: PlayerDBObject
// returns: Player
Player.Load(source, license, data);
```

### New

the new method is used to create a new Player instance, one that didn't exist in a database before.

```ts
// source: number
// license: string
// returns: Player
Player.New(source, license);
```
