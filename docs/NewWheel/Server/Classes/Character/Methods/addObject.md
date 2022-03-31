This adds a custom object to the character instance.

```ts
// key: string
// value: any
character.addObject(key, value);
```

This is quite a special function. It gives you the ability to add custom objects that will be globally accessible by other resources aswell.
One of the required methods is save.

We use the add object method for our bankin resource. It looks something like this:

```ts
const bankAccount = new BankAccount(...args);

character.addObject("bank", bankAccount);
```

And you can use it like this

```ts
const bankAccount = character.getObject("bank");
// Now all the bankaccount methods are availble for you
// for example:
bankAccount.setBalance(100);
```
