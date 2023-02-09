import React from "react";
import FormPerson from "./components/FormPerson";
import { ContextProvider } from "./globals/context";

export default function App() {
  return (
    <ContextProvider>
      <div className="App">
        <FormPerson />
      </div>
    </ContextProvider>
  );
}
