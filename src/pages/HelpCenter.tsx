import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, BookOpen, Users, MessageCircle, Mail } from "lucide-react";
import Seo from "../components/Seo";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: "1",
    question: "How do I get started with a roadmap?",
    answer: "Simply browse our collection of roadmaps and choose one that matches your career goals. Each roadmap is designed to take you from beginner to expert level with clear milestones and learning objectives.",
    category: "getting-started"
  },
  {
    id: "2",
    question: "Are the roadmaps free to use?",
    answer: "Yes! All our roadmaps are completely free and will remain free forever. We believe in making quality education accessible to everyone.",
    category: "pricing"
  },
  {
    id: "3",
    question: "How long does it take to complete a roadmap?",
    answer: "The duration varies depending on the roadmap and your current skill level. Most roadmaps take 3-12 months to complete, but you can learn at your own pace.",
    category: "learning"
  },
  {
    id: "4",
    question: "Can I download roadmaps as PDF?",
    answer: "Yes! You can download any roadmap as a PDF by clicking the download button on the roadmap page. This allows you to study offline or share with others.",
    category: "features"
  },
  {
    id: "5",
    question: "How often are roadmaps updated?",
    answer: "We regularly update our roadmaps to reflect the latest industry trends and best practices. Major updates typically happen quarterly.",
    category: "updates"
  },
  {
    id: "6",
    question: "Can I suggest a new roadmap?",
    answer: "Absolutely! We welcome suggestions for new roadmaps. You can contact us through our contact form or email us directly at hello@roadmappro.com.",
    category: "suggestions"
  },
  {
    id: "7",
    question: "Do you offer certificates upon completion?",
    answer: "Currently, we don't offer certificates, but we're working on implementing a certification system. For now, you can track your progress through the roadmap milestones.",
    category: "certificates"
  },
  {
    id: "8",
    question: "How do I track my progress?",
    answer: "Each roadmap has clear milestones and checkpoints. You can mark items as completed as you progress through the learning path.",
    category: "progress"
  }
];

const categories = [
  { id: "all", name: "All Questions", icon: HelpCircle },
  { id: "getting-started", name: "Getting Started", icon: BookOpen },
  { id: "learning", name: "Learning", icon: Users },
  { id: "features", name: "Features", icon: MessageCircle },
  { id: "pricing", name: "Pricing", icon: Mail },
  { id: "updates", name: "Updates", icon: HelpCircle },
  { id: "suggestions", name: "Suggestions", icon: HelpCircle },
  { id: "certificates", name: "Certificates", icon: HelpCircle },
  { id: "progress", name: "Progress", icon: HelpCircle }
];

export default function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaqs, setExpandedFaqs] = useState<Set<string>>(new Set());

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (faqId: string) => {
    const newExpanded = new Set(expandedFaqs);
    if (newExpanded.has(faqId)) {
      newExpanded.delete(faqId);
    } else {
      newExpanded.add(faqId);
    }
    setExpandedFaqs(newExpanded);
  };

  return (
    <>
      <Seo
        title="Help Center - RoadmapPro"
        description="Find answers to frequently asked questions about RoadmapPro. Get help with roadmaps, features, and learning paths."
        keywords={["help", "faq", "support", "questions", "roadmappro"]}
      />
      {/* FAQPage Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
      
      <div className="min-h-screen bg-slate-900 text-slate-200">
        {/* Hero Section */}
        <section className="relative py-20 px-4 border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-600/10"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-6">
              How can we <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">help</span> you?
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Find answers to common questions and get the support you need to make the most of your learning journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-slate-200 placeholder-slate-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 px-4 border-b border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? "bg-green-500/20 border-green-500/50 text-green-400"
                        : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-50 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="font-medium text-slate-200">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                        expandedFaqs.has(faq.id) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFaqs.has(faq.id) && (
                    <div className="px-6 pb-4">
                      <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-slate-500" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-300 mb-2">
                  No questions found
                </h3>
                <p className="text-slate-500 max-w-md mx-auto">
                  Try adjusting your search terms or browse all questions to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-50 mb-6">
              Still need help?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the most out of RoadmapPro.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Support
            </a>
          </div>
        </section>
      </div>
    </>
  );
} 