declare namespace JSX {
  interface IntrinsicElements {
    'zapier-interfaces-page-embed': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'page-id'?: string;
      'no-background'?: string;
      style?: React.CSSProperties;
    };
  }
}