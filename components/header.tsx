"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>
                <Link href="/listings" className="text-lg font-semibold">
                  Listings
                </Link>
                <Link href="#" className="text-lg font-semibold">
                  Universities
                </Link>
                <Link href="/how-it-works" className="text-lg font-semibold">
                  How It Works
                </Link>
                <Link href="#" className="text-lg font-semibold">
                  About Us
                </Link>
                <Link href="#" className="text-lg font-semibold">
                  Contact
                </Link>

                <div className="border-t mt-4 pt-4">
                  <div className="flex flex-col gap-3 mt-2">
                    <Link
                      href="/auth/login"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <LogIn className="h-5 w-5" />
                      Sign In
                    </Link>
                    <Link
                      href="/auth/register"
                      className="flex items-center gap-2 text-lg font-semibold text-green-600"
                    >
                      <UserPlus className="h-5 w-5" />
                      Sign Up
                    </Link>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">EasyCrib</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/listings" className="text-sm font-medium">
            Listings
          </Link>
          <Link href="#" className="text-sm font-medium">
            Universities
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium">
            How It Works
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] md:w-[300px]"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <div className="hidden md:flex gap-2">
            <Link href="/auth/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-green-600 hover:bg-green-700">
                Sign Up
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex gap-2">
            <Link href="/auth/login">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
              >
                <LogIn className="h-5 w-5" />
                <span className="sr-only">Sign In</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
