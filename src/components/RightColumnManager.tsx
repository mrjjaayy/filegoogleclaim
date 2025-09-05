'use client'

import React, { useState, useEffect } from 'react'
import ClaimCalculator from './ClaimCalculator'
import ContactForm from './ContactForm'

export default function RightColumnManager() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Listen for calculation events
    const handleClaimCalculated = (event: any) => {
      if (event.detail && typeof event.detail.claim === 'number' && event.detail.claim > 0) {
        setShowContactForm(true)
      } else {
        setShowContactForm(false)
      }
    }

    window.addEventListener('claimCalculated', handleClaimCalculated)

    return () => {
      window.removeEventListener('claimCalculated', handleClaimCalculated)
    }
  }, [])

  if (!isMounted) {
    return (
      <div className="form-section">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Google Ads Compensation Claim
          </h2>
          <p className="text-gray-700 mb-6">
            Loading...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="right-column-container">
      {showContactForm ? <ContactForm /> : <ClaimCalculator />}
    </div>
  )
} 