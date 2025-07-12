import { Burger } from "./modules/burger/Burger";
import { Description } from "./modules/description/Description";
import { Header } from "./modules/header/Header";

function App() {
  return (
    <>
      <Header />
      <Burger />
      <main>
        <Description />
      </main>
    </>
  );
}

export default App;
