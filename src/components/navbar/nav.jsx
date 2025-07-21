import React from "react";
import { FloatingDock } from "./FloatingDock";
import { dockItems } from "../../lib/item";


function App() {
  return (
    <div className="text-purple-700">
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-4 right-4 z-50"
        className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl"
      />
    </div>
  );
}

export default App;
