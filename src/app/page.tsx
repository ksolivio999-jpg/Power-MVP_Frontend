import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="max-w-4xl text-center space-y-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            Welcome to PowerMap
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Location and panel management system
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Link href="/auth/login">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/public-view/demo">
            <Button variant="outline" size="lg">View Demo</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>
                View and manage all your locations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get insights and analytics for your power map locations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Panel Builder</CardTitle>
              <CardDescription>
                Create custom panels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Design and configure panels with an intuitive interface.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>QR Codes</CardTitle>
              <CardDescription>
                Generate QR codes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create and manage QR codes for easy location access.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
