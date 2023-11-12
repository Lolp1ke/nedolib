import Link from "next/link";

import { useAuth } from "@/hooks/auth/useAuth";

import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo/Logo";

import { Lock, Mail, User } from "lucide-react";

export default async function page() {
  const { localSignUp } = await useAuth();

  return (
    <form
      action={async (formData: FormData) => {
        "use server";
        const username = formData.get("username") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (!username || !email || !password) return;

        await localSignUp({
          username,
          email,
          password,
        });
      }}
      className={"w-[50%] flex items-center justify-center md:w-full"}
    >
      <Card className={"flex flex-col gap-4 w-1/2 min-w-[370px]"}>
        <CardHeader className={"flex flex-col gap-0.5 items-center"}>
          <Logo />
          <CardDescription className={"text-xl text-black text-center text-main-color"}>Qosh keldińiz</CardDescription>
          <CardDescription className={"text-sm whitespace-pre text-center"}>
            Manga ashyńyz, úlgerimińizdi baqylańyz{"\n"}jáne kóńil kóterińiz.
          </CardDescription>
        </CardHeader>
        <CardContent className={"flex flex-col gap-4"}>
          <div className={"flex items-center relative"}>
            <Input
              name={"username"}
              id={"username"}
              type={"text"}
              min={3}
              placeholder={"Meniń-Atym-Qoja"}
              className={"pr-10"}
              autoCorrect={"off"}
              autoFocus={true}
              required={true}
            />
            <User className={"absolute right-[10px]"} />
          </div>
          <div className={"flex items-center relative"}>
            <Input
              name={"email"}
              id={"email"}
              type={"email"}
              placeholder={"Poshta@mysal.kz"}
              className={"pr-10"}
              autoCorrect={"off"}
              required={true}
            />
            <Mail className={"absolute right-[10px]"} />
          </div>
          <div className={"flex items-center relative"}>
            <Input
              name={"password"}
              id={"password"}
              type={"password"}
              placeholder={"********"}
              className={"pr-10"}
              autoCorrect={"off"}
              required={true}
            />
            <Lock className={"absolute right-[10px]"} />
          </div>
        </CardContent>
        <CardFooter className={"w-full flex flex-col gap-2"}>
          <Button type={"submit"} className={"w-full bg-main-color"}>
            Tirkelý
          </Button>
          <Button type={"button"} variant={"link"} className={"self-start"}>
            <Link
              href={{
                pathname: "/auth/sign-in",
              }}
            >
              Kirý
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
