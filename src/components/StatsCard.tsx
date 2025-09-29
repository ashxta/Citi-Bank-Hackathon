import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  delay?: number;
}

export function StatsCard({ title, value, subtitle, icon: Icon, trend, delay = 0 }: StatsCardProps) {
  return (
    <Card 
      className="glass-card hover-lift border-border/50 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="gradient-border">
        <div className="bg-card rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {title}
            </CardTitle>
            <div className="p-2 bg-primary/10 rounded-lg floating-element">
              <Icon className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <div className="text-2xl font-bold gradient-text">{value}</div>
              {trend && (
                <div className={`flex items-center text-xs ${
                  trend.isPositive ? 'text-success' : 'text-destructive'
                }`}>
                  <span>{trend.isPositive ? '+' : ''}{trend.value}%</span>
                </div>
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-1">
                {subtitle}
              </p>
            )}
          </CardContent>
        </div>
      </div>
    </Card>
  );
}