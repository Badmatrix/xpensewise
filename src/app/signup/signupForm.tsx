"use client";
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
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupUser } from "@/lib/Actions";

type SignUpProps = { email: string; password: string; cPass: string };

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isSubmitting },
  } = useForm<SignUpProps>();
  const onSubmit: SubmitHandler<SignUpProps> = async ({ email, password }) => {
    await signupUser(email, password);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-0">
        <CardHeader>
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>
            Enter your email below create an account
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
                  <Label htmlFor="password"> Password</Label>
                </div>
                <Input
                  type="password"
                  {...register("password", {
                    required: "enter password",
                    minLength: {
                      value: 8,
                      message: "password should be atleast 8 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
                      message:
                        "password should contain alphabet and numbers only ",
                    },
                  })}
                />
                {errors && (
                  <span className="text-xs italic text-secondary-red first-letter:capitalize">
                    {errors?.password?.message}
                  </span>
                )}
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirmPassword">confirm Password</Label>
                </div>
                <Input
                  type="password"
                  {...register("cPass", {
                    required: "confirm your password",
                    minLength: {
                      value: 8,
                      message: "password should be atleast 8 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
                      message:
                        "password should contain alphabet and numbers only ",
                    },

                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors && (
                  <span className="text-xs italic text-secondary-red first-letter:capitalize">
                    {errors?.cPass?.message}
                  </span>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-grey-900 capitalize"
              >
                {isSubmitting ? "creating..." : "create account"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account ?{" "}
              <Link href="login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
