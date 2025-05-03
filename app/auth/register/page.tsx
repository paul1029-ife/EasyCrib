import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterPage() {
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
              Create an account
            </h1>
            <p className="text-muted-foreground">
              Sign up to find your perfect student accommodation
            </p>
          </div>

          <Card className="border-none shadow-none">
            <CardContent className="p-0 space-y-4">
              <RadioGroup defaultValue="student" className="flex mb-4">
                <div className="flex items-center space-x-2 mr-6">
                  <RadioGroupItem value="student" id="student" />
                  <Label htmlFor="student">I'm a Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="owner" id="owner" />
                  <Label htmlFor="owner">I'm a Property Owner</Label>
                </div>
              </RadioGroup>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>

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
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+234..." required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
                <p className="text-xs text-muted-foreground">
                  Password must be at least 8 characters and include a number
                  and a special character
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Create Account
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
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-primary font-medium hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="hidden md:block w-full md:w-1/2">
          <div className="relative h-[700px] w-full overflow-hidden rounded-lg bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-800/50" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
              <h2 className="text-3xl font-bold mb-4">
                Join Our Community Today
              </h2>
              <p className="text-lg text-center max-w-md mb-6">
                Create an account to save your favorite properties, get
                personalized recommendations, and connect with property owners.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">For Students</h3>
                  <p className="text-sm">
                    Find affordable housing options near your campus
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">For Owners</h3>
                  <p className="text-sm">
                    List your properties and connect with student tenants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
