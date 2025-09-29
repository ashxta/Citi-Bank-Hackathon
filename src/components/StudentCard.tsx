import { Student } from '@/types/student';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, GraduationCap, Star, Linkedin, Github, Heart, Bookmark, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface StudentCardProps {
  student: Student;
  onViewProfile?: (student: Student) => void;
  onFavoriteToggle: (studentId: string) => void;
  onShortlistToggle: (studentId: string) => void;
  onSetNotes: (studentId: string, notes: string) => void;
}

export function StudentCard({ student, onViewProfile, onFavoriteToggle, onShortlistToggle, onSetNotes }: StudentCardProps) {
  const [notes, setNotes] = useState(student.notes || '');

  const getStatusColor = (status: Student['status']) => {
    switch (status) {
      case 'available':
        return 'bg-success/20 text-success-foreground border-success/30';
      case 'interviewing':
        return 'bg-primary/20 text-primary-foreground border-primary/30';
      case 'hired':
        return 'bg-muted/20 text-muted-foreground border-muted/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
    onSetNotes(student.id, e.target.value);
  };


  return (
    <Card className="group glass-card hover-lift hover-glow border-border/50 overflow-hidden animate-slide-up">
      <div className="gradient-border">
        <div className="bg-card rounded-lg">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20 animate-float"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full animate-pulse-glow" />
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">{student.name}</h3>
                  <p className="text-muted-foreground flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    {student.degree}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {student.university}
                  </p>
                </div>
              </div>
              <Badge className={`${getStatusColor(student.status)} animate-fade-in`}>
                {student.status}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* CGPA */}
            <div className="flex items-center justify-between p-3 bg-gradient-secondary rounded-lg">
              <span className="text-sm font-medium">CGPA</span>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-lg font-bold text-primary">{student.cgpa.toFixed(1)}/10</span>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Key Skills</h4>
              <div className="flex flex-wrap gap-1">
                {student.skills.slice(0, 4).map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
                {student.skills.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{student.skills.length - 4} more
                  </Badge>
                )}
              </div>
            </div>

            {/* Recruiter Notes */}
            <div>
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Recruiter Notes</h4>
              <Textarea
                placeholder="Add notes..."
                value={notes}
                onChange={handleNotesChange}
                className="bg-background/50 border-border/50 focus:border-primary transition-all text-xs"
              />
            </div>

            {/* Contact Actions */}
            <div className="flex gap-2 pt-2">
              <Button
                variant="default"
                size="sm"
                className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => onViewProfile?.(student)}
              >
                View Profile
              </Button>
              {student.linkedin && (
                <a href={student.linkedin.startsWith('http') ? student.linkedin : `https://${student.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="hover-lift">
                        <Linkedin className="w-4 h-4" />
                    </Button>
                </a>
              )}
               {student.github && (
                <a href={student.github.startsWith('http') ? student.github : `https://${student.github}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="hover-lift">
                        <Github className="w-4 h-4" />
                    </Button>
                </a>
              )}
              <Button variant="outline" size="sm" className="hover-lift" onClick={() => onFavoriteToggle(student.id)}>
                <Heart className={`w-4 h-4 ${student.isFavorite ? 'text-red-500 fill-current' : ''}`} />
              </Button>
              <Button variant="outline" size="sm" className="hover-lift" onClick={() => onShortlistToggle(student.id)}>
                <Bookmark className={`w-4 h-4 ${student.isShortlisted ? 'text-blue-500 fill-current' : ''}`} />
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
