import React from "react";
import { motion } from "framer-motion";
import { FileText, Shield, Users, AlertTriangle, CheckCircle, Scale } from "lucide-react";
import Seo from "../components/Seo";

export default function TermsOfService() {
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
        title="Terms of Service - RoadmapPro"
        description="Read our terms of service to understand the rules and guidelines for using RoadmapPro's developer roadmaps and services."
        keywords={["terms", "service", "conditions", "agreement", "roadmappro"]}
      />
      
      <div className="min-h-screen bg-slate-900 text-slate-200">
        {/* Hero Section */}
        <section className="relative py-20 px-4 border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10"></div>
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
              Terms of <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Service</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto"
            >
              Please read these terms carefully before using our services. By using RoadmapPro, you agree to these terms.
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
                  <FileText className="w-6 h-6 mr-3 text-orange-400" />
                  Acceptance of Terms
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    By accessing and using RoadmapPro ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p>
                    These Terms of Service ("Terms") govern your use of our website and services. By using our services, you agree to these terms and our Privacy Policy.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-blue-400" />
                  Description of Service
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    RoadmapPro provides educational content in the form of learning roadmaps for developers and technology professionals. Our service includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Curated learning paths and roadmaps</li>
                    <li>Educational content and resources</li>
                    <li>Interactive learning tools</li>
                    <li>Community features and discussions</li>
                    <li>Downloadable content and materials</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                  User Responsibilities
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>As a user of our service, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the service for lawful purposes only</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not interfere with or disrupt the service</li>
                    <li>Provide accurate information when required</li>
                    <li>Maintain the security of your account</li>
                    <li>Not use the service to distribute harmful content</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-purple-400" />
                  Intellectual Property
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    All content on RoadmapPro, including but not limited to text, graphics, logos, roadmaps, and software, is the property of RoadmapPro or its content suppliers and is protected by copyright laws.
                  </p>
                  <p>
                    You may use our content for personal, non-commercial purposes. However, you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Reproduce, distribute, or modify our content without permission</li>
                    <li>Use our content for commercial purposes</li>
                    <li>Remove or alter copyright notices</li>
                    <li>Create derivative works without authorization</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-yellow-400" />
                  Disclaimers and Limitations
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    <strong>Educational Content:</strong> While we strive to provide accurate and up-to-date information, our content is for educational purposes only. We do not guarantee the accuracy, completeness, or usefulness of any information.
                  </p>
                  <p>
                    <strong>No Warranty:</strong> The service is provided "as is" without any warranties, express or implied. We disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                  </p>
                  <p>
                    <strong>Limitation of Liability:</strong> In no event shall RoadmapPro be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the service.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-cyan-400" />
                  Privacy and Data
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                  <p>
                    By using our service, you consent to the collection and use of your information as described in our Privacy Policy.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Prohibited Uses</h2>
                <div className="space-y-4 text-slate-300">
                  <p>You may not use our service to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on the rights of others</li>
                    <li>Transmit harmful, offensive, or inappropriate content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with the proper functioning of the service</li>
                    <li>Use automated tools to access the service</li>
                    <li>Distribute spam or unsolicited communications</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Termination</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    We may terminate or suspend your access to our service immediately, without prior notice, for any reason, including without limitation if you breach the Terms.
                  </p>
                  <p>
                    Upon termination, your right to use the service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive termination.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Governing Law</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Any disputes arising from these Terms or your use of the service shall be resolved in the courts of San Francisco County, California.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Changes to Terms</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date.
                  </p>
                  <p>
                    Your continued use of the service after any changes constitutes acceptance of the new Terms. We encourage you to review these Terms periodically.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Contact Information</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-slate-800/50 p-6 rounded-lg">
                    <p><strong>Email:</strong> legal@roadmappro.com</p>
                    <p><strong>Address:</strong> 123 Tech Street, Suite 100, San Francisco, CA 94105</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Severability</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect and enforceable.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Entire Agreement</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and RoadmapPro regarding the use of our service.
                  </p>
                  <p>
                    If you have any questions or concerns about these Terms, please contact us before using our service.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
} 