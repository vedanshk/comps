
import DropdownPage from "./pages/DropdownPage";
import  AccordionPage from './pages/AccordionPage';
import ButtonPage from "./pages/ButtonPage";
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
function App() {

    return (
        <div className="flex gap-20 mt-5">
        <Sidebar />



         <div>
            <Route path="/accordion">
            <AccordionPage />
            </Route>
            <Route path="/dropdown">
                <DropdownPage />
            </Route>

            <Route path="/button">
                <ButtonPage />
            </Route>

            <Route path="/modal">
                <ModalPage />

            </Route>

            <Route path="/table">
                <TablePage />
            </Route>

            <Route path="/counter">
                <CounterPage initialCount={10}/>
            </Route>

          
         </div>

        </div>
    );
}

export default App;
