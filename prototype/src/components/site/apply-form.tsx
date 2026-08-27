import { Link } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { locations, memberships } from "@/data/club";
import { cn } from "@/lib/utils";

const plans = memberships.map((m) => ({
  value: m.slug,
  label: m.name,
}));

export function ApplyForm({
  defaultLocation,
  defaultPlan,
  compact = false,
}: {
  defaultLocation?: string;
  defaultPlan?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [name, setName] = useState("");
  const [plan, setPlan] = useState(defaultPlan ?? "foundation");
  const [billing, setBilling] = useState<"weekly" | "monthly">("weekly");

  const selected = memberships.find((m) => m.slug === plan) ?? memberships[0];
  const isInterest = !selected.available;

  const locationOptions = useMemo(
    () =>
      locations.map((l) => ({
        value: l.slug,
        label: `${l.shortName}${l.status === "coming" ? " (coming soon)" : ""}`,
      })),
    [],
  );

  const billed =
    selected.price === "TBA"
      ? "Price announced at opening"
      : billing === "monthly"
        ? selected.priceNote.split(".")[0]
        : `${selected.price}${selected.period}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const firstName = String(data.get("firstName") ?? "").trim();
    setName(firstName);
    setStatus("sending");

    const body = new URLSearchParams();
    body.set("form-name", "membership-apply");
    for (const [key, value] of data.entries()) {
      if (typeof value === "string") body.set(key, value);
    }
    body.set("billing", isInterest ? "n/a" : billing);
    body.set("quoted", billed);

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
    } catch {
      setStatus("idle");
      toast.error("Something went wrong. Email us at admin@levelxclub.com.au.");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-surface px-6 py-10 text-center md:px-10">
        <p className="font-sans text-[11px] tracking-[0.24em] text-accent uppercase">
          {isInterest ? "Interest registered" : "Signup received"}
        </p>
        <h3 className="mt-4 font-display text-4xl">
          Thank you{name ? `, ${name}` : ""}.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          This is a prototype, no payment was taken. In the live club, this is
          where membership would be confirmed and billed.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="sm">
            <Link to="/" hash="locations">
              View Locations
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link to="/events">View Events</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      name="membership-apply"
      method="POST"
      action="/__forms.html"
      className={cn("grid gap-5", compact ? "" : "md:grid-cols-2")}
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="membership-apply" />
      <p className="hidden">
        <label>
          Don’t fill this in
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <Field label="First name" htmlFor="firstName">
        <Input id="firstName" name="firstName" required autoComplete="given-name" />
      </Field>
      <Field label="Last name" htmlFor="lastName">
        <Input id="lastName" name="lastName" required autoComplete="family-name" />
      </Field>
      <Field label="Phone" htmlFor="phone">
        <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
      </Field>
      <Field label="Email" htmlFor="email">
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </Field>
      <Field label="Postcode" htmlFor="postcode">
        <Input id="postcode" name="postcode" required autoComplete="postal-code" />
      </Field>
      <Field label="Home location" htmlFor="location">
        <NativeSelect
          id="location"
          name="location"
          defaultValue={defaultLocation ?? "toowong"}
          options={locationOptions}
        />
      </Field>
      <Field label="Plan" htmlFor="plan">
        <NativeSelect
          id="plan"
          name="plan"
          value={plan}
          options={plans}
          onChange={(value) => setPlan(value)}
        />
      </Field>
      {!isInterest ? (
        <Field label="Billing" htmlFor="billing">
          <NativeSelect
            id="billing"
            name="billing"
            value={billing}
            options={[
              { value: "weekly", label: `Weekly ${selected.price}${selected.period}` },
              {
                value: "monthly",
                label: selected.priceNote.split(".")[0] ?? "Monthly",
              },
            ]}
            onChange={(value) => setBilling(value as "weekly" | "monthly")}
          />
        </Field>
      ) : (
        <input type="hidden" name="billing" value="n/a" />
      )}

      <div className={cn(compact ? "" : "md:col-span-2", "border border-line bg-surface px-5 py-4")}>
        <p className="font-sans text-[10px] tracking-[0.2em] text-faint uppercase">
          {selected.name}
        </p>
        <p className="mt-1 font-display text-2xl">{billed}</p>
        <p className="mt-1 text-xs text-faint">{selected.priceNote}</p>
      </div>

      <div className={cn(compact ? "" : "md:col-span-2", "flex flex-col gap-4 pt-1")}>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
          <input
            type="checkbox"
            name="terms"
            value="accepted"
            required
            className="mt-1 size-4 shrink-0 accent-accent"
          />
          <span>
            I agree to the{" "}
            <Link to="/terms" className="text-fg underline-offset-2 hover:underline">
              terms and conditions
            </Link>{" "}
            and the{" "}
            <Link to="/privacy" className="text-fg underline-offset-2 hover:underline">
              privacy policy
            </Link>
            . I understand this is a prototype signup and no payment will be
            taken.
          </span>
        </label>
        <div>
          <Button type="submit" size="sm" disabled={status === "sending"}>
            {status === "sending"
              ? "Submitting…"
              : isInterest
                ? "Register interest"
                : "Complete signup"}
          </Button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

function NativeSelect({
  id,
  name,
  defaultValue,
  value,
  options,
  onChange,
}: {
  id: string;
  name: string;
  defaultValue?: string;
  value?: string;
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
}) {
  return (
    <select
      id={id}
      name={name}
      {...(value !== undefined ? { value } : { defaultValue })}
      onChange={(e) => onChange?.(e.target.value)}
      className="h-12 w-full appearance-none border border-line bg-elevated px-4 font-sans text-sm text-fg outline-none focus:border-accent"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
