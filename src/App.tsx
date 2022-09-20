import { Layout, DarkModeWrapper } from "./components";
import { Home, Projects /*Github*/ } from "./pages";

function App() {
    return (
        <DarkModeWrapper>
            <Layout>
                <Home />
                <Projects />
                <div style={{ height: "200px" }} />
            </Layout>
        </DarkModeWrapper>
    );
}

export default App;
