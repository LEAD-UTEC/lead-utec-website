'use client';

import React, { useState } from 'react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Badge } from '@/components/Badge';
import { DecorativeAsterisk } from '@/components/DecorativeAsterisk';
import { GradientText } from '@/components/GradientText';
import { Copy, Check } from 'lucide-react';
import Link from 'next/link';

export default function DesignSystemPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { name: 'White', hex: '#FFFFFF', var: '--color-white' },
    { name: 'Background', hex: '#010B3D', var: '--color-background' },
    { name: 'Primary', hex: '#DF3124', var: '--color-primary' },
    { name: 'Secondary', hex: '#921EA2', var: '--color-secondary' },
    { name: 'Accent', hex: '#C72A49', var: '--color-accent' },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#010b3d] text-white">
      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 bg-[#010b3d]/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <DecorativeAsterisk size={40} />
              <div>
                <h1 className="text-2xl font-bold">LEAD UTEC</h1>
                <p className="text-sm text-white/60">Design System</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
                &larr; Back to Website
              </Link>
              <Badge variant="gradient">v1.0</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden mb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#df3124]/10 to-[#921ea2]/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="max-w-3xl">
            <DecorativeAsterisk size={80} className="mb-6" />
            <h2 className="text-5xl font-bold mb-6">
              Welcome to the <GradientText>LEAD UTEC</GradientText> Design System
            </h2>
            <p className="text-xl text-white/80 mb-8">
              A comprehensive design system built for the LEAD UTEC organization, featuring our signature gradient and modern components.
            </p>
            <div className="flex gap-4">
              <Button variant="gradient" size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Documentation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Brand Colors */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-3">Brand Colors</h3>
          <p className="text-white/70 mb-8">Our color palette defines the visual identity of LEAD UTEC.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {colors.map((color) => (
              <div key={color.hex} className="group">
                <div 
                  className="w-full h-32 rounded-xl mb-3 border border-white/10 shadow-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => copyToClipboard(color.hex)}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    {copiedColor === color.hex ? (
                      <Check className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    ) : (
                      <Copy className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>
                <h4 className="font-semibold mb-1">{color.name}</h4>
                <p className="text-sm text-white/60 font-mono">{color.hex}</p>
                <p className="text-xs text-white/40 font-mono">{color.var}</p>
              </div>
            ))}
          </div>

          {/* Gradient Showcase */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4">Signature Gradient</h4>
            <div className="h-32 rounded-xl bg-gradient-to-b from-[#df3124] to-[#921ea2] shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <code className="text-white font-mono text-sm bg-black/30 px-4 py-2 rounded">
                  background: linear-gradient(to bottom, #df3124, #921ea2)
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-3">Typography</h3>
          <p className="text-white/70 mb-8">Clear hierarchy and readable text styles.</p>
          
          <Card>
            <div className="space-y-6">
              <div>
                <h1>Heading 1</h1>
                <p className="text-sm text-white/60 font-mono">3rem / 48px</p>
              </div>
              <div>
                <h2>Heading 2</h2>
                <p className="text-sm text-white/60 font-mono">2.25rem / 36px</p>
              </div>
              <div>
                <h3>Heading 3</h3>
                <p className="text-sm text-white/60 font-mono">1.875rem / 30px</p>
              </div>
              <div>
                <h4>Heading 4</h4>
                <p className="text-sm text-white/60 font-mono">1.5rem / 24px</p>
              </div>
              <div>
                <h5>Heading 5</h5>
                <p className="text-sm text-white/60 font-mono">1.25rem / 20px</p>
              </div>
              <div>
                <p>Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="text-sm text-white/60 font-mono">1rem / 16px</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Buttons */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-3">Buttons</h3>
          <p className="text-white/70 mb-8">Interactive elements with multiple variants and sizes.</p>
          
          <div className="space-y-8">
            {/* Variants */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Variants</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="gradient">Gradient Button</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Sizes</h4>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="gradient" size="sm">Small</Button>
                <Button variant="gradient" size="md">Medium</Button>
                <Button variant="gradient" size="lg">Large</Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h4 className="text-xl font-semibold mb-4">States</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="gradient">Normal</Button>
                <Button variant="gradient" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-3">Cards</h3>
          <p className="text-white/70 mb-8">Container components for grouping content.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <h4 className="text-xl font-semibold mb-2">Default Card</h4>
              <p className="text-white/70 mb-4">Standard card with subtle border.</p>
              <Button variant="primary" size="sm">Action</Button>
            </Card>
            
            <Card variant="gradient-border">
              <h4 className="text-xl font-semibold mb-2">Gradient Border</h4>
              <p className="text-white/70 mb-4">Card with gradient border effect.</p>
              <Button variant="gradient" size="sm">Action</Button>
            </Card>
            
            <Card variant="gradient-bg">
              <h4 className="text-xl font-semibold mb-2">Gradient Background</h4>
              <p className="text-white/90 mb-4">Card with full gradient background.</p>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-[#df3124]">Action</Button>
            </Card>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-3">Form Elements</h3>
          <p className="text-white/70 mb-8">Input fields and form controls.</p>
          
          <Card className="max-w-2xl">
            <div className="space-y-6">
              <Input 
                label="Email Address" 
                type="email" 
                placeholder="your@email.com"
              />
              <Input 
                label="Password" 
                type="password" 
                placeholder="Enter your password"
              />
              <Input 
                label="With Error" 
                type="text" 
                placeholder="Invalid input"
                error="This field is required"
              />
              <div className="flex gap-3">
                <Button variant="gradient">Submit</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Badges */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-3">Badges</h3>
          <p className="text-white/70 mb-8">Small status indicators and labels.</p>
          
          <div className="flex flex-wrap gap-4">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="gradient">Gradient</Badge>
          </div>
        </section>

        {/* Decorative Elements */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-3">Decorative Elements</h3>
          <p className="text-white/70 mb-8">Brand elements and visual accents.</p>
          
          <div className="flex flex-wrap items-center gap-8">
            <DecorativeAsterisk size={40} />
            <DecorativeAsterisk size={60} />
            <DecorativeAsterisk size={80} />
            <DecorativeAsterisk size={100} />
          </div>
        </section>

        {/* Example Usage */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-3">Example Implementation</h3>
          <p className="text-white/70 mb-8">See the design system in action.</p>
          
          <Card variant="gradient-border">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-full md:w-64 h-64 bg-gradient-to-br from-[#df3124]/20 to-[#921ea2]/20 rounded-lg flex items-center justify-center">
                  <DecorativeAsterisk size={120} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <DecorativeAsterisk size={32} />
                  <Badge variant="gradient">Featured</Badge>
                </div>
                <h4 className="text-2xl font-bold mb-3">
                  New Team Member
                </h4>
                <p className="text-white/80 mb-6">
                  Welcome to LEAD UTEC! Our design system showcases the organization&apos;s visual identity, combining a bold gradient palette with modern UI components.
                </p>
                <div className="flex gap-3">
                  <Button variant="gradient">Learn More</Button>
                  <Button variant="outline">Contact</Button>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <DecorativeAsterisk size={32} />
              <div>
                <p className="font-semibold">LEAD UTEC Design System</p>
                <p className="text-sm text-white/60">Built with React &amp; Tailwind CSS</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">
                Back to Website
              </Link>
              <p className="text-white/60">&copy; 2026 LEAD UTEC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
