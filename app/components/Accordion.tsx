'use client'
import React, { useState } from 'react'
import '../styles/accordion.scss'

interface AccordionProps {
  title: string
  content: string
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <li className={`accordion-item ${isOpen ? 'expanded' : 'collapsed'}`}>
      <h3 className="accordion-title">
        <button
          className="accordion-button"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
        >
          <span className="accordion-title-text">{title}</span>
          <span className="accordion-icon">
            <svg className="accordion-icon-svg" viewBox="0 0 17 8.85"></svg>
          </span>
        </button>
      </h3>
      <div className="accordion-tray">
        <div className="accordion-content">
          <div className="accordion-content-paragraph">
            <p className="typography-body">{content}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Accordion
