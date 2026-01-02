"use client";

import { useState } from "react";

const services = [
  "Handyman",
  "Locksmith",
  "Plumbing",
  "Electrical",
  "Painting & Decorating",
  "Carpentry",
  "Property Maintenance"
];

export function QuoteForm({ variant = "primary" }: { variant?: "primary" | "compact" }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setMessage("Thanks. We received your request and will call you shortly.");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Could not submit right now. Please call us or try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-subtle ${variant === "compact" ? "text-sm" : ""}`}
    >
      <div className="grid gap-3 md:grid-cols-2">
        <label className="space-y-1 text-sm text-slate-700">
          <span>Service</span>
          <select name="service" required className="w-full rounded-lg border border-slate-200 px-3 py-2">
            <option value="">Select service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-1 text-sm text-slate-700">
          <span>Urgency</span>
          <select name="urgency" required className="w-full rounded-lg border border-slate-200 px-3 py-2">
            <option value="">Choose</option>
            <option value="emergency">Emergency</option>
            <option value="today">Today</option>
            <option value="this-week">This week</option>
          </select>
        </label>
        <label className="space-y-1 text-sm text-slate-700">
          <span>Name</span>
          <input name="name" required className="w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="Your name" />
        </label>
        <label className="space-y-1 text-sm text-slate-700">
          <span>Mobile</span>
          <input
            name="phone"
            required
            className="w-full rounded-lg border border-slate-200 px-3 py-2"
            placeholder="07..."
            inputMode="tel"
          />
        </label>
        <label className="space-y-1 text-sm text-slate-700">
          <span>Email (optional)</span>
          <input name="email" type="email" className="w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="you@example.com" />
        </label>
        <label className="space-y-1 text-sm text-slate-700">
          <span>Postcode</span>
          <input name="postcode" required className="w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="NW3" />
        </label>
      </div>
      <label className="space-y-1 text-sm text-slate-700">
        <span>What do you need?</span>
        <textarea
          name="description"
          required
          rows={3}
          className="w-full rounded-lg border border-slate-200 px-3 py-2"
          placeholder="Describe the job or issue"
        />
      </label>
      <div className="flex items-center gap-3 text-xs text-slate-600">
        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
        Same-day responses for Hampstead, Belsize Park, West Hampstead, Highgate, Swiss Cottage.
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-subtle hover:bg-slate-800 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send request"}
        </button>
        <a href="tel:+442071234567" className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-900">
          Or call 020 7123 4567
        </a>
      </div>
      {message && (
        <div className={`text-sm ${status === "error" ? "text-red-600" : "text-emerald-700"}`}>{message}</div>
      )}
    </form>
  );
}
