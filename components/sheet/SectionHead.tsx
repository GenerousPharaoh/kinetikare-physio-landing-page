import type { ReactNode } from 'react';
import Reveal from '@/components/home/Reveal';
import s from './Sheet.module.css';

/**
 * A section title as the condition pages set it: a short cobalt bar that
 * draws in, the heading, and an optional line under it.
 */
export default function SectionHead({ title, stand, id }: { title: ReactNode; stand?: ReactNode; id?: string }) {
  return (
    <Reveal as="div" className={s.head}>
      <Reveal as="span" variant="rule" className={s.bar} />
      <h2 className={s.h2} id={id}>
        {title}
      </h2>
      {stand && <p className={s.stand}>{stand}</p>}
    </Reveal>
  );
}
