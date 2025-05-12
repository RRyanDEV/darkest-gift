import { TabItem, Tabs } from "flowbite-react";
import { useRef, useState } from "react";

import LoginComponent from "./Login";
import RegisterComponent from "./Register";

export default function Form() {
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div id="parentForm" className="mb-11 h-96">
        <div className="flex flex-col gap-3">
          <Tabs
            aria-label="Default tabs"
            variant="fullWidth"
            ref={tabsRef}
            onActiveTabChange={(tab) => setActiveTab(tab)}
          >
            <TabItem active title="Entrar">
              <LoginComponent /> {/* // Componente de Login */}
            </TabItem>
            <TabItem title="Registrar">
              <RegisterComponent /> {/* // Componente de Registro */}
            </TabItem>
          </Tabs>
        </div>
      </div>
    </>
  );
}
