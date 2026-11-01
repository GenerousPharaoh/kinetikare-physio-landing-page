import s from '@/components/sheet/Sheet.module.css';

/** The index's title and line; TreatmentsList sets the search beside it. */
export default function TreatmentsHero() {
  return (
    <div>
      <h1 className={s.h1}>
        Treatment <span>Approaches</span>
      </h1>
      <p className={s.summary}>The treatments I use, and what each one is for</p>
    </div>
  );
}
