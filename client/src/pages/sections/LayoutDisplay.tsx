import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function LayoutDisplay() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const concepts = [
    {
      id: "flexbox",
      title: "Flexbox",
      description: "Flexible box layout for 1D layouts (rows or columns)",
      code: `.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.item {
  flex: 1;
  flex-basis: 200px;
}`
    },
    {
      id: "grid",
      title: "Grid",
      description: "2D layout system for complex page layouts",
      code: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
  grid-auto-flow: dense;
}

.item {
  grid-column: span 2;
  grid-row: 1 / 3;
}`
    },
    {
      id: "display",
      title: "Display",
      description: "How elements are rendered on the page",
      code: `.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.flex { display: flex; }
.grid { display: grid; }
.none { display: none; }`
    },
    {
      id: "fonts",
      title: "Fonts",
      description: "Typography and text styling",
      code: `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.element {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-style: italic;
  line-height: 1.5;
  letter-spacing: 0.05em;
}`
    },
    {
      id: "images",
      title: "Images",
      description: "Styling and sizing images responsively",
      code: `img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}`
    },
    {
      id: "lists",
      title: "Lists",
      description: "Styling list elements",
      code: `ul {
  list-style: none;
  list-style-position: inside;
  list-style-image: url('bullet.png');
}

li {
  margin-bottom: 0.5rem;
}`
    },
    {
      id: "filter-effects",
      title: "Filter Effects",
      description: "Visual effects applied to elements",
      code: `.image {
  filter: blur(5px);
  filter: brightness(1.2);
  filter: contrast(1.5);
  filter: grayscale(100%);
  filter: hue-rotate(90deg);
  filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.3));
}`
    },
    {
      id: "logical-properties",
      title: "Logical Properties",
      description: "Direction-aware properties for RTL/LTR support",
      code: `.element {
  margin-inline: 1rem;
  margin-block: 2rem;
  padding-inline-start: 1rem;
  inset-block-start: 0;
}`
    },
    {
      id: "cssom-view",
      title: "CSSOM View",
      description: "JavaScript API to access computed styles",
      code: `const element = document.querySelector('.box');
const rect = element.getBoundingClientRect();
const computed = window.getComputedStyle(element);
const width = computed.getPropertyValue('width');`
    },
    {
      id: "environment-variables",
      title: "Environment Variables",
      description: "System-level CSS variables for viewport and safe areas",
      code: `.element {
  padding: env(safe-area-inset-top);
  width: 100vw;
  height: 100vh;
}`
    },
    {
      id: "custom-functions",
      title: "Custom Functions & Mixins",
      description: "Reusable CSS patterns using preprocessors",
      code: `@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button { @include flex-center; }`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg">
        <div className="container py-6">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">Layout & Display</h1>
          <p className="text-green-100 mt-2">Master modern layout systems and display properties</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="mb-8">
          <p className="text-slate-700 text-lg">
            The Layout and Display section covers 11 essential concepts for creating responsive, well-organized page layouts. Learn Flexbox, Grid, and how to position content effectively.
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((concept) => (
            <Card key={concept.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <CardHeader>
                <CardTitle className="text-green-600">{concept.title}</CardTitle>
                <CardDescription>{concept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 rounded-lg p-4 mb-4 relative">
                  <pre className="text-xs text-green-400 overflow-x-auto">
                    <code>{concept.code}</code>
                  </pre>
                  <button
                    onClick={() => copyCode(concept.code, concept.id)}
                    className="absolute top-2 right-2 bg-slate-700 hover:bg-slate-600 p-2 rounded transition-colors"
                  >
                    {copiedCode === concept.id ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-300" />
                    )}
                  </button>
                </div>
                <div className="text-sm text-slate-600">
                  <p className="font-semibold mb-2">Key Points:</p>
                  <ul className="space-y-1">
                    {concept.id === "flexbox" && (
                      <>
                        <li>• Perfect for 1D layouts (rows or columns)</li>
                        <li>• justify-content controls main axis</li>
                        <li>• align-items controls cross axis</li>
                      </>
                    )}
                    {concept.id === "grid" && (
                      <>
                        <li>• Ideal for 2D layouts</li>
                        <li>• grid-template-columns/rows define structure</li>
                        <li>• Can create complex page layouts</li>
                      </>
                    )}
                    {concept.id === "display" && (
                      <>
                        <li>• block: takes full width</li>
                        <li>• inline: flows with text</li>
                        <li>• flex/grid: modern layout modes</li>
                      </>
                    )}
                    {concept.id === "fonts" && (
                      <>
                        <li>• Import from Google Fonts</li>
                        <li>• font-weight controls boldness</li>
                        <li>• line-height affects readability</li>
                      </>
                    )}
                    {concept.id === "images" && (
                      <>
                        <li>• max-width: 100% for responsiveness</li>
                        <li>• object-fit controls cropping</li>
                        <li>• Maintain aspect ratio with height: auto</li>
                      </>
                    )}
                    {concept.id === "lists" && (
                      <>
                        <li>• Remove bullets with list-style: none</li>
                        <li>• Custom markers possible</li>
                        <li>• Spacing improves readability</li>
                      </>
                    )}
                    {concept.id === "filter-effects" && (
                      <>
                        <li>• Multiple filters can be combined</li>
                        <li>• Great for hover effects</li>
                        <li>• drop-shadow works on any element</li>
                      </>
                    )}
                    {concept.id === "logical-properties" && (
                      <>
                        <li>• Support RTL languages automatically</li>
                        <li>• -inline: horizontal direction</li>
                        <li>• -block: vertical direction</li>
                      </>
                    )}
                    {concept.id === "cssom-view" && (
                      <>
                        <li>• Access element dimensions</li>
                        <li>• Get computed styles</li>
                        <li>• Essential for interactive layouts</li>
                      </>
                    )}
                    {concept.id === "environment-variables" && (
                      <>
                        <li>• safe-area-inset for notches</li>
                        <li>• vw/vh for viewport units</li>
                        <li>• Mobile-friendly design</li>
                      </>
                    )}
                    {concept.id === "custom-functions" && (
                      <>
                        <li>• DRY principle for CSS</li>
                        <li>• Requires preprocessor (SCSS)</li>
                        <li>• Reuse common patterns</li>
                      </>
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next Steps */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What's Next?</h2>
          <p className="text-slate-600 mb-6">
            Now that you've mastered layout and display, it's time to learn advanced styling techniques. The next section covers selectors, positioning, media queries, and other advanced CSS features that will make your designs truly stand out.
          </p>
          <Link href="/advanced-styling">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Continue to Advanced Styling →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
