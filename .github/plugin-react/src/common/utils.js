export function getUrl() {
  let href = 'https://norn-stockscreener.zmcx16.moe/'
  if (typeof window !== 'undefined') {
    href = window.location.href
  }
  return href
}

export const isFloat = (n) => {
  return Number(n) === n && n % 1 !== 0
}

export const convertKMBT = (n, precision) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(precision) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(precision) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(precision) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(precision) + "T";
}