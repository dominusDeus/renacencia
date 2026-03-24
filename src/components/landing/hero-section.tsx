import type { HeroLine } from "@/components/landing/content";
import { heroContent } from "@/components/landing/content";
import {
  Container,
  MediaFrame,
  Section,
} from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

function HeroLineContent({ line }: { line: HeroLine }) {
  if (typeof line === "string") {
    return line;
  }

  return (
    <>
      {line.map((seg, i) =>
        seg.bold ? (
          <strong key={i} className="font-semibold text-foreground">
            {seg.text}
          </strong>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}

export function HeroSection() {
  const { kicker, lead, blocks } = heroContent;

  return (
    <Section className="overflow-hidden pt-10 sm:pt-12 lg:pt-16">
      <Container className="relative">
        <div className="hero-stage">
          <div className="relative z-[1] grid items-start gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:items-stretch lg:gap-14 xl:gap-20">
            <div className="order-1 lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:justify-center lg:self-stretch lg:sticky lg:top-[calc(var(--nav-height)+2rem)]">
              <div className="mx-auto w-full max-w-[21rem] lg:mx-0 lg:max-w-[25rem]">
                <MediaFrame className="aspect-[5/8] p-2 sm:p-3">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.1rem] bg-[var(--color-fg)]">
                    <video
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="Video introductorio de Renacencia"
                    >
                      <source src="/assets/video-charla.mp4" type="video/mp4" />
                      Tu navegador no admite videos HTML5.
                    </video>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent" />
                  </div>
                </MediaFrame>
              </div>
            </div>

            <div
              className={cn(
                "order-2 flex max-w-[var(--reading-width)] flex-col gap-4 sm:gap-5",
                "lg:h-full lg:min-h-0 lg:border-l lg:border-stone-200/65 lg:pl-8 xl:pl-10"
              )}
            >
              <header className="shrink-0 space-y-2.5 sm:space-y-3">
                <p className="ds-kicker">{kicker}</p>
                <h1 className="text-balance text-[clamp(1.8rem,3.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.034em] text-foreground xl:text-[clamp(1.85rem,3.4vw,3.35rem)]">
                  <span className="block">{lead}</span>
                </h1>
              </header>

              <div
                className={cn(
                  "flex min-h-0 flex-1 flex-col gap-4 sm:gap-5",
                  "lg:min-h-0 lg:justify-between lg:gap-0"
                )}
              >
                {blocks.map((block, blockIndex) => (
                  <p
                    key={blockIndex}
                    className={cn(
                      "hero-body text-pretty leading-[1.32] sm:leading-[1.34] lg:leading-[1.32]",
                      blockIndex === 0
                        ? "text-foreground/90"
                        : "text-[var(--color-muted-text)]"
                    )}
                  >
                    {block.lines.map((line, lineIndex) => (
                      <span key={lineIndex} className="block">
                        <HeroLineContent line={line} />
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
