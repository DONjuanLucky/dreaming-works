import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { PlusCircle, ListTodo as ListTodoIcon, Lightbulb as LightbulbIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-dreamscape-navy text-white font-['Montserrat']">
      <Navigation />
      
      <main className="pl-16 min-h-screen">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-dreamscape-navy via-dreamscape-purple/20 to-dreamscape-teal/20 relative overflow-hidden">
          {/* Animated Background Stars */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                <div className="h-1 w-1 bg-white rounded-full opacity-60" />
              </div>
            ))}
          </div>

          {/* Logo */}
          <div className="w-full max-w-xl mx-auto mb-6 animate-fade-in"> {/* Reduced mb-12 to mb-6 */}
            <img
              src="/lovable-uploads/f42d6934-ef01-4318-88b8-93826b11a153.png"
              alt="Dreamscape Logo"
              className="w-full h-auto animate-float"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center animate-fade-in"> {/* Reduced mb-6 to mb-4 */}
            Where Visions
            <span className="bg-gradient-to-r from-dreamscape-purple to-dreamscape-teal bg-clip-text text-transparent"> Take Flight</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl text-center animate-fade-in"> {/* Reduced mb-12 to mb-8 */}
            Transform your dreams into reality with our innovative vision board platform.
            Combine creativity with productivity to achieve your goals.
          </p>
          
          <Button
            size="lg"
            className="group relative bg-gradient-to-r from-dreamscape-purple to-dreamscape-teal hover:opacity-90 transition-all duration-300 animate-fade-in
              before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-md
              hover:before:border-dreamscape-teal hover:before:scale-105 before:transition-all before:duration-300
              transform hover:scale-105"
          >
            <PlusCircle className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
            Create Your Board
          </Button>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-4 md:px-8 bg-dreamscape-navy/95">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300
                  transform hover:scale-105 hover:shadow-lg hover:shadow-dreamscape-teal/20
                  group cursor-pointer"
              >
                <feature.icon className="w-10 h-10 text-dreamscape-teal mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-dreamscape-teal transition-colors">{feature.title}</h3>
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
    icon: ListTodoIcon,
    title: "Track Progress",
    description: "Turn your dreams into actionable tasks and track your journey."
  },
  {
    icon: LightbulbIcon,
    title: "Get Insights",
    description: "Receive personalized insights and suggestions to achieve your goals."
  }
];

export default Index;