import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UploadCloud, CheckCircle } from 'lucide-react';

export function CollegeIntegration() {
  return (
    <Card className="glass-card border-border/50 animate-slide-up mt-8">
      <div className="gradient-border">
        <div className="bg-card rounded-lg">
          <CardHeader>
            <CardTitle className="gradient-text">College Integration</CardTitle>
            <CardDescription>
              Streamline candidate verification by integrating with university Student Information Systems (SIS).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gradient-secondary rounded-lg">
              <CheckCircle className="w-8 h-8 text-success" />
              <div>
                <h4 className="font-semibold">Verified Academic Records</h4>
                <p className="text-sm text-muted-foreground">
                  Import verified academic records directly from universities with student consent, ensuring data accuracy and reducing manual verification efforts.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" className="gap-2 hover-lift">
                <UploadCloud className="w-4 h-4" />
                Import from SIS (Coming Soon)
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
