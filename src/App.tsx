import { Layout, DarkModeWrapper } from "./components";
import { Home, Projects, Readme } from "./pages";

function App() {
    return (
        <DarkModeWrapper>
            <Layout>
                <Home />
                <Readme />
                <Projects />
                <div style={{ height: "200px" }} />
            </Layout>
        </DarkModeWrapper>
    );
}

export default App;
