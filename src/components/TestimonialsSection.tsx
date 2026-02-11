import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Amazing cut... attention to detail was solid. Will definitely be coming back!",
    author: "Siddharth G.",
  },
  {
    text: "Quick, reasonable price, and very friendly service 10/10. Best barber in Elizabeth Park.",
    author: "Ronnie",
  },
  {
    text: "Always walk out looking fresh. The fades here are next level, highly recommend Silver Bullet.",
    author: "Michael T.",
  },
  {
    text: "Great with kids too, very patient and professional. My son loves going there now.",
    author: "Sarah K.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold text-primary tracking-[0.2em] uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Wall of 5-Stars</h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-sm font-body text-muted-foreground">4.9 on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-8 relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-card-foreground leading-relaxed mb-4">"{review.text}"</p>
              <p className="text-sm font-body font-semibold text-muted-foreground">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
