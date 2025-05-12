import FooterComponent from "@/components/Footer";
import Form from "@/components/Form";
import NavegationBar from "@/components/NavegationBar";

export default function LoginRegisterScreen() {
  return (
    <>
      <div id="parent" className="flex flex-col justify-between h-screen">
        <NavegationBar user={"Ryan"} redirection={"/"} />
        <div id="content" className="flex items-center justify-center flex-col">
          <div id="componentAlign" className="p-3 w-96">
            <Form />
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
