import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import PasswordInput from "../PasswordInput";

export default function LoginComponent() {
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
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Lembrar</Label>
        </div>
        <Button type="submit">Acessar</Button>
      </form>
    </>
  );
}
