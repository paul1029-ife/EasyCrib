import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Plus,
  Home,
  Eye,
  Edit,
  Trash2,
  Users,
  DollarSign,
  BarChart3,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { properties } from "@/lib/data";

export default function OwnerDashboard() {
  // Mock data - in a real app, this would come from a database
  const ownerProperties = properties.slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Owner Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your properties and track inquiries
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          Add New Property
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Home className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Properties
                </p>
                <h3 className="text-2xl font-bold">5</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Views
                </p>
                <h3 className="text-2xl font-bold">243</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Inquiries
                </p>
                <h3 className="text-2xl font-bold">18</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Revenue
                </p>
                <h3 className="text-2xl font-bold">₦450,000</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="properties">
        <TabsList className="mb-6">
          <TabsTrigger value="properties">My Properties</TabsTrigger>
          <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="properties" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>My Properties</CardTitle>
              <CardDescription>Manage your listed properties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-12 px-4 text-left font-medium">
                          Property
                        </th>
                        <th className="h-12 px-4 text-left font-medium">
                          Status
                        </th>
                        <th className="h-12 px-4 text-left font-medium">
                          Price
                        </th>
                        <th className="h-12 px-4 text-left font-medium">
                          Views
                        </th>
                        <th className="h-12 px-4 text-left font-medium">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ownerProperties.map((property) => (
                        <tr key={property.id} className="border-b">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-md bg-muted overflow-hidden">
                                <img
                                  src={property.images[0] || "/placeholder.svg"}
                                  alt={property.title}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="font-medium">
                                  {property.title}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {property.location}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700 hover:bg-green-50"
                            >
                              Active
                            </Badge>
                          </td>
                          <td className="p-4">
                            ₦{property.price.toLocaleString()}
                          </td>
                          <td className="p-4">
                            {Math.floor(Math.random() * 100)}
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inquiries" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Inquiries</CardTitle>
              <CardDescription>
                Manage and respond to student inquiries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>UN</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">Student Name {i}</h4>
                            <p className="text-sm text-muted-foreground">
                              Interested in: {ownerProperties[i - 1].title}
                            </p>
                            <p className="text-sm mt-2">
                              Hello, I'm interested in this property. Is it
                              still available? I would like to schedule a
                              viewing.
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {new Date().toLocaleDateString()}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-amber-50 text-amber-700 hover:bg-amber-50 text-xs"
                              >
                                Pending
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Reply
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Inquiries
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>
                View insights about your properties
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                <div className="text-center">
                  <BarChart3 className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Analytics charts would be displayed here
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-muted-foreground">
                        Most Viewed
                      </p>
                      <h3 className="text-lg font-bold mt-1">
                        {ownerProperties[0].title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        87 views this month
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-muted-foreground">
                        Most Inquiries
                      </p>
                      <h3 className="text-lg font-bold mt-1">
                        {ownerProperties[1].title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        12 inquiries this month
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-muted-foreground">
                        Conversion Rate
                      </p>
                      <h3 className="text-lg font-bold mt-1">18.5%</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        +2.3% from last month
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">
                    Property Owner
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Change Avatar
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
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

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Main St, Lagos" />
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Manage how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive emails about inquiries and bookings
                    </p>
                  </div>
                  <Switch checked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive text messages for urgent updates
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Marketing Emails</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive promotional content and updates
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-600 hover:bg-green-700">
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// This is a mock component since we're not importing it from shadcn/ui
function Switch({ checked }: { checked?: boolean }) {
  return (
    <div
      className={`w-11 h-6 rounded-full p-1 ${
        checked ? "bg-green-600" : "bg-gray-200"
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white transition-transform ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </div>
  );
}
