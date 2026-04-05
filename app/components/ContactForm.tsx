"use client";

import { useState } from "react";

type FormState = {
  error: string;
  success: string;
};

const initialState: FormState = {
  error: "",
  success: ""
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<FormState>(initialState);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormState(initialState);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      project: String(formData.get("project") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim()
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { error?: string; success?: boolean };

      if (!response.ok) {
        setFormState({
          error: data.error ?? "Something went wrong. Please try again.",
          success: ""
        });
        return;
      }

      event.currentTarget.reset();
      setFormState({
        error: "",
        success: "Message sent. I will get back to you soon."
      });
    } catch {
      setFormState({
        error: "Network error. Please try again in a moment.",
        success: ""
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="grid gap-4 rounded-[24px] border border-black/10 bg-card p-5 sm:rounded-[28px] sm:p-6"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.18em] text-muted" htmlFor="name">
          Name
        </label>
        <input
          required
          className="rounded-[12px] border border-black/10 bg-white/90 px-3.5 py-3"
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.18em] text-muted" htmlFor="email">
          Email
        </label>
        <input
          required
          className="rounded-[12px] border border-black/10 bg-white/90 px-3.5 py-3"
          id="email"
          name="email"
          type="email"
          placeholder="name@email.com"
        />
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.18em] text-muted" htmlFor="project">
          Project details
        </label>
        <textarea
          required
          className="rounded-[12px] border border-black/10 bg-white/90 px-3.5 py-3"
          id="project"
          name="project"
          rows={4}
          placeholder="Tell me about the project"
        />
      </div>
      {formState.error ? (
        <p className="text-sm font-medium text-accent3">{formState.error}</p>
      ) : null}
      {formState.success ? (
        <p className="text-sm font-medium text-ink">{formState.success}</p>
      ) : null}
      <button
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white shadow-button transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send brief"}
      </button>
    </form>
  );
}
