import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ResetPasswordPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <Link
              href="/auth/login"
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
          </div>
          <CardDescription>
            Create a new password for your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <Input id="password" type="password" required />
            <p className="text-xs text-muted-foreground">
              Password must be at least 8 characters and include a number and a
              special character
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" required />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Reset Password
          </Button>

          {/* This alert would be conditionally shown after successful password reset */}
          <Alert className="bg-green-50 text-green-800 border-green-200 hidden">
            <AlertDescription>
              Your password has been successfully reset. You can now log in with
              your new password.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-sm text-muted-foreground text-center">
            <Link href="/auth/login" className="text-primary hover:underline">
              Back to login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
