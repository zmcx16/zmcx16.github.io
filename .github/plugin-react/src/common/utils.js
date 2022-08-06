var CryptoJS = require("crypto-js")

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

export const convert2KMBTString = (n, precision) => {
  if (n < 1e3) return n
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(precision) + "K"
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(precision) + "M"
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(precision) + "B"
  if (n >= 1e12) return +(n / 1e12).toFixed(precision) + "T"
}

export const convert2KMBTFloat = (v) => {
  if (v.indexOf("K") != -1)
    return parseFloat(v) * 1000
  if (v.indexOf("M") != -1)
    return parseFloat(v) * 1000 * 1000
  if (v.indexOf("B") != -1)
    return parseFloat(v) * 1000 * 1000 * 1000
  if (v.indexOf("T") != -1)
    return parseFloat(v) * 1000 * 1000 * 1000 * 1000;

  return parseFloat(v)
}


export const isPositiveInteger = (v) => {
  var i
  return v && (i = parseInt(v)) && i > 0 && (i === v || '' + i === v)
}

export const tryConvertFloat = (v) => {
  if (typeof v === 'string' && v.indexOf("%")!=-1) {
    return parseFloat(v) / 100 
  } 
  else if (isNaN(parseFloat(v)) || v === "-" || v === -Number.MAX_VALUE || v === "Infinity" || v === 'NaN' ) {  
    return v
  } else { 
    let o = v
    if (typeof o === 'string') {
      o = v.replace(',','')
    } 
    return parseFloat(o)
  }
}

export function workdayCount(start,end) {
  var first = start.clone().endOf('week'); // end of first week
  var last = end.clone().startOf('week'); // start of last week
  var days = last.diff(first,'days') * 5 / 7; // this will always multiply of 7
  var wfirst = first.day() - start.day(); // check first week
  if(start.day() == 0) --wfirst; // -1 if start with sunday 
  var wlast = end.day() - last.day(); // check last week
  if(end.day() == 6) --wlast; // -1 if end with saturday
  return wfirst + Math.floor(days) + wlast; // get the total
} //              ^ EDIT: if days count less than 7 so no decimal point

// ref: https://www.colorhexa.com/ff0000
export function getRedLevel (val){
  if (val >= 6.0 / 7.0) {
    return '#b30000'
  } else if (val >= 5.0 / 7.0) {
    return '#cc0000'
  } else if (val >= 4.0 / 7.0) {
    return '#e60000'
  } else if (val >= 3.0 / 7.0) {
    return '#ff0000'
  } else if (val >= 2.0 / 7.0) {
    return '#ff1a1a'
  } else if (val >= 1.0 / 7.0) {
    return '#ff3333'
  } else {
    return '#ff4d4d'
  } 
}

export function getBlueLevel (val){
  if (val >= 6.0 / 7.0) {
    return '#0000b3'
  } else if (val >= 5.0 / 7.0) {
    return '#0000cc'
  } else if (val >= 4.0 / 7.0) {
    return '#0000e6'
  } else if (val >= 3.0 / 7.0) {
    return '#0000ff'
  } else if (val >= 2.0 / 7.0) {
    return '#1a1aff'
  } else if (val >= 1.0 / 7.0) {
    return '#3333ff'
  } else {
    return '#4d4dff'
  } 
}

export function decryptECB(encrypted_data, pass_key) {
  let key = CryptoJS.enc.Utf8.parse(pass_key)
  var decrypted =  CryptoJS.AES.decrypt(encrypted_data, key, {mode:CryptoJS.mode.ECB})
  return decrypted.toString(CryptoJS.enc.Utf8)
}