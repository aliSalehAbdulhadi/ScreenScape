export function formatCurrency(amount: number) {
  return '$' + amount?.toFixed(2)?.replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
