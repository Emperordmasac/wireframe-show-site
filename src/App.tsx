import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/landing-page"
import ContestantPage from "./pages/contestant-page"
import IndividualVideoPage from "./pages/individual-video"
import Voting from "./pages/voting"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contestant" element={<ContestantPage />} />
        <Route path="/video" element={<IndividualVideoPage />} />
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </Router>
  )
}

export default App
