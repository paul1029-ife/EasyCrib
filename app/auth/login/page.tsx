import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>

          <Card className="border-none shadow-none">
            <CardContent className="p-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Sign In
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  Facebook
                </Button>
              </div>
            </CardContent>
            <CardFooter className="p-0 mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  href="/auth/register"
                  className="text-primary font-medium hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="hidden md:block w-full md:w-1/2">
          <div className="relative h-[600px] w-full overflow-hidden rounded-lg bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-800/50" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
              <h2 className="text-3xl font-bold mb-4">
                Find Your Perfect Student Accommodation
              </h2>
              <p className="text-lg text-center max-w-md">
                EasyCrib connects students with comfortable, affordable housing
                options outside campus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
