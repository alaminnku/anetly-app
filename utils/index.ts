// Format currency
export const formatCurrencyToUSD = (number: number) =>
  new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
