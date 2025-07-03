export const theme = {
  colors: {
    dark: '#000000',
    light: '#FFFFFF',
    product_bg: '#F3F4F6',
    border: '#D1D5DB',
    text_color: '#6B7280',
    pagination_bg: '#E5E7EB',
    filter_btn: '#656565',
  },
  fonts: {
    main: "'Inter', sans-serif",
  },
  font_size: {
    sm: '0.8rem',
    base: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2.25rem',
    xxxl: '3rem',
  },
  line_height: {
    base: '20px',
    lg: '24px',
    xl: '30px',
    xxl: '35px',
    full: '100%',
  },
  font_weight: {
    light: '300',
    regular: '400',
    bold: '700',
  },
};

export type Theme = typeof theme;
