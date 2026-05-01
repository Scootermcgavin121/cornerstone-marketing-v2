import Image from "next/image";

type BlogHeroProps = {
  src: string; // e.g. "/blog/foo.png"
  alt: string;
  /** Optional caption shown beneath the image */
  caption?: string;
};

/**
 * BlogHero — renders the hero image at the top of a blog post and emits
 * ImageObject JSON-LD scoped to the post for AISO + Google Image Search.
 */
export function BlogHero({ src, alt, caption }: BlogHeroProps) {
  const absoluteUrl = `https://www.cornerstonepm.ai${src}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: absoluteUrl,
    description: alt,
    creditText: "Cornerstone PM",
  };

  return (
    <figure className="mb-10 -mx-4 sm:mx-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="relative w-full aspect-square sm:aspect-[16/10] overflow-hidden sm:rounded-2xl border-y sm:border border-slate-800">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-slate-500 mt-3 px-4 sm:px-0 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
