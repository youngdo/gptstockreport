import React, { useEffect } from 'react';
import Link from 'next/link';
import "/app/globals.css";
import Head from 'next/head';

export default function Johnson() {
  useEffect(() => {
    setTimeout(()=>{
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-9ZEBL0ZMYJ');
    },200)
  }, []);
  return (
    <div>
      <Head>
        <title>Johnson & Johnson Stock Report | gptstockreport</title>
        <meta name="description" content="Johnson & Johnson stock report for 2024.07.16, including legal battles, acquisitions, product recalls, and safety concerns." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9ZEBL0ZMYJ"></script>
      </Head>
      <Link href="/" className="back">Home</Link>
      <section>
        <h1>Johnson & Johnson: Legal Battles, Acquisitions, and Product Recalls</h1>
        <h2>Legal Issues:</h2>
        <p>Johnson & Johnson (J&J) faces ongoing legal challenges. A trial over opioid marketing and distribution in New Hampshire has been delayed to September 2024 due to COVID-19 concerns <a href="https://apnews.com" target="_blank" rel="noopener noreferrer">[AP News]</a>.</p>
        <p>The company recently offered a $6.5 billion settlement to potentially resolve most talc cancer lawsuits against them, with a deadline for plaintiffs to vote in July 2024 <a href="https://www.cbsnews.com" target="_blank" rel="noopener noreferrer">[CBS News]</a>.</p>
        <h2>Acquisitions and Product Development:</h2>
        <p>J&J bolstered their atopic dermatitis (eczema) treatment options by acquiring Yellow Jersey Therapeutics <a href="https://www.jnj.com/news" target="_blank" rel="noopener noreferrer">[J&J press releases]</a>.</p>
        <p>This acquisition demonstrates their focus on expanding their product portfolio in the dermatology field.</p>
        <p>Additionally, they received FDA and EU approval for SIRTURO<sup>&reg;</sup> (bedaquiline) for treating drug-resistant tuberculosis <a href="https://www.jnj.com/news" target="_blank" rel="noopener noreferrer">[J&J press releases]</a>.</p>
        <h2>Product Recalls and Safety Concerns:</h2>
        <p>J&J issued a voluntary recall of some sunscreen products due to trace amounts of benzene, a carcinogen <a href="https://www.independent.co.uk" target="_blank" rel="noopener noreferrer">[Independent]</a>, <a href="https://www.cbsnews.com" target="_blank" rel="noopener noreferrer">[CBS News]</a>.</p>
        <p>This highlights ongoing concerns about product safety and potential quality control issues.</p>
        <p>The FDA also restricted the use of their COVID-19 vaccine due to a rare blood clot risk. The vaccine can now only be given in specific situations <a href="https://www.cbsnews.com" target="_blank" rel="noopener noreferrer">[CBS News]</a>.</p>
        <h2>Overall:</h2>
        <p>Johnson & Johnson's current news cycle is mixed. They're making strategic acquisitions and receiving approvals for new treatments, but are also grappling with legal battles and product recalls. The company needs to address safety concerns and ongoing legal issues to maintain public trust.</p>
      </section>
    </div>
  );
}
