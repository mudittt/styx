import React from "react";
import Social from "./Social";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center max-w-screen-md mx-auto py-5">
        <Logo />
        <Social />
        <p className="font-extralight text-xs text-center">
          The content of this site is copyright-protected (Not really).
        </p>
      </div>
    </div>
  );
}

export default Footer;
