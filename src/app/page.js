'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import Image from 'next/image';
// import productImage from '../../public/images/product.jpeg';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Scroll animation refs
  const heroRef = useScrollAnimation(0.3);
  const storyRef = useScrollAnimation(0.2);
  const inspirationRef = useScrollAnimation(0.2);
  const featuresRef = useScrollAnimation(0.2);
  const galleryRef = useScrollAnimation(0.2);
  const contactRef = useScrollAnimation(0.2);
  const ctaRef = useScrollAnimation(0.2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background-light">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16 luxury-gradient hero-shadow scroll-fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-secondary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-gold mx-auto mb-6"></div>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-text-dark mb-6 animate-fade-in-luxury">
            Nalanda Radiance
            <span className="block text-accent">Clock Lamp</span>
          </h1>
          <p className="font-accent text-2xl md:text-3xl text-accent mb-8 animate-slide-up-luxury">
            Inspired by Nalanda Gedige
          </p>
          <p className="font-body text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-12 animate-slide-up-luxury">
            Discover my exquisite Nalanda Radiance clock lamp that blends ancient heritage with modern elegance. 
            Each piece is inspired by the timeless architecture of the Nalanda Gedige.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              variant="primary" 
              size="large"
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
      <section ref={storyRef} id="story" className="py-20 px-6 bg-white relative modern-section section-shadow scroll-slide-up">
        <div className="absolute inset-0 bg-gradient-to-br from-background-luxury/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-gold mb-6"></div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Heritage Meets Modern Living
              </h2>
              <p className="font-body text-lg text-text-light mb-6">
                My Nalanda Radiance Clock Lamp is more than just a lighting fixture. It&apos;s a piece of art that 
                tells the story of ancient Sri Lankan architecture, specifically inspired by the 
                magnificent Nalanda Gedige temple.
              </p>
              <p className="font-body text-lg text-text-light mb-8">
                This lamp features intricate carvings and textures that echo the stone architecture 
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
            {/* <Card variant="accent" className="w-fit overflow-hidden">
              <Image
                src={productImage}
                alt="Clock Lamp - product"
                className="block"
                priority
              />
            </Card> */}
            <Card variant="accent" className="h-96 flex items-center justify-center border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-modern">
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

      {/* Inspiration Section */}
      <section ref={inspirationRef} id="inspiration" className="py-20 px-6 bg-background-light relative section-shadow scroll-slide-up">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/2 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card variant="accent" className="order-2 md:order-1 overflow-hidden border-2 border-yellow-500/30 hover:border-yellow-500/50 luxury-shadow">
              <img
                src="/images/nalanda_gedige.jpeg"
                alt="Nalanda Gedige Temple - Inspiration for Clock Lamp"
                className="w-full"
              />
            </Card>
            <div className="order-1 md:order-2 animate-slide-in">
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-gold mb-6"></div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                My Inspiration
              </h2>
              <p className="font-body text-lg text-text-light mb-6">
                The Nalanda Gedige temple, a magnificent architectural marvel from ancient Sri Lanka, 
                serves as the primary inspiration for my Nalanda Radiance Clock Lamp design. This 12th-century temple 
                showcases the perfect blend of Hindu and Buddhist architectural elements.
              </p>
              <p className="font-body text-lg text-text-light mb-8">
                The intricate stone carvings, geometric patterns, and harmonious proportions of Nalanda 
                Gedige have been carefully reinterpreted in our lamp design, creating a piece that 
                honors this cultural heritage while fitting seamlessly into modern interiors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="features" className="py-20 px-6 bg-white relative modern-section section-shadow scroll-slide-up">
        <div className="absolute inset-0 bg-gradient-to-br from-background-luxury/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-gold mx-auto mb-6"></div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              Why Choose My Nalanda Radiance Clock Lamp?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card animate className="text-center p-8 border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-modern">
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
            <Card animate className="text-center p-8 border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-modern">
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
            <Card animate className="text-center p-8 border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-modern">
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
      <section ref={galleryRef} id="gallery" className="py-20 px-6 bg-background-light relative section-shadow scroll-slide-up">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/1 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-gold mx-auto mb-6"></div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              Gallery
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery Item 1 - Front View */}
            <Card animate className="overflow-hidden border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-modern">
              <div className="h-64 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl">🕰️</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Front View
                </h3>
                <p className="font-body text-text-light">
                  Classic Nalanda Radiance clock lamp in its full glory.
                </p>
              </div>
            </Card>

            {/* Gallery Item 2 - Side View */}
            <Card animate className="overflow-hidden border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-modern">
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
            <Card animate className="overflow-hidden border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-modern">
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
            <Card animate className="overflow-hidden border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-modern">
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
            <Card animate className="overflow-hidden border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-modern">
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
            <Card animate className="overflow-hidden border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-modern">
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
      <section ref={contactRef} id="contact" className="py-20 px-6 bg-white relative modern-section section-shadow scroll-slide-up">
        <div className="absolute inset-0 bg-gradient-to-br from-background-luxury/30 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-gold mx-auto mb-6"></div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              Contact Me
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 items-start gap-12">
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
                      38 A, 1st Cross Road, Pamburana<br />
                      Matara, Sri Lanka
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
                      kalinidwidhanage@gmail.com
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
                      +94 758459946
                    </p>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Contact Form */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                Send Me a Message
              </h3>
              <Card className="p-8 border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-modern">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-100 border border-green-400 text-green-700' 
                        : 'bg-red-100 border border-red-400 text-red-700'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block font-body font-bold text-text-dark mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
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
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent font-body"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button 
                    type="submit"
                    variant="primary" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-6 bg-primary relative overflow-hidden section-shadow scroll-slide-up">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent-gold/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-white mx-auto mb-6"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="font-body text-xl text-secondary mb-8">
            Bring the elegance of Nalanda Gedige into your home with my exclusive Nalanda Radiance Clock Lamp. 
            Contact me to place your order or inquire about availability.
          </p>
          <div className="flex justify-center">
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
              Contact Me
            </Button>
          </div>
        </div>
      </section>


    </main>
  )
}
