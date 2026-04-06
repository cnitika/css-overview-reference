import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Modules() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const concepts = [
    {
      id: "anchor-positioning",
      title: "Anchor Positioning",
      description: "Position elements relative to named anchor points",
      code: `.anchor-element {
  anchor-name: --my-anchor;
}

.positioned-element {
  position: absolute;
  left: anchor(--my-anchor left);
  top: anchor(--my-anchor bottom);
}`
    },
    {
      id: "animations",
      title: "Animations",
      description: "Smooth transitions between CSS states over time",
      code: `@keyframes slideIn {
  from { 
    transform: translateX(-100%); 
    opacity: 0; 
  }
  to { 
    transform: translateX(0); 
    opacity: 1; 
  }
}

.element {
  animation: slideIn 0.5s ease-out;
}`
    },
    {
      id: "backgrounds-borders",
      title: "Backgrounds & Borders",
      description: "Visual styling for element backgrounds and edges",
      code: `.element {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 2px solid #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`
    },
    {
      id: "box-alignment",
      title: "Box Alignment",
      description: "Aligning content within boxes using flexbox/grid",
      code: `.container {
  display: flex;
  justify-content: center;    /* Horizontal alignment */
  align-items: center;        /* Vertical alignment */
  gap: 1rem;
}`
    },
    {
      id: "box-model",
      title: "Box Model",
      description: "The structure of element sizing (content, padding, border, margin)",
      code: `.element {
  width: 200px;
  padding: 20px;              /* Inside spacing */
  border: 2px solid black;
  margin: 10px;               /* Outside spacing */
  box-sizing: border-box;     /* Include padding/border in width */
}`
    },
    {
      id: "box-sizing",
      title: "Box Sizing",
      description: "How width and height are calculated",
      code: `/* content-box: width = content only (default) */
.element1 { 
  box-sizing: content-box; 
  width: 200px; 
  padding: 20px; 
}

/* border-box: width = content + padding + border */
.element2 { 
  box-sizing: border-box; 
  width: 200px; 
  padding: 20px; 
}`
    },
    {
      id: "cascade",
      title: "Cascade",
      description: "How CSS rules are applied when multiple rules target the same element",
      code: `/* Later rules override earlier ones */
p { color: blue; }
p { color: red; }  /* This wins */

/* Specificity matters */
p { color: blue; }           /* 0,0,1 */
.paragraph { color: green; } /* 0,1,0 - wins */
#text { color: yellow; }     /* 1,0,0 - wins all */`
    },
    {
      id: "cascading-variables",
      title: "Cascading Variables",
      description: "CSS custom properties that cascade through the DOM",
      code: `:root {
  --primary-color: #667eea;
  --spacing: 1rem;
}

.element {
  color: var(--primary-color);
  margin: var(--spacing);
}

/* Override in specific context */
.dark-section {
  --primary-color: #fff;
}`
    },
    {
      id: "colors",
      title: "Colors",
      description: "Color values in various formats",
      code: `.element {
  color: red;                           /* Named */
  background: #667eea;                  /* Hex */
  border: rgb(102, 126, 234);          /* RGB */
  box-shadow: rgba(0, 0, 0, 0.5);      /* RGBA */
  outline: hsl(262, 80%, 50%);         /* HSL */
  text-decoration: oklch(0.5 0.2 50);  /* OKLCH */
}`
    },
    {
      id: "columns",
      title: "Columns",
      description: "Multi-column text layout",
      code: `.article {
  column-count: 3;           /* 3 columns */
  column-gap: 2rem;          /* Space between columns */
  column-rule: 1px solid #ccc; /* Divider line */
}`
    },
    {
      id: "conditional-rules",
      title: "Conditional Rules",
      description: "CSS rules that apply based on conditions",
      code: `/* Media queries */
@media (max-width: 768px) {
  .container { flex-direction: column; }
}

/* Feature support */
@supports (display: grid) {
  .layout { display: grid; }
}`
    },
    {
      id: "containment",
      title: "Containment",
      description: "Isolating element styling to improve performance",
      code: `.card {
  contain: layout style paint;
  /* Prevents layout from affecting outside elements */
}`
    },
    {
      id: "counters",
      title: "Counters",
      description: "Automatic numbering for elements",
      code: `body { counter-reset: section; }

h2 {
  counter-increment: section;
}

h2::before {
  content: "Section " counter(section) ": ";
}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg">
        <div className="container py-6">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">Modules</h1>
          <p className="text-orange-100 mt-2">Foundation CSS concepts that form the basis of all styling</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="mb-8">
          <p className="text-slate-700 text-lg">
            The Modules section covers 13 fundamental CSS concepts that form the foundation of all web styling. These concepts are the building blocks you'll use in every project.
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((concept) => (
            <Card key={concept.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <CardHeader>
                <CardTitle className="text-orange-600">{concept.title}</CardTitle>
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
                    {concept.id === "anchor-positioning" && (
                      <>
                        <li>• Define anchor points with anchor-name</li>
                        <li>• Reference anchors in positioning</li>
                        <li>• Useful for dynamic layouts</li>
                      </>
                    )}
                    {concept.id === "animations" && (
                      <>
                        <li>• Define keyframes with @keyframes</li>
                        <li>• Apply with animation property</li>
                        <li>• Control timing and easing</li>
                      </>
                    )}
                    {concept.id === "backgrounds-borders" && (
                      <>
                        <li>• Use gradients for visual interest</li>
                        <li>• Border-radius creates rounded corners</li>
                        <li>• Box-shadow adds depth</li>
                      </>
                    )}
                    {concept.id === "box-alignment" && (
                      <>
                        <li>• justify-content aligns horizontally</li>
                        <li>• align-items aligns vertically</li>
                        <li>• gap controls spacing between items</li>
                      </>
                    )}
                    {concept.id === "box-model" && (
                      <>
                        <li>• Content, padding, border, margin</li>
                        <li>• box-sizing controls calculation</li>
                        <li>• Essential for layout planning</li>
                      </>
                    )}
                    {concept.id === "box-sizing" && (
                      <>
                        <li>• content-box: default behavior</li>
                        <li>• border-box: includes padding/border</li>
                        <li>• border-box usually preferred</li>
                      </>
                    )}
                    {concept.id === "cascade" && (
                      <>
                        <li>• Later rules override earlier ones</li>
                        <li>• Specificity determines priority</li>
                        <li>• ID {">"}  Class {">"}  Element</li>
                      </>
                    )}
                    {concept.id === "cascading-variables" && (
                      <>
                        <li>• Define in :root for global scope</li>
                        <li>• Use var() to reference</li>
                        <li>• Override in specific contexts</li>
                      </>
                    )}
                    {concept.id === "colors" && (
                      <>
                        <li>• Multiple formats available</li>
                        <li>• OKLCH is modern standard</li>
                        <li>• RGBA for transparency</li>
                      </>
                    )}
                    {concept.id === "columns" && (
                      <>
                        <li>• Create multi-column layouts</li>
                        <li>• Great for text-heavy content</li>
                        <li>• Control gaps and dividers</li>
                      </>
                    )}
                    {concept.id === "conditional-rules" && (
                      <>
                        <li>• @media for responsive design</li>
                        <li>• @supports for feature detection</li>
                        <li>• Graceful degradation</li>
                      </>
                    )}
                    {concept.id === "containment" && (
                      <>
                        <li>• Improve performance</li>
                        <li>• Isolate styling effects</li>
                        <li>• Prevent layout thrashing</li>
                      </>
                    )}
                    {concept.id === "counters" && (
                      <>
                        <li>• Auto-number elements</li>
                        <li>• Use with ::before/::after</li>
                        <li>• Perfect for lists and sections</li>
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
            Now that you understand the foundational modules, you're ready to learn how to use them in creating layouts and displays. The next section covers Flexbox, Grid, and other layout systems that build upon these modules.
          </p>
          <Link href="/layout-display">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Continue to Layout and Display →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
