import { Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-dark py-16 border-t border-border/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-5 h-5 text-primary" />
              <span className="font-display text-lg font-bold text-secondary-foreground tracking-wide">SILVER BULLET</span>
            </div>
            <p className="font-body text-sm text-silver leading-relaxed">
              Elizabeth Park's trusted neighbourhood barbershop. Precision cuts, friendly service, and a vibe that keeps you coming back.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-secondary-foreground tracking-wider uppercase mb-4">Opening Hours</h4>
            <ul className="font-body text-sm text-silver space-y-2">
              <li className="flex justify-between"><span>Monday – Tuesday</span><span>10am – 6pm</span></li>
              <li className="flex justify-between"><span>Wednesday</span><span>10am – 5pm</span></li>
              <li className="flex justify-between"><span>Thursday – Friday</span><span>10am – 6pm</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>10am – 5:30pm</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>10am – 3pm</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-secondary-foreground tracking-wider uppercase mb-4">Contact</h4>
            <ul className="font-body text-sm text-silver space-y-2">
              <li>
                <a href="tel:0469371755" className="hover:text-primary transition-colors">0469 371 755</a>
              </li>
              <li>
                Unit 3/110 Yorktown Rd
                <br />
                Elizabeth Park SA 5113
              </li>
              <li>Parks Shopping Centre</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/10 pt-8 text-center">
          <p className="font-body text-xs text-silver/60">
            © {new Date().getFullYear()} Silver Bullet Barbershop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
