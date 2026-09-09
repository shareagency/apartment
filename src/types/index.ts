export interface HeaderProps {
  title: string
}

export interface GalleryCarouselProps {
  images: readonly string[]
  autoPlayInterval?: number
}


export interface CtaButtonProps {
  href: string
}

export interface ContractLinkProps {
  href: string
}

export interface PreviewModalProps {
  imageSrc: string | null
  onClose: () => void
}

export type PageSection = React.FC<any>
