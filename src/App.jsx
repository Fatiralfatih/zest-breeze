import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import { LocaleProvider } from "./Features/Contexts/LocaleContext"
import DetailTweets from "./Pages/DetailTweets"
import { Box, useColorModeValue } from "@chakra-ui/react"
import useLocaleContext from "./Features/Hooks/useLocaleContext"

function App() {

  const localeContext = useLocaleContext();
  const bgColor = useColorModeValue('whiteSmoke', '');

  return (
    <LocaleProvider value={localeContext}>
      <Box bgColor={bgColor}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailTweets />} />
        </Routes>
      </Box>
    </LocaleProvider>
  )
}

export default App
