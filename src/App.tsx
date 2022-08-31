import { Layout } from "./components";
import { Home, Projects /*Github*/ } from "./pages";

function App() {
    return (
        <Layout>
            <Home />
            {/*<Github /> */}
            <Projects />
            <div style={{ height: "200px" }} />
        </Layout>
    );
}

export default App;

/*
const Button = () => {
    return (
        <button className="w-[100px] py-2 border border-black rounded">
            Open
        </button>
    );
};
 */

// https://www.svgrepo.com/collection/origami-animal-line-vectors/
