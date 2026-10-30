import type { ImgHTMLAttributes } from "react";
import { imageManifest } from "../config/imageManifest";

declare const __PUBLIC_IMAGE_PATHS__: string[];
export function publicImageExists(src: string) {
  return __PUBLIC_IMAGE_PATHS__.includes(src);
}

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string; priority?: boolean };
const assetUrl = (src: string) => src.startsWith("/") && !src.startsWith("//")
  ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src;

export function ResponsiveImage({ src, priority = false, sizes = "(max-width: 640px) 100vw, 50vw", width, height, srcSet, loading, ...props }: Props) {
  const image = imageManifest[src];
  const responsiveSources = srcSet ?? image?.srcSet.split(", ").map(assetUrl).join(", ");
  return <img {...props} src={assetUrl(image?.src ?? src)} srcSet={responsiveSources} sizes={sizes}
    width={width ?? image?.width ?? 600} height={height ?? image?.height ?? 600}
    loading={loading ?? (priority ? "eager" : "lazy")} decoding="async"
    fetchPriority={priority ? "high" : undefined} />;
}
