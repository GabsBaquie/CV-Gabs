import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="flex gap-2 justify-center mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <p>Card Footer</p>
            <Button>Click me</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
            <Button>Click me</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
