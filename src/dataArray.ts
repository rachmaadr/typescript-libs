const names: string[] = ["jhon doe", "alice", "lorem ipsum"];
const values: number[] = [1, 2, 3, 4];
const hobbies: ReadonlyArray<string> = ["Read", "Write"];

//!tuple
const person: readonly [string, string, number] = ["jhon doe", "Indonesia", 30];

export default {
  names,
  values,
  hobbies,
  person,
};
