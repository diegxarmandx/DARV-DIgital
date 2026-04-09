"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

const initialState = {
  name: "",
  email: "",
  business: "",
  service: "",
  message: ""
};

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-mist-200">
          Full name <span aria-hidden="true">*</span>
          <input
            required
            type="text"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            className="h-11 w-full rounded-xl border border-white/15 bg-ink-900 px-4 text-base text-white outline-none transition placeholder:text-mist-300/70 focus-visible:border-accent"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label className="space-y-2 text-sm text-mist-200">
          Email address <span aria-hidden="true">*</span>
          <input
            required
            type="email"
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            className="h-11 w-full rounded-xl border border-white/15 bg-ink-900 px-4 text-base text-white outline-none transition placeholder:text-mist-300/70 focus-visible:border-accent"
            placeholder="you@business.com"
            autoComplete="email"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-mist-200">
          Business name
          <input
            type="text"
            value={values.business}
            onChange={(event) => setValues((prev) => ({ ...prev, business: event.target.value }))}
            className="h-11 w-full rounded-xl border border-white/15 bg-ink-900 px-4 text-base text-white outline-none transition placeholder:text-mist-300/70 focus-visible:border-accent"
            placeholder="Business name"
            autoComplete="organization"
          />
        </label>

        <label className="space-y-2 text-sm text-mist-200">
          Service needed
          <select
            value={values.service}
            onChange={(event) => setValues((prev) => ({ ...prev, service: event.target.value }))}
            className="h-11 w-full rounded-xl border border-white/15 bg-ink-900 px-4 text-base text-white outline-none transition focus-visible:border-accent"
          >
            <option value="">Select one</option>
            <option value="new-site">New Website</option>
            <option value="redesign">Website Redesign</option>
            <option value="lead-system">Lead Capture System</option>
            <option value="booking">Booking Flow</option>
            <option value="support">Ongoing Support</option>
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm text-mist-200">
        Project details <span aria-hidden="true">*</span>
        <textarea
          required
          rows={6}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-xl border border-white/15 bg-ink-900 px-4 py-3 text-base text-white outline-none transition placeholder:text-mist-300/70 focus-visible:border-accent"
          placeholder="Tell us what you need and what outcomes matter most."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Send Request"}
        </Button>
        <p className="text-xs text-mist-300">No spam. Clear next steps within one business day.</p>
      </div>

      <p className="text-sm" role="status" aria-live="polite">
        {status === "success" ? (
          <span className="text-teal-soft">Thanks. Your message has been received.</span>
        ) : null}
        {status === "error" ? (
          <span className="text-red-300">Something went wrong. Please try again or email us directly.</span>
        ) : null}
      </p>
    </form>
  );
}
