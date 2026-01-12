import { ThemeProvider } from "./context/ThemeContext"
import { ToastProvider } from "./context/ToastContext"
import { ToastContainer } from "./components/ui/Toast"
import { Layout } from "./layout/Layout"
import { Dashboard } from "./pages/Dashboard"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ToastProvider>
        <Layout>
          <Dashboard />
        </Layout>
        <ToastContainer />
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
