export const convertPrice = (price: number) => {
  return price.toLocaleString('en-Eu', {
    style: 'currency',
    currency: 'USD'
  })
}
