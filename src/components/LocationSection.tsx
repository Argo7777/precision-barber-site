import { MapPin, Accessibility, Baby, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://squareup.com/appointments/book/silver-bullet-barbershop";

const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold text-primary tracking-[0.2em] uppercase mb-3">Find Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground">Visit the Shop</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden aspect-video lg:aspect-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.7!2d138.6812!3d-34.7115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0b3f1e4c1c1c1%3A0x1234567890abcdef!2s110+Yorktown+Rd%2C+Elizabeth+Park+SA+5113!5e0!3m2!1sen!2sau!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Silver Bullet Barbershop Location"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-secondary-foreground">Address</h3>
                <p className="font-body text-silver text-sm">
                  Unit 3/110 Yorktown Rd, Elizabeth Park SA 5113
                  <br />
                  Inside Parks Shopping Centre
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-secondary-foreground">Phone</h3>
                <a href="tel:0469371755" className="font-body text-silver text-sm hover:text-primary transition-colors">
                  0469 371 755
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-silver">
                <Accessibility className="w-5 h-5 text-primary" />
                <span className="text-sm font-body">Wheelchair Accessible</span>
              </div>
              <div className="flex items-center gap-2 text-silver">
                <Baby className="w-5 h-5 text-primary" />
                <span className="text-sm font-body">Child-Friendly</span>
              </div>
            </div>

            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold w-fit mt-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Your Appointment
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
