# Random keys

## How to use 

```js
var random_keys_function = require("random-keys").default;

// Returns a random string, example : SWTNNbrI0oOn
console.log(random_keys_function.default("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")); // Make sure you don't do this: instead of using a string use a array -> don't do this, it can result in non-wanted results 
```

> Options -> it can be an object or a string (directly)
>> onlyUpperCase: boolean - If the result should be upper case
>> onlyLowerCase: boolean - If the result should be in lower case
>> length: number - The length of the key
>> chars: string[] - The chars that the function can use to create a random key

## Examples 

```js
var random_keys_function = require("random-keys").default;

console.log(random_keys_function.default({ 
    keyLength: 4,
    chars: ["1", "2", "3","4"]
 })) // 3123;
```

```js
var random_keys_function = require("random-keys").default;

console.log(random_keys_function.default({ 
    keyLength: 4,
    chars: ["1", "2", "3","4"]
 })) // 2DA3;
```