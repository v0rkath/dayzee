export default function asciiToBinary(input: string): string {
  const inputArr = input.split("");
  const output = inputArr
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");

  return output;
}
