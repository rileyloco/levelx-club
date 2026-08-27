import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    const data = new FormData(form);
    const body = new URLSearchParams();
    body.set("form-name", "contact");
    for (const [key, value] of data.entries()) {
      if (typeof value === "string") body.set(key, value);
    }
    try {
      if (!import.meta.env.DEV) {
        const res = await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
        });
        if (!res.ok) throw new Error("Submit failed");
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("idle");
      toast.error("Something went wrong. Email admin@levelxclub.com.au.");
    }
  }

  if (status === "sent") {
    return <p className="mt-8 text-center text-sm text-accent">Thank you. We’ll be in touch.</p>;
  }

  return (
    <form name="contact" method="POST" action="/__forms.html" className="lx-form" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this in
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <input name="name" required autoComplete="name" placeholder="Name" />
      <input name="email" type="email" required autoComplete="email" placeholder="Email" />
      <input name="phone" type="tel" autoComplete="tel" placeholder="Phone" />
      <textarea name="message" required placeholder="Message" />
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
