import type { Treatment } from '@/lib/treatments-data';
import Reveal from '@/components/home/Reveal';
import SectionHead from '@/components/sheet/SectionHead';
import s from '@/components/sheet/Sheet.module.css';

interface TreatmentProcessProps {
  treatment: Treatment;
}

/** How treatment progresses: the stages on one vertical line, no numerals. */
export default function TreatmentProcess({ treatment }: TreatmentProcessProps) {
  return (
    <section id="process" className={s.sec}>
      <SectionHead title="How Treatment Progresses" />
      <ol className={s.steps}>
        {treatment.process.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 70}>
            <h3 className={s.stepTitle}>{step.title}</h3>
            <p className={s.stepBody}>{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
