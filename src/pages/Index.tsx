import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-dreamscape-navy text-white font-['Montserrat']">
      <Navigation />
      
      <main className="pl-16 min-h-screen">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-dreamscape-navy via-dreamscape-purple/20 to-dreamscape-teal/20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center animate-fade-in">
            Where Visions
            <span className="bg-gradient-to-r from-dreamscape-purple to-dreamscape-teal bg-clip-text text-transparent"> Take Flight</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl text-center animate-fade-in">
            Transform your dreams into reality with our innovative vision board platform.
            Combine creativity with productivity to achieve your goals.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-dreamscape-purple to-dreamscape-teal hover:opacity-90 transition-opacity animate-fade-in"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Create Your Board
          </Button>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-4 md:px-8 bg-dreamscape-navy/95">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg bg-white/5 backdrop-blur hover:bg-white/10 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-dreamscape-teal mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const features = [
  {
    icon: PlusCircle,
    title: "Create & Visualize",
    description: "Build beautiful vision boards that inspire and motivate you every day."
  },
  {
    icon: ListTodo,
    title: "Track Progress",
    description: "Turn your dreams into actionable tasks and track your journey."
  },
  {
    icon: Lightbulb,
    title: "Get Insights",
    description: "Receive personalized insights and suggestions to achieve your goals."
  }
];

export default Index;