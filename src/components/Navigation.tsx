import { Home, ListTodo, Lightbulb, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: ListTodo, label: "Tasks", href: "/tasks" },
  { icon: Lightbulb, label: "Insights", href: "/insights" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Navigation() {
  return (
    <nav className="fixed left-0 top-0 h-full w-16 bg-dreamscape-navy/95 backdrop-blur flex flex-col items-center py-8 space-y-8">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-dreamscape-purple to-dreamscape-teal animate-float" />
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          title={item.label}
        >
          <item.icon className="w-5 h-5" />
        </a>
      ))}
    </nav>
  );
}