import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CSSOverview from "./pages/CSSOverview";
import Modules from "./pages/sections/Modules";
import LayoutDisplay from "./pages/sections/LayoutDisplay";
import AdvancedStyling from "./pages/sections/AdvancedStyling";
import TransformsTransitions from "./pages/sections/TransformsTransitions";
import Tools from "./pages/sections/Tools";
import Reference from "./pages/sections/Reference";
import ArchitectureDiagram from "./pages/ArchitectureDiagram";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/css-overview"} component={CSSOverview} />
      <Route path={"/modules"} component={Modules} />
      <Route path={"/layout-display"} component={LayoutDisplay} />
      <Route path={"/advanced-styling"} component={AdvancedStyling} />
      <Route path={"/transforms-transitions"} component={TransformsTransitions} />
      <Route path={"/tools"} component={Tools} />
      <Route path={"/reference"} component={Reference} />
      <Route path={"/diagram"} component={ArchitectureDiagram} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
