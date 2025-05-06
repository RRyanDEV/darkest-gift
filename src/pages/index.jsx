import FooterComponent from "@/components/Footer";
import Homepage from "@/components/Homepage";
import NavegationBar from "@/components/NavegationBar";

export default function Home() {
  return (
    <>
      <div id="parent" className="flex flex-col h-screen justify-between">
        <NavegationBar />
        <Homepage />
        <FooterComponent />
      </div>
    </>
  );
}
