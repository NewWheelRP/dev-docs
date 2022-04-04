The NewWheel framework uses a base objects that players can retrieve, aswell as exports.

### NW Interface

```ts
interface NW {
	Functions: any;
	Players: Map<string, Player>;
}
```

### How to get the object

You get the NW object by calling the following export:

**Lua**

```lua
local NW = exports.NewWheel:GetNWObject()
```

**TS/JS**

```ts
const NW = global.exports.NewWheel.GetNWObject();
```
