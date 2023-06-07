import { Route, Routes } from "react-router-dom";

import routes from "../routes";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = ({ children }: any) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.element && (
              <Route key={idx} path={route.path} element={<route.element />} />
            )
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
