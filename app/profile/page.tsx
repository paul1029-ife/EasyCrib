import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PropertyCard from "@/components/property-card";
import { properties } from "@/lib/data";

export default function ProfilePage() {
  // Mock data - in a real app, this would come from a database
  const savedProperties = properties.slice(0, 4);
  const viewingHistory = properties.slice(2, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Card>
            <CardHeader>
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>Student at UNILAG</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label className="text-muted-foreground">Email</Label>
                  <p>john.doe@example.com</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Phone</Label>
                  <p>+234 123 456 7890</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Department</Label>
                  <p>Computer Science</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Year of Study</Label>
                  <p>3rd Year</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Edit Profile
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <Tabs defaultValue="saved">
            <TabsList className="mb-6">
              <TabsTrigger value="saved">Saved Properties</TabsTrigger>
              <TabsTrigger value="history">Viewing History</TabsTrigger>
              <TabsTrigger value="settings">Account Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="saved" className="space-y-6">
              <h2 className="text-2xl font-bold">Saved Properties</h2>
              {savedProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {savedProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <p className="text-muted-foreground mb-4">
                      You haven't saved any properties yet
                    </p>
                    <Button asChild>
                      <a href="/">Browse Properties</a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <h2 className="text-2xl font-bold">Viewing History</h2>
              {viewingHistory.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {viewingHistory.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <p className="text-muted-foreground mb-4">
                      No viewing history available
                    </p>
                    <Button asChild>
                      <a href="/">Browse Properties</a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <h2 className="text-2xl font-bold">Account Settings</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+234 123 456 7890" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                  <CardDescription>
                    Update your academic details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" defaultValue="Computer Science" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year of Study</Label>
                    <Input id="year" defaultValue="3rd Year" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      Confirm New Password
                    </Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Danger Zone</CardTitle>
                  <CardDescription>Irreversible actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Once you delete your account, there is no going back. Please
                    be certain.
                  </p>
                  <Button variant="destructive">Delete Account</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
