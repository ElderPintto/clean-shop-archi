export function currencyFilter(
  value: number,
  currency: string,
  locale: string
) {
  return value.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
  });
}
