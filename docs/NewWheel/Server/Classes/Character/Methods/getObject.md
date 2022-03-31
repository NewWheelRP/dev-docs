returns a object stored on the character instance

```ts
// key: string
character.getCustomObject(key);
```

For example:

```ts
const bankAccount = character.getCustomObject("bank");

// do some logic
bankAccount.setBalance(100);
```
