"use client"
import Link from 'next/link';
import { useEffect } from 'react';

import "/app/globals.css";

export default function Home() {
  useEffect(() => {
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9ZEBL0ZMYJ');
  }, []);

  return (
    <div>
      <strong className="title">GPT STOCK REPORTS</strong>
      <menu>
          <Link href="/20240716/Tesla">Tesla (2024.07.16)</Link>
          <Link href="/20240716/Apple">Apple (2024.07.16)</Link>
          <Link href="/20240716/Microsoft">Microsoft (2024.07.16)</Link>
          <Link href="/20240716/Amazon">Amazon (2024.07.16)</Link>
          <Link href="/20240716/Alphabet">Alphabet (2024.07.16)</Link>
          <Link href="/20240716/Facebook">Facebook (2024.07.16)</Link>
          <Link href="/20240716/Johnson">Johnson & Johnson (2024.07.16)</Link>
          <Link href="/20240716/Procter">Procter & Gamble (2024.07.16)</Link>
          <Link href="/20240716/CocaCola">Coca-Cola (2024.07.16)</Link>
          <Link href="/20240716/McDonald">McDonald's (2024.07.16)</Link>
          <Link href="/20240716/Visa">Visa (2024.07.16)</Link>
          <Link href="/20240716/Mastercard">Mastercard (2024.07.16)</Link>
          <Link href="/20240716/Intel">Intel (2024.07.16)</Link>
          <Link href="/20240716/Cisco">Cisco Systems (2024.07.16)</Link>
          <Link href="/20240716/ThreeM">3M (2024.07.16)</Link>
      </menu>
    </div>
  );
}
