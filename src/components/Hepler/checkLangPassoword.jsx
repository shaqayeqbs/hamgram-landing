export default function checkPassWord(password) {
  var p = /^[A-Za-z0-9]*$/;

  if (!p.test(password)) {
    return false;
  } else {
    return true;
  }
}
