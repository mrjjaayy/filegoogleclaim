'use client'

import React, { useState, useEffect } from 'react'

export default function ClaimCalculator() {
  const [adSpend, setAdSpend] = useState('')
  const [estimatedClaim, setEstimatedClaim] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Listen for reset events from contact form
    const handleReset = () => {
      setShowResult(false)
      setAdSpend('')
      setEstimatedClaim(null)
    }

    window.addEventListener('claimCalculated', (event: any) => {
      if (event.detail && event.detail.claim === null) {
        handleReset()
      }
    })

    return () => {
      window.removeEventListener('claimCalculated', handleReset)
    }
  }, [])

  const calculateClaim = () => {
    const spend = parseFloat(adSpend.replace(/,/g, ''))
    if (!isNaN(spend) && spend > 0) {
      const claim = spend * 0.3 // 30% of ad spend
      setEstimatedClaim(claim)
      setShowResult(true)
      
      // Store the calculated claim in localStorage for the contact form
      localStorage.setItem('calculatedClaim', claim.toString())
      
      // Dispatch custom event to notify contact form of the update
      window.dispatchEvent(new CustomEvent('claimCalculated', {
        detail: { claim }
      }))
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, '')
    const formatted = new Intl.NumberFormat('en-US').format(parseFloat(value) || 0)
    setAdSpend(value)
    setShowResult(false)
  }

  if (!isMounted) {
    return (
      <div className="form-section">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Google Ads Compensation Claim
          </h2>
          <p className="text-gray-700 mb-6">
            To see how much your potential claim could be worth, please enter how much you have approximately spent on Google Ads since 2016 until today
          </p>
        </div>
        <div className="space-y-6">
          <div className="input-field bg-gray-100 animate-pulse h-12"></div>
          <div className="btn-primary w-full bg-gray-300 animate-pulse h-12"></div>
        </div>
      </div>
    )
  }

  return (
    <div id="claim-calculator" className="form-section">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Google Ads Compensation Claim
        </h2>
        <p className="text-gray-700 mb-6">
          To see how much your potential claim could be worth, please enter how much you have approximately spent on Google Ads since 2016 until today
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Your best estimation is okay. We will be able to get exact figures later.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="e.g. 25,000"
            value={adSpend}
            onChange={handleInputChange}
            className="input-field text-center text-lg"
            disabled={showResult}
          />
        </div>
        
        <div className="text-center">
          <button
            onClick={calculateClaim}
            disabled={!adSpend || parseFloat(adSpend.replace(/,/g, '')) <= 0}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            See How Much Claim is Worth
          </button>
        </div>
        
        {!showResult && (
          <div className="text-xs text-gray-500 text-center">
            <p>
              attorney advertising — Potential compensation is based on eligibility, the individual facts of each case, and the outcome of the litigation. Results not guaranteed.
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 