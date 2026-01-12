import { useState } from "react"
import { ThemeProvider } from "./context/ThemeContext"
import { ToastProvider } from "./context/ToastContext"
import { ToastContainer } from "./components/ui/Toast"
import { Layout } from "./layout/Layout"
import { Dashboard } from "./pages/Dashboard"
import PlaceholderPage from "./pages/PlaceholderPage"

function App() {
  const [currentView, setCurrentView] = useState("Dashboard");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ToastProvider>
        <Layout currentView={currentView} onViewChange={setCurrentView}>
          {currentView === "Dashboard" ? (
            <Dashboard />
          ) : (
            <PlaceholderPage title={currentView} />
          )}
        </Layout>
        <ToastContainer />
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
