import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import { useAuthentication } from "../hooks/useAuthentication";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <UserStack /> : <AuthStack />;
}
