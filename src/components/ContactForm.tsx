'use client'

import React, { useState, useEffect } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [isMounted, setIsMounted] = useState(false)
  const [calculatedClaim, setCalculatedClaim] = useState<number | null>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Check for existing calculation on mount
    const checkStoredClaim = () => {
      const storedClaim = localStorage.getItem('calculatedClaim')
      if (storedClaim && parseFloat(storedClaim) > 0) {
        setCalculatedClaim(parseFloat(storedClaim))
      } else {
        setCalculatedClaim(null)
      }
    }
    
    checkStoredClaim()

    // Listen for custom event when calculation changes
    const handleClaimUpdate = (event: any) => {
      if (event.detail && typeof event.detail.claim === 'number' && event.detail.claim > 0) {
        setCalculatedClaim(event.detail.claim)
        setShowForm(true)
      } else {
        setCalculatedClaim(null)
        setShowForm(false)
      }
    }

    // Listen for storage changes
    const handleStorageChange = () => {
      checkStoredClaim()
    }

    window.addEventListener('claimCalculated', handleClaimUpdate)
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('claimCalculated', handleClaimUpdate)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('https://formspree.io/f/xvgbvlbo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          calculatedClaim: calculatedClaim ? formatCurrency(calculatedClaim) : 'N/A',
          _replyto: formData.email,
          _subject: 'New Google Ads Compensation Claim Submission'
        })
      })

      if (response.ok) {
        setSubmitMessage('Thank you! We will reach out to help get your claim filed.')
        setFormData({ firstName: '', lastName: '', email: '', phone: '' })
      } else {
        setSubmitMessage('There was an error submitting your form. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.phone

  // Always render when called by RightColumnManager
  if (!isMounted) {
    return (
      <div className="form-section">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 mb-2">Loading...</p>
        </div>
      </div>
    )
  }

  const displayAmount = calculatedClaim || 30000

  return (
    <div id="contact-form" className="form-section">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 mb-2">
              We believe your claim could be worth up to
            </p>
            <p className="text-4xl font-bold text-kp-blue mb-4">
              {formatCurrency(displayAmount)}
            </p>
            <p className="text-base text-gray-600 mb-4">
              Please fill out the form below to start your claim.
            </p>
            <button
              onClick={() => {
                setShowForm(false)
                setCalculatedClaim(null)
                localStorage.removeItem('calculatedClaim')
                
                // Dispatch event to reset calculator
                window.dispatchEvent(new CustomEvent('claimCalculated', {
                  detail: { claim: null }
                }))
              }}
              className="text-kp-blue underline text-sm"
            >
              Calculate a different amount
            </button>
          </div>

          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitMessage.includes('successfully') 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="Your First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="input-field"
              />
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="input-field"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="input-field"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="input-field"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Sign Up for a Claim'}
              </button>
            </div>

            <div className="text-xs text-gray-600 leading-relaxed">
              <p className="mb-3">
                <strong>The estimated potential recovery tool estimates the maximum possible recovery based on the ad spend you submit. The case may settle for a significantly lower percentage.</strong> We may follow up with you by phone and text pursuant to our <a href="https://www.claimforge.ai/google/terms-of-service" className="text-kp-blue underline">terms and conditions</a>. By signing up, you agree to our <a href="https://www.claimforge.ai/google/terms-of-service" className="text-kp-blue underline">terms and conditions</a> and <a href="https://www.claimforge.ai/google/privacy-p" className="text-kp-blue underline">privacy policy</a>.
              </p>
              <p>
                By clicking 'Sign Up for a Claim', you are representing that you are interested in pursuing a legal claim against Google. You are not permitted to click "Sign Up for a Claim" if you work for Google or are an agent, directly or indirectly, for Google or Google's attorneys.
              </p>
            </div>
          </form>
        </div>
  )
} 