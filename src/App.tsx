import { Layout } from "./components";
import { Home, Projects /*Github*/ } from "./pages";

function App() {
    return (
        <Layout>
            <Home />
            <Projects />
            <div style={{ height: "200px" }} />
        </Layout>
    );
}

export default App;
