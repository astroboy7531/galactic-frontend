import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Page from "@/components/page";
import PrivacyComment from "@/components/privacy/PrivacyComment";
import PrivacyContent from "@/components/privacy/PrivacyContent";
import React from "react";

export default function CopyRight() {
  return (
    <Page>
      <div className="flex flex-col w-full cursor-global">
        <div
          className="relative bg-cover bg-center w-full flex flex-col"
          style={{ backgroundImage: "url(/about/topBack.png)" }}
        >
          <Header />
          <PrivacyComment />
        </div>
        <PrivacyContent />
        <div
          className="w-full h-[100px]"
          style={{
            background: "linear-gradient(180deg, #F0EBE5 0%, #F9F9F9 100%)",
          }}
        ></div>
        <Footer />
      </div>
    </Page>
  );
}
