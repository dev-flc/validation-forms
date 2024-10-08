function exampleFunction(
  param1: string,
  param2: number,
  param3: boolean = true,
  param4: string = 'default value'
): string {
  return `Param1: ${param1}, Param2: ${param2}, Param3: ${param3}, Param4: ${param4}`
}

const result1: string = exampleFunction('Hello', 42, false, 'custom value')

console.log(result1)

const result2: string = exampleFunction('Hello', 42)

console.log(result2)
