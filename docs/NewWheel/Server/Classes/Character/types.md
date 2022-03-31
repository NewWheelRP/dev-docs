---
title: "Character Types"
---

### CharacterDBObject

```ts
interface CharacterDBObject {
	source: number;
	license: string;
	citizenId: string;
	firstName: string;
	lastName: string;
	dob: Number;
	height: Number;
	sex: string;
	nationality: String;
	backstory: String | undefined;
	coords: string;
}
```

### CharacterNewObject

```ts
interface CharacterNewObject {
	firstName: string;
	lastName: string;
	dob: number;
	height: number;
	sex: string;
	nationality: string;
	backstory?: string;
}
```
