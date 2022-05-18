export const alerts = {
  danger: {
    "50": "#fef7f7",
    "100": "#feefef",
    "200": "#fcd7d8",
    "300": "#f9bfc1",
    "400": "#f59092",
    "500": "#f16063",
    "600": "#d95659",
    "700": "#b5484a",
    "800": "#913a3b",
    "900": "#762f31",
  },
  success: {
    "50": "#f7fcfa",
    "100": "#f0faf5",
    "200": "#d9f2e7",
    "300": "#c2ead9",
    "400": "#94dbbc",
    "500": "#66cb9f",
    "600": "#5cb78f",
    "700": "#4d9877",
    "800": "#3d7a5f",
    "900": "#32634e",
  },
  warning: {
    "50": "#fffcf8",
    "100": "#fefaf1",
    "200": "#fdf2db",
    "300": "#fce9c5",
    "400": "#f9d99a",
    "500": "#f7c96f",
    "600": "#deb564",
    "700": "#b99753",
    "800": "#947943",
    "900": "#796236",
  },
};

export const colors = {
  primary: {
    "50": "#f6f8ff",
    "100": "#edf1ff",
    "200": "#d2dbff",
    "300": "#b7c5ff",
    "400": "#829aff",
    "500": "#4c6fff",
    "600": "#4464e6",
    "700": "#3953bf",
    "800": "#2e4399",
    "900": "#25367d",
  },
  secondary: {
    "50": "#fffbf3",
    "100": "#fef7e7",
    "300": "#fbdfa0",
    "200": "#fdebc4",
    "400": "#f9c659",
    "500": "#f6ae12",
    "600": "#dd9d10",
    "700": "#b9830e",
    "800": "#94680b",
    "900": "#795509",
  },
  neutral: {
    "50": "#fafbfc",
    "100": "#f6f7f9",
    "200": "#e7ebef",
    "300": "#d9dfe6",
    "400": "#bdc6d3",
    "500": "#a0aec0",
    "600": "#909dad",
    "700": "#788390",
    "800": "#606873",
    "900": "#4e555e",
  },
};

export const background = {
  light: "#F7FAFC",
  dark: "#17171B",
};

export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  font: "Volte",
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  radii: {
    xs: 0.8,
    sm: 1,
    md: 1.4,
    xl: 2,
  },
  colors: {
    ...colors,
    ...alerts,
    background,
  },
  typography: {
    heading: [7.2, 6, 4.8, 3.6, 2.4, 1.8],
  },
};
