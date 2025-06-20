import type { ReactNode, ElementType } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { LucideProps } from 'lucide-react';

interface SectionCardProps {
  title: string;
  description?: string;
  icon?: ElementType<LucideProps>;
  children: ReactNode;
  className?: string;
}

export default function SectionCard({ title, description, icon: Icon, children, className }: SectionCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
          <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
