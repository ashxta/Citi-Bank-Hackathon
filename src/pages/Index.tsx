import { useState, useMemo } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StudentCard } from '@/components/StudentCard';
import { SearchFilters, SearchFilters as ISearchFilters } from '@/components/SearchFilters';
import { StatsCard } from '@/components/StatsCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockStudents as initialMockStudents } from '@/data/mockData';
import { Student } from '@/types/student';
import { CollegeIntegration } from '@/components/CollegeIntegration';
import {
  Users,
  TrendingUp,
  Building2,
  Search,
  Sparkles,
  Target,
  BarChart3,
  ArrowRight,
  Brain,
  Zap
} from 'lucide-react';

const Index = () => {
  const [mockStudents, setMockStudents] = useState<Student[]>(initialMockStudents);
  const [searchFilters, setSearchFilters] = useState<ISearchFilters>({
    query: '',
    university: '',
    minCgpa: 0,
    skills: [],
    status: 'all',
    graduationYear: ''
  });

  // Filter students based on search criteria
  const filteredStudents = useMemo(() => {
    return mockStudents.filter((student) => {
      // Query search
      if (searchFilters.query) {
        const query = searchFilters.query.toLowerCase();
        const matchesName = student.name.toLowerCase().includes(query);
        const matchesSkills = student.skills.some(skill =>
          skill.toLowerCase().includes(query)
        );
        const matchesInterests = student.interests.some(interest =>
          interest.toLowerCase().includes(query)
        );
        const matchesUniversity = student.university.toLowerCase().includes(query);
        
        if (!matchesName && !matchesSkills && !matchesInterests && !matchesUniversity) {
          return false;
        }
      }

      // University filter
      if (searchFilters.university && student.university !== searchFilters.university) {
        return false;
      }

      // CGPA filter
      if (searchFilters.minCgpa > 0 && student.cgpa < searchFilters.minCgpa) {
        return false;
      }

      // Skills filter
      if (searchFilters.skills.length > 0) {
        const hasRequiredSkills = searchFilters.skills.some(skill =>
          student.skills.includes(skill)
        );
        if (!hasRequiredSkills) {
          return false;
        }
      }

      // Status filter
      if (searchFilters.status !== 'all' && student.status !== searchFilters.status) {
        return false;
      }

      // Graduation year filter
      if (searchFilters.graduationYear &&
          student.graduationYear.toString() !== searchFilters.graduationYear) {
        return false;
      }

      return true;
    });
  }, [searchFilters, mockStudents]);

  // Calculate stats
  const stats = useMemo(() => {
    const totalStudents = mockStudents.length;
    const availableStudents = mockStudents.filter(s => s.status === 'available').length;
    const averageCgpa = mockStudents.reduce((sum, s) => sum + s.cgpa, 0) / totalStudents;
    const universities = new Set(mockStudents.map(s => s.university)).size;

    return {
      total: totalStudents,
      available: availableStudents,
      averageCgpa: averageCgpa.toFixed(1),
      universities
    };
  }, [mockStudents]);

  const handleViewProfile = (student: Student) => {
    // In a real app, this would navigate to a detailed profile page
    console.log('Viewing profile for:', student.name);
  };

  const handleFavoriteToggle = (studentId: string) => {
    setMockStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId ? { ...student, isFavorite: !student.isFavorite } : student
      )
    );
  };

  const handleShortlistToggle = (studentId: string) => {
    setMockStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId ? { ...student, isShortlisted: !student.isShortlisted } : student
      )
    );
  };

  const handleSetNotes = (studentId: string, notes: string) => {
    setMockStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId ? { ...student, notes } : student
      )
    );
  };

  const handleExploreClick = () => {
    const studentProfilesSection = document.getElementById('student-profiles');
    if (studentProfilesSection) {
      studentProfilesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen bg-background relative">
      <div id="stars" className="stars"></div>
      <div id="stars2" className="stars"></div>
      <div id="stars3" className="stars"></div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse-glow" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Brain className="w-8 h-8 text-primary animate-float" />
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  AI-Powered Talent Matching
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text animate-gradient">
                  Smart Talent Acquisition
                </span>
                <br />
                <span className="text-3xl md:text-5xl text-foreground/80">
                  for Campus Recruitments
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Revolutionize campus recruitment with our intelligent platform that seamlessly connects
                talented graduates with ideal career opportunities through AI-powered matching.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 gap-2 animate-pulse-glow"
                onClick={handleExploreClick}
              >
                <Search className="w-5 h-5" />
                Explore Students
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 hover-lift">
                <BarChart3 className="w-5 h-5" />
                View Analytics
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card-glass/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Students"
              value={stats.total}
              subtitle="Registered candidates"
              icon={Users}
              trend={{ value: 12, isPositive: true }}
              delay={0}
            />
            <StatsCard
              title="Available"
              value={stats.available}
              subtitle="Ready for interviews"
              icon={Target}
              trend={{ value: 8, isPositive: true }}
              delay={100}
            />
            <StatsCard
              title="Average CGPA"
              value={stats.averageCgpa}
              subtitle="Out of 10.0"
              icon={TrendingUp}
              trend={{ value: 3, isPositive: true }}
              delay={200}
            />
            <StatsCard
              title="Universities"
              value={stats.universities}
              subtitle="Partner institutions"
              icon={Building2}
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl space-y-8">
          {/* Features Overview */}
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary animate-float" />
              <span className="text-sm font-medium text-primary">Platform Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Intelligent Recruitment Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive suite of tools designed to streamline the recruitment process
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="glass-card hover-lift border-border/50 animate-slide-up">
              <CardContent className="p-6 text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Smart Search</h3>
                <p className="text-muted-foreground">
                  Advanced filtering with AI-powered matching algorithms for precise candidate discovery
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift border-border/50 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">AI Matching</h3>
                <p className="text-muted-foreground">
                  Machine learning algorithms match student skills and interests with job requirements
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift border-border/50 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Real-time Analytics</h3>
                <p className="text-muted-foreground">
                  Comprehensive insights and trends to optimize your recruitment strategy
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filter */}
          <SearchFilters onSearch={setSearchFilters} />

          {/* Results Header */}
          <div id="student-profiles" className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold gradient-text">
                Student Profiles
              </h3>
              <p className="text-muted-foreground">
                Showing {filteredStudents.length} of {mockStudents.length} students
              </p>
            </div>
          </div>

          {/* Student Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student, index) => (
              <div key={student.id} style={{ animationDelay: `${index * 100}ms` }}>
                <StudentCard
                  student={student}
                  onViewProfile={handleViewProfile}
                  onFavoriteToggle={handleFavoriteToggle}
                  onShortlistToggle={handleShortlistToggle}
                  onSetNotes={handleSetNotes}
                />
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredStudents.length === 0 && (
            <Card className="glass-card border-border/50 p-12 text-center animate-fade-in">
              <div className="space-y-4">
                <Search className="w-16 h-16 text-muted-foreground mx-auto opacity-50" />
                <h3 className="text-xl font-semibold">No students found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or clear some filters
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSearchFilters({
                    query: '',
                    university: '',
                    minCgpa: 0,
                    skills: [],
                    status: 'all',
                    graduationYear: ''
                  })}
                >
                  Clear All Filters
                </Button>
              </div>
            </Card>
          )}

          <CollegeIntegration />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
