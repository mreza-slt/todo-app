import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./feature/store";
import Header from "./components/Header";
import Home from "./pages/Home";
import Todos from "./pages/Todos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todos"
          element={
            <Provider store={store}>
              <Todos />
            </Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
