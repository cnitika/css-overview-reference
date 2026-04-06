import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";
import {
  TranslateDemo,
  RotateDemo,
  ScaleDemo,
  SkewDemo,
  Perspective3DDemo,
  TransitionDemo,
  BlendModeDemo,
  KeyframeAnimationDemo,
  PulseAnimationDemo,
  SlideInAnimationDemo,
  TimingFunctionDemo,
  CombinedTransformDemo,
  ResponsiveAnimationDemo,
} from "@/components/TransformDemos";

export default function TransformsTransitionsEnhanced() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const concepts = [
    {
      id: "transforms",
      title: "Transforms",
      description: "2D and 3D transformations of elements",
      code: `.element {
  transform: translateX(50px);
  transform: rotate(45deg);
  transform: scale(1.5);
  transform: skew(10deg, 20deg);
  transform: perspective(1000px) rotateX(45deg);
  transform-origin: center;
}`,
      demo: "transforms",
    },
    {
      id: "transitions",
      title: "Transitions",
      description: "Smooth animations between CSS states",
      code: `.element {
  transition: all 0.3s ease;
  transition-property: background, color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;
}

.element:hover {
  background: blue;
  color: white;
}`,
      demo: "transitions",
    },
    {
      id: "blend-modes",
      title: "Blend Modes",
      description: "Blend modes for overlapping elements",
      code: `.element {
  mix-blend-mode: multiply;
  mix-blend-mode: screen;
  mix-blend-mode: overlay;
  mix-blend-mode: darken;
  mix-blend-mode: lighten;
  mix-blend-mode: color-dodge;
}`,
      demo: "blend-modes",
    },
    {
      id: "values-units",
      title: "Values & Units",
      description: "Different measurement units in CSS",
      code: `.element {
  width: 100%;
  padding: 1rem;
  margin: 20px;
  font-size: 1.5em;
  line-height: 1.5;
  width: 100vw;
  height: 50vh;
  transform: translateX(calc(100% + 20px));
}`,
      demo: "values-units",
    },
    {
      id: "writing-modes",
      title: "Writing Modes",
      description: "Text direction and orientation",
      code: `.element {
  writing-mode: horizontal-tb;
  writing-mode: vertical-rl;
  writing-mode: vertical-lr;
  text-orientation: mixed;
}`,
      demo: "writing-modes",
    },
    {
      id: "media-queries-transforms",
      title: "Media Queries (Transforms)",
      description: "Responsive transforms based on device",
      code: `@media (max-width: 768px) {
  .element {
    transform: scale(0.8);
  }
}

@media (prefers-reduced-motion) {
  .element {
    animation: none;
    transition: none;
  }
}`,
      demo: "media-queries",
    },
    {
      id: "animations",
      title: "Animations",
      description: "Keyframe animations for complex motion",
      code: `@keyframes slideInLeft {
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
  animation: slideInLeft 0.5s ease-out forwards;
}`,
      demo: "animations",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white shadow-lg">
        <div className="container py-6">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">Transforms & Transitions</h1>
          <p className="text-yellow-100 mt-2">Create smooth animations and interactive effects with live demonstrations</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="mb-8">
          <p className="text-slate-700 text-lg">
            The Transforms and Transitions section covers 7 key concepts for adding motion and interactivity to your designs. Each concept includes interactive demonstrations so you can see exactly how they work.
          </p>
        </div>

        {/* Animated Demos Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Interactive Demonstrations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Transforms */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <CardHeader>
                <CardTitle className="text-yellow-600">Transform Demonstrations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <TranslateDemo />
                <div className="border-t pt-4"></div>
                <RotateDemo />
                <div className="border-t pt-4"></div>
                <ScaleDemo />
                <div className="border-t pt-4"></div>
                <SkewDemo />
                <div className="border-t pt-4"></div>
                <Perspective3DDemo />
                <div className="border-t pt-4"></div>
                <CombinedTransformDemo />
              </CardContent>
            </Card>

            {/* Transitions & Animations */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <CardHeader>
                <CardTitle className="text-yellow-600">Transitions & Animations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <TransitionDemo />
                <div className="border-t pt-4"></div>
                <KeyframeAnimationDemo />
                <div className="border-t pt-4"></div>
                <PulseAnimationDemo />
                <div className="border-t pt-4"></div>
                <SlideInAnimationDemo />
                <div className="border-t pt-4"></div>
                <TimingFunctionDemo />
              </CardContent>
            </Card>

            {/* Blend Modes */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow md:col-span-2">
              <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <CardHeader>
                <CardTitle className="text-yellow-600">Blend Modes & Responsive</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <BlendModeDemo />
                <ResponsiveAnimationDemo />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Code Examples Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Code Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {concepts.map((concept) => (
              <Card key={concept.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <CardHeader>
                  <CardTitle className="text-yellow-600">{concept.title}</CardTitle>
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
                      {concept.id === "transforms" && (
                        <>
                          <li>• translate: move elements</li>
                          <li>• rotate: spin elements</li>
                          <li>• scale: resize elements</li>
                        </>
                      )}
                      {concept.id === "transitions" && (
                        <>
                          <li>• Smooth state changes</li>
                          <li>• Control timing and easing</li>
                          <li>• Works with hover and other states</li>
                        </>
                      )}
                      {concept.id === "blend-modes" && (
                        <>
                          <li>• Control how colors blend</li>
                          <li>• multiply darkens</li>
                          <li>• screen lightens</li>
                        </>
                      )}
                      {concept.id === "values-units" && (
                        <>
                          <li>• % for percentage</li>
                          <li>• rem for relative sizing</li>
                          <li>• vw/vh for viewport units</li>
                        </>
                      )}
                      {concept.id === "writing-modes" && (
                        <>
                          <li>• Support different text directions</li>
                          <li>• vertical-rl for right-to-left</li>
                          <li>• text-orientation for rotation</li>
                        </>
                      )}
                      {concept.id === "media-queries-transforms" && (
                        <>
                          <li>• Responsive animations</li>
                          <li>• prefers-reduced-motion support</li>
                          <li>• Accessibility important</li>
                        </>
                      )}
                      {concept.id === "animations" && (
                        <>
                          <li>• Define with @keyframes</li>
                          <li>• More complex than transitions</li>
                          <li>• Can loop and repeat</li>
                        </>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Best Practices for Animations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Performance Tips</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Use <code className="bg-slate-100 px-1 rounded">transform</code> and <code className="bg-slate-100 px-1 rounded">opacity</code> for smooth animations</li>
                <li>✓ Avoid animating <code className="bg-slate-100 px-1 rounded">width</code>, <code className="bg-slate-100 px-1 rounded">height</code>, or <code className="bg-slate-100 px-1 rounded">position</code></li>
                <li>✓ Use <code className="bg-slate-100 px-1 rounded">will-change</code> for complex animations</li>
                <li>✓ Keep animations under 300ms for UI interactions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Accessibility</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Respect <code className="bg-slate-100 px-1 rounded">prefers-reduced-motion</code></li>
                <li>✓ Don't use animations as the only way to convey information</li>
                <li>✓ Ensure animations don't distract from content</li>
                <li>✓ Test with keyboard navigation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What's Next?</h2>
          <p className="text-slate-600 mb-6">
            Now that you've learned transforms and transitions with interactive demonstrations, it's time to explore practical tools that help you generate CSS code quickly. The next section covers generators for shadows, borders, colors, and shapes.
          </p>
          <Link href="/tools">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Continue to Tools and Generators →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
