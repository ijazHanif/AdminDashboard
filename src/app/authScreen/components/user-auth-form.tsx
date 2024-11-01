"use client";

import * as React from "react";
import * as Yup from "yup"; 
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/app/authScreen/authIcons/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .required("Password is required"),
});

// interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm(props: React.HTMLAttributes<HTMLDivElement>) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [errors, setErrors] = React.useState<{ email?: string; password?: string }>({});
  const router = useRouter();

  React.useEffect(() => {
    localStorage.setItem("staticEmail", "admin@gmail.com");
    localStorage.setItem("staticPassword", "Admin123");
  }, []);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setErrors({});

    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });
      const storedEmail = localStorage.getItem("staticEmail");
      const storedPassword = localStorage.getItem("staticPassword");

      if (email === storedEmail && password === storedPassword) {
        router.push("/dashboard");
      } else {
        alert("Incorrect email or password. Please try again.");
      }
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) {
        const newErrors: { email?: string; password?: string } = {};
        validationError.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path as "email" | "password"] = error.message;
          }
        });
        setErrors(newErrors);
      }
    }
    setIsLoading(false);
  }

  return (
    <div className={cn("grid gap-6")} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2 space-y-2">
          <div className="grid gap-1 space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="grid gap-1 space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Enter your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <Button disabled={isLoading}>
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
    </div>
  );
}
