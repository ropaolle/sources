import "./App.css";
// import { loadSystems, loadAlerts } from "./lib/utils";
import { Header, Footer } from "./components/Layout";

// const systems = loadSystems();
// const alerts = loadAlerts();

function App() {
  // const showLabels = true;

  return (
    <div className="bg-seb-bggrey flex h-screen flex-col overflow-hidden">
      <Header />

      <main className="m-4 grid grid-cols-6 gap-4">
        {/* <Application system={systems[0]} showLabels={showLabels} /> */}
        {/* <Application system={systems[1]} showLabels={showLabels} />
        <div>
          <Application system={systems[6]} showLabels={showLabels} />
          <div className="mt-2"></div>
          <Application system={systems[5]} showLabels={showLabels} />
        </div>
        <Application system={systems[2]} showLabels={showLabels} />
        <Application system={systems[3]} showLabels={showLabels} />
        <Application system={systems[4]} showLabels={showLabels} /> */}
      </main>

      {/* <div className="overflow-auto+ mx-4 grid flex-auto grid-cols-6 gap-4">
        <div className="col-span-5">
          <AlertTable alerts={alerts} showLabels={showLabels} />
        </div>
        <div className="col-span-1">
          <Legend showLabels={showLabels} />
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

export default App;
