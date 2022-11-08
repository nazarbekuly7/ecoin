import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Coins } from "./components/coins/Coins";
import { Coin } from "./pages/coin/Coin";
import { Home } from "./pages/home-page/Home";
import { Featured } from "./pages/features/Featured"
import { SignUp } from "./pages/sign-up/SignUp";
import { SignIn } from "./pages/sign-up/SignIn";

function App () {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
        <Route path='/features' element={<Featured />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
