import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function ArchitectureDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white shadow-lg">
        <div className="container py-6">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">CSS Architecture Diagram</h1>
          <p className="text-slate-300 mt-2">Visual representation of how all CSS concepts interconnect</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How CSS Concepts Connect</h2>
          <p className="text-slate-600 mb-6">
            CSS is organized into six interconnected sections that build upon each other. Understanding how they relate helps you become a more effective web developer.
          </p>

          {/* Diagram */}
          <div className="overflow-x-auto bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
            <svg viewBox="0 0 1200 800" className="min-w-full" style={{ minHeight: "600px" }}>
              {/* Title */}
              <text x="600" y="40" fontSize="28" fontWeight="bold" textAnchor="middle" fill="#1e293b">
                CSS Overview Architecture
              </text>

              {/* MODULES Box */}
              <rect x="50" y="100" width="200" height="180" fill="#ea580c" rx="8" />
              <text x="150" y="130" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">
                MODULES
              </text>
              <text x="150" y="160" fontSize="12" textAnchor="middle" fill="white">
                Foundation
              </text>
              <text x="60" y="185" fontSize="11" fill="white">• Colors</text>
              <text x="60" y="202" fontSize="11" fill="white">• Box Model</text>
              <text x="60" y="219" fontSize="11" fill="white">• Cascade</text>
              <text x="60" y="236" fontSize="11" fill="white">• Animations</text>
              <text x="60" y="253" fontSize="11" fill="white">• Positioning</text>

              {/* LAYOUT & DISPLAY Box */}
              <rect x="350" y="100" width="200" height="180" fill="#16a34a" rx="8" />
              <text x="450" y="130" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">
                LAYOUT & DISPLAY
              </text>
              <text x="450" y="160" fontSize="12" textAnchor="middle" fill="white">
                Organization
              </text>
              <text x="360" y="185" fontSize="11" fill="white">• Flexbox</text>
              <text x="360" y="202" fontSize="11" fill="white">• Grid</text>
              <text x="360" y="219" fontSize="11" fill="white">• Display</text>
              <text x="360" y="236" fontSize="11" fill="white">• Fonts</text>
              <text x="360" y="253" fontSize="11" fill="white">• Images</text>

              {/* ADVANCED STYLING Box */}
              <rect x="650" y="100" width="200" height="180" fill="#9333ea" rx="8" />
              <text x="750" y="130" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">
                ADVANCED STYLING
              </text>
              <text x="750" y="160" fontSize="12" textAnchor="middle" fill="white">
                Sophistication
              </text>
              <text x="660" y="185" fontSize="11" fill="white">• Selectors</text>
              <text x="660" y="202" fontSize="11" fill="white">• Positioning</text>
              <text x="660" y="219" fontSize="11" fill="white">• Media Queries</text>
              <text x="660" y="236" fontSize="11" fill="white">• Masking</text>
              <text x="660" y="253" fontSize="11" fill="white">• Shapes</text>

              {/* TRANSFORMS & TRANSITIONS Box */}
              <rect x="950" y="100" width="200" height="180" fill="#eab308" rx="8" />
              <text x="1050" y="130" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1e293b">
                TRANSFORMS &
              </text>
              <text x="1050" y="150" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1e293b">
                TRANSITIONS
              </text>
              <text x="1050" y="175" fontSize="12" textAnchor="middle" fill="#1e293b">
                Motion
              </text>
              <text x="960" y="200" fontSize="11" fill="#1e293b">• Transforms</text>
              <text x="960" y="217" fontSize="11" fill="#1e293b">• Transitions</text>
              <text x="960" y="234" fontSize="11" fill="#1e293b">• Animations</text>
              <text x="960" y="251" fontSize="11" fill="#1e293b">• Blend Modes</text>

              {/* TOOLS Box */}
              <rect x="50" y="380" width="200" height="140" fill="#0d9488" rx="8" />
              <text x="150" y="410" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">
                TOOLS
              </text>
              <text x="150" y="435" fontSize="12" textAnchor="middle" fill="white">
                Generators
              </text>
              <text x="60" y="460" fontSize="11" fill="white">• Shadows</text>
              <text x="60" y="477" fontSize="11" fill="white">• Borders</text>
              <text x="60" y="494" fontSize="11" fill="white">• Colors</text>

              {/* REFERENCE Box */}
              <rect x="350" y="380" width="200" height="140" fill="#1e40af" rx="8" />
              <text x="450" y="410" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">
                REFERENCE
              </text>
              <text x="450" y="435" fontSize="12" textAnchor="middle" fill="white">
                Lookup
              </text>
              <text x="360" y="460" fontSize="11" fill="white">• Properties</text>
              <text x="360" y="477" fontSize="11" fill="white">• Selectors</text>
              <text x="360" y="494" fontSize="11" fill="white">• Syntax</text>

              {/* Arrows showing relationships */}
              {/* Modules to Layout */}
              <path d="M 250 190 L 350 190" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

              {/* Layout to Advanced */}
              <path d="M 550 190 L 650 190" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

              {/* Advanced to Transforms */}
              <path d="M 850 190 L 950 190" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

              {/* Modules to Tools */}
              <path d="M 150 280 L 150 380" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

              {/* Tools to Reference */}
              <path d="M 250 450 L 350 450" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

              {/* Transforms to Reference */}
              <path d="M 950 250 Q 700 350 550 420" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
                </marker>
              </defs>

              {/* Legend */}
              <text x="50" y="620" fontSize="14" fontWeight="bold" fill="#1e293b">
                How They Connect:
              </text>
              <text x="50" y="650" fontSize="12" fill="#475569">
                1. MODULES provide the foundation - basic CSS concepts like colors, spacing, and positioning
              </text>
              <text x="50" y="675" fontSize="12" fill="#475569">
                2. LAYOUT & DISPLAY builds on modules to organize content using Flexbox and Grid
              </text>
              <text x="50" y="700" fontSize="12" fill="#475569">
                3. ADVANCED STYLING enhances layouts with sophisticated selectors and visual effects
              </text>
              <text x="50" y="725" fontSize="12" fill="#475569">
                4. TRANSFORMS & TRANSITIONS add motion and interactivity to bring designs to life
              </text>
              <text x="50" y="750" fontSize="12" fill="#475569">
                5. TOOLS help you quickly generate CSS code for common patterns
              </text>
              <text x="50" y="775" fontSize="12" fill="#475569">
                6. REFERENCE provides quick lookup guides when you need to remember syntax
              </text>
            </svg>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
            <h3 className="text-lg font-bold text-orange-600 mb-3">Modules Foundation</h3>
            <p className="text-slate-600 text-sm mb-3">
              Everything starts with modules. These are the basic CSS concepts that you'll use in every project. Understanding colors, the box model, cascade, and basic positioning is essential.
            </p>
            <p className="text-slate-600 text-sm">
              Think of modules as the alphabet of CSS - you need to master them before you can write complex sentences.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-bold text-green-600 mb-3">Layout Organization</h3>
            <p className="text-slate-600 text-sm mb-3">
              Once you understand modules, you can use them to create layouts. Flexbox and Grid are modern layout systems that build on fundamental CSS concepts.
            </p>
            <p className="text-slate-600 text-sm">
              These tools let you organize content in powerful ways, from simple navigation bars to complex page layouts.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-lg font-bold text-purple-600 mb-3">Advanced Techniques</h3>
            <p className="text-slate-600 text-sm mb-3">
              With a solid foundation and layout knowledge, you can apply advanced styling techniques. Selectors, positioning, media queries, and visual effects take your designs to the next level.
            </p>
            <p className="text-slate-600 text-sm">
              This is where your CSS skills really shine, creating sophisticated and responsive designs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-lg font-bold text-yellow-600 mb-3">Motion & Interactivity</h3>
            <p className="text-slate-600 text-sm mb-3">
              Transforms and transitions bring your designs to life. These tools let you create smooth animations and interactive effects that engage users.
            </p>
            <p className="text-slate-600 text-sm">
              Modern web experiences rely on these techniques to feel responsive and polished.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-500">
            <h3 className="text-lg font-bold text-teal-600 mb-3">Practical Tools</h3>
            <p className="text-slate-600 text-sm mb-3">
              Tools and generators help you quickly create CSS code for common patterns. These utilities save time and ensure consistency across your projects.
            </p>
            <p className="text-slate-600 text-sm">
              Use them to generate shadows, borders, colors, and shapes without writing code from scratch.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-lg font-bold text-blue-600 mb-3">Quick Reference</h3>
            <p className="text-slate-600 text-sm mb-3">
              The reference section provides quick lookup guides for all CSS properties, selectors, and syntax rules. Use it when you need to remember how to write specific CSS.
            </p>
            <p className="text-slate-600 text-sm">
              Even experienced developers use references - it's a sign of professionalism, not weakness.
            </p>
          </div>
        </div>

        {/* Learning Path */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Recommended Learning Path</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-semibold text-slate-900">Start with Modules</h3>
                <p className="text-slate-600 text-sm">Build your foundation with basic CSS concepts</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900">Master Layout & Display</h3>
                <p className="text-slate-600 text-sm">Learn Flexbox and Grid to organize content</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-semibold text-slate-900">Explore Advanced Styling</h3>
                <p className="text-slate-600 text-sm">Create sophisticated designs with advanced techniques</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-semibold text-slate-900">Add Motion with Transforms & Transitions</h3>
                <p className="text-slate-600 text-sm">Bring your designs to life with animations</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h3 className="font-semibold text-slate-900">Use Tools for Efficiency</h3>
                <p className="text-slate-600 text-sm">Speed up development with generators</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
              <div>
                <h3 className="font-semibold text-slate-900">Reference & Practice</h3>
                <p className="text-slate-600 text-sm">Use the reference guide and build real projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Master CSS?</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Start your CSS learning journey today. Follow the recommended learning path and explore each section at your own pace.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
