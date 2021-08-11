import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen grid grid-rows-layout">
      <Header />
      <main className="grid">{children}</main>
      <Footer />
    </div>
  );
}
