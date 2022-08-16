import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import DetailsPage from "./pages/details/details-page";
import MainPage from "./pages/main/main-page";
import SearchPage from "./pages/search/search-page";
import { persistor, store } from "./shared/store";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 752,
      lg: 1000,
      xl: 1536,
    },
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<MainPage />} />
              <Route path="details/:filmId" element={<DetailsPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </HashRouter>
);
