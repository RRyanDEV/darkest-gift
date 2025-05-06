// Imports
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

//

export default function NavegationBar() {
  return (
    <>
      <Navbar className="dark:bg-indigo-950" fluid>
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            DarkestGift
          </span>
        </NavbarBrand>
        <div id="User-Information" className="flex md:order-2">
          <div
            id="Login-Register-User"
            className="hover:cursor-pointer text-white"
          >
            {/* //TODO Alterar, conforme for feito o login */}
            <Link className="flex items-center gap-2" href={"/login"}>
              <Avatar rounded />
              Entrar
            </Link>
          </div>
          {/* Usuário Cadastrado  */}
          {/* <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                className="cursor-pointer"
                alt="User Settings"
                img="https://avatars.githubusercontent.com/u/85912228?v=4"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Olá, Ryan Gomes</span>
              <span className="block truncate text-sm font-medium">
                ryaanreeal@outlook.com
              </span>
            </DropdownHeader>
            <DropdownItem>Meus Pedidos</DropdownItem>
            <DropdownItem>Minha Conta</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sair</DropdownItem>
          </Dropdown> */}
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          {/* TODO Corrigir quando essa seção é mostrada, 
          fazendo com que o conteúdo do página seja arrastado para baixo */}
          <NavbarLink href="#">Home</NavbarLink>
          <NavbarLink href="#">Steam</NavbarLink>
          <NavbarLink href="#">Playstation</NavbarLink>
          <NavbarLink href="#">Xbox</NavbarLink>
          <NavbarLink href="#">Nintendo</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}
