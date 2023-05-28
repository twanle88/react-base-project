export const handleShowPrice = (price = 0) => (`${new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(price)}`);