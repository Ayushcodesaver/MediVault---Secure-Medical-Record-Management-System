import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Shield, Lock, FileCheck, Zap, Users, TrendingUp } from "lucide-react";

/**
 * MediVault Home Page - Landing Page
 * Design: Modern Healthcare Minimalism with green/cream palette
 * - Hero section with value proposition
 * - Feature highlights
 * - Call-to-action buttons
 * - Footer with navigation
 */
export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-primary">MediVault</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#security" className="text-foreground hover:text-primary transition-colors">Security</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={() => navigate("/login")}
              className="border-primary text-primary hover:bg-primary/5"
            >
              Login
            </Button>
            <Button 
              onClick={() => navigate("/login")}
              className="bg-primary text-primary-foreground hover:opacity-90"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full">
                <span className="text-sm font-medium text-primary">Blockchain-Secured Healthcare</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                Secure Medical Records, <span className="text-primary">Verified Trust</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MediVault prevents medical record fraud using blockchain technology. Store, share, and verify your medical documents with complete control and transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => navigate("/login")}
                  className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-6 text-base"
                >
                  Start Securing Records
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-sm font-medium">Record Verified</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Hash: 0x7f3a9b2c...</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-sm font-medium">Blockchain Confirmed</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Block: 15,847,293</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-sm font-medium">Access Logged</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">2 authorized views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">Powerful Features</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage and secure your medical records with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-elevated p-8 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-bold">End-to-End Encryption</h4>
              <p className="text-muted-foreground">
                All your medical records are encrypted and stored securely. Only you control who has access.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-elevated p-8 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-bold">Immutable Records</h4>
              <p className="text-muted-foreground">
                Blockchain technology ensures records cannot be modified. Any tampering is immediately detected.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-elevated p-8 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-bold">Instant Verification</h4>
              <p className="text-muted-foreground">
                Verify the authenticity of any medical document in seconds using blockchain hashes.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card-elevated p-8 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-bold">Easy Sharing</h4>
              <p className="text-muted-foreground">
                Generate shareable links with custom permissions and expiration times for healthcare providers.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="card-elevated p-8 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-bold">Complete Audit Trail</h4>
              <p className="text-muted-foreground">
                Every access, share, and modification is logged. Full transparency and accountability.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="card-elevated p-8 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-bold">Multi-Role Support</h4>
              <p className="text-muted-foreground">
                Support for patients, doctors, hospitals, and insurance companies with role-based access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-serif font-bold">Enterprise-Grade Security</h3>
              <p className="text-lg text-muted-foreground">
                MediVault uses industry-leading security standards to protect your sensitive medical information.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">SHA-256 Hashing</p>
                    <p className="text-sm text-muted-foreground">Cryptographic hashing for data integrity</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Blockchain Verification</p>
                    <p className="text-sm text-muted-foreground">Immutable ledger for fraud prevention</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">OTP Authentication</p>
                    <p className="text-sm text-muted-foreground">Secure phone-based login with time-limited codes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Manus OAuth Integration</p>
                    <p className="text-sm text-muted-foreground">Secure authentication with Manus platform</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 border border-border">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-muted-foreground">Uptime Guarantee</p>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">256-bit</div>
                  <p className="text-muted-foreground">Encryption Standard</p>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Monitoring & Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Ready to Secure Your Records?</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join thousands of patients and healthcare providers using MediVault to prevent medical record fraud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/login")}
              className="bg-primary-foreground text-primary hover:opacity-90 px-8 py-6 text-base"
            >
              Create Account
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-serif font-bold">MediVault</h4>
              </div>
              <p className="text-sm text-muted-foreground">Securing medical records with blockchain technology.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 MediVault. All rights reserved. Securing healthcare, one record at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
