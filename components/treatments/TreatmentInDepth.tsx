import type { Treatment } from '@/lib/treatments-data';
import Reveal from '@/components/home/Reveal';
import SectionHead from '@/components/sheet/SectionHead';
import s from '@/components/sheet/Sheet.module.css';

interface TreatmentInDepthProps {
  treatment: Treatment;
}

/** The longer explanation, then the warning signs in their own panel. */
export default function TreatmentInDepth({ treatment }: TreatmentInDepthProps) {
  const inDepth = treatment.inDepth ?? [];
  const redFlags = treatment.redFlags ?? [];

  if (inDepth.length === 0 && redFlags.length === 0) {
    return null;
  }

  return (
    <>
      {inDepth.length > 0 && (
        <section id="closer-look" className={s.sec}>
          <SectionHead title="A Closer Look" />
          {inDepth.map((block) => (
            <Reveal as="div" key={block.heading} className={s.block}>
              <h3 className={s.h3}>{block.heading}</h3>
              <div className={s.prose}>
                {block.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </section>
      )}

      {redFlags.length > 0 && (
        <section className={s.sec}>
          <Reveal as="div">
            <div id="warning-signs" className={s.flags}>
              <h2 className={s.h2}>When to get medical help</h2>
              <p className={s.stand}>
                If you notice any of these, follow the action given rather than waiting for your next physiotherapy visit.
              </p>
              <ul role="list">
                {redFlags.map((flag) => (
                  <li key={flag.sign} className={s.flag}>
                    <p className={s.flagSign}>{flag.sign}</p>
                    <p className={s.flagAction}>{flag.action}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>
      )}
    </>
  );
}
