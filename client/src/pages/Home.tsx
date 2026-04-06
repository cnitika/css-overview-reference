import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { BookOpen, Zap, Palette, Layers, Settings, FileText, ArrowRight } from "lucide-react";

export default function Home() {
  const sections = [
    {
      id: "modules",
      title: "Modules",
      description: "Foundation CSS concepts: positioning, animations, colors, box model, and more",
      icon: Layers,
      color: "bg-orange-500",
      path: "/modules"
    },
    {
      id: "layout-display",
      title: "Layout & Display",
      description: "Learn Flexbox, Grid, Display properties, and responsive layouts",
      icon: Zap,
      color: "bg-green-500",
      path: "/layout-display"
    },
    {
      id: "advanced-styling",
      title: "Advanced Styling",
      description: "Mastering selectors, positioning, overflow, and advanced effects",
      icon: Palette,
      color: "bg-purple-500",
      path: "/advanced-styling"
    },
    {
      id: "transforms-transitions",
      title: "Transforms & Transitions",
      description: "Create smooth animations, 3D transforms, and interactive effects",
      icon: Zap,
      color: "bg-yellow-500",
      path: "/transforms-transitions"
    },
    {
      id: "tools",
      title: "Tools & Generators",
      description: "Practical tools for creating shadows, borders, colors, and shapes",
      icon: Settings,
      color: "bg-teal-500",
      path: "/tools"
    },
    {
      id: "reference",
      title: "Quick Reference",
      description: "Complete reference guide for properties, selectors, and syntax",
      icon: FileText,
      color: "bg-blue-600",
      path: "/reference"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white shadow-lg">
        <div className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8" />
              <h1 className="text-4xl font-bold">CSS Overview Reference</h1>
            </div>
            <nav className="flex gap-4">
              <Button variant="ghost" className="text-white hover:bg-white/20">Home</Button>
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <Link href="/diagram">Architecture Diagram</Link>
              </Button>
            </nav>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl">
            A comprehensive, step-by-step guide to all CSS concepts with interactive examples, explanations, and visual diagrams.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Learn CSS Comprehensively</h2>
              <p className="text-slate-600 text-lg mb-6">
                This interactive guide covers every aspect of CSS, from foundational concepts to advanced techniques. Each section includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-slate-700"><strong>Step-by-step explanations</strong> of each concept</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-slate-700"><strong>Live code examples</strong> you can learn from</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-slate-700"><strong>Visual demonstrations</strong> of how CSS works</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-slate-700"><strong>Practical applications</strong> in real projects</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What You'll Learn</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-slate-700">13 Module Concepts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">11 Layout & Display Topics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-700">15 Advanced Styling Techniques</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-slate-700">7 Transform & Transition Topics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-slate-700">6 Practical Tools</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Explore CSS Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link key={section.id} href={section.path}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-0 overflow-hidden group">
                    <div className={`${section.color} h-2`}></div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl text-slate-900">{section.title}</CardTitle>
                          <CardDescription className="text-slate-600 mt-2">{section.description}</CardDescription>
                        </div>
                        <Icon className={`w-6 h-6 ${section.color.replace('bg-', 'text-')} opacity-20`} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                        <span className="font-semibold">Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white rounded-lg shadow-lg p-12 text-center border-t-4 border-blue-600">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Master CSS?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Start with the Modules section to build a strong foundation, then progress through each topic to become a CSS expert.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/modules">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Learning
              </Button>
            </Link>
            <Link href="/diagram">
              <Button size="lg" variant="outline">
                View Architecture Diagram
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16 py-8">
        <div className="container text-center">
          <p className="text-slate-400">
            © 2024 CSS Overview Reference Guide. A comprehensive learning resource for web developers.
          </p>
        </div>
      </footer>
    </div>
  );
}
