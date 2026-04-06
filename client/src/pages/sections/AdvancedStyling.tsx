import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function AdvancedStyling() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const concepts = [
    {
      id: "selectors",
      title: "Selectors",
      description: "Targeting specific elements with CSS rules",
      code: `/* Type selector */
p { }

/* Class selector */
.highlight { }

/* ID selector */
#main { }

/* Attribute selector */
input[type="text"] { }

/* Pseudo-class */
a:hover { }
button:focus { }
li:nth-child(2n) { }`
    },
    {
      id: "positioning",
      title: "Positioning",
      description: "Controlling element placement on the page",
      code: `.element {
  position: static;
  position: relative;
  position: absolute;
  position: fixed;
  position: sticky;
  
  top: 10px;
  left: 20px;
  z-index: 10;
}`
    },
    {
      id: "overflow",
      title: "Overflow",
      description: "Handling content that exceeds container size",
      code: `.element {
  overflow: visible;
  overflow: hidden;
  overflow: scroll;
  overflow: auto;
  overflow-x: auto;
  overflow-y: hidden;
  text-overflow: ellipsis;
}`
    },
    {
      id: "media-queries",
      title: "Media Queries",
      description: "Responsive design based on device characteristics",
      code: `@media (max-width: 768px) {
  .container { flex-direction: column; }
}

@media (prefers-dark-mode) {
  body { background: #1a1a1a; }
}

@media (orientation: landscape) {
  .element { width: 80vw; }
}`
    },
    {
      id: "masking",
      title: "Masking",
      description: "Hiding parts of elements using masks",
      code: `.element {
  mask-image: url('#mask');
  mask-size: cover;
  mask-position: center;
  -webkit-mask-image: linear-gradient(to bottom, black, transparent);
}`
    },
    {
      id: "shapes",
      title: "Shapes",
      description: "Creating non-rectangular layouts",
      code: `.element {
  shape-outside: circle(50%);
  shape-outside: polygon(0 0, 100% 0, 100% 100%);
  shape-margin: 1rem;
  clip-path: circle(50%);
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}`
    },
    {
      id: "sizing",
      title: "Sizing",
      description: "Setting element dimensions",
      code: `.element {
  width: 100%;
  height: 200px;
  min-width: 50px;
  max-width: 500px;
  aspect-ratio: 16 / 9;
}`
    },
    {
      id: "text",
      title: "Text",
      description: "Text styling properties",
      code: `.element {
  color: #333;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-indent: 2em;
  white-space: nowrap;
  word-break: break-word;
}`
    },
    {
      id: "text-decoration",
      title: "Text Decoration",
      description: "Decorative text styling",
      code: `.element {
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-style: wavy;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}`
    },
    {
      id: "scroll-anchoring",
      title: "Scroll Anchoring",
      description: "Preventing layout shift during scroll",
      code: `.element {
  overflow-anchor: auto;
  overflow-anchor: none;
}`
    },
    {
      id: "scroll-snap",
      title: "Scroll Snap",
      description: "Snapping scroll position to defined points",
      code: `.container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
}

.item {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}`
    },
    {
      id: "scroll-animations",
      title: "Scroll-driven Animations",
      description: "Animations triggered by scrolling",
      code: `@supports (animation-timeline: view()) {
  .element {
    animation: slideIn linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }
}`
    },
    {
      id: "nesting",
      title: "Nesting",
      description: "Organizing related CSS rules",
      code: `.card {
  background: white;
  padding: 1rem;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
}`
    },
    {
      id: "properties-api",
      title: "Properties & Values API",
      description: "JavaScript API to interact with CSS properties",
      code: `const element = document.querySelector('.box');
element.style.setProperty('--color', 'blue');
const value = getComputedStyle(element)
  .getPropertyValue('--color');`
    },
    {
      id: "syntax",
      title: "Syntax",
      description: "Understanding CSS syntax and rules",
      code: `/* Selector { Property: Value; } */
.element {
  color: red;
  margin: 10px 20px;
  font-family: Arial, sans-serif;
}

/* At-rules */
@media (max-width: 768px) { }
@keyframes animation { }
@import url('style.css');`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg">
        <div className="container py-6">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">Advanced Styling</h1>
          <p className="text-purple-100 mt-2">Master sophisticated styling techniques and effects</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="mb-8">
          <p className="text-slate-700 text-lg">
            The Advanced Styling section covers 15 sophisticated CSS techniques that take your designs to the next level. Learn advanced selectors, positioning, and visual effects.
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((concept) => (
            <Card key={concept.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <CardHeader>
                <CardTitle className="text-purple-600">{concept.title}</CardTitle>
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
                    {concept.id === "selectors" && (
                      <>
                        <li>• Multiple selector types available</li>
                        <li>• Pseudo-classes for states</li>
                        <li>• Pseudo-elements for content</li>
                      </>
                    )}
                    {concept.id === "positioning" && (
                      <>
                        <li>• static: default, in document flow</li>
                        <li>• absolute: removed from flow</li>
                        <li>• fixed: relative to viewport</li>
                      </>
                    )}
                    {concept.id === "overflow" && (
                      <>
                        <li>• Control overflow behavior</li>
                        <li>• Separate x and y overflow</li>
                        <li>• text-overflow for truncation</li>
                      </>
                    )}
                    {concept.id === "media-queries" && (
                      <>
                        <li>• Mobile-first approach</li>
                        <li>• Multiple breakpoints</li>
                        <li>• Prefers-color-scheme for themes</li>
                      </>
                    )}
                    {concept.id === "masking" && (
                      <>
                        <li>• Hide parts of elements</li>
                        <li>• Use images or gradients</li>
                        <li>• Webkit prefix for compatibility</li>
                      </>
                    )}
                    {concept.id === "shapes" && (
                      <>
                        <li>• clip-path for clipping</li>
                        <li>• shape-outside for text wrapping</li>
                        <li>• Polygon for custom shapes</li>
                      </>
                    )}
                    {concept.id === "sizing" && (
                      <>
                        <li>• aspect-ratio maintains proportions</li>
                        <li>• min/max constraints</li>
                        <li>• Responsive sizing</li>
                      </>
                    )}
                    {concept.id === "text" && (
                      <>
                        <li>• text-align controls alignment</li>
                        <li>• white-space controls wrapping</li>
                        <li>• word-break for long words</li>
                      </>
                    )}
                    {concept.id === "text-decoration" && (
                      <>
                        <li>• Multiple decoration properties</li>
                        <li>• Customize underline appearance</li>
                        <li>• text-shadow for effects</li>
                      </>
                    )}
                    {concept.id === "scroll-anchoring" && (
                      <>
                        <li>• Prevent layout shift</li>
                        <li>• Improves user experience</li>
                        <li>• Automatic by default</li>
                      </>
                    )}
                    {concept.id === "scroll-snap" && (
                      <>
                        <li>• Snap to specific points</li>
                        <li>• Smooth scrolling experience</li>
                        <li>• Great for galleries</li>
                      </>
                    )}
                    {concept.id === "scroll-animations" && (
                      <>
                        <li>• Trigger animations on scroll</li>
                        <li>• Requires @supports check</li>
                        <li>• Modern browser feature</li>
                      </>
                    )}
                    {concept.id === "nesting" && (
                      <>
                        <li>• Organize related rules</li>
                        <li>• Requires preprocessor</li>
                        <li>• DRY principle</li>
                      </>
                    )}
                    {concept.id === "properties-api" && (
                      <>
                        <li>• Access CSS from JavaScript</li>
                        <li>• Modify custom properties</li>
                        <li>• Dynamic styling</li>
                      </>
                    )}
                    {concept.id === "syntax" && (
                      <>
                        <li>• Understand CSS structure</li>
                        <li>• At-rules for special cases</li>
                        <li>• Fallback values</li>
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
            Now that you've mastered advanced styling, it's time to add motion and interactivity. The next section covers transforms and transitions, which will bring your designs to life with smooth animations and 3D effects.
          </p>
          <Link href="/transforms-transitions">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
              Continue to Transforms and Transitions →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
