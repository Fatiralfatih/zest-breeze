import { Route, Routes, } from "react-router-dom"
import { LocaleProvider } from "./Features/Contexts/LocaleContext"
import { Box, useColorModeValue } from "@chakra-ui/react"
import useLocaleContext from "@Features/Hooks/useLocaleContext"
import Navbar from "@components/template/Navbar"
import Login from "@Pages/Login"
import Register from "@Pages/Register"
import Home from "@Pages/Home"
import DetailTweet from "@Pages/DetailTweet"
import NotFoundPage from "@Pages/NotFoundPage"
import { useAuthenticated } from "@Features/Hooks/useAuthenticated"
import AddThread from "@Pages/AddThread"
import Footer from "@components/template/Footer"

function App() {

  const { authedUser, initilize, onLoginSuccess, onLogout } = useAuthenticated()

  const localeContext = useLocaleContext();
  const bgColor = useColorModeValue('whiteSmoke', '');

  if (initilize) {
    return null;
  }
  return (
    <LocaleProvider value={localeContext}>
      <Box bgColor={bgColor}>
        <Navbar authedUser={authedUser} logout={onLogout} />
        {authedUser === null ? (
          <Routes>
            <Route path="/*" element={<Login loginSuccess={onLoginSuccess} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<DetailTweet />} />
            <Route path="/add/thread" element={<AddThread />} />
          </Routes>
        )}

      </Box>
      <Footer />
    </LocaleProvider>
  )
}

export default App
