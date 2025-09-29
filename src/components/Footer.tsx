import { Brain, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 mt-20">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold gradient-text">Smart Talent</h3>
                <p className="text-xs text-muted-foreground -mt-1">Acquisition System</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Revolutionizing campus recruitment through AI-powered talent matching and intelligent student-employer connections.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Platform</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Student Profiles
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                AI Matching
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Analytics Dashboard
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Integration APIs
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Case Studies
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Best Practices
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <div className="space-y-2">
              <a href="mailto:contact@smarttalent.ai" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                contact@smarttalent.ai
              </a>
              <a href="tel:+914412345678" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                +91 44 1234 5678
              </a>
              <p className="text-sm text-muted-foreground">
                Chennai, Tamil Nadu
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Smart Talent Acquisition System. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}