export default function AboutPage() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">About</p>
        <h1 className="text-3xl font-semibold text-slate-900">Hampstead Maintenance</h1>
        <p className="text-sm text-slate-700">In-house handyman and maintenance teams covering Hampstead and wider North London. We prioritise premium finishes, careful protection of homes, and fast communication.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card-surface space-y-2 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Principles</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>In-house trades for consistency; vetted specialist partners for gas/electrical certificates.</li>
            <li>Photo and report after each visit for landlords, agents, and insurers.</li>
            <li>Respect for listed and period properties—protection mats, clean routes, careful fixings.</li>
          </ul>
        </div>
        <div className="card-surface space-y-2 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Accreditations</h2>
          <p className="text-sm text-slate-700">Public liability insurance details available on request. Partner electricians are NICEIC-supervised; partner gas engineers are Gas Safe registered.</p>
          <p className="text-sm text-slate-700">DBS checks completed for in-house teams.</p>
        </div>
      </div>
    </div>
  );
}
