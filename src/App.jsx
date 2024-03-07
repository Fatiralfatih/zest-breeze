import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import { LocaleProvider } from "./Features/Contexts/LocaleContext"
import { useState } from "react"

function App() {
  const [LocaleContext, setLocaleContext] = useState({
    locale: 'en',
    toggleLocale: () => {
      setLocaleContext(prevState => {
        const newLocale = prevState.locale === 'id' ? 'en' : 'id'
        return {
          ...prevState,
          locale: newLocale
        }
      })
    }
  })

  return (
    <>
      <LocaleProvider value={LocaleContext}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </LocaleProvider>
    </>
  )
}

export default App
