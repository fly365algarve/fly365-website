import { site } from "../config/site";

export function Price({ amount }: { amount: number }) {
  const pounds = Math.round(amount / site.exchangeRate);
  return <>€{amount.toLocaleString("en-IE")} <span className="inline-block text-sm font-normal tracking-normal">(approx. £{pounds.toLocaleString("en-GB")}*)</span></>;
}

export function PriceNote() {
  return <p className="mt-4 text-xs leading-5 text-[var(--muted-foreground)]">*Pound prices are approximate, based on an exchange rate of €{site.exchangeRate.toFixed(2)} = £1 (updated {site.exchangeRateUpdated}). Rates change, and we update this regularly. All payments are taken in euros.</p>;
}
