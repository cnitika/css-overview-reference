import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Reference() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-lg">
        <div className="container py-6">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">Quick Reference</h1>
          <p className="text-blue-100 mt-2">Complete lookup guide for CSS properties, selectors, and syntax</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="mb-8">
          <p className="text-slate-700 text-lg">
            The Reference section provides quick lookup guides for all CSS properties, selectors, and syntax rules. Use this as a handy reference when you need to remember how to write specific CSS.
          </p>
        </div>

        {/* Properties Reference */}
        <Card className="mb-6 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <CardHeader>
            <CardTitle className="text-blue-600">Display Properties</CardTitle>
            <CardDescription>Common display values and their uses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">block</p>
                <p className="text-sm text-slate-600">Takes full width, starts on new line</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">inline</p>
                <p className="text-sm text-slate-600">Flows with text, no line breaks</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">inline-block</p>
                <p className="text-sm text-slate-600">Hybrid of inline and block</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">flex</p>
                <p className="text-sm text-slate-600">Flexible box layout (1D)</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">grid</p>
                <p className="text-sm text-slate-600">Grid layout (2D)</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">none</p>
                <p className="text-sm text-slate-600">Hidden, removed from flow</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Selectors Reference */}
        <Card className="mb-6 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <CardHeader>
            <CardTitle className="text-blue-600">Selectors</CardTitle>
            <CardDescription>Different ways to target elements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-slate-100 p-3 rounded">
                <p className="font-mono text-sm font-semibold">element</p>
                <p className="text-sm text-slate-600">Targets all elements of that type</p>
              </div>
              <div className="bg-slate-100 p-3 rounded">
                <p className="font-mono text-sm font-semibold">.class</p>
                <p className="text-sm text-slate-600">Targets elements with that class</p>
              </div>
              <div className="bg-slate-100 p-3 rounded">
                <p className="font-mono text-sm font-semibold">#id</p>
                <p className="text-sm text-slate-600">Targets element with that ID</p>
              </div>
              <div className="bg-slate-100 p-3 rounded">
                <p className="font-mono text-sm font-semibold">[attr]</p>
                <p className="text-sm text-slate-600">Targets elements with that attribute</p>
              </div>
              <div className="bg-slate-100 p-3 rounded">
                <p className="font-mono text-sm font-semibold">:hover, :focus, :active</p>
                <p className="text-sm text-slate-600">Pseudo-classes for element states</p>
              </div>
              <div className="bg-slate-100 p-3 rounded">
                <p className="font-mono text-sm font-semibold">::before, ::after</p>
                <p className="text-sm text-slate-600">Pseudo-elements for generated content</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Combinators Reference */}
        <Card className="mb-6 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <CardHeader>
            <CardTitle className="text-blue-600">Combinators</CardTitle>
            <CardDescription>Ways to combine selectors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-100 p-3 rounded">
                <p className="font-mono text-sm font-semibold">A B</p>
                <p className="text-sm text-slate-600">Descendant (any level)</p>
              </div>
              <div className="bg-slate-100 p-3 rounded">
                <p className="font-mono text-sm font-semibold">A {"{>"}</p>
                <p className="text-sm text-slate-600">Child (direct)</p>
              </div>
              <div className="bg-slate-100 p-3 rounded">
                <p className="font-mono text-sm font-semibold">A + B</p>
                <p className="text-sm text-slate-600">Adjacent sibling</p>
              </div>
              <div className="bg-slate-100 p-3 rounded">
                <p className="font-mono text-sm font-semibold">A ~ B</p>
                <p className="text-sm text-slate-600">General sibling</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Box Model Reference */}
        <Card className="mb-6 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <CardHeader>
            <CardTitle className="text-blue-600">Box Model</CardTitle>
            <CardDescription>Understanding element spacing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-slate-600">
                <strong>Content:</strong> The actual content (text, images, etc.)
              </p>
              <p className="text-sm text-slate-600">
                <strong>Padding:</strong> Space inside the border, around content
              </p>
              <p className="text-sm text-slate-600">
                <strong>Border:</strong> Line around the padding
              </p>
              <p className="text-sm text-slate-600">
                <strong>Margin:</strong> Space outside the border, around element
              </p>
              <div className="bg-blue-100 p-3 rounded mt-3">
                <p className="text-sm font-mono">box-sizing: border-box;</p>
                <p className="text-xs text-slate-600 mt-1">Includes padding and border in width/height calculation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Flexbox Reference */}
        <Card className="mb-6 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <CardHeader>
            <CardTitle className="text-blue-600">Flexbox Properties</CardTitle>
            <CardDescription>Essential flexbox layout properties</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-800">Container Properties</p>
                <ul className="text-sm text-slate-600 mt-2 space-y-1">
                  <li>• display: flex</li>
                  <li>• flex-direction: row | column</li>
                  <li>• justify-content: center | space-between | flex-end</li>
                  <li>• align-items: center | flex-start | flex-end</li>
                  <li>• gap: spacing between items</li>
                </ul>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-slate-800">Item Properties</p>
                <ul className="text-sm text-slate-600 mt-2 space-y-1">
                  <li>• flex: shorthand for grow, shrink, basis</li>
                  <li>• flex-grow: how much to grow</li>
                  <li>• flex-shrink: how much to shrink</li>
                  <li>• flex-basis: base size</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grid Reference */}
        <Card className="mb-6 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <CardHeader>
            <CardTitle className="text-blue-600">Grid Properties</CardTitle>
            <CardDescription>Essential grid layout properties</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-800">Container Properties</p>
                <ul className="text-sm text-slate-600 mt-2 space-y-1">
                  <li>• display: grid</li>
                  <li>• grid-template-columns: 1fr 1fr 1fr</li>
                  <li>• grid-template-rows: auto 1fr auto</li>
                  <li>• gap: spacing between items</li>
                  <li>• grid-auto-flow: row | column | dense</li>
                </ul>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-slate-800">Item Properties</p>
                <ul className="text-sm text-slate-600 mt-2 space-y-1">
                  <li>• grid-column: span 2 | 1 / 3</li>
                  <li>• grid-row: span 2 | 1 / 3</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Units Reference */}
        <Card className="mb-6 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <CardHeader>
            <CardTitle className="text-blue-600">CSS Units</CardTitle>
            <CardDescription>Different measurement units</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">Absolute</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• px: pixels</li>
                  <li>• pt: points (print)</li>
                  <li>• cm: centimeters</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">Relative</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• em: relative to font-size</li>
                  <li>• rem: relative to root font-size</li>
                  <li>• %: percentage of parent</li>
                  <li>• vw: viewport width</li>
                  <li>• vh: viewport height</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Colors Reference */}
        <Card className="mb-6 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <CardHeader>
            <CardTitle className="text-blue-600">Color Formats</CardTitle>
            <CardDescription>Different ways to specify colors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><strong>Named:</strong> <code className="bg-slate-100 px-2 py-1 rounded">red, blue, green</code></p>
              <p><strong>Hex:</strong> <code className="bg-slate-100 px-2 py-1 rounded">#667eea</code></p>
              <p><strong>RGB:</strong> <code className="bg-slate-100 px-2 py-1 rounded">rgb(102, 126, 234)</code></p>
              <p><strong>RGBA:</strong> <code className="bg-slate-100 px-2 py-1 rounded">rgba(102, 126, 234, 0.5)</code></p>
              <p><strong>HSL:</strong> <code className="bg-slate-100 px-2 py-1 rounded">hsl(262, 80%, 66%)</code></p>
              <p><strong>OKLCH:</strong> <code className="bg-slate-100 px-2 py-1 rounded">oklch(0.6 0.2 262)</code></p>
            </div>
          </CardContent>
        </Card>

        {/* Position Values Reference */}
        <Card className="mb-12 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <CardHeader>
            <CardTitle className="text-blue-600">Position Values</CardTitle>
            <CardDescription>Different positioning modes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-800">static</p>
                <p className="text-sm text-slate-600">Default, element flows normally in document</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">relative</p>
                <p className="text-sm text-slate-600">Relative to its normal position, still in flow</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">absolute</p>
                <p className="text-sm text-slate-600">Relative to positioned parent, removed from flow</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">fixed</p>
                <p className="text-sm text-slate-600">Relative to viewport, stays in place on scroll</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">sticky</p>
                <p className="text-sm text-slate-600">Hybrid of relative and fixed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Complete Your Learning Journey</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            You've now explored all six sections of CSS! From foundational modules to advanced styling, transforms, and practical tools. Check out the architecture diagram to see how everything connects together.
          </p>
          <Link href="/diagram">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View Architecture Diagram
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
