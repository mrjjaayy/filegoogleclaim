'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import RightColumnManager from '@/components/RightColumnManager'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Image
            src="/keller-postman-logo.webp"
            alt="Keller Postman"
            width={200}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </div>
      </header>

      {/* Hero Section with Side-by-Side Layout */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Information and Calculator */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Google Ads Compensation Claim
              </h1>
              
              <div className="mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  Multiple courts have ruled that Google engaged in unlawful, anticompetitive conduct that may have increased the price paid for search and display advertising through Google.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">• Potential Compensation:</h3>
                    <p className="text-gray-700">Depending on ad spend, eligible businesses could receive <strong>$10,000 or more</strong>.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">• Eligibility:</h3>
                    <p className="text-gray-700">Any company that bought ads on Google on or after August 2016.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">• Zero Upfront Cost:</h3>
                    <p className="text-gray-700">No fees unless we secure compensation for you.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">• Fast, Simple Process:</h3>
                    <p className="text-gray-700">Complete our secure form in under 2 minutes.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-900 mb-8">
                See how much your claim could be worth and take the first step toward reclaiming overpaid ad dollars.
              </p>
            </div>

            {/* Right Column - Calculator or Contact Form */}
            <div className="lg:pl-8">
              <RightColumnManager />
            </div>
          </div>
        </div>
      </section>

      {/* Google Ads Antitrust Claims Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Google Ads Antitrust Claims
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              A federal court has found that Google violated the law by combining its ad-serving, 
              exchange, and bidding platforms into a single system and setting minimum bid 
              thresholds that blocked competing bidders. Many advertisers were left with no choice 
              but to pay inflated rates—even when lower offers were available. Another federal court 
              has also found that Google entered into unlawful deals with other companies that 
              blocked competition for search advertising.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why It Matters</h2>
          <p className="text-lg text-gray-700 mb-8">
            When one company controls every stage of an auction, prices can rise artificially. 
            Businesses—from small startups to large enterprises—have seen their marketing 
            budgets swell because Google&apos;s integrated tools limited true competition.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Act Now</h3>
            <p className="text-lg text-gray-700">
              Time is limited to file your claim. Don&apos;t risk losing your right to file—submit your details now.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Keller Postman Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Keller Postman
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            When you go up against a tech giant, who you choose to represent you matters.
          </p>
          
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700">
              At Keller Postman, we&apos;ve helped thousands of individuals and businesses pursue justice—
              <strong> and win</strong>—against some of the largest and most powerful corporations in America.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Proven Track Record</h3>
              </div>
              <p className="text-gray-700">
                We&apos;ve secured hundreds of millions of dollars for clients in high-stakes litigation against 
                Fortune 500 companies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Elite Legal Talent</h3>
              </div>
              <p className="text-gray-700">
                Our attorneys include former Supreme Court clerks, top trial lawyers, and legal strategists 
                recognized nationwide.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">With You All the Way</h3>
              </div>
              <p className="text-gray-700">
                From your very first sign-up through filing, negotiation, and final resolution, we manage 
                every step—so you're never left in the dark.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">We Don't Back Down</h3>
              </div>
              <p className="text-gray-700">
                We go toe-to-toe with corporate giants—and we don't stop until our clients get the justice 
                they deserve.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <ul className="space-y-4 text-gray-700">
              <li><strong>• Onboarding & Intake:</strong> We'll walk you through the paperwork and get you signed up.</li>
              <li><strong>• Claim Preparation & Filing:</strong> Our team handles evidence gathering, documentation, and submission.</li>
              <li><strong>• Negotiation & Settlement:</strong> We push for the best possible outcome—and stay by your side until you receive it.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-8 text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Power On Your Side</h2>
            <p className="text-lg text-gray-700 italic">
              Don't sign up with just anyone. Choose a firm built to fight—and win—
              against the biggest names in business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/57350327-warren-postman-kp_10000000g80gc001000028.png"
                    alt="Warren Postman"
                    width={200}
                    height={250}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Warren Postman | Managing Partner</h3>
                  <p className="text-gray-700 mb-4">
                    Warren leads the firm's pioneering work in mass arbitration and complex civil litigation. 
                    With a deep understanding of the legal system and a strategic approach to high-volume claims, 
                    Warren has helped transform the way arbitration is used to hold corporations accountable.
                  </p>
                  <p className="text-gray-700">
                    Under his leadership, Keller Postman has built one of the most aggressive and effective 
                    arbitration practices in the country—representing hundreds of thousands of consumers and 
                    employees in individual arbitration claims.
                  </p>
                  <p className="text-gray-700 mt-4">
                    Warren has secured numerous precedent-setting victories compelling companies to honor the 
                    arbitration agreements they created—and has helped deliver millions in settlements for more 
                    than 500,000 clients in just the past two years.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/c26ef5b2-ashley-keller-008_10wu0lw0ls0lw05i00001o.jpg"
                    alt="Ashley Keller"
                    width={200}
                    height={250}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ashley Keller | Founding Partner</h3>
                  <p className="text-gray-700 mb-4">
                    Ashley Keller is a founding partner of Keller Postman and a seasoned trial and appellate lawyer. 
                    He helps guide the strategic direction of the firm and represents clients in complex 
                    product-liability, antitrust, class action, and arbitration matters.
                  </p>
                  <p className="text-gray-700">
                    He also plays a key role in the firm's high-impact arbitration practice, which pursues 
                    individual claims on behalf of consumers and employees subject to arbitration clauses with 
                    class-action waivers. Through this work, the firm has secured millions in settlements for more 
                    than 500,000 clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8 mt-12">
            <Image
              src="/4f74a7fb-us-leading-firm-2024_105k064000000000000028.png"
              alt="US Leading Firm 2024"
              width={120}
              height={80}
              className="h-20 w-auto"
            />
            <Image
              src="/f73d6f1e-superlawyers-knowledge-sq-or-sm_1064064060064000000028.png"
              alt="Super Lawyers"
              width={120}
              height={80}
              className="h-20 w-auto"
            />
            <Image
              src="/c39c7aaa-ntl-top-100_106a06a06a064000002028.png"
              alt="National Top 100"
              width={120}
              height={80}
              className="h-20 w-auto"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <FAQ />
        </div>
      </section>

      {/* How to Start a Claim Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How to Start a Claim</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-kp-blue rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. Fill Out the Form</h3>
              <p className="text-gray-700">Just enter your name and how we can contact you.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-kp-blue rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. Tell Us What Happened</h3>
              <p className="text-gray-700">Answer some quick questions about your use of Google Advertising.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-kp-blue rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">3. Review Important Forms</h3>
              <p className="text-gray-700">Look over and sign the forms we send you.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-kp-blue rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">4. We'll Take It From Here</h3>
              <p className="text-gray-700">Our team will go over your information carefully. If we need more details, we'll get in touch with you soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-kp-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start your claim today—sign up now for free and take the first step towards securing your compensation!
          </h2>
          <button 
            onClick={() => {
              const claimCalculator = document.getElementById('claim-calculator')
              if (claimCalculator) {
                claimCalculator.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-white text-kp-blue font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Start Your Claim Today!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <a href="https://www.kpinjury.com/google-claim-estimate/clkn/https/www.kpinjury.com/termsandconditions/" className="text-kp-blue hover:underline">Terms & Conditions</a>
          </div>
          
          <div className="text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
            <p className="mb-4">
              Keller Postman LLC, 150 N. Riverside Plaza, Suite 4100, Chicago, IL 60606, is responsible for the content of this advertisement. 
              Licensed in the state of Illinois, among others. In states in which the firm is not licensed, the firm will associate with counsel 
              licensed in that state. Not accepting cases in all jurisdictions. No attorney-client relationship is formed by your use of this 
              website or by any communication you send or receive through this site.
            </p>
            <p>
              The content and features on this website shall not be construed as legal advice. The hiring of a lawyer is an important decision 
              that should not be based solely upon advertisements. No representation is made that the quality of the legal services to be 
              performed is greater than the quality of legal services performed by other lawyers. Prior results do not guarantee a similar outcome. 
              Free background information is available upon request.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
} 