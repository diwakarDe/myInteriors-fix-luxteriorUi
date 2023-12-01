import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "./components/landingPage/LandingPage"
import MainWrapper from "./components/mainWrapper/MainWrapper"
import Signin from "./components/signin"
import Signup from "./components/signup"
import Room1 from "./components/roomSteps/step1"
import "./index.css"
import isAuthenticated from "./common/isAuthenticated"
// import Dashboard from "./components/dashboard/dashboard"
import DashWrapper from "./components/dashOutlet/dashOutlet"
import Help from "./components/help/help"
import Experts from "./components/experts/experts"
import Account from "./components/Myaccount/account"
import Trash from "./components/trash/trash"
import ActiveRequests from "./components/requests/requests"
import RoomInterior from "./components/roomInterior"
import Room2 from "./components/roomSteps/step2"
import Room3 from "./components/roomSteps/step3"
import Room4 from "./components/roomSteps/step4"
import RightNav from "./components/navbars/RightNav"
import LandingItem from "./components/landingPage/LandingItem"
import Dashboard from "./components/dashboard/dashboard"
import Favourites from "./components/favs/favs"
import Payments from "./components/payments/payments"
import Transactions from "./components/Transactions/Transactions"
import PaymentVerify from "./components/payments/paymentsVerify"

const PrivateRoute = ({ children }: { children: any }) => {
  return isAuthenticated() ? children : children
  //  <Navigate to="/signup" replace />;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainWrapper />}>
            <Route index element={<LandingPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/testRoom" element={<Room1 />} />
            <Route
              path="/rooms"
              element={
                <PrivateRoute>
                  <RoomInterior />
                </PrivateRoute>
              }
            >
              <Route path="room1" element={<Room1 />} />
              <Route path="room2" element={<Room2 />} />
              <Route path="room3" element={<Room3 />} />
              <Route path="room4" element={<Room4 />} />
            </Route>
            <Route
              path="/dash"
              element={
                <PrivateRoute>
                  <DashWrapper />
                </PrivateRoute>
              }
            >
              <Route path="main" element={<Dashboard />} />
              <Route path="favs" element={<Favourites />} />
              <Route path="help" element={<Help />} />
              <Route path="experts" element={<Experts />} />
              <Route path="account" element={<Account />} />
              <Route path="trash" element={<Trash />} />
              <Route path="requests" element={<ActiveRequests />} />
              <Route path="payment" element={<Payments />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="payment-success" element={<PaymentVerify />} />
            </Route>
          </Route>
          <Route path="rightnav" element={<RightNav />} />
          <Route path="items" element={<LandingItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// 							// <PrivateRoute>
{
  /* <UserProfile /> */
}
// </PrivateRoute>
