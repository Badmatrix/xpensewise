"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginUser } from "@/lib/Actions";
import LoadingSpinner from "../LoadingSpinner";

type LoginProps = { email: string; password: string };

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginProps>();
  const onSubmit: SubmitHandler<LoginProps> = async ({ email, password }) => {
     await loginUser(email, password);
    
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-0">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="mail@example.com"
                  {...register("email", {
                    required: "enter your email",
                    pattern: {
                      value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                      message: "enter a valid email address",
                    },
                  })}
                />
                {errors && (
                  <span className="text-xs italic text-secondary-red first-letter:capitalize">
                    {errors?.email?.message}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-xs underline-offset-4 hover:underline sm:text-sm"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  type="password"
                  {...register("password", {
                    required: "enter password",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
                      message: "enter a valid password ",
                    },
                  })}
                />
                {errors && (
                  <span className="text-xs italic text-secondary-red first-letter:capitalize">
                    {errors?.password?.message}
                  </span>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-grey-900"
              >
                {isSubmitting ? <LoadingSpinner/> : " Login"}
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
