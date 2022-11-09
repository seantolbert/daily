import { firebase } from "./firebase/config";
import RootNavigation from "./navigation";
import AuthStack from "./navigation/AuthStack";
import UserStack from "./navigation/UserStack";

export default function App() {
  return <RootNavigation />;
}
