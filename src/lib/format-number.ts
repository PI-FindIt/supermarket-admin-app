export function compactFormat(value: number) {
  const formatter = new Intl.NumberFormat("de-DE", {
    notation: "compact",
    compactDisplay: "short",
    style: "currency",
    currency: "EUR"
  });

  return formatter.format(value);
}

export function standardFormat(value: number) {
  return value.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}