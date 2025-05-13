import { Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import PasswordInput from "../PasswordInput";

export default function RegisterComponent() {
  return (
    <>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email">Digite seu Email</Label>
          </div>
          <TextInput
            id="email"
            type="email"
            name="email"
            rightIcon={HiMail}
            placeholder="* Email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password">Digite sua Senha</Label>
          </div>
          <PasswordInput />
        </div>
        <div className="flex items-center gap-5">
          <div id="tips" className="text-white">
            <div id="title" className="text-white text-lg font-semibold">
              <h1>Siga essas dicas:</h1>
            </div>
            <div id="subtitle" className="text-sm">
              <ul>
                <li>
                  Utilize no mínimo 8 caracteres. <b>(máximo 16 caracteres)</b>
                </li>
                <li>
                  Utilize letras <b>MAIÚSCULAS</b> e <b>minúsculas</b>.
                </li>
                <li>
                  Utilize Caracteres Especias. <b>!, @, #, $, %, ^, &, *</b>
                </li>
                <li>
                  Evite sequências como <b>"abc" ou "3003"</b>.
                </li>
                <li>Evite informações pessoais e palavras comuns.</li>
              </ul>
            </div>
          </div>
        </div>
        <Button type="submit">Criar</Button>
      </form>
    </>
  );
}
