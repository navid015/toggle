import React, { useState } from "react";

import style from "./faqs.css";
import { faqsData } from "./data";
import FAQ from "./FAQ";
const FAQS = () => {
  const [faqs, setFaqs] = useState(faqsData);

  return (
    <main className='container'>
      <section className='faqs'>
        <h1>FAQs</h1>
        {faqs.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
};

export default FAQS;