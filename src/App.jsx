import { createRoot } from "react-dom/client";
import Main from "./main";

const Container = () => {
  return (
    <>
      <Main />
    </>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Container />);
