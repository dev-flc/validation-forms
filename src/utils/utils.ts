export const isValidString: (value: string | null | undefined) => boolean = (
  value: string | null | undefined
): boolean => {
  return !(value === null || value === '' || value === undefined)
}
