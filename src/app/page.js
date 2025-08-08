'use client';
import Header from '../components/Header';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-text-dark mb-6 animate-fade-in">
            Clock Lamp
          </h1>
          <p className="font-accent text-2xl md:text-3xl text-accent mb-8 animate-slide-up">
            Inspired by Nalanda Gedige
          </p>
          <p className="font-body text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-12 animate-slide-up">
            Discover our exquisite clock lamps that blend ancient heritage with modern elegance. 
            Each piece is inspired by the timeless architecture of Nalanda Gedige.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button variant="primary" size="large">
              View Gallery
            </Button>
            <Button 
              variant="accent" 
              size="large"
              onClick={() => {
                const element = document.querySelector('#story');
                if (element) {
                  const headerHeight = 64;
                  const elementPosition = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Learn Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Product Story Section */}
      <section id="story" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Heritage Meets Modern Living
              </h2>
              <p className="font-body text-lg text-text-light mb-6">
                Our Clock Lamp is more than just a lighting fixture. It's a piece of art that 
                tells the story of ancient Sri Lankan architecture, specifically inspired by the 
                magnificent Nalanda Gedige temple.
              </p>
              <p className="font-body text-lg text-text-light mb-8">
                Each lamp features intricate carvings and textures that echo the stone architecture 
                of this historic temple, bringing a touch of heritage elegance to your modern home.
              </p>
              <Button 
                variant="primary"
                onClick={() => {
                  const element = document.querySelector('#gallery');
                  if (element) {
                    const headerHeight = 64;
                    const elementPosition = element.offsetTop - headerHeight;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                View Gallery
              </Button>
            </div>
            <Card variant="accent" className="h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🕰️</span>
                </div>
                <p className="font-body text-text-light">Product Image Placeholder</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-background-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Why Choose Our Clock Lamp?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card animate className="text-center p-8">
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                Heritage Design
              </h3>
              <p className="font-body text-text-light">
                Inspired by the ancient architecture of Nalanda Gedige, this lamp tells a story of 
                cultural heritage and timeless beauty.
              </p>
            </Card>
            <Card animate className="text-center p-8">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                Premium Quality
              </h3>
              <p className="font-body text-text-light">
                Crafted with the finest materials and attention to detail, ensuring durability and 
                beauty that lasts for generations.
              </p>
            </Card>
            <Card animate className="text-center p-8">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                Modern Integration
              </h3>
              <p className="font-body text-text-light">
                Designed to seamlessly integrate into modern living spaces while maintaining the 
                authentic heritage aesthetic.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Gallery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery Item 1 - Front View */}
            <Card animate className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl">🕰️</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Front View
                </h3>
                <p className="font-body text-text-light">
                  Classic clock lamp in its full glory.
                </p>
              </div>
            </Card>

            {/* Gallery Item 2 - Side View */}
            <Card animate className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-6xl">🕰️</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Side Profile
                </h3>
                <p className="font-body text-text-light">
                  Elegant side view showing craftsmanship.
                </p>
              </div>
            </Card>

            {/* Gallery Item 3 - Detail Close-up */}
            <Card animate className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <span className="text-6xl">🕰️</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Detail Close-up
                </h3>
                <p className="font-body text-text-light">
                  Intricate carvings and textures.
                </p>
              </div>
            </Card>

            {/* Gallery Item 4 - Living Room Setting */}
            <Card animate className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <span className="text-6xl">🕰️</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Living Room Setting
                </h3>
                <p className="font-body text-text-light">
                  Perfect for modern living spaces.
                </p>
              </div>
            </Card>

            {/* Gallery Item 5 - Bedroom Setting */}
            <Card animate className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                <span className="text-6xl">🕰️</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Bedroom Ambiance
                </h3>
                <p className="font-body text-text-light">
                  Creates warm, inviting atmosphere.
                </p>
              </div>
            </Card>

            {/* Gallery Item 6 - Study/Office Setting */}
            <Card animate className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl">🕰️</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Study/Office Setting
                </h3>
                <p className="font-body text-text-light">
                  Elegant lighting for work spaces.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-background-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-text-dark">Address</h4>
                    <p className="font-body text-text-light">
                      123 Heritage Street<br />
                      Colombo, Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-text-dark">Email</h4>
                    <p className="font-body text-text-light">
                      info@clocklamp.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-text-dark">Phone</h4>
                    <p className="font-body text-text-light">
                      +94 11 234 5678
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body font-bold text-text-dark mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent font-body"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-body font-bold text-text-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent font-body"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-body font-bold text-text-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent font-body"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="font-body text-xl text-secondary mb-8">
            Bring the elegance of Nalanda Gedige into your home with our exclusive Clock Lamp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="large">
              Order Now
            </Button>
            <Button 
              variant="outline" 
              size="large" 
              className="text-secondary border-secondary hover:bg-secondary hover:text-text-dark"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  const headerHeight = 64;
                  const elementPosition = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-text-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">Clock Lamp</h3>
              <p className="font-body text-text-light">
                Heritage-inspired lighting for modern homes.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold mb-4">Products</h4>
              <ul className="font-body text-text-light space-y-2">
                <li>Clock Lamp</li>
                <li>Specifications</li>
                <li>Dimensions</li>
                <li>Materials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold mb-4">Company</h4>
              <ul className="font-body text-text-light space-y-2">
                <li>Our Story</li>
                <li>Heritage</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold mb-4">Connect</h4>
              <ul className="font-body text-text-light space-y-2">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Pinterest</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-text-light mt-8 pt-8 text-center">
            <p className="font-body text-text-light">
              © 2024 Clock Lamp. All rights reserved. Inspired by Nalanda Gedige.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
