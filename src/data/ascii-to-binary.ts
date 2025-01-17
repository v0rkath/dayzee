export default function asciiToBinary(input: string): string {
  const binary: string = "";
  for (let i = 0; i < input.length; i++) {
    input += input[i].charCodeAt(0).toString(2) + " ";
  }

  return binary;
}
