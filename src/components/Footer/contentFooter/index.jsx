import { BsInstagram, BsTwitterX } from "react-icons/bs";

export function RightContentFooter() {
  return (<>
  <div id="right-content" className="flex items-left gap-2 flex-col max-sm:w-full w-1/2">
        <div id="title" className="flex text-white text-xl">
          <h4>Ajuda</h4>
        </div>
        <div id="options" className="flex flex-col gap-2 text-gray-400">
          <a href="" className="hover:text-white"><h4>Suporte</h4></a>
          <a href="" className="hover:text-white"><h4>Termos de Uso</h4></a>
          <a href="" className="hover:text-white"><h4>Política de Privacidade</h4></a>
        </div>
      </div>
    </>);
}

export function LeftContentFooter() {
  return (<>
      <div id="left-content" className="flex flex-col gap-2 h-full max-sm:w-full w-1/2">
        <div id="title" className="flex text-white text-xl">
          <h4>Seguir a DarkestGift</h4>
        </div>
        <div id="socials" className="flex items-center gap-3 text-white">
          <a href="https://www.instagram.com/reeal_ryaan/">
            <BsInstagram className="text-xl cursor-pointer hover:animate-pulse" />
          </a>
          <a href="https://x.com/ReealRyaan">
            <BsTwitterX className="text-xl cursor-pointer hover:animate-pulse" />
          </a>
        </div>
      </div>
    </>);
}
