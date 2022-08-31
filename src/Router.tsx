import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrder } from "./pages/CompleteOrder";
import { Home } from "./pages/Home/index.";
import { OrderConfirmed } from "./pages/OrderConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/complete-order" element={<CompleteOrder />} />
        <Route path="/confirmed-order" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}