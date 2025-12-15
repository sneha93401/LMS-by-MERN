import React from 'react';
import { Award, Clock, Users, TrendingUp, BookOpen, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience."
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to course materials and resources."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a vibrant community of learners and get help whenever you need it."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Advance your career with skills that employers are actively seeking."
    },
    {
      icon: BookOpen,
      title: "Practical Projects",
      description: "Apply your knowledge through hands-on projects and real-world scenarios."
    },
    {
      icon: Zap,
      title: "Lifetime Access",
      description: "Get unlimited access to all course content and future updates forever."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">
            WHY LEARNHUB
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Why <span className="text-emerald-400">Choose Us</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We provide everything you need to succeed in your learning journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 hover:border-emerald-500/50"
              >
                <div className="bg-emerald-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}