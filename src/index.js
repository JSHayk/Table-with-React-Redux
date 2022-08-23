import {createRoot} from "react-dom/client"
import App from "./App";
import "./App.scss"
import store from "./store/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)