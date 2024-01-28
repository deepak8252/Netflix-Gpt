import { Provider } from "react-redux";
import Body from "./components/Body"
import appstore from "./util/appstore";
function App() {
  return (
    <div>
 <Provider store={appstore}>
 <Body/>
 </Provider>
    </div>
  );
}

export default App;
