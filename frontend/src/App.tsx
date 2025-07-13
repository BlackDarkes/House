import { Burger } from "./modules/burger/Burger";
import { Description } from "./modules/description/Description";
import { Header } from "./modules/header/Header";
import { NewCollection } from "./modules/newCollection.tsx/NevCollection";
import { Reproductions } from "./modules/reproductions/Reproductions";

function App() {
  return (
    <>
      <Header />
      <Burger />
      <main>
        <Description />
        <Reproductions />
        <NewCollection />
      </main>
    </>
  );
}

export default App;
