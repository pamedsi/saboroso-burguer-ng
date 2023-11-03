export const removeSpecialChars = (phoneNumber: string) => {
  const phoneNumberRegex = /[A-Za-z0-9]/g
  const formattedText = phoneNumber.match(phoneNumberRegex)
  return formattedText?.join('').toUpperCase()
}
