import { ThemeProvider } from "./context/ThemeContext"
import { Layout } from "./layout/Layout"
import { Dashboard } from "./pages/Dashboard"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  )
}

export default App
