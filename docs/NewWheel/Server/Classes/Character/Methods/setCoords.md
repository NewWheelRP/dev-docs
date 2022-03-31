---
title: "setCoords"
---

sets the character coords

**Please note that this doesn't actually teleport the player, this is purely the data that gets saved on the database**

```ts
// coords: Vector4
character.setCoords(coords);
```

The vector4 type:

```ts
type Vector4 = {
	x: number; // X coord
	y: number; // Y coord
	z: number; // Z coord
	w: number; // Heading
};
```
