import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  Separator,
} from "@nexa-ui-kit/core";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-zinc-50 font-sans dark:bg-zinc-950">
      <header className="w-full max-w-4xl mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Playground</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <main className="flex flex-col items-center gap-8 w-full max-w-4xl">
        <div className="flex items-center gap-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <Separator orientation="vertical" className="h-6" />
          <Badge variant="outline">v0.1.0-alpha</Badge>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Welcome to Nexa Playground</CardTitle>
            <CardDescription>
              This is a sandbox for testing and developing with @nexa-ui-kit.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-zinc-600 dark:text-zinc-400">
              Get started by editing <code>apps/playground/app/page.tsx</code>{" "}
              to see live changes. You can experiment with all components from
              the core package here.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Radix UI</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="outline">TypeScript</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button variant="default" asChild>
              <a
                href="https://github.com/nexa-opensource/nexa-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </Button>
          </CardFooter>
        </Card>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-500">
                Explore a wide range of accessible, unstyled components.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm">
                View Library
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Themes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-500">
                Customizable themes and styling hooks for your design system.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm">
                Explore Themes
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>
    </div>
  );
}
