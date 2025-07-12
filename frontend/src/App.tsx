import { Burger } from "./modules/burger/Burger";
import { Description } from "./modules/description/Description";
import { Header } from "./modules/header/Header";
import { Reproductions } from "./modules/reproductions/Reproductions";

function App() {
  return (
    <>
      <Header />
      <Burger />
      <main>
        <Description />
        <Reproductions />
      </main>
    </>
  );
}

export default App;
