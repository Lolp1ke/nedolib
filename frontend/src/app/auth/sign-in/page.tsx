import Link from "next/link";

import { useAuth } from "@/hooks/auth/useAuth";

import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo/Logo";

import { Lock, User } from "lucide-react";

export default async function page() {
  const { localSignIn } = await useAuth();

  return (
    <form
      action={async (formData: FormData) => {
        "use server";
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        if (!username || !password) return;

        await localSignIn({
          username,
          password,
        });
      }}
      className={"w-[50%] flex items-center justify-center md:w-full"}
    >
      <Card className={"flex flex-col gap-4 w-1/2 min-w-[370px]"}>
        <CardHeader className={"flex flex-col gap-0.5 items-center"}>
          <Logo />
          <CardDescription className={"text-xl text-black text-center text-main-color"}>Oralýmen</CardDescription>
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
            Kirý
          </Button>
          <div className={"w-full flex justify-between"}>
            <Button type={"button"} variant={"link"} className={"self-end"}>
              <Link
                href={{
                  pathname: "/auth/sign-up",
                }}
              >
                Tirkelý
              </Link>
            </Button>
            <Button type={"button"} variant={"link"}>
              <Link
                href={{
                  pathname: "/auth/forgot",
                }}
              >
                Qupıa sózdi umyttyńyz ba?
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}
