import FooterComponent from "@/components/Footer";
import Homepage from "@/components/Homepage";
import NavegationBar from "@/components/NavegationBar";

export default function Home() {
  return (
    <>
      <div id="parentHome" className="flex flex-col h-screen justify-between">
        <NavegationBar user={"Entrar"} redirection={`/loginRegister`} />
        <Homepage />
        <FooterComponent />
      </div>
    </>
  );
}
