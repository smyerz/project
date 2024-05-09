import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        Im an aspiring programmer and a military spouse. I like all the arts! My favorites are knit, crochet, digital drawing, digital asset making, sculpture, poetry and story telling. I am studying hard to learn to make games in Unreal Engine and apps of course!
        <div>
        <a href src="https://spotifyanchor-web.app.link/e/NLICxD9sgIb">Podcast (UP)</a>
        </div>
      </Paragraph>
    </div>
  );
};

const Head = () => {
  return (
    <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8340816845127688"
     crossorigin="anonymous"></script>
    </head>
  );
};

const Header = () => {
  return (
    <header>
      <Title>SassyCoder.com 🫳🏽</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>About</Title>
      
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Head/>
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
