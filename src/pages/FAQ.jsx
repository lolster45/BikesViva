//React...
import { useState } from 'react';

//Styles...
import '../styles/FAQ.scss'

const FAQ = () => {

    const faqData = [
        {
          question: "How did this all start?",
          answer: `We started this project as a way to give back. Even today, there are still many kids that don't have a bike, or have never had one. We wanted to change that! What started as five bikes from friends and neighbors has grown to 100+.
      
          Our focus is to get kids on bikes, free of cost, while promoting the values of recycling, sustainability, and community.
      
          100BikesForKids is home-grown, a father/daughter project that grew big!`,
        },
        {
          question: "Why not purchase new bikes to give away?",
          answer: `There are many well-loved bikes sitting in garages and backyards already, disused, waiting for a new life. Though they aren't brand new, they are fixable, only requiring minor repairs, or a few new parts. Our focus is reviving bikes, but we'd love to supplement with new ones if they're donated.`,
        },
        {
          question: "How much does it cost to fix a bike?",
          answer: `On average it costs approximately $40-60 per bike. This accounts for any needed spare parts, repairs, and effort to get a bike rolling and into the hands of a deserving kid. Some cost a little more, some cost a little less to fix.`,
        },
        {
          question: "What kind of parts does a bike usually need?",
          answer: `Typically, what needs replacement are "non-durables". Things like tires, tubes, grips, saddles (seats), and chains deteriorate fast, making bikes unappealing or difficult to ride. Cables and chains get rusty, seats and grips tear, and tires and tubes wear down and leak air. A few new parts can revive an old bike, giving it a second life! We plan to purchase and have a back-stock of parts to repair the bikes more efficiently.`,
        },
        {
          question: "What's your background?",
          answer: `Dad is a professional bicycle mechanic with almost a decade of experience. Daughter is an 11-year-old that loves making friends and helping people. Mom (Deaf Education teacher) has now jumped into the fray to help with the admin and communications duties!`,
        },
        {
          question: "Are you a non profit?",
          answer: `Yes, we are registered as Viva Bikes Austin, a 501(c)3 non-profit, and can provide an IRS tax-deductible receipt with all donations!`,
        },
        {
          question: "How can I help?",
          answer: `You can support our project by clicking our donate button, bringing us bikes to fix and give away, or helping us with your time and skills. Our long-term goal is to expand this project for adolescents and adults. Please spread the word!`,
        },
        {
          question: "100+ bikes given away to kids, now what?",
          answer: `Although this was supposed to be a summer project, it's grown much bigger than we could have possibly imagined! The requests are still coming, and people are still generously donating bikes to our cause. As a result of the response from our community, we decided to take it as far as we can, so we're looking for ways to get there. Help us fulfill our vision!`,
        },
        {
          question: "Need a bike or want to donate one?",
          answer: `Please send us a message through our contact form on the home page.`,
        }
    ];
      
      
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-page">

            <h1>Frequently Asked Questions</h1>

            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div
                            className="faq-question"
                            onClick={() => handleToggle(index)}
                        >
                            <h2>{item.question}</h2>
                            <span>{activeIndex === index ? '−' : '+'}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
