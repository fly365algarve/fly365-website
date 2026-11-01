import { Seo } from "../components/Seo";
import { PageHero } from "../components/round5/PageHero";
import { photoCredits } from "../config/photoCredits";

export function CreditsPage() {
  return <div className="page-shell page-enter">
    <Seo title="Photo credits" description="Photographers, sources and licences for attributed photographs used on the Fly365 Algarve website." />
    <PageHero variant="plain" kicker="Fly365" title={["Photo credits"]} />
    <section className="section-pad bg-[var(--chalk)]">
      <div className="mx-auto max-w-[760px]">
        <p className="text-sm leading-7 text-[var(--ink)]">Aircraft photographs marked illustrative are not photographs of Fly365&apos;s own aircraft or team.</p>
        <ul className="mt-8 divide-y divide-[rgba(11,42,60,.2)]">
          {photoCredits.map(credit => <li key={credit.url} className="py-6">
            <h2 className="text-2xl text-[var(--navy)]">{credit.subject}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--ink)]">
              <a href={credit.url.startsWith("/") ? `${import.meta.env.BASE_URL}${credit.url.slice(1)}` : credit.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{credit.photographer} / {credit.source}</a>
              {"authorUrl" in credit && <> / <a href={credit.authorUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{credit.authorLabel}</a></>}
            </p>
            {"license" in credit && <p className="mt-1 text-sm leading-7 text-[var(--ink)]">
              <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{credit.license}</a> · {credit.changes}.
            </p>}
          </li>)}
        </ul>
      </div>
    </section>
  </div>;
}
