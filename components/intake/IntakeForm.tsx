'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import BodyMap from './BodyMap';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FormData {
  // Step 1
  name: string;
  email: string;
  phone: string;
  contactPreference: string;
  // Step 2
  bodyAreas: string[];
  painLevel: number;
  // Step 3
  description: string;
  duration: string;
  dailyImpact: string[];
  previousTreatment: string;
  previousTreatmentDetails: string;
  imaging: string[];
  // Step 4
  goal: string;
  additionalInfo: string;
  // Step 5
  patientType: string;
  preferredDays: string[];
  insurance: string;
  insuranceProvider: string;
  referralSource: string;
}

type StepErrors = Record<string, string>;

const TOTAL_STEPS = 5;

const JANE_BOOKING_URL =
  'https://endorphinshealth.janeapp.com/locations/endorphins-health-and-wellness-centre/book#/staff_member/42';

// ---------------------------------------------------------------------------
// Helpers & constants
// ---------------------------------------------------------------------------

const stepMeta = [
  { title: 'About You', icon: UserIcon },
  { title: 'Your Concern', icon: BodyIcon },
  { title: 'More Details', icon: ClipboardIcon },
  { title: 'Your Goals', icon: TargetIcon },
  { title: 'Scheduling', icon: CalendarIcon },
];

const durations = [
  'Less than 1 week',
  '1 - 4 weeks',
  '1 - 3 months',
  '3 - 6 months',
  '6+ months',
];

const impacts = [
  { id: 'sleep', label: 'Sleep', icon: '🌙' },
  { id: 'work', label: 'Work', icon: '💼' },
  { id: 'exercise', label: 'Exercise', icon: '🏃' },
  { id: 'daily-tasks', label: 'Daily Tasks', icon: '🏠' },
  { id: 'mood', label: 'Mood', icon: '😔' },
];

const goals = [
  'Pain relief',
  'Return to sport',
  'Return to work',
  'Improve mobility',
  'Prevent re-injury',
  'Post-surgical recovery',
  'Other',
];

const days = [
  { id: 'monday', label: 'Mon', sub: '1:30-8 PM' },
  { id: 'tuesday', label: 'Tue', sub: '1:30-8 PM' },
  { id: 'wednesday', label: 'Wed', sub: '2-7:30 PM' },
  { id: 'thursday', label: 'Thu', sub: '1:30-8 PM' },
  { id: 'friday', label: 'Fri', sub: '2-7:30 PM' },
];

const referralSources = [
  'Google Search',
  'Doctor Referral',
  'Friend or Family',
  'Social Media',
  'Insurance Provider',
  'Other',
];

// ---------------------------------------------------------------------------
// Step icons (inline SVGs to avoid icon-library bloat)
// ---------------------------------------------------------------------------

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="6" r="4" />
      <path d="M2 18c0-3.3 3.6-6 8-6s8 2.7 8 6" />
    </svg>
  );
}

function BodyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="3.5" r="2" />
      <path d="M10 6v5m0 0l-3 5m3-5l3 5M6 9h8" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="12" height="15" rx="2" />
      <path d="M7 3V2a1 1 0 011-1h4a1 1 0 011 1v1M8 9h4M8 12h2" />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="8" />
      <circle cx="10" cy="10" r="4" />
      <circle cx="10" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="16" height="14" rx="2" />
      <path d="M6 2v4M14 2v4M2 9h16" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7.5l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Reusable field components
// ---------------------------------------------------------------------------

function FieldLabel({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
  return (
    <label className="block text-sm font-medium text-[#1A2036] mb-1.5">
      {children}
      {optional && <span className="text-slate-400 font-normal ml-1">(optional)</span>}
    </label>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  ...rest
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'w-full px-4 py-3 rounded-xl border bg-white text-[#1A2036] text-sm placeholder:text-slate-400 outline-none transition-all duration-200',
          error
            ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10'
            : 'border-slate-200 focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/10 hover:border-slate-300'
        )}
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function SelectableChip({
  selected,
  onToggle,
  children,
  className: extraClass,
}: {
  selected: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        'relative px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200',
        selected
          ? 'bg-[#B08D57]/10 border-[#B08D57]/40 text-[#7a6539]'
          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50',
        extraClass
      )}
    >
      {selected && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#B08D57] flex items-center justify-center"
        >
          <CheckIcon className="text-white w-2.5 h-2.5" />
        </motion.span>
      )}
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Pain scale
// ---------------------------------------------------------------------------

function PainScale({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const levels = [
    { n: 1, label: 'Minimal', color: '#4ade80' },
    { n: 2, label: 'Mild', color: '#facc15' },
    { n: 3, label: 'Moderate', color: '#fb923c' },
    { n: 4, label: 'Severe', color: '#f87171' },
    { n: 5, label: 'Very Severe', color: '#ef4444' },
  ];

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {levels.map((lvl) => (
          <button
            key={lvl.n}
            type="button"
            onClick={() => onChange(lvl.n)}
            className={cn(
              'flex-1 py-3 rounded-xl text-sm font-medium border-2 transition-all duration-200 relative overflow-hidden',
              value === lvl.n
                ? 'border-current shadow-sm'
                : 'border-slate-200 hover:border-slate-300 bg-white'
            )}
            style={{
              color: value === lvl.n ? lvl.color : undefined,
              backgroundColor: value === lvl.n ? `${lvl.color}15` : undefined,
            }}
          >
            {lvl.n}
          </button>
        ))}
      </div>
      <div className="flex justify-between text-xs text-slate-400 px-1">
        <span>Minimal</span>
        <span>Very Severe</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Step slide variants
// ---------------------------------------------------------------------------

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 60 : -60,
    opacity: 0,
  }),
};

// ---------------------------------------------------------------------------
// Main form
// ---------------------------------------------------------------------------

export default function IntakeForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [errors, setErrors] = useState<StepErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    contactPreference: 'phone',
    bodyAreas: [],
    painLevel: 0,
    description: '',
    duration: '',
    dailyImpact: [],
    previousTreatment: '',
    previousTreatmentDetails: '',
    imaging: [],
    goal: '',
    additionalInfo: '',
    patientType: 'new',
    preferredDays: [],
    insurance: '',
    insuranceProvider: '',
    referralSource: '',
  });

  // Field updater
  const update = useCallback(
    <K extends keyof FormData>(key: K, value: FormData[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    },
    []
  );

  const toggleArrayItem = useCallback(
    (key: 'bodyAreas' | 'dailyImpact' | 'imaging' | 'preferredDays', item: string) => {
      setForm((prev) => {
        const arr = prev[key];
        return {
          ...prev,
          [key]: arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item],
        };
      });
    },
    []
  );

  // Validation per step
  const validate = (s: number): boolean => {
    const e: StepErrors = {};
    if (s === 1) {
      if (!form.name.trim()) e.name = 'Please enter your name';
      if (!form.phone.trim()) e.phone = 'Please enter your phone number';
      if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = 'Please enter a valid email';
    }
    if (s === 2) {
      if (form.bodyAreas.length === 0) e.bodyAreas = 'Please select at least one area';
      if (form.painLevel === 0) e.painLevel = 'Please rate your pain level';
    }
    if (s === 3) {
      if (!form.duration) e.duration = 'Please select a duration';
    }
    if (s === 4) {
      if (!form.goal) e.goal = 'Please select a goal';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goNext = () => {
    if (!validate(step)) return;
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const goToStep = (target: number) => {
    if (target >= step) return; // only allow going back via stepper
    setDirection(target < step ? -1 : 1);
    setStep(target);
  };

  // Fire conversion & submit
  const handleSubmit = async () => {
    if (!validate(step)) return;
    if (honeypot) return; // bot trap

    setSubmitting(true);

    try {
      await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch {
      // email send is best-effort; don't block the patient
    }

    // Fire GA4 event + Google Ads conversion, then redirect
    const doRedirect = (() => {
      let fired = false;
      return () => {
        if (fired) return;
        fired = true;
        setSubmitted(true);
        setTimeout(() => {
          window.location.href = JANE_BOOKING_URL;
        }, 2500);
      };
    })();

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      // GA4 event
      window.gtag('event', 'intake_form_submit', {
        event_category: 'conversion',
        event_label: form.bodyAreas.join(', '),
        send_to: process.env.NEXT_PUBLIC_GA_ID || 'G-65FN5BN480',
      });

      // Google Ads conversion
      window.gtag('event', 'conversion', {
        send_to: 'AW-18069490191/eeANCJi7n5ccEI-UmqhD',
        value: 130,
        currency: 'CAD',
        transport_type: 'beacon',
        event_callback: doRedirect,
      });

      // Safety timeout
      setTimeout(doRedirect, 1500);
    } else {
      doRedirect();
    }
  };

  // -----------------------------------------------------------------------
  // Render: submitted state
  // -----------------------------------------------------------------------

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12, delay: 0.15 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B08D57] to-[#D4AF37] flex items-center justify-center mx-auto mb-6"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 14.5l6 6L22 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-serif text-[#1A2036] mb-3">
          Thank you, {form.name.split(' ')[0]}
        </h3>
        <p className="text-slate-500 mb-6 max-w-sm mx-auto leading-relaxed">
          Your information has been received. Redirecting you to book your appointment time...
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-[#B08D57]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-4 h-4 border-2 border-[#B08D57] border-t-transparent rounded-full"
          />
          Opening booking calendar
        </div>
      </motion.div>
    );
  }

  // -----------------------------------------------------------------------
  // Render: form
  // -----------------------------------------------------------------------

  return (
    <div className="w-full">
      {/* Progress stepper */}
      <div className="mb-10">
        {/* Desktop stepper */}
        <div className="hidden sm:flex items-center justify-between relative">
          {/* Connector line */}
          <div className="absolute top-5 left-0 right-0 h-[2px] bg-slate-200" />
          <div
            className="absolute top-5 left-0 h-[2px] bg-gradient-to-r from-[#B08D57] to-[#D4AF37] transition-all duration-500 ease-out"
            style={{ width: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
          />

          {stepMeta.map((s, i) => {
            const stepNum = i + 1;
            const completed = step > stepNum;
            const active = step === stepNum;
            const Icon = s.icon;

            return (
              <button
                key={stepNum}
                type="button"
                onClick={() => goToStep(stepNum)}
                disabled={stepNum > step}
                className={cn(
                  'relative z-10 flex flex-col items-center gap-2 bg-transparent border-none',
                  stepNum <= step ? 'cursor-pointer' : 'cursor-default'
                )}
              >
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2',
                    completed
                      ? 'bg-gradient-to-br from-[#B08D57] to-[#D4AF37] border-transparent text-white'
                      : active
                      ? 'bg-white border-[#B08D57] text-[#B08D57] shadow-md shadow-[#B08D57]/10'
                      : 'bg-white border-slate-200 text-slate-400'
                  )}
                >
                  {completed ? <CheckIcon className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                </div>
                <span
                  className={cn(
                    'text-xs font-medium transition-colors',
                    active ? 'text-[#B08D57]' : completed ? 'text-[#1A2036]' : 'text-slate-400'
                  )}
                >
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile stepper */}
        <div className="sm:hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[#1A2036]">
              Step {step} of {TOTAL_STEPS}
            </span>
            <span className="text-sm text-[#B08D57] font-medium">{stepMeta[step - 1].title}</span>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"
              initial={false}
              animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </div>

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Step content */}
      <div className="min-h-[380px] relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 1 && (
              <StepOne form={form} update={update} errors={errors} />
            )}
            {step === 2 && (
              <StepTwo
                form={form}
                update={update}
                toggleArrayItem={toggleArrayItem}
                errors={errors}
              />
            )}
            {step === 3 && (
              <StepThree
                form={form}
                update={update}
                toggleArrayItem={toggleArrayItem}
                errors={errors}
              />
            )}
            {step === 4 && (
              <StepFour form={form} update={update} errors={errors} />
            )}
            {step === 5 && (
              <StepFive
                form={form}
                update={update}
                toggleArrayItem={toggleArrayItem}
                errors={errors}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
        {step > 1 ? (
          <button
            type="button"
            onClick={goBack}
            className="text-sm font-medium text-slate-500 hover:text-[#1A2036] transition-colors flex items-center gap-1.5"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-180">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={goNext}
            className="px-7 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-br from-[#B08D57] to-[#D4AF37] hover:from-[#9a7a4b] hover:to-[#c9a030] shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
          >
            Continue
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className={cn(
              'px-8 py-3 rounded-xl text-sm font-medium text-white shadow-md transition-all duration-200 flex items-center gap-2',
              submitting
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-br from-[#B08D57] to-[#D4AF37] hover:from-[#9a7a4b] hover:to-[#c9a030] hover:shadow-lg'
            )}
          >
            {submitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
                Submitting...
              </>
            ) : (
              <>
                Submit & Book
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

// ===========================================================================
// Individual steps
// ===========================================================================

interface StepProps {
  form: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
  errors: StepErrors;
}

interface StepWithToggleProps extends StepProps {
  toggleArrayItem: (
    key: 'bodyAreas' | 'dailyImpact' | 'imaging' | 'preferredDays',
    item: string
  ) => void;
}

// ---- Step 1: About You --------------------------------------------------

function StepOne({ form, update, errors }: StepProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-xl font-serif text-[#1A2036] mb-1">Let&apos;s get started</h3>
        <p className="text-sm text-slate-500">
          This helps me prepare for your visit and reach out to confirm.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <FieldLabel>Full Name</FieldLabel>
          <TextInput
            value={form.name}
            onChange={(v) => update('name', v)}
            placeholder="Your full name"
            error={errors.name}
            autoComplete="name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <FieldLabel>Phone Number</FieldLabel>
            <TextInput
              value={form.phone}
              onChange={(v) => update('phone', v)}
              placeholder="(905) 555-0123"
              type="tel"
              error={errors.phone}
              autoComplete="tel"
            />
          </div>
          <div>
            <FieldLabel optional>Email</FieldLabel>
            <TextInput
              value={form.email}
              onChange={(v) => update('email', v)}
              placeholder="you@example.com"
              type="email"
              error={errors.email}
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <FieldLabel>Preferred contact method</FieldLabel>
          <div className="flex gap-3">
            {['phone', 'email', 'text'].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => update('contactPreference', opt)}
                className={cn(
                  'flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200',
                  form.contactPreference === opt
                    ? 'bg-[#B08D57]/10 border-[#B08D57]/40 text-[#7a6539]'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                )}
              >
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Step 2: Your Concern -----------------------------------------------

function StepTwo({ form, update, toggleArrayItem, errors }: StepWithToggleProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-xl font-serif text-[#1A2036] mb-1">Where does it hurt?</h3>
        <p className="text-sm text-slate-500">
          Select the area(s) on the body below. You can choose more than one.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div>
          <BodyMap
            selected={form.bodyAreas}
            onToggle={(id) => toggleArrayItem('bodyAreas', id)}
          />
          {errors.bodyAreas && (
            <p className="mt-2 text-xs text-red-500 text-center">{errors.bodyAreas}</p>
          )}
        </div>

        <div className="space-y-5">
          <div>
            <FieldLabel>Pain Level</FieldLabel>
            <PainScale value={form.painLevel} onChange={(v) => update('painLevel', v)} />
            {errors.painLevel && (
              <p className="mt-1 text-xs text-red-500">{errors.painLevel}</p>
            )}
          </div>

          <div>
            <FieldLabel optional>Briefly describe your main concern</FieldLabel>
            <textarea
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              placeholder="e.g. Sharp pain in my lower back when I bend forward..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#1A2036] text-sm placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/10 hover:border-slate-300 resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Step 3: More Details -----------------------------------------------

function StepThree({ form, update, toggleArrayItem, errors }: StepWithToggleProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-xl font-serif text-[#1A2036] mb-1">Tell me more</h3>
        <p className="text-sm text-slate-500">
          A bit more detail helps me plan an effective first session.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <FieldLabel>How long have you had this issue?</FieldLabel>
          <div className="flex flex-wrap gap-2">
            {durations.map((d) => (
              <SelectableChip
                key={d}
                selected={form.duration === d}
                onToggle={() => update('duration', d)}
              >
                {d}
              </SelectableChip>
            ))}
          </div>
          {errors.duration && <p className="mt-1 text-xs text-red-500">{errors.duration}</p>}
        </div>

        <div>
          <FieldLabel optional>How is it affecting your daily life?</FieldLabel>
          <div className="flex flex-wrap gap-2">
            {impacts.map((imp) => (
              <SelectableChip
                key={imp.id}
                selected={form.dailyImpact.includes(imp.id)}
                onToggle={() => toggleArrayItem('dailyImpact', imp.id)}
                className="flex items-center gap-1.5"
              >
                <span className="text-base" role="img" aria-label={imp.label}>
                  {imp.icon}
                </span>
                {imp.label}
              </SelectableChip>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel>Have you had treatment for this before?</FieldLabel>
          <div className="flex gap-3">
            {['yes', 'no'].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => update('previousTreatment', opt)}
                className={cn(
                  'flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200',
                  form.previousTreatment === opt
                    ? 'bg-[#B08D57]/10 border-[#B08D57]/40 text-[#7a6539]'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                )}
              >
                {opt === 'yes' ? 'Yes' : 'No'}
              </button>
            ))}
          </div>
          {form.previousTreatment === 'yes' && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3">
              <TextInput
                value={form.previousTreatmentDetails}
                onChange={(v) => update('previousTreatmentDetails', v)}
                placeholder="What type of treatment? (physio, chiro, massage, etc.)"
              />
            </motion.div>
          )}
        </div>

        <div>
          <FieldLabel optional>Any imaging done?</FieldLabel>
          <div className="flex flex-wrap gap-2">
            {['X-ray', 'MRI', 'Ultrasound', 'CT Scan'].map((img) => (
              <SelectableChip
                key={img}
                selected={form.imaging.includes(img)}
                onToggle={() => toggleArrayItem('imaging', img)}
              >
                {img}
              </SelectableChip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Step 4: Your Goals -------------------------------------------------

function StepFour({ form, update, errors }: StepProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-xl font-serif text-[#1A2036] mb-1">What are you hoping to achieve?</h3>
        <p className="text-sm text-slate-500">
          Understanding your goals helps me tailor treatment from the start.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <FieldLabel>Primary goal</FieldLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {goals.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => update('goal', g)}
                className={cn(
                  'py-3.5 px-4 rounded-xl text-sm font-medium border transition-all duration-200 text-left',
                  form.goal === g
                    ? 'bg-[#B08D57]/10 border-[#B08D57]/40 text-[#7a6539]'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                )}
              >
                {g}
              </button>
            ))}
          </div>
          {errors.goal && <p className="mt-1 text-xs text-red-500">{errors.goal}</p>}
        </div>

        <div>
          <FieldLabel optional>Anything else you want to share?</FieldLabel>
          <textarea
            value={form.additionalInfo}
            onChange={(e) => update('additionalInfo', e.target.value)}
            placeholder="Previous surgeries, medications, specific concerns..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#1A2036] text-sm placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/10 hover:border-slate-300 resize-none"
          />
        </div>
      </div>
    </div>
  );
}

// ---- Step 5: Scheduling -------------------------------------------------

function StepFive({ form, update, toggleArrayItem, errors }: StepWithToggleProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-xl font-serif text-[#1A2036] mb-1">Almost done</h3>
        <p className="text-sm text-slate-500">
          A few more details to help with scheduling.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <FieldLabel>Are you a new or returning patient?</FieldLabel>
          <div className="flex gap-3">
            {[
              { value: 'new', label: 'New Patient' },
              { value: 'returning', label: 'Returning Patient' },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => update('patientType', opt.value)}
                className={cn(
                  'flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200',
                  form.patientType === opt.value
                    ? 'bg-[#B08D57]/10 border-[#B08D57]/40 text-[#7a6539]'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel optional>Preferred day(s)</FieldLabel>
          <div className="flex flex-wrap gap-2">
            {days.map((d) => (
              <SelectableChip
                key={d.id}
                selected={form.preferredDays.includes(d.id)}
                onToggle={() => toggleArrayItem('preferredDays', d.id)}
                className="flex flex-col items-center py-3 px-5"
              >
                <span className="font-medium">{d.label}</span>
                <span className="text-[11px] text-slate-400 mt-0.5">{d.sub}</span>
              </SelectableChip>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel optional>Do you have extended health benefits?</FieldLabel>
          <div className="flex gap-3">
            {['yes', 'no', 'not sure'].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => update('insurance', opt)}
                className={cn(
                  'flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 capitalize',
                  form.insurance === opt
                    ? 'bg-[#B08D57]/10 border-[#B08D57]/40 text-[#7a6539]'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                )}
              >
                {opt === 'not sure' ? 'Not Sure' : opt.charAt(0).toUpperCase() + opt.slice(1)}
              </button>
            ))}
          </div>
          {form.insurance === 'yes' && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3">
              <TextInput
                value={form.insuranceProvider}
                onChange={(v) => update('insuranceProvider', v)}
                placeholder="e.g. Sun Life, Manulife, Green Shield..."
              />
            </motion.div>
          )}
        </div>

        <div>
          <FieldLabel optional>How did you hear about Kareem?</FieldLabel>
          <div className="flex flex-wrap gap-2">
            {referralSources.map((src) => (
              <SelectableChip
                key={src}
                selected={form.referralSource === src}
                onToggle={() => update('referralSource', form.referralSource === src ? '' : src)}
              >
                {src}
              </SelectableChip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
