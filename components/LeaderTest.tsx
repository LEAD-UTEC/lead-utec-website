'use client';

import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Input } from './Input';
import { Badge } from './Badge';
import { GradientText } from './GradientText';
import { supabase } from '@/lib/supabase';
import {
  Sparkles,
  Hammer,
  Users,
  BarChart3,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Instagram,
} from 'lucide-react';

type Archetype = 'visionary' | 'builder' | 'connector' | 'strategist';

interface ArchetypeInfo {
  name: string;
  tagline: string;
  description: string;
  thriveIn: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ARCHETYPES: Record<Archetype, ArchetypeInfo> = {
  visionary: {
    name: 'El Visionario',
    tagline: 'Ves lo que otros aún no imaginan.',
    description:
      'Lideras pintando una imagen convincente del futuro. Floreces cuando el problema es ambiguo y lo que está en juego es grande. Tu superpoder: unir a un equipo en torno a una idea que ayer no existía.',
    thriveIn: 'LEAD Product, líderes de ejes temáticos, incubación de nuevas iniciativas.',
    icon: Sparkles,
  },
  builder: {
    name: 'El Constructor',
    tagline: 'Conviertes ideas en cosas entregadas.',
    description:
      'Lideras haciendo. Prefieres prototipar antes que planificar, y el camino más rápido de cero a uno te emociona. Tu superpoder: momentum — mueves proyectos de la conversación a la realidad.',
    thriveIn: 'LEAD Operations, squads de ejecución de proyectos, hackatones.',
    icon: Hammer,
  },
  connector: {
    name: 'El Conector',
    tagline: 'Multiplicas lo que un equipo puede lograr junto.',
    description:
      'Lideras a través de las personas. Notas quién está callado, quién está atascado, quién debería conocer a quién. Tu superpoder: convertir un grupo de individuos en un equipo que realmente funciona.',
    thriveIn: 'LEAD Talent, LEAD Marketing, programas de comunidad y mentoría.',
    icon: Users,
  },
  strategist: {
    name: 'El Estratega',
    tagline: 'Tomas la decisión inteligente cuando importa.',
    description:
      'Lideras pensando con claridad. Haces las preguntas incómodas, sopesas trade-offs y respaldas decisiones con evidencia. Tu superpoder: cortar el ruido para llegar a la respuesta real.',
    thriveIn: 'LEAD Academia, roles de analítica y estrategia, diseño de partnerships.',
    icon: BarChart3,
  },
};

interface QuizOption {
  label: string;
  archetype: Archetype;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

const QUESTIONS: QuizQuestion[] = [
  {
    question: 'Arranca un nuevo proyecto en grupo. ¿Cuál es tu primer movimiento?',
    options: [
      { label: 'Bosquejar una visión ambiciosa de lo que podríamos lograr.', archetype: 'visionary' },
      { label: 'Descomponerlo y empezar a entregar la primera parte.', archetype: 'builder' },
      { label: 'Descubrir quién encaja mejor en cada rol.', archetype: 'connector' },
      { label: 'Mapear los riesgos e investigar qué se ha intentado antes.', archetype: 'strategist' },
    ],
  },
  {
    question: 'Tu equipo se topa con un obstáculo inesperado. Tú…',
    options: [
      { label: 'Replanteo: quizás estamos resolviendo el problema equivocado.', archetype: 'visionary' },
      { label: 'Busco la solución temporal más rápida y sigo avanzando.', archetype: 'builder' },
      { label: 'Reúno a las personas indicadas para destrabarlo.', archetype: 'connector' },
      { label: 'Paro, analizo la causa raíz, y después decido.', archetype: 'strategist' },
    ],
  },
  {
    question: '¿Qué se siente más gratificante al terminar un proyecto?',
    options: [
      { label: 'Saber que creamos algo que antes no existía.', archetype: 'visionary' },
      { label: 'Ver lo que realmente entregamos.', archetype: 'builder' },
      { label: 'El equipo en que nos convertimos en el camino.', archetype: 'connector' },
      { label: 'Ver las métricas que prueban que funcionó.', archetype: 'strategist' },
    ],
  },
  {
    question: 'Tu sábado ideal se ve así…',
    options: [
      { label: 'Leyendo sobre tendencias e imaginando lo que viene.', archetype: 'visionary' },
      { label: 'Construyendo o arreglando algo — un proyecto paralelo, lo que sea.', archetype: 'builder' },
      { label: 'Juntándome con gente, presentando amigos entre sí.', archetype: 'connector' },
      { label: 'Un clavado largo en un tema que me da curiosidad.', archetype: 'strategist' },
    ],
  },
  {
    question: 'Cuando das feedback, tiendes a…',
    options: [
      { label: 'Pintar cómo se vería algo “grandioso”.', archetype: 'visionary' },
      { label: 'Señalar cosas específicas para cambiar la próxima vez.', archetype: 'builder' },
      { label: 'Empezar por entender qué estaban intentando hacer.', archetype: 'connector' },
      { label: 'Respaldarlo con datos y razonamiento claro.', archetype: 'strategist' },
    ],
  },
  {
    question: '¿Qué frase va más contigo?',
    options: [
      { label: '“La mejor manera de predecir el futuro es inventarlo.”', archetype: 'visionary' },
      { label: '“Hecho es mejor que perfecto.”', archetype: 'builder' },
      { label: '“Si quieres llegar lejos, ve acompañado.”', archetype: 'connector' },
      { label: '“Lo que se mide, se gestiona.”', archetype: 'strategist' },
    ],
  },
];

const CAREERS_BY_FACULTY: { faculty: string; careers: string[] }[] = [
  {
    faculty: 'Facultad de Computación',
    careers: [
      'Ciberseguridad',
      'Ciencia de Datos e Inteligencia Artificial',
      'Ciencia de la Computación',
      'Sistemas de Información',
    ],
  },
  {
    faculty: 'Facultad de Ingeniería',
    careers: [
      'Bioingeniería',
      'Ingeniería Ambiental',
      'Ingeniería Civil',
      'Ingeniería de la Energía',
      'Ingeniería Electrónica',
      'Ingeniería Industrial',
      'Ingeniería Mecatrónica',
      'Ingeniería Mecánica',
      'Ingeniería Química',
    ],
  },
];

type Step = 'intro' | 'form' | 'quiz' | 'result';

interface FormData {
  name: string;
  instagram: string;
  career: string;
  cycle: string;
}

interface FormErrors {
  name?: string;
  career?: string;
  cycle?: string;
}

function computeResult(answers: Archetype[]): Archetype {
  const tally: Record<Archetype, number> = {
    visionary: 0,
    builder: 0,
    connector: 0,
    strategist: 0,
  };
  for (const a of answers) tally[a] += 1;

  const order: Archetype[] = ['visionary', 'builder', 'connector', 'strategist'];
  let winner: Archetype = order[0];
  for (const a of order) {
    if (tally[a] > tally[winner]) winner = a;
  }
  return winner;
}

export function LeaderTest() {
  const [step, setStep] = useState<Step>('intro');
  const [form, setForm] = useState<FormData>({
    name: '',
    instagram: '',
    career: '',
    cycle: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [answers, setAnswers] = useState<(Archetype | null)[]>(
    Array(QUESTIONS.length).fill(null)
  );
  const [currentQ, setCurrentQ] = useState(0);

  function validateForm(): boolean {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Ingresa tu nombre.';
    if (!form.career) next.career = 'Elige tu carrera.';
    if (!form.cycle) {
      next.cycle = 'Elige tu ciclo.';
    } else {
      const n = Number(form.cycle);
      if (!Number.isInteger(n) || n < 1 || n > 12) {
        next.cycle = 'El ciclo debe estar entre 1 y 12.';
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleStart() {
    setStep('form');
  }

  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;
    setStep('quiz');
  }

  function handleAnswer(archetype: Archetype) {
    const nextAnswers = [...answers];
    nextAnswers[currentQ] = archetype;
    setAnswers(nextAnswers);

    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
      return;
    }

    const validAnswers = nextAnswers.filter(
      (a): a is Archetype => a !== null
    );
    const finalArchetype = computeResult(validAnswers);

    // Fire-and-forget: guarda en Supabase. Si falla, el usuario igual ve su resultado.
    const instagram = form.instagram.trim();
    supabase
      .from('leader_test_submissions')
      .insert({
        name: form.name.trim(),
        instagram: instagram || null,
        career: form.career,
        cycle: Number(form.cycle),
        archetype: finalArchetype,
      })
      .then(({ error }) => {
        if (error) console.error('Supabase insert failed:', error);
      });

    setStep('result');
  }

  function handleBackQuestion() {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
    else setStep('form');
  }

  function handleRestart() {
    setStep('intro');
    setForm({ name: '', instagram: '', career: '', cycle: '' });
    setErrors({});
    setAnswers(Array(QUESTIONS.length).fill(null));
    setCurrentQ(0);
  }

  /* ─── Intro ─── */
  if (step === 'intro') {
    return (
      <Card variant="gradient-border" className="max-w-3xl mx-auto">
        <div className="text-center py-6">
          <Badge variant="gradient" className="mb-4">
            Quiz de 2 minutos
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Qué tipo de <GradientText>líder</GradientText> eres?
          </h3>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Descubre tu arquetipo de liderazgo y las áreas de LEAD UTEC donde
            generarías más impacto. Seis preguntas rápidas, sin respuestas correctas.
          </p>
          <Button variant="gradient" size="lg" onClick={handleStart}>
            Hacer el test
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </Button>
        </div>
      </Card>
    );
  }

  /* ─── Form ─── */
  if (step === 'form') {
    return (
      <Card variant="gradient-border" className="max-w-2xl mx-auto">
        <div className="mb-6">
          <p className="text-sm text-white/50 mb-2">Paso 1 de 2</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Cuéntanos sobre ti</h3>
          <p className="text-white/60 text-sm">
            Esto nos ayuda a enviarte el siguiente paso correcto después del quiz.
          </p>
        </div>

        <form onSubmit={handleSubmitForm} className="flex flex-col gap-5">
          <Input
            label="Nombre completo"
            placeholder="Tu nombre"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            error={errors.name}
            autoComplete="name"
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-white/90">
              Instagram <span className="text-white/40 font-normal">(opcional)</span>
            </label>
            <div className="relative">
              <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#df3124] focus:border-transparent transition-all"
                placeholder="@tuusuario"
                value={form.instagram}
                onChange={(e) => setForm({ ...form, instagram: e.target.value })}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-white/90">Carrera</label>
            <select
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#df3124] focus:border-transparent transition-all"
              value={form.career}
              onChange={(e) => setForm({ ...form, career: e.target.value })}
            >
              <option value="" className="bg-[#010b3d]">
                Selecciona tu carrera
              </option>
              {CAREERS_BY_FACULTY.map((group) => (
                <optgroup
                  key={group.faculty}
                  label={group.faculty}
                  className="bg-[#010b3d]"
                >
                  {group.careers.map((c) => (
                    <option key={c} value={c} className="bg-[#010b3d]">
                      {c}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {errors.career && <p className="text-sm text-[#df3124]">{errors.career}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-white/90">Ciclo</label>
            <select
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#df3124] focus:border-transparent transition-all"
              value={form.cycle}
              onChange={(e) => setForm({ ...form, cycle: e.target.value })}
            >
              <option value="" className="bg-[#010b3d]">
                Selecciona tu ciclo
              </option>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={String(n)} className="bg-[#010b3d]">
                  Ciclo {n}
                </option>
              ))}
            </select>
            {errors.cycle && <p className="text-sm text-[#df3124]">{errors.cycle}</p>}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={() => setStep('intro')}
            >
              <ArrowLeft className="w-4 h-4 mr-2 inline" />
              Atrás
            </Button>
            <Button type="submit" variant="gradient" size="md" className="flex-1">
              Empezar el quiz
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          </div>
        </form>
      </Card>
    );
  }

  /* ─── Quiz ─── */
  if (step === 'quiz') {
    const q = QUESTIONS[currentQ];
    const progress = ((currentQ + 1) / QUESTIONS.length) * 100;

    return (
      <Card variant="gradient-border" className="max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-white/50 mb-3">
            <span>
              Pregunta {currentQ + 1} de {QUESTIONS.length}
            </span>
            <span>Paso 2 de 2</span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#df3124] to-[#921ea2] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-6">{q.question}</h3>

        <div className="flex flex-col gap-3 mb-6">
          {q.options.map((opt) => {
            const selected = answers[currentQ] === opt.archetype;
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => handleAnswer(opt.archetype)}
                className={`text-left px-5 py-4 rounded-lg border transition-all duration-200 ${
                  selected
                    ? 'border-[#df3124] bg-[#df3124]/10 text-white'
                    : 'border-white/10 bg-white/5 text-white/80 hover:border-white/30 hover:bg-white/10'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleBackQuestion}
          >
            <ArrowLeft className="w-4 h-4 mr-2 inline" />
            Atrás
          </Button>
          <p className="text-xs text-white/40 self-center">
            Elige una — no hay respuestas incorrectas.
          </p>
        </div>
      </Card>
    );
  }

  /* ─── Result ─── */
  const validAnswers = answers.filter((a): a is Archetype => a !== null);
  const result = computeResult(validAnswers);
  const info = ARCHETYPES[result];
  const ResultIcon = info.icon;

  return (
    <Card variant="gradient-border" className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-white/60 text-sm mb-4">
          {form.name ? `${form.name}, eres…` : 'Eres…'}
        </p>
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-[#df3124]/20 to-[#921ea2]/20 flex items-center justify-center mx-auto mb-5">
          <ResultIcon className="w-10 h-10 text-[#df3124]" />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-3">
          <GradientText>{info.name}</GradientText>
        </h3>
        <p className="text-lg text-white/80 italic mb-6">{info.tagline}</p>
        <p className="text-white/70 leading-relaxed max-w-xl mx-auto mb-6">
          {info.description}
        </p>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 max-w-xl mx-auto">
          <p className="text-sm text-white/50 mb-1 font-semibold uppercase tracking-wider">
            Destacarías en
          </p>
          <p className="text-white/90">{info.thriveIn}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="https://www.instagram.com/lead.utec"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="gradient" size="md">
            Compartir en Instagram
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </Button>
        </a>
        <Button type="button" variant="outline" size="md" onClick={handleRestart}>
          <RotateCcw className="w-4 h-4 mr-2 inline" />
          Volver a hacer el test
        </Button>
      </div>
    </Card>
  );
}
