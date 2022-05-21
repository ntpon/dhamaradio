import { Global } from "@emotion/react"
const Fonts = () => (
  <Global
    styles={`
    /* cyrillic-ext */
    @font-face {
      font-family: 'IBM Plex Sans Thai';
      font-style: normal;
      font-weight: 100;
      font-display: fallback;
      src: url(https://fonts.gstatic.com/s/ibmplexsansthai/v7/m8JNje1VVIzcq1HzJq2AEdo2Tj_qvLqEauYvTcd6Ug.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      
    }
    /* thai */
    @font-face {
      font-family: 'IBM Plex Sans Thai';
      font-style: normal;
      font-weight: 100;
      font-display: fallback;
      src: url(https://fonts.gstatic.com/s/ibmplexsansthai/v7/m8JNje1VVIzcq1HzJq2AEdo2Tj_qvLqEauY2Tcd6Ug.woff2) format('woff2');
      unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* latin-ext */
    @font-face {
      font-family: 'IBM Plex Sans Thai';
      font-style: normal;
      font-weight: 100;
      font-display: fallback;
      src: url(https://fonts.gstatic.com/s/ibmplexsansthai/v7/m8JNje1VVIzcq1HzJq2AEdo2Tj_qvLqEauYsTcd6Ug.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'IBM Plex Sans Thai';
      font-style: normal;
      font-weight: 100;
      font-display: fallback;
      src: url(https://fonts.gstatic.com/s/ibmplexsansthai/v7/m8JNje1VVIzcq1HzJq2AEdo2Tj_qvLqEauYiTcc.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'IBM Plex Sans Thai';
      font-style: normal;
      font-weight: 400;
      font-display: fallback;
      src: url(https://fonts.gstatic.com/s/ibmplexsansthai/v7/m8JPje1VVIzcq1HzJq2AEdo2Tj_qvLqMBNYgVcM.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* thai */
    @font-face {
      font-family: 'IBM Plex Sans Thai';
      font-style: normal;
      font-weight: 400;
      font-display: fallback;
      src: url(https://fonts.gstatic.com/s/ibmplexsansthai/v7/m8JPje1VVIzcq1HzJq2AEdo2Tj_qvLqMHdYgVcM.woff2) format('woff2');
      unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* latin-ext */
    @font-face {
      font-family: 'IBM Plex Sans Thai';
      font-style: normal;
      font-weight: 400;
      font-display: fallback;
      src: url(https://fonts.gstatic.com/s/ibmplexsansthai/v7/m8JPje1VVIzcq1HzJq2AEdo2Tj_qvLqMB9YgVcM.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'IBM Plex Sans Thai';
      font-style: normal;
      font-weight: 400;
      font-display: fallback;
      src: url(https://fonts.gstatic.com/s/ibmplexsansthai/v7/m8JPje1VVIzcq1HzJq2AEdo2Tj_qvLqMCdYg.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'IBM Plex Sans Thai';
      font-style: normal;
      font-weight: 700;
      font-display: fallback;
      src: url(https://fonts.gstatic.com/s/ibmplexsansthai/v7/m8JMje1VVIzcq1HzJq2AEdo2Tj_qvLqEsvM1Z-JHa74.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* thai */
    @font-face {
      font-family: 'IBM Plex Sans Thai';
      font-style: normal;
      font-weight: 700;
      font-display: fallback;
      src: url(https://fonts.gstatic.com/s/ibmplexsansthai/v7/m8JMje1VVIzcq1HzJq2AEdo2Tj_qvLqEsvM1fuJHa74.woff2) format('woff2');
      unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* latin-ext */
    @font-face {
      font-family: 'IBM Plex Sans Thai';
      font-style: normal;
      font-weight: 700;
      font-display: fallback;
      src: url(https://fonts.gstatic.com/s/ibmplexsansthai/v7/m8JMje1VVIzcq1HzJq2AEdo2Tj_qvLqEsvM1ZOJHa74.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'IBM Plex Sans Thai';
      font-style: normal;
      font-weight: 700;
      font-display: fallback;
      src: url(https://fonts.gstatic.com/s/ibmplexsansthai/v7/m8JMje1VVIzcq1HzJq2AEdo2Tj_qvLqEsvM1auJH.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    1
      `}
  />
)
export default Fonts
