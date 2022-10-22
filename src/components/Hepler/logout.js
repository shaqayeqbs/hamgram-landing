export default function logout() {
  console.log("here");
  localStorage.removeItem("persist:root");
  localStorage.removeItem("root");
  localStorage.removeItem("token");
  window.location.replace("/auth");
}
