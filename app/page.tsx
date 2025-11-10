
"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Youtube, Twitch, Twitter, Mail, Play, Target, Crown, Calendar, Sparkles, Send, ExternalLink, ShieldCheck } from "lucide-react";
import "./globals.css";

const brand = {
  name: "assyrianMOTM",
  tagline: "Precision • Speed • Headshots",
  colors: { primary: "from-blue-600 to-blue-400", accent: "from-red-600 to-red-400" },
  logoUrl: "/logo.jpg",
  email: "business@assyrianmotm.gg",
  socials: { youtube: "https://youtube.com/@assyrianmotm", twitch: "https://twitch.tv/assyrianmotm", twitter: "https://x.com/assyrianmotm" },
};

const clips = [
  { title: "Crisp Headshot — CS2", id: "v2pi1Jn7UAQ" },
  { title: "Clean 4K — Highlights", id: "AgSJ1FFOlcA" },
  { title: "Silky Flick — One Tap", id: "HDwl_6mqhaA" },
] as const;

function YouTubeEmbed({ id }: { id: string }) {
  const src = useMemo(() => `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autohide=1&showinfo=0`, [id]);
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-black">
      <div className="aspect-video">
        <iframe className="h-full w-full" src={src} title="YouTube video player" frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
    </div>
  );
}

function GradientText({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return <span className={`bg-gradient-to-r ${accent ? brand.colors.accent : brand.colors.primary} bg-clip-text text-transparent`}>{children}</span>;
}

function LogoReveal() {
  return (
    <motion.div className="relative h-12 w-12" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
      <motion.div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-70"
        style={{ background: "conic-gradient(from 0deg, rgba(59,130,246,.35), transparent 55%)" }}
        animate={{ rotate: 360 }} transition={{ duration: 8, ease: "linear", repeat: Infinity }} />
      <motion.div className="pointer-events-none absolute inset-0 rounded-xl"
        animate={{ boxShadow: ["0 0 0 0 rgba(59,130,246,0.35)", "0 0 0 14px rgba(59,130,246,0)"] }} transition={{ duration: 2.4, repeat: Infinity }} />
      <img src={brand.logoUrl} alt={`${brand.name} logo`} className="relative z-10 h-12 w-12 rounded-xl object-cover ring-1 ring-zinc-800" />
    </motion.div>
  );
}

function NavBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-3 rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/50">
          <div className="flex items-center justify-between px-4 py-2">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-7 w-7 overflow-hidden rounded-lg ring-1 ring-zinc-800">
                <img src={brand.logoUrl} alt={`${brand.name} logo`} className="h-full w-full object-cover" />
              </div>
              <span className="text-sm font-semibold tracking-wide"><GradientText>{brand.name}</GradientText></span>
            </a>
            <nav className="hidden items-center gap-5 text-sm text-zinc-300 md:flex">
              <a href="#clips" className="hover:text-white">Clips</a>
              <a href="#schedule" className="hover:text-white">Schedule</a>
              <a href="#sponsors" className="hover:text-white">Sponsors</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <a href={brand.socials.youtube} target="_blank" rel="noreferrer" className="rounded-xl border border-zinc-700 px-3 py-1 hover:bg-zinc-900">Subscribe</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\\n\\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:business@assyrianmotm.gg?subject=Creator%20Inquiry%20—%20assyrianMOTM&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div id="top" className="min-h-screen bg-[#0a0b0e] text-white scroll-smooth pt-20">
      <NavBar />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-400/20 to-transparent" />
        <motion.img src={brand.logoUrl} alt="logo watermark" className="pointer-events-none absolute right-[-8%] top-[-12%] w-[560px] opacity-[0.08] blur-xl"
          initial={{ y: -10, opacity: 0.06 }} animate={{ y: [-10, 0, -10] }} transition={{ duration: 12, repeat: Infinity }} />
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-4xl font-black tracking-tight sm:text-6xl flex items-center gap-3">
                  <LogoReveal />
                  <GradientText>{brand.name}</GradientText>
                </h1>
                <p className="mt-3 max-w-2xl text-lg text-zinc-300">
                  High-impact Counter-Strike highlights with <span className="font-semibold">precision headshots</span>, clean edits, and an Assyrian identity.
                  Daily clips. Real skill. <span className="text-zinc-100">MOTM mentality.</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Badge className="rounded-full bg-zinc-900/70 px-3 py-1 text-sm backdrop-blur">Precision</Badge>
                  <Badge className="rounded-full bg-zinc-900/70 px-3 py-1 text-sm backdrop-blur">Speed</Badge>
                  <Badge className="rounded-full bg-zinc-900/70 px-3 py-1 backdrop-blur">Headshots</Badge>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={brand.socials.youtube} target="_blank" rel="noreferrer"><Button className="rounded-2xl px-5"><Youtube className="mr-2 h-5 w-5" /> YouTube</Button></a>
                  <a href={brand.socials.twitch} target="_blank" rel="noreferrer"><Button variant="secondary" className="rounded-2xl bg-zinc-100 text-zinc-900 hover:bg-white"><Twitch className="mr-2 h-5 w-5" /> Twitch</Button></a>
                  <a href={brand.socials.twitter} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl border-zinc-700 text-white hover:bg-zinc-900"><Twitter className="mr-2 h-5 w-5" /> X / Twitter</Button></a>
                </div>
              </div>
              <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="mt-8 w-full md:mt-0 md:max-w-md">
                <div className="relative rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-4 shadow-2xl">
                  <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-600/30 via-blue-400/10 to-transparent blur-lg" />
                  <div className="relative">
                    <YouTubeEmbed id={clips[0].id} />
                    <div className="mt-3 flex items-center justify-between text-sm text-zinc-400">
                      <span className="inline-flex items-center gap-2"><Play className="h-4 w-4" /> Latest Short</span>
                      <a className="inline-flex items-center gap-1 hover:text-white" href={`https://youtube.com/shorts/${clips[0].id}`} target="_blank" rel="noreferrer">
                        Watch on YouTube <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-950/40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-10 md:grid-cols-3">
          {[
            { icon: Target, title: "Aim Discipline", desc: "Daily routines • VOD review • One-tap focus" },
            { icon: Crown, title: "Creator Identity", desc: "Assyrian roots • Clean design • Consistent brand" },
            { icon: ShieldCheck, title: "Sponsor Ready", desc: "Media kit • Posting cadence • Clear value" },
          ].map((item, idx) => (
            <Card key={idx} className="border-zinc-800 bg-zinc-900/50">
              <CardHeader><CardTitle className="flex items-center gap-3 text-xl"><item.icon className="h-5 w-5" /> {item.title}</CardTitle></CardHeader>
              <CardContent><p className="text-zinc-300">{item.desc}</p></CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="clips" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold"><GradientText>Highlights</GradientText></h2>
            <p className="mt-2 text-zinc-400">Quick, clean, sponsor-friendly edits — optimized for Shorts and Reels.</p>
          </div>
          <a href={brand.socials.youtube} target="_blank" rel="noreferrer" className="hidden md:block">
            <Button className="rounded-2xl"><Youtube className="mr-2 h-5 w-5" /> See More</Button>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clips.map((c, i) => (
            <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }} viewport={{ once: true }}>
              <Card className="border-zinc-800 bg-zinc-900/60">
                <CardContent className="p-3">
                  <YouTubeEmbed id={c.id} />
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-zinc-300">{c.title}</span>
                    <a className="text-sm text-zinc-400 hover:text-white inline-flex items-center gap-1" href={`https://www.youtube.com/watch?v=${c.id}`} target="_blank" rel="noreferrer">
                      Open <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="schedule" className="border-y border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-950 to-black">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 flex items-center gap-3"><Calendar className="h-5 w-5" /><h2 className="text-2xl font-bold tracking-tight">Stream Schedule</h2></div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { day: "Mon", time: "6–8 PM CT", type: "Stream / Ranked Grind" },
              { day: "Wed", time: "6–8 PM CT", type: "AIM Routine + VOD Review" },
              { day: "Fri", time: "7–10 PM CT", type: "Highlights & Community Games" },
            ].map((slot) => (
              <Card key={slot.day} className="border-zinc-800 bg-zinc-900/60">
                <CardHeader><CardTitle className="flex items-center gap-2">
                  <span className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 px-2 py-0.5 text-sm font-semibold text-black">{slot.day}</span>
                  <span className="text-sm text-zinc-300">{slot.time}</span>
                </CardTitle></CardHeader>
                <CardContent><p className="text-zinc-300">{slot.type}</p></CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-400">Timezone: America/Chicago (CT) — adjust as needed.</p>
        </div>
      </section>

      <section id="sponsors" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex items-center gap-3"><Sparkles className="h-5 w-5" /><h2 className="text-2xl font-bold tracking-tight">Sponsor-Ready Pitch</h2></div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="border-zinc-800 bg-zinc-900/60">
            <CardHeader><CardTitle>Why {brand.name}?</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-zinc-300">
              <p>High-impact CS2 highlights with clean, modern edits and a unique cultural identity. The content is family-friendly, brand-safe, and built for Shorts/Vertical distribution.</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Daily posting cadence across YouTube, TikTok, and Reels</li>
                <li>Signature look: high contrast, slow-mo impact frame, logo watermark</li>
                <li>Clear value: precision headshots, fast time-to-action, strong retention</li>
              </ul>
              <div className="pt-2 text-sm text-zinc-400">Media Kit available on request.</div>
            </CardContent>
          </Card>
          <Card className="border-zinc-800 bg-zinc-900/60">
            <CardHeader><CardTitle>Sample Outreach (Copy & Send)</CardTitle></CardHeader>
            <CardContent>
              <div className="rounded-xl bg-black/50 p-4 text-sm leading-relaxed text-zinc-300">
                <p className="font-semibold">Subject: Creator Partnership — {brand.name}</p>
                <p className="mt-2">Hi Team, I’m {brand.name}. I create high-impact Counter-Strike highlights with precise headshots and clean edits. I’d love to collaborate via affiliate codes, product testing, or creator partnerships.</p>
                <p className="mt-2">Recent clips: YouTube Shorts + Reels (links on site). Happy to share analytics.</p>
                <p className="mt-2">Thanks for your time — looking forward to connecting.</p>
                <p className="mt-2">— {brand.name}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={`mailto:${brand.email}?subject=Creator%20Partnership%20Inquiry%20—%20${brand.name}`}><Button className="rounded-2xl"><Mail className="mr-2 h-5 w-5" /> Email Me</Button></a>
                <a href={brand.socials.twitter} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl border-zinc-700 text-white hover:bg-zinc-900"><Twitter className="mr-2 h-5 w-5" /> DM on X</Button></a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="border-y border-zinc-800 bg-zinc-950/40">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8"><h2 className="text-2xl font-bold"><GradientText>About</GradientText></h2>
            <p className="mt-2 max-w-3xl text-zinc-300">CS2 Headshot Machine ⚡ Precision • Speed • {brand.name}. High-impact Counter-Strike highlights with clean edits, cinematic kills, and Assyrian identity. Daily uploads — welcome to the MOTM mentality.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-zinc-800 bg-zinc-900/60"><CardHeader><CardTitle>Content Pillars</CardTitle></CardHeader><CardContent><ul className="list-inside list-disc text-zinc-300"><li>CS2 Highlights</li><li>Gameplay Breakdowns & Tips</li><li>Cinematic Showcase Edits</li></ul></CardContent></Card>
            <Card className="border-zinc-800 bg-zinc-900/60"><CardHeader><CardTitle>Signature Style</CardTitle></CardHeader><CardContent><ul className="list-inside list-disc text-zinc-300"><li>Instant first frame: show the kill</li><li>Slow-mo impact on headshot</li><li>High contrast + glow on crosshair</li></ul></CardContent></Card>
            <Card className="border-zinc-800 bg-zinc-900/60"><CardHeader><CardTitle>Hashtags</CardTitle></CardHeader><CardContent><div className="rounded-xl bg-black/50 p-3 text-sm text-zinc-300">#CS2 #CounterStrike #CSGO #Gaming #Headshot #Flick #FPS #{brand.name}</div></CardContent></Card>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8"><h2 className="text-2xl font-bold"><GradientText accent>Contact</GradientText></h2><p className="mt-2 max-w-2xl text-zinc-300">Brands, managers, and collab requests — reach out below. I typically respond within 24 hours.</p></div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="border-zinc-800 bg-zinc-900/60">
            <CardHeader><CardTitle className="flex items-center gap-2"><Mail className="h-5 w-5" /> Email</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  <Input type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <Textarea placeholder="Tell me about the collab" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} required />
                <div className="flex items-center gap-3">
                  <Button type="submit" className="rounded-2xl"><Send className="mr-2 h-5 w-5" /> Send</Button>
                  {submitted && <span className="text-sm text-green-400">Thanks! Your email app should be opening now.</span>}
                </div>
              </form>
            </CardContent>
          </Card>
          <Card className="border-zinc-800 bg-zinc-900/60">
            <CardHeader><CardTitle>Quick Links</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <a href={brand.socials.youtube} target="_blank" rel="noreferrer"><Button className="rounded-2xl"><Youtube className="mr-2 h-5 w-5" /> YouTube</Button></a>
              <a href={brand.socials.twitch} target="_blank" rel="noreferrer"><Button variant="secondary" className="rounded-2xl bg-zinc-100 text-zinc-900 hover:bg-white"><Twitch className="mr-2 h-5 w-5" /> Twitch</Button></a>
              <a href={brand.socials.twitter} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl border-zinc-700 text-white hover:bg-zinc-900"><Twitter className="mr-2 h-5 w-5" /> X / Twitter</Button></a>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-400 md:flex-row">
          <div>© {new Date().getFullYear()} <span className="font-semibold text-white">{brand.name}</span>. Built for highlights, clips, and partnerships.</div>
          <div className="flex items-center gap-3">
            <a className="hover:text-white" href="#clips">Clips</a>
            <a className="hover:text-white" href="#schedule">Schedule</a>
            <a className="hover:text-white" href="#sponsors">Sponsors</a>
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
