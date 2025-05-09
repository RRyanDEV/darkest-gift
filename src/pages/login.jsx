import FooterComponent from "@/components/Footer";
import LoginComponent from "@/components/Form/Login";
import NavegationBar from "@/components/NavegationBar";

export default function LoginRegisterScreen() {
  return (
    <>
      <div id="parent" className="flex flex-col justify-between h-screen">
        <NavegationBar user={"Ryan"} redirection={"/"} />
        <div id="content" className="flex items-center justify-center flex-col">
          <div id="componentAlign" className="p-3 w-96">
          <LoginComponent />
          </div>
        </div>
        <FooterComponent/>
      </div>
    </>
  );
}
