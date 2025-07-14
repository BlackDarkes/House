import { Burger } from "./modules/burger/Burger";
import { Description } from "./modules/description/Description";
import { Footer } from "./modules/footer/Footer";
import { Header } from "./modules/header/Header";
import { NewCollection } from "./modules/newCollection.tsx/NevCollection";
import { Reproductions } from "./modules/reproductions/Reproductions";
import { Team } from "./modules/team/Team";

function App() {
  return (
    <>
      <Header />
      <Burger />
      <main>
        <Description />
        <Reproductions />
        <NewCollection />
        <Team />
      </main>
      <Footer />
    </>
  );
}

export default App;
