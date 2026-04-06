import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Tools() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const tools = [
    {
      id: "border-image",
      title: "Border-Image Generator",
      description: "Create decorative borders from images",
      code: `.element {
  border: 15px solid;
  border-image: url('border.png') 30 repeat;
  border-image-slice: 30;
  border-image-repeat: repeat;
}`
    },
    {
      id: "border-radius",
      title: "Border-Radius Generator",
      description: "Create rounded corners with precision",
      code: `.element {
  border-radius: 8px;
  border-radius: 50%;
  border-top-left-radius: 20px;
  border-top-right-radius: 10px 20px;
}`
    },
    {
      id: "box-shadow",
      title: "Box-Shadow Generator",
      description: "Create shadow effects easily",
      code: `.element {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3), 
              -5px -5px 15px rgba(255, 255, 255, 0.5);
}`
    },
    {
      id: "color-converter",
      title: "Color Format Converter",
      description: "Convert between color formats",
      code: `/* All represent the same color */
Hex:   #667eea
RGB:   rgb(102, 126, 234)
HSL:   hsl(262, 80%, 66%)
OKLCH: oklch(0.6 0.2 262)
RGBA:  rgba(102, 126, 234, 1)`
    },
    {
      id: "color-mixer",
      title: "Color Mixer",
      description: "Blend colors together",
      code: `.element {
  background: color-mix(in srgb, blue 50%, red);
  color: color-mix(in lch, #667eea 70%, white);
  border: color-mix(in oklch, green 30%, yellow);
}`
    },
    {
      id: "shape-generator",
      title: "Shape Generator",
      description: "Create complex shapes with clip-path",
      code: `.element {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  clip-path: circle(50%);
  clip-path: ellipse(50% 30%);
  clip-path: polygon(0 0, 100% 0, 100% 100%);
}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg">
        <div className="container py-6">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">Tools & Generators</h1>
          <p className="text-teal-100 mt-2">Practical utilities for generating CSS code quickly</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="mb-8">
          <p className="text-slate-700 text-lg">
            The Tools section covers 6 practical CSS generators that help you quickly create common CSS patterns without writing from scratch. These tools save time and ensure consistency.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tools.map((tool) => (
            <Card key={tool.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-gradient-to-r from-teal-400 to-teal-600"></div>
              <CardHeader>
                <CardTitle className="text-teal-600">{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 rounded-lg p-4 mb-4 relative">
                  <pre className="text-xs text-green-400 overflow-x-auto">
                    <code>{tool.code}</code>
                  </pre>
                  <button
                    onClick={() => copyCode(tool.code, tool.id)}
                    className="absolute top-2 right-2 bg-slate-700 hover:bg-slate-600 p-2 rounded transition-colors"
                  >
                    {copiedCode === tool.id ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-300" />
                    )}
                  </button>
                </div>
                <div className="text-sm text-slate-600">
                  <p className="font-semibold mb-2">Use Cases:</p>
                  <ul className="space-y-1">
                    {tool.id === "border-image" && (
                      <>
                        <li>• Decorative frame effects</li>
                        <li>• Custom border patterns</li>
                        <li>• Unique design elements</li>
                      </>
                    )}
                    {tool.id === "border-radius" && (
                      <>
                        <li>• Rounded button corners</li>
                        <li>• Circular profile images</li>
                        <li>• Smooth card designs</li>
                      </>
                    )}
                    {tool.id === "box-shadow" && (
                      <>
                        <li>• Add depth to elements</li>
                        <li>• Hover effects</li>
                        <li>• Layered shadows</li>
                      </>
                    )}
                    {tool.id === "color-converter" && (
                      <>
                        <li>• Match design tools</li>
                        <li>• Accessibility checks</li>
                        <li>• Color consistency</li>
                      </>
                    )}
                    {tool.id === "color-mixer" && (
                      <>
                        <li>• Create color variations</li>
                        <li>• Blend theme colors</li>
                        <li>• Dynamic theming</li>
                      </>
                    )}
                    {tool.id === "shape-generator" && (
                      <>
                        <li>• Unique layouts</li>
                        <li>• Polygon shapes</li>
                        <li>• Creative designs</li>
                      </>
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Use Tools */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Use These Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Online Generators</h3>
              <p className="text-slate-600 mb-4">
                Many online CSS generator tools are available that provide visual interfaces for creating these effects. You can:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Adjust values visually</li>
                <li>✓ See live previews</li>
                <li>✓ Copy generated CSS</li>
                <li>✓ Export to your project</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Manual Approach</h3>
              <p className="text-slate-600 mb-4">
                You can also create these effects manually by understanding the CSS properties:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Learn the syntax</li>
                <li>✓ Experiment with values</li>
                <li>✓ Build intuition</li>
                <li>✓ Create custom variations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What's Next?</h2>
          <p className="text-slate-600 mb-6">
            Now that you've learned about practical tools, it's time to review the complete CSS reference. The final section provides quick lookup guides for properties, selectors, and syntax rules.
          </p>
          <Link href="/reference">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Continue to Quick Reference →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
