import { FooterCopyright } from "flowbite-react";
import { LeftContentFooter, RightContentFooter } from "./contentFooter/index";

export default function FooterComponent() {
  return (
    <>
      <footer id="footer" className="flex font-semibold flex-col h-40 mt-2">
        <hr id="footer-divider" className="border-violet-700 mx-5 mb-4"></hr>
        <div id="grid-elements" className="flex px-5 flex-row max-sm:gap-10 max-sm:flex-col mb-5 w-full h-64">
          <LeftContentFooter />
          <RightContentFooter />
        </div>
          <div id="copyright" className="flex justify-end max-sm:mt-5 mx-5">
            <FooterCopyright href="#" by="DarkestCode Ltda." year={2025} />
          </div>
      </footer>
    </>
  );
}
