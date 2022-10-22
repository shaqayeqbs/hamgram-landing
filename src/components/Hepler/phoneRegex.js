export default function isValidPhoneNumber(phone) {
  var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
  return regex.test(phone);
}
