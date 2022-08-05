export default randomKeys;
export { randomKeys };
export as namespace randomKeys;

// Language: typescript
// Path: index.d.ts
declare export type OptionsTypes = {
    onlyUpperCase: boolean;
    onlyLowerCase: boolean;
    length: number; 
    chars: (string | string[])[];
}

/**
 * 
 * @param options - Options for the random key
 * @returns - A random key
 */
declare function randomKeys(options: OptionsTypes): string;

export default randomKeys;