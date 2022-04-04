---
title: "Static Methods"
---

**IMPORTANT || This is for dev only, and will only work from within the NewWheel resource itself\***

### Load

The load method is used to convert a data object retrieved from the database to a new Character instance

```ts
// source: number
// license: string
// data: CharacterDBObject
// returns: Character
Character.Load(source, license, data);
```

### New

the new method is used to create a new Character instance, one that didn't exist in a database before.

```ts
// source: number
// license: string
// data: CharacterNewObject
// returns: Character
Character.New(source, license, data);
```
