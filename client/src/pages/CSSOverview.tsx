import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function CSSOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white shadow-lg">
        <div className="container py-6">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">CSS Overview</h1>
          <p className="text-blue-100 mt-2">Understanding the complete CSS ecosystem</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">CSS Architecture Overview</h2>
          <p className="text-slate-600 mb-8">
            CSS is organized into six main categories that work together to create beautiful, responsive web interfaces:
          </p>

          {/* Sections Overview */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Modules */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-orange-600 mb-3">1. MODULES (Foundation)</h3>
              <p className="text-slate-600 mb-4">
                The foundational building blocks of CSS that control basic element behavior and styling.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Anchor Positioning</li>
                <li>✓ Animations</li>
                <li>✓ Backgrounds & Borders</li>
                <li>✓ Box Model & Sizing</li>
                <li>✓ Cascade & Variables</li>
                <li>✓ Colors & Columns</li>
              </ul>
            </div>

            {/* Layout & Display */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-green-600 mb-3">2. LAYOUT & DISPLAY</h3>
              <p className="text-slate-600 mb-4">
                Control how elements are positioned and displayed on the page using modern layout systems.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Flexbox & Grid</li>
                <li>✓ Display Properties</li>
                <li>✓ Fonts & Images</li>
                <li>✓ Lists & Logical Properties</li>
                <li>✓ Filter Effects</li>
                <li>✓ CSSOM View</li>
              </ul>
            </div>

            {/* Advanced Styling */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-purple-600 mb-3">3. ADVANCED STYLING</h3>
              <p className="text-slate-600 mb-4">
                Advanced techniques for creating sophisticated visual effects and interactions.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Selectors & Pseudo-classes</li>
                <li>✓ Positioning & Overflow</li>
                <li>✓ Media Queries</li>
                <li>✓ Masking & Shapes</li>
                <li>✓ Scroll Effects</li>
                <li>✓ Text Decoration</li>
              </ul>
            </div>

            {/* Transforms & Transitions */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-bold text-yellow-600 mb-3">4. TRANSFORMS & TRANSITIONS</h3>
              <p className="text-slate-600 mb-4">
                Create smooth animations and interactive effects with transforms and transitions.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ 2D & 3D Transforms</li>
                <li>✓ Transitions</li>
                <li>✓ Animations</li>
                <li>✓ Blend Modes</li>
                <li>✓ Values & Units</li>
                <li>✓ Writing Modes</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-teal-600 mb-3">5. TOOLS & GENERATORS</h3>
              <p className="text-slate-600 mb-4">
                Practical utilities for generating CSS code for common design patterns.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Border Generators</li>
                <li>✓ Shadow Generators</li>
                <li>✓ Color Tools</li>
                <li>✓ Shape Generators</li>
                <li>✓ Format Converters</li>
              </ul>
            </div>

            {/* Reference */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-blue-600 mb-3">6. REFERENCE</h3>
              <p className="text-slate-600 mb-4">
                Quick lookup guide for all CSS properties, selectors, and syntax rules.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Properties Reference</li>
                <li>✓ Selectors Guide</li>
                <li>✓ Pseudo-classes</li>
                <li>✓ Combinators</li>
                <li>✓ At-Rules</li>
              </ul>
            </div>
          </div>

          {/* How They Connect */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-lg font-bold text-blue-900 mb-4">How These Sections Connect</h3>
            <div className="space-y-3 text-slate-700">
              <p>
                <strong>Modules</strong> provide the foundation. They define basic CSS concepts like colors, spacing, and positioning.
              </p>
              <p>
                <strong>Layout & Display</strong> builds on modules to create page layouts using Flexbox and Grid, organizing content effectively.
              </p>
              <p>
                <strong>Advanced Styling</strong> enhances layouts with sophisticated selectors, positioning, and visual effects.
              </p>
              <p>
                <strong>Transforms & Transitions</strong> add motion and interactivity, making interfaces feel alive and responsive.
              </p>
              <p>
                <strong>Tools</strong> help you quickly generate CSS code for common patterns without writing from scratch.
              </p>
              <p>
                <strong>Reference</strong> serves as a quick lookup guide when you need to remember syntax or find the right property.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/modules">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Learning with Modules
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
