import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { SiteShell } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { merch, merchBySlug } from "@/data/club";
import { pageHead } from "@/lib/seo";

type CheckoutSearch = {
  item?: string;
};

export const Route = createFileRoute("/merch/checkout")({
  validateSearch: (search: Record<string, unknown>): CheckoutSearch => ({
    item: typeof search.item === "string" ? search.item : undefined,
  }),
  head: () =>
    pageHead({
      title: "Checkout | Level X Club",
      description: "Checkout for Level X merch. Prototype, no payment is taken.",
      path: "/merch/checkout",
    }),
  component: MerchCheckout,
});

function MerchCheckout() {
  const { item: itemSlug } = Route.useSearch();
  const selected = merchBySlug(itemSlug ?? "") ?? merch[0];
  const [qty, setQty] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [name, setName] = useState("");

  const total = useMemo(() => selected.price * qty, [selected.price, qty]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    setName(String(data.get("firstName") ?? "").trim());
    setStatus("sending");

    const body = new URLSearchParams();
    body.set("form-name", "merch-order");
    for (const [key, value] of data.entries()) {
      if (typeof value === "string") body.set(key, value);
    }
    body.set("item", selected.slug);
    body.set("qty", String(qty));
    body.set("total", `$${total}`);

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
      <SiteShell>
        <div className="mx-auto max-w-[520px] px-5 pt-28 pb-20 md:pt-36">
          <p className="font-sans text-[11px] tracking-[0.24em] text-accent uppercase">
            Order received
          </p>
          <h1 className="mt-4 font-display text-4xl">
            Thank you{name ? `, ${name}` : ""}.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            This is a prototype, no payment was taken.
          </p>
          <div className="mt-8">
            <Button asChild size="sm">
              <Link to="/merch">Back to merch</Link>
            </Button>
          </div>
        </div>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <div className="mx-auto max-w-[520px] px-5 pt-28 pb-20 md:pt-36 md:pb-28">
        <Link
          to="/merch"
          className="font-sans text-[11px] tracking-[0.16em] text-muted uppercase hover:text-fg"
        >
          Back to merch
        </Link>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl">Checkout</h1>
        <p className="mt-3 text-sm text-muted">
          Prototype only, no payment is taken.
        </p>

        <form
          name="merch-order"
          method="POST"
          action="/__forms.html"
          className="mt-10 grid gap-3.5"
          onSubmit={onSubmit}
        >
          <input type="hidden" name="form-name" value="merch-order" />
          <p className="hidden">
            <label>
              Don’t fill this in
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <section className="border border-line bg-surface px-6 py-6" aria-labelledby="selection-heading">
            <h2
              id="selection-heading"
              className="font-sans text-[11px] font-medium tracking-[0.16em] text-accent uppercase"
            >
              Your selection
            </h2>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <p className="font-display text-2xl">{selected.name}</p>
              <p className="text-sm text-muted">{selected.priceLabel}</p>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
              <p className="font-sans text-[10px] tracking-[0.16em] text-muted uppercase">
                Qty
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center border border-line text-fg"
                  onClick={() => setQty((n) => Math.max(1, n - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm">{qty}</span>
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center border border-line text-fg"
                  onClick={() => setQty((n) => Math.min(9, n + 1))}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <p className="font-sans text-[10px] tracking-[0.16em] text-muted uppercase">
                Total
              </p>
              <p className="font-display text-2xl">${total}</p>
            </div>
          </section>

          <section className="border border-line bg-surface px-6 py-6" aria-labelledby="details-heading">
            <h2
              id="details-heading"
              className="font-sans text-[11px] font-medium tracking-[0.16em] text-accent uppercase"
            >
              Your details
            </h2>
            <div className="mt-5 grid gap-4">
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" name="firstName" required autoComplete="given-name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" name="lastName" required autoComplete="family-name" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
              </div>
              <div>
                <Label htmlFor="postcode">Postcode</Label>
                <Input id="postcode" name="postcode" required autoComplete="postal-code" />
              </div>
            </div>
          </section>

          <section className="border border-line bg-surface px-6 py-6" aria-labelledby="payment-heading">
            <h2
              id="payment-heading"
              className="font-sans text-[11px] font-medium tracking-[0.16em] text-accent uppercase"
            >
              Payment
            </h2>
            <div className="mt-5 grid gap-4">
              <div>
                <Label htmlFor="card">Card number</Label>
                <Input
                  id="card"
                  name="card"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="ACCT-000015"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input
                    id="expiry"
                    name="expiry"
                    autoComplete="cc-exp"
                    placeholder="MM / YY"
                  />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    name="cvc"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs font-normal text-muted">
              Layout only. No charge is taken.
            </p>
            <div className="mt-6">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Submitting…" : `Pay $${total}`}
              </Button>
            </div>
          </section>
        </form>
      </div>
    </SiteShell>
  );
}
