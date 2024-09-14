import React from "react";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function MainLayout() {
  return (
    <main className="p-10">
      <Header />
      <LanguageSwitcher/>
      <div className="mt-10"><Outlet /></div>
      <Footer/>
    </main>
  );
}
