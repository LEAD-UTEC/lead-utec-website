'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { GradientText } from '@/components/GradientText';
import { FAQ } from '@/components/FAQ';
import { ProjectCard } from '@/components/ProjectCard';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import { MetricsDisplay } from '@/components/MetricsDisplay';
import { Section, SectionHeader } from '@/components/Section';
import {
  Heart,
  Users,
  Zap,
  Target,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

/* ───────────────────────────── DATA ───────────────────────────── */

const projects = [
  {
    title: 'STEM in Aula 1.0',
    type: 'Program',
    axis: 'LEAD Academia',
    description:
      'Two-session educational program bringing technology and computer science to high school students in Lima and beyond, reducing the digital divide through hands-on workshops.',
  },
  {
    title: 'Introduction to Competitive Programming Course',
    type: 'Program',
    date: 'April 16, 2025',
    axis: 'Academic Excellence',
    description:
      'Intensive technical course developing competitive programming skills through structured training and practice.',
  },
  {
    title: 'Competitive Programming Panel',
    type: 'Conference',
    date: 'May 10, 2025',
    axis: 'Academic Excellence',
    description:
      'Panel discussion with competitive programming experts sharing strategies, experiences, and career pathways.',
  },
  {
    title: 'Data Leaders',
    type: 'Event',
    date: 'July 19, 2025',
    axis: 'Professional Dev',
    description:
      'Professional event connecting students with data and analytics leaders, exploring career opportunities in data science.',
  },
  {
    title: 'Data Leaders 2',
    type: 'Event',
    date: 'December 13, 2025',
    axis: 'Professional Dev',
    description:
      'Second edition bringing together data professionals to guide, inspire, and connect students interested in Data Science careers.',
  },
  {
    title: 'GirlTech Coffee Talks',
    type: 'Coffee Talk',
    date: 'July 18, 2025',
    axis: "Women's Excellence",
    description:
      'Conversational space creating role models for women in tech, providing a safe environment to explore career paths in STEM.',
  },
  {
    title: 'TecHer Coffee Talks',
    type: 'Coffee Talk',
    date: 'October 12, 2025',
    axis: "Women's Excellence",
    description:
      'Intimate networking event featuring a prominent woman in tech sharing her journey, fostering dialogue and mentorship.',
  },
  {
    title: 'LEAD Welcome',
    type: 'Event',
    date: 'May 2, 2025',
    axis: 'Leadership',
    description:
      "Welcome event introducing prospective and new members to LEAD UTEC's culture, values, and development opportunities.",
  },
  {
    title: 'LEAD UTEC Update',
    type: 'Event',
    date: 'September 12, 2025',
    axis: 'Leadership',
    description:
      'Internal organizational update event for LEAD Team members, reinforcing culture and strategic direction.',
  },
];

const teamMembers = [
  { name: 'Luis Maquera', role: 'President' },
  { name: 'Christian Estrada', role: 'Vice-President' },
  { name: 'Diego Miranda', role: 'Head of Operations' },
  { name: 'Nayeli Guerrero', role: 'Head of Marketing' },
  { name: 'Adriana Alvarado', role: 'Head of Product' },
  { name: 'Nicole Yucra', role: 'Head of Talent' },
  { name: 'Luciana Melgarejo', role: 'Team Member' },
  { name: 'Alanis Espinoza', role: 'Team Member' },
  { name: 'Osmar Vilchez', role: 'Team Member' },
  { name: 'Ronaldo Diaz', role: 'Team Member' },
  { name: 'Stefano Alvarado', role: 'Team Member' },
  { name: 'Eurymar Umbria', role: 'Team Member' },
  { name: 'Geremid Flores', role: 'Team Member' },
  { name: 'Axel Ylachoque', role: 'Team Member' },
  { name: 'William Yalico', role: 'Team Member' },
  { name: 'Celeste Caballero', role: 'Team Member' },
];

const metrics = [
  { value: '9', label: 'Projects Completed', suffix: '' },
  { value: '16', label: 'Active Team Members', suffix: '' },
  { value: '1600', label: 'Community Reach', suffix: '+' },
  { value: '6', label: 'Thematic Axes', suffix: '' },
  { value: '5', label: 'Departments', suffix: '' },
];

const faqItems = [
  {
    question: 'Who can join LEAD UTEC?',
    answer:
      "LEAD UTEC is open to all UTEC students across all schools (Computer Science, Engineering, and Business) and all academic years. We look for students with leadership potential, commitment to impact, and alignment with our values. Anyone can join our open community; joining the active LEAD Team requires going through our selective application process.",
  },
  {
    question: "What's the time commitment?",
    answer:
      "For LEAD Community members, there's no time commitment\u2014engage as much or as little as you want. For LEAD Team members, expect 4-6 hours per week depending on your Squad and role. We value quality execution over quantity of hours. Our Squad-based model means you work in focused sprints on specific projects, not endless meetings.",
  },
  {
    question: 'Do I need technical skills to join?',
    answer:
      "Not at all. While we're focused on tech leadership, we bring together diverse skill sets\u2014engineers, business students, designers, communicators, and more. What matters is your willingness to learn, execute, and contribute to team success.",
  },
  {
    question: 'How is LEAD UTEC different from other student organizations?',
    answer:
      "LEAD UTEC operates like a startup, with a unique approach to student leadership. We're organized around Squads (project teams) that execute real initiatives with measurable outcomes. Every member leads or contributes to projects. We prioritize action over perfection, community over ego, and building over just learning.",
  },
  {
    question: 'When does the application process open?',
    answer:
      'We typically recruit new LEAD Team members at the start of each academic cycle. Follow us on Instagram (@lead.utec) or LinkedIn to stay updated on application deadlines and information sessions.',
  },
  {
    question: 'What opportunities does LEAD UTEC provide?',
    answer:
      'LEAD UTEC members gain access to: leadership experience through Squad project ownership, mentorship from experienced peers and industry professionals, professional development, networking with Peru\'s tech ecosystem, global connections through LEAD Global network, and a community of ambitious peers.',
  },
  {
    question: "Can I participate if I'm not a UTEC student?",
    answer:
      "Active LEAD Team membership is currently limited to UTEC students. However, we welcome non-UTEC students to join our open community, attend public events, and follow our content. We're exploring partnerships that may open opportunities for students from other universities.",
  },
];

/* ────────────────────────────── PAGE ──────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010b3d] text-white">
      <Navbar />

      {/* ═══════════════════ 1. HERO SECTION ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#df3124]/8 via-transparent to-[#921ea2]/8" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#df3124]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#921ea2]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building Latin America&apos;s{' '}
              <GradientText>Tech Leaders</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
              LEAD UTEC is a student-led organization at Universidad de Ingenieria y Tecnologia (UTEC, Peru) where ambitious students don&apos;t just learn&mdash;they build, lead, and create real impact in Latin America&apos;s tech ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://chat.whatsapp.com/EYwMAAPAymZ8H20AqneKZg" target="_blank" rel="noopener noreferrer">
                <Button variant="gradient" size="lg">
                  Join the Community
                </Button>
              </a>
              <Button variant="outline" size="lg">
                Join the Team <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </div>
          </div>
        </div>

      </section>

      {/* ═══════════════════ 2. ORGANIZATION OVERVIEW ═══════════════════ */}
      <Section id="about" className="bg-white/[0.03]">
        <SectionHeader
          title="Who We Are"
          subtitle="LEAD UTEC is a student chapter of LEAD and an official student organization at Universidad de Ingenieria y Tecnologia (UTEC, Peru). We exist to develop technological leaders who create real impact in Latin America and beyond."
        />

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card variant="gradient-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-[#df3124]/20 to-[#921ea2]/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-[#df3124]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-white/70 leading-relaxed">
                  We connect students with real challenges, world-class mentors, and an ambitious team oriented toward impact. Our goal is to develop tech leaders from the university stage&mdash;equipping them with the mindset, skills, and network to build solutions that matter.
                </p>
              </div>
            </div>
          </Card>

          <Card variant="gradient-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-[#df3124]/20 to-[#921ea2]/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-[#df3124]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-white/70 leading-relaxed">
                  To be the leading student organization for tech leadership in Peru and Latin America&mdash;recognized for the quality of our members, the real impact of our initiatives, and our capacity to form leaders who build, not just talk.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-[#df3124]" />
                <h4 className="text-lg font-bold">Community over ego</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Collective growth takes priority over individual recognition.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-[#df3124]" />
                <h4 className="text-lg font-bold">Action over perfection</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                We value experimentation and fast execution over analysis paralysis.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-[#df3124]" />
                <h4 className="text-lg font-bold">Leadership as service</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Leading means serving the team, creating opportunities, and unlocking others&apos; potential.
              </p>
            </Card>
          </div>
        </div>

      </Section>

      {/* ═══════════════════ 4. OUR IMPACT ═══════════════════ */}
      <Section id="impact">
        <SectionHeader
          title="Our Impact"
          subtitle="Since our founding in 2025, we've moved fast and built real projects that create value for our members and community. We measure success not in events held, but in skills developed, connections made, and opportunities unlocked."
          centered
        />

        {/* Metrics */}
        <div className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-8">By the Numbers</h3>
          <MetricsDisplay metrics={metrics} />
        </div>

        {/* Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Completed Projects (2025)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

      </Section>

      {/* ═══════════════════ 5. MEET THE TEAM ═══════════════════ */}
      <Section id="team" className="bg-white/[0.03]">
        <SectionHeader
          title="Meet the Team"
          subtitle="LEAD UTEC is built by a diverse team of UTEC students who bring together expertise in technology, business, and leadership. Together, we create real impact."
          centered
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </Section>

      {/* ═══════════════════ 6. PARTNERSHIPS & ECOSYSTEM ═══════════════════ */}
      <Section id="partners">
        <SectionHeader
          title="Partnerships & Ecosystem"
          subtitle="LEAD UTEC doesn't operate in isolation. We're part of a thriving ecosystem that connects students, universities, industry, and global networks."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* UTEC */}
          <Card variant="gradient-border">
            <h3 className="text-xl font-bold mb-3">Universidad de Ingenieria y Tecnologia (UTEC)</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              LEAD UTEC is an official student organization at UTEC, Peru&apos;s premier engineering and technology university. Founded in 2011, UTEC has quickly become one of Latin America&apos;s top engineering schools.
            </p>
            <a
              href="https://utec.edu.pe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#df3124] hover:text-[#c72a49] transition-colors inline-flex items-center gap-1"
            >
              Visit UTEC <ExternalLink className="w-4 h-4" />
            </a>
          </Card>

          {/* LEAD Global */}
          <Card variant="gradient-border">
            <h3 className="text-xl font-bold mb-3">LEAD Global Network</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              LEAD UTEC is a student chapter of LEAD, a global network fostering tech leadership and professional development. Our members gain access to international opportunities, global mentorship networks, and a community of ambitious tech leaders.
            </p>
            <a
              href="https://www.leadmindset.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#df3124] hover:text-[#c72a49] transition-colors inline-flex items-center gap-1"
            >
              Visit LEAD Global <ExternalLink className="w-4 h-4" />
            </a>
          </Card>
        </div>

        {/* Partner CTA */}
        <div className="text-center">
          <a href="mailto:leadutec@utec.edu.pe">
            <Button variant="outline" size="lg">
              Partner with Us <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </a>
        </div>
      </Section>

      {/* ═══════════════════ 7. GET INVOLVED ═══════════════════ */}
      <Section id="get-involved" className="bg-white/[0.03]">
        <SectionHeader
          title="Get Involved"
          subtitle="Whether you're a UTEC student looking to lead projects or someone who wants to stay connected — there's a place for you at LEAD UTEC."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEAD Community */}
          <Card variant="gradient-border">
            <div className="text-center">
              <Badge variant="primary" className="mb-4">Open to Everyone</Badge>
              <h4 className="text-2xl font-bold mb-3">LEAD UTEC Community</h4>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Follow us on social media, attend our events, and explore what LEAD UTEC is all about. No commitment required — just curiosity and interest in tech leadership.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="https://chat.whatsapp.com/EYwMAAPAymZ8H20AqneKZg" target="_blank" rel="noopener noreferrer">
                  <Button variant="gradient" size="md">
                    WhatsApp <ExternalLink className="w-4 h-4 ml-2 inline" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/lead.utec" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="md">
                    Instagram <ExternalLink className="w-4 h-4 ml-2 inline" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/company/leadatutec/" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="md">
                    LinkedIn <ExternalLink className="w-4 h-4 ml-2 inline" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>

          {/* LEAD Team */}
          <Card variant="gradient-bg">
            <div className="text-center">
              <Badge variant="gradient" className="mb-4">Selective</Badge>
              <h4 className="text-2xl font-bold mb-3">LEAD UTEC Team</h4>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                Ready to lead projects and create real impact? Apply to join the LEAD Team. We evaluate leadership potential, commitment, and alignment with our values.
              </p>
              <Button variant="outline" size="md" className="border-white text-white hover:bg-white hover:text-[#df3124]">
                Apply Now <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* ═══════════════════ 8. FAQ ═══════════════════ */}
      <Section id="faq">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about joining and participating in LEAD UTEC."
          centered
        />

        <div className="max-w-3xl mx-auto mb-12">
          <FAQ items={faqItems} />
        </div>

        <div className="text-center">
          <p className="text-white/60 mb-4">
            Still have questions? Reach out to us directly.
          </p>
          <a href="mailto:leadutec@utec.edu.pe">
            <Button variant="outline" size="md">
              Contact Us <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </a>
        </div>
      </Section>

      {/* ═══════════════════ 9. FOOTER ═══════════════════ */}
      <Footer />
    </div>
  );
}
