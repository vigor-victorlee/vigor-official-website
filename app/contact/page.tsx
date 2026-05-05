"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Scheduler, { type Slot } from "@/components/Scheduler";
import BookingForm from "@/components/BookingForm";

export default function ContactPage() {
  const [slot, setSlot] = useState<Slot | null>(null);

  return (
    <>
      <Nav />
      <main className="contact-main">
        <section className="contact-hero">
          <div className="container-wide">
            <div className="contact-eyebrow">
              <span className="dot" />
              CONSULTATION · 30 MINUTES · NO DECK
            </div>
            <h1 className="contact-title">
              Thirty minutes.
              <br />
              <span className="contact-title-accent">Your data. Our engineer.</span>
            </h1>
            <p className="contact-sub">
              No deck, no pitch — just an engineer answering questions. Bring a real
              problem and we&apos;ll architect the fix on the call.
            </p>
          </div>
        </section>

        <section className="contact-board">
          <div className="container-wide">
            <div className="contact-grid">
              <div className="contact-col contact-col-sch">
                <Scheduler selected={slot} onSelect={setSlot} />
              </div>
              <div className="contact-col contact-col-form">
                <BookingForm slot={slot} onClear={() => setSlot(null)} />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-alt">
          <div className="container-wide">
            <div className="contact-alt-grid">
              <div className="contact-alt-card">
                <div className="contact-alt-label">EMAIL</div>
                <a href="mailto:victorlee@vigordigital.org" className="contact-alt-link">
                  victorlee@vigordigital.org
                </a>
                <a href="mailto:info@vigordigital.org" className="contact-alt-link">
                  info@vigordigital.org
                </a>
              </div>
              <div className="contact-alt-card">
                <div className="contact-alt-label">PHONE · WHATSAPP</div>
                <a href="tel:+60111113198" className="contact-alt-link">
                  +60 11-1113 1981
                </a>
                <a
                  href="https://wa.me/601111131981"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-alt-link"
                >
                  WhatsApp →
                </a>
              </div>
              <div className="contact-alt-card">
                <div className="contact-alt-label">PENANG HQ</div>
                <p className="contact-alt-addr">
                  L3A-2, Level 3A, SPICE Arena
                  <br />
                  180 Jalan Tun Dr Awang
                  <br />
                  11900 Relau, Pulau Pinang
                  <br />
                  Malaysia
                </p>
              </div>
              <div className="contact-alt-card">
                <div className="contact-alt-label">RESPONSE SLA</div>
                <p className="contact-alt-addr">
                  We respond to every booking within 24 hours during the work week.
                  Bookings made over the weekend are answered on Monday morning, MYT.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
