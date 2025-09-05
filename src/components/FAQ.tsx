'use client'

import React, { useState, useEffect } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Who qualifies for a Google Ads Compensation Claim?",
    answer: "Any business that purchased ads on Google in August 2016 or later may qualify for a claim. Our firm will represent businesses of all sizes."
  },
  {
    question: "What kind of compensation can I expect?",
    answer: "You may be entitled to up to triple the amount of damages. We believe that most eligible businesses could recover up to 30% of their ad spend on Google Ads."
  },
  {
    question: "Are there time limits on filing a claim?",
    answer: "Deadlines vary by state. Acting quickly increases your chances of a successful claim."
  },
  {
    question: "How much will this cost me?",
    answer: "We work on a contingency fee basis — meaning you pay nothing unless we win your case. Your consultation is free, and there are no upfront costs."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!isMounted) {
    return (
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 bg-gray-100 animate-pulse h-16"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-kp-blue focus:ring-inset"
            >
              <span className="font-semibold text-gray-900">{item.question}</span>
              <span className="ml-4 flex-shrink-0">
                {openIndex === index ? (
                  <svg className="h-6 w-6 text-kp-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </span>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4">
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 