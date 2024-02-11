import "./App.css";

import { AppStyle } from "./App.styled";

import { VimeoList } from "./components/VideoList";

const App = () => {
  return (
    <AppStyle>
      <VimeoList />
    </AppStyle>
  );
};

export default App;
