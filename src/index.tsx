import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import { AppStateProvider } from "./state/AppStateContext";

createRoot(document.getElementById("root") as HTMLElement).render(
  <DndProvider backend={Backend}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </DndProvider>
);
