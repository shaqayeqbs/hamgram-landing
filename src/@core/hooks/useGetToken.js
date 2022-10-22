import { useSelector } from "react-redux";

export default function useGetToken() {
  const token = useSelector((state) => state.auth.access);
  return token;
}
