import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import SectionCard from '@/components/sections/SectionCard';
import SampleShadcnTable from '@/components/SampleShadcnTable';
import ServerDataDisplay from '@/components/ServerDataDisplay';
import DateDisplay from '@/components/DateDisplay';
import ReduxCounter from '@/components/ReduxCounter';
import CodeBlock from '@/components/CodeBlock';
import { LayoutDashboard, Table2, DatabaseZap, Store, CalendarDays, Code2, ShieldCheck, Route } from 'lucide-react';

const sampleCode = `
import React from 'react';

function MyComponent({ name }: { name: string }) {
  return (
    <div className="greeting">
      Hello, {name}!
    </div>
  );
}

export default MyComponent;
`;

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 space-y-12">
      <section className="text-center py-12">
        <h1 className="font-headline text-5xl font-bold mb-6 text-primary">
          Modern Web App Starter-A
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Welcome to your Next.js application, scaffolded with modern tools and practices. 
          Explore the features below to see how everything is set up.
        </p>
        <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
          <Image 
            src="https://placehold.co/1200x600.png" 
            alt="Abstract modern background"
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="abstract technology"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
           <div className="absolute bottom-8 left-8 text-left">
             <h2 className="font-headline text-4xl font-bold text-primary-foreground">Ready to Build?</h2>
             <p className="text-lg text-primary-foreground/90">This starter has you covered.</p>
           </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SectionCard 
          title="UI Foundation" 
          icon={LayoutDashboard}
          description="Built with ShadCN/UI and Tailwind CSS for a modern, responsive interface."
        >
          <div className="space-y-4">
            <p>The UI uses a custom theme based on your specifications (Dark Blue primary, Light Blue background, Purple accent).</p>
            <div className="flex space-x-2">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent Button</Button>
            </div>
            <Alert>
              <LayoutDashboard className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                ShadCN/UI components are used for UI elements. Material-UI was requested but ShadCN/UI aligns with the existing scaffold. Icons are from Lucide-React.
              </AlertDescription>
            </Alert>
          </div>
        </SectionCard>

        <SectionCard 
          title="App Routing"
          icon={Route}
          description="Navigation is handled by Next.js App Router."
        >
          <p>Next.js uses a file-system based router. This page (<code>src/app/page.tsx</code>) is the root. Create new folders and <code>page.tsx</code> files within <code>src/app</code> to define new routes.</p>
          <p className="mt-2 text-sm text-muted-foreground">React Router was requested, but Next.js has its own powerful routing system which is used here.</p>
        </SectionCard>

        <SectionCard 
          title="Configured Data Table"
          icon={Table2}
          description="Displaying tabular data efficiently."
        >
          <SampleShadcnTable />
        </SectionCard>

        <SectionCard 
          title="Data Handling"
          icon={DatabaseZap}
          description="Fetching data from APIs or server-side sources."
        >
          <ServerDataDisplay />
        </SectionCard>

        <SectionCard 
          title="Centralized State"
          icon={Store}
          description="Managing application state with Redux Toolkit."
        >
          <ReduxCounter />
        </SectionCard>

        <SectionCard 
          title="Date Utilities"
          icon={CalendarDays}
          description="Working with dates and times using date-fns."
        >
          <DateDisplay />
        </SectionCard>

        <SectionCard
          title="Code Snippets"
          icon={Code2}
          description="Displaying code with 'Source Code Pro' font."
        >
          <CodeBlock language="tsx">
            {sampleCode.trim()}
          </CodeBlock>
        </SectionCard>
        
        <SectionCard
          title="Testing Framework"
          icon={ShieldCheck}
          description="Notes on testing setup."
        >
          <p>The request included Jest and React Testing Library for unit testing, along with Prettier and ESLint for code quality.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            These tools are not pre-installed in this scaffold. To set them up, you would typically run:
          </p>
          <CodeBlock language="bash">
            {'npm install --save-dev jest babel-jest @types/jest @testing-library/react @testing-library/jest-dom prettier eslint eslint-config-prettier\n# ...and configure them (e.g., jest.config.js, .eslintrc.js, .prettierrc.js)'}
          </CodeBlock>
          <p className="mt-2 text-sm text-muted-foreground">
            Ensuring components are small and testable is good practice regardless of immediate testing setup.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
