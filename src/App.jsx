import { Route, Routes } from "react-router-dom"
import { LocaleProvider } from "./Features/Contexts/LocaleContext"
import { Box, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getUserLogged, putAccessToken } from "@utils/api"
import useLocaleContext from "@Features/Hooks/useLocaleContext"
import Navbar from "@components/template/Navbar"
import Login from "@Pages/Login"
import Register from "@Pages/Register"
import Home from "@Pages/Home"
import DetailTweet from "@Pages/DetailTweet"

function App() {

  const [authedUser, setAuthedUser] = useState(null);
  const [initilize, setInitilize] = useState(true)

  const localeContext = useLocaleContext();
  const bgColor = useColorModeValue('whiteSmoke', '');

  useEffect(() => {
    async function fetchUserLogged() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitilize(false)
    }
    fetchUserLogged();
  }, [])

  const onLoginSuccess = async (accessToken) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    console.log(data);
    setAuthedUser(data);
  }

  if (initilize) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleProvider value={localeContext}>
        <Box bgColor={bgColor}>
          <Navbar />
          <Routes>
            <Route path="/*" element={<Login loginSuccess={onLoginSuccess} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Box>
      </LocaleProvider>
    )
  }
  return (
    <LocaleProvider value={localeContext}>
      <Box bgColor={bgColor}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailTweet />} />
        </Routes>
      </Box>
    </LocaleProvider>
  )

}

export default App
