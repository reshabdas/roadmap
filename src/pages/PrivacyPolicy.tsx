import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Users, Database, Globe } from "lucide-react";
import Seo from "../components/Seo";

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <Seo
        title="Privacy Policy - RoadmapPro"
        description="Learn how RoadmapPro collects, uses, and protects your personal information. Your privacy is important to us."
        keywords={["privacy", "policy", "data protection", "gdpr", "roadmappro"]}
      />
      
      <div className="min-h-screen bg-slate-900 text-slate-200">
        {/* Hero Section */}
        <section className="relative py-20 px-4 border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-600/10"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-slate-50 mb-6"
            >
              Privacy <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto"
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </motion.p>
            <motion.div variants={itemVariants} className="text-sm text-slate-500">
              Last updated: {new Date().toLocaleDateString()}
            </motion.div>
          </motion.div>
        </section>

        {/* Content */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="prose prose-invert prose-lg max-w-none"
            >
              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-purple-400" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use our website and services</li>
                    <li>Contact us for support</li>
                    <li>Sign up for our newsletter</li>
                    <li>Participate in surveys or feedback</li>
                  </ul>
                  <p>
                    We also automatically collect certain information when you visit our website, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Device information</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-blue-400" />
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and improve our services</li>
                    <li>Personalize your experience</li>
                    <li>Communicate with you about updates and features</li>
                    <li>Analyze usage patterns to enhance our platform</li>
                    <li>Ensure security and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-green-400" />
                  Information Sharing
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements</li>
                    <li>To protect our rights and safety</li>
                    <li>With trusted service providers who assist in operating our website</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-yellow-400" />
                  Data Security
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Secure hosting and infrastructure</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-cyan-400" />
                  Data Retention
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
                  </p>
                  <p>
                    When we no longer need your personal information, we will securely delete or anonymize it.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-orange-400" />
                  Your Rights
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Access:</strong> Request a copy of your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at privacy@roadmappro.com.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Cookies and Tracking</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and features</li>
                    <li>Improve website performance and security</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Children's Privacy</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Changes to This Policy</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                  <p>
                    We encourage you to review this policy periodically to stay informed about how we protect your information.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Contact Us</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="bg-slate-800/50 p-6 rounded-lg">
                    <p><strong>Email:</strong> privacy@roadmappro.com</p>
                    <p><strong>Address:</strong> 123 Tech Street, Suite 100, San Francisco, CA 94105</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
} 