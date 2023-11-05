import React from 'react'
import Accordion from './Accordion'
import '../styles/faq.scss'

const faqData = [
  {
    title: 'What is Apple TV+?',
    content:
      'Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.',
  },
  {
    title: 'How can I watch it?',
    content:
      'Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices. Just open the app, click or tap Apple TV+, and enjoy the shows and movies. You can also watch Apple TV+ on streaming platforms, popular smart TVs, and AirPlay-enabled TVs with the Apple TV app — or watch online at tv.apple.com.',
  },
  {
    title: 'What does it cost?',
    content:
      'That all depends on which offer you choose. (1) If you buy an Apple device, Apple TV+ is included free for 3 months. (2) A monthly subscription is just $9.99 per month after a free seven-day trial.',
  },
  {
    title: 'Can I share with my family?',
    content:
      'Of course. Apple TV+ lets you share your subscription with up to five family members.',
  },
  {
    title: 'Are there commercials? And can I watch on demand?',
    content:
      'Apple Originals are always commercial-free. New movies and series are added every Wednesday and Friday, though some shows release all episodes at once. You can watch them on demand anytime, anywhere.',
  },
  {
    title: 'Do I need an Apple TV 4K?',
    content:
      'No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV app on your favorite devices.',
  },
  {
    title: 'Can I download to watch offline?',
    content:
      'Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere, anytime without a Wi-Fi connection.',
  },
]

const Faq: React.FC = () => {
  return (
    <section className="section section-faq theme-light">
      <div className="section-content">
        <div className="column large-centered large-10 medium-9 small-12">
          <h2 className="typography-app-headline">Questions? Answers.</h2>
        </div>
        <ul id="accordion" className="accordion" role="list">
          {faqData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Faq
