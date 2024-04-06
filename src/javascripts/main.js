"use strict";

const svg_diamond = `<?xml version="1.0" encoding="utf-8"?>
<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 8.5L17 5.5H14.5L15.5 8.5L12 18.5L19 8.5Z" stroke="#B9F2FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.37596 8.08397C4.1462 8.42862 4.23933 8.89427 4.58397 9.12404C4.92862 9.3538 5.39427 9.26067 5.62404 8.91603L4.37596 8.08397ZM7 5.5V4.75C6.74924 4.75 6.51506 4.87533 6.37596 5.08397L7 5.5ZM9.5 6.25C9.91421 6.25 10.25 5.91421 10.25 5.5C10.25 5.08579 9.91421 4.75 9.5 4.75V6.25ZM5.61442 8.0699C5.37689 7.73057 4.90924 7.64804 4.5699 7.88558C4.23057 8.12311 4.14804 8.59076 4.38558 8.9301L5.61442 8.0699ZM12 18.5L11.3856 18.9301C11.6004 19.237 12.0088 19.3383 12.3421 19.1674C12.6755 18.9965 12.8317 18.6058 12.7079 18.2522L12 18.5ZM9.20789 8.25224C9.07106 7.86128 8.6432 7.65527 8.25224 7.79211C7.86128 7.92894 7.65527 8.3568 7.79211 8.74776L9.20789 8.25224ZM5 7.75C4.58579 7.75 4.25 8.08579 4.25 8.5C4.25 8.91421 4.58579 9.25 5 9.25V7.75ZM8.5 9.25C8.91421 9.25 9.25 8.91421 9.25 8.5C9.25 8.08579 8.91421 7.75 8.5 7.75V9.25ZM10.2115 5.73717C10.3425 5.34421 10.1301 4.91947 9.73717 4.78849C9.34421 4.6575 8.91947 4.86987 8.78849 5.26283L10.2115 5.73717ZM7.78849 8.26283C7.6575 8.65579 7.86987 9.08053 8.26283 9.21151C8.65579 9.3425 9.08053 9.13013 9.21151 8.73717L7.78849 8.26283ZM9.5 4.75C9.08579 4.75 8.75 5.08579 8.75 5.5C8.75 5.91421 9.08579 6.25 9.5 6.25V4.75ZM14.5 6.25C14.9142 6.25 15.25 5.91421 15.25 5.5C15.25 5.08579 14.9142 4.75 14.5 4.75V6.25ZM8.5 7.75C8.08579 7.75 7.75 8.08579 7.75 8.5C7.75 8.91421 8.08579 9.25 8.5 9.25V7.75ZM19 9.25C19.4142 9.25 19.75 8.91421 19.75 8.5C19.75 8.08579 19.4142 7.75 19 7.75V9.25ZM5.62404 8.91603L7.62404 5.91603L6.37596 5.08397L4.37596 8.08397L5.62404 8.91603ZM7 6.25H9.5V4.75H7V6.25ZM4.38558 8.9301L11.3856 18.9301L12.6144 18.0699L5.61442 8.0699L4.38558 8.9301ZM12.7079 18.2522L9.20789 8.25224L7.79211 8.74776L11.2921 18.7478L12.7079 18.2522ZM5 9.25H8.5V7.75H5V9.25ZM8.78849 5.26283L7.78849 8.26283L9.21151 8.73717L10.2115 5.73717L8.78849 5.26283ZM9.5 6.25H14.5V4.75H9.5V6.25ZM8.5 9.25H19V7.75H8.5V9.25Z" fill="#B9F2FF"/>
</svg>`;

const svg_ruby = `<?xml version="1.0" encoding="utf-8"?>
<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 8.5L17 5.5H14.5L15.5 8.5L12 18.5L19 8.5Z" stroke="#e0115f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.37596 8.08397C4.1462 8.42862 4.23933 8.89427 4.58397 9.12404C4.92862 9.3538 5.39427 9.26067 5.62404 8.91603L4.37596 8.08397ZM7 5.5V4.75C6.74924 4.75 6.51506 4.87533 6.37596 5.08397L7 5.5ZM9.5 6.25C9.91421 6.25 10.25 5.91421 10.25 5.5C10.25 5.08579 9.91421 4.75 9.5 4.75V6.25ZM5.61442 8.0699C5.37689 7.73057 4.90924 7.64804 4.5699 7.88558C4.23057 8.12311 4.14804 8.59076 4.38558 8.9301L5.61442 8.0699ZM12 18.5L11.3856 18.9301C11.6004 19.237 12.0088 19.3383 12.3421 19.1674C12.6755 18.9965 12.8317 18.6058 12.7079 18.2522L12 18.5ZM9.20789 8.25224C9.07106 7.86128 8.6432 7.65527 8.25224 7.79211C7.86128 7.92894 7.65527 8.3568 7.79211 8.74776L9.20789 8.25224ZM5 7.75C4.58579 7.75 4.25 8.08579 4.25 8.5C4.25 8.91421 4.58579 9.25 5 9.25V7.75ZM8.5 9.25C8.91421 9.25 9.25 8.91421 9.25 8.5C9.25 8.08579 8.91421 7.75 8.5 7.75V9.25ZM10.2115 5.73717C10.3425 5.34421 10.1301 4.91947 9.73717 4.78849C9.34421 4.6575 8.91947 4.86987 8.78849 5.26283L10.2115 5.73717ZM7.78849 8.26283C7.6575 8.65579 7.86987 9.08053 8.26283 9.21151C8.65579 9.3425 9.08053 9.13013 9.21151 8.73717L7.78849 8.26283ZM9.5 4.75C9.08579 4.75 8.75 5.08579 8.75 5.5C8.75 5.91421 9.08579 6.25 9.5 6.25V4.75ZM14.5 6.25C14.9142 6.25 15.25 5.91421 15.25 5.5C15.25 5.08579 14.9142 4.75 14.5 4.75V6.25ZM8.5 7.75C8.08579 7.75 7.75 8.08579 7.75 8.5C7.75 8.91421 8.08579 9.25 8.5 9.25V7.75ZM19 9.25C19.4142 9.25 19.75 8.91421 19.75 8.5C19.75 8.08579 19.4142 7.75 19 7.75V9.25ZM5.62404 8.91603L7.62404 5.91603L6.37596 5.08397L4.37596 8.08397L5.62404 8.91603ZM7 6.25H9.5V4.75H7V6.25ZM4.38558 8.9301L11.3856 18.9301L12.6144 18.0699L5.61442 8.0699L4.38558 8.9301ZM12.7079 18.2522L9.20789 8.25224L7.79211 8.74776L11.2921 18.7478L12.7079 18.2522ZM5 9.25H8.5V7.75H5V9.25ZM8.78849 5.26283L7.78849 8.26283L9.21151 8.73717L10.2115 5.73717L8.78849 5.26283ZM9.5 6.25H14.5V4.75H9.5V6.25ZM8.5 9.25H19V7.75H8.5V9.25Z" fill="#e0115f"/>
</svg>`;

const svg_emerald = `<?xml version="1.0" encoding="utf-8"?>
<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 8.5L17 5.5H14.5L15.5 8.5L12 18.5L19 8.5Z" stroke="#50c878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.37596 8.08397C4.1462 8.42862 4.23933 8.89427 4.58397 9.12404C4.92862 9.3538 5.39427 9.26067 5.62404 8.91603L4.37596 8.08397ZM7 5.5V4.75C6.74924 4.75 6.51506 4.87533 6.37596 5.08397L7 5.5ZM9.5 6.25C9.91421 6.25 10.25 5.91421 10.25 5.5C10.25 5.08579 9.91421 4.75 9.5 4.75V6.25ZM5.61442 8.0699C5.37689 7.73057 4.90924 7.64804 4.5699 7.88558C4.23057 8.12311 4.14804 8.59076 4.38558 8.9301L5.61442 8.0699ZM12 18.5L11.3856 18.9301C11.6004 19.237 12.0088 19.3383 12.3421 19.1674C12.6755 18.9965 12.8317 18.6058 12.7079 18.2522L12 18.5ZM9.20789 8.25224C9.07106 7.86128 8.6432 7.65527 8.25224 7.79211C7.86128 7.92894 7.65527 8.3568 7.79211 8.74776L9.20789 8.25224ZM5 7.75C4.58579 7.75 4.25 8.08579 4.25 8.5C4.25 8.91421 4.58579 9.25 5 9.25V7.75ZM8.5 9.25C8.91421 9.25 9.25 8.91421 9.25 8.5C9.25 8.08579 8.91421 7.75 8.5 7.75V9.25ZM10.2115 5.73717C10.3425 5.34421 10.1301 4.91947 9.73717 4.78849C9.34421 4.6575 8.91947 4.86987 8.78849 5.26283L10.2115 5.73717ZM7.78849 8.26283C7.6575 8.65579 7.86987 9.08053 8.26283 9.21151C8.65579 9.3425 9.08053 9.13013 9.21151 8.73717L7.78849 8.26283ZM9.5 4.75C9.08579 4.75 8.75 5.08579 8.75 5.5C8.75 5.91421 9.08579 6.25 9.5 6.25V4.75ZM14.5 6.25C14.9142 6.25 15.25 5.91421 15.25 5.5C15.25 5.08579 14.9142 4.75 14.5 4.75V6.25ZM8.5 7.75C8.08579 7.75 7.75 8.08579 7.75 8.5C7.75 8.91421 8.08579 9.25 8.5 9.25V7.75ZM19 9.25C19.4142 9.25 19.75 8.91421 19.75 8.5C19.75 8.08579 19.4142 7.75 19 7.75V9.25ZM5.62404 8.91603L7.62404 5.91603L6.37596 5.08397L4.37596 8.08397L5.62404 8.91603ZM7 6.25H9.5V4.75H7V6.25ZM4.38558 8.9301L11.3856 18.9301L12.6144 18.0699L5.61442 8.0699L4.38558 8.9301ZM12.7079 18.2522L9.20789 8.25224L7.79211 8.74776L11.2921 18.7478L12.7079 18.2522ZM5 9.25H8.5V7.75H5V9.25ZM8.78849 5.26283L7.78849 8.26283L9.21151 8.73717L10.2115 5.73717L8.78849 5.26283ZM9.5 6.25H14.5V4.75H9.5V6.25ZM8.5 9.25H19V7.75H8.5V9.25Z" fill="#50c878"/>
</svg>`;

const svg_sapphire = `<?xml version="1.0" encoding="utf-8"?>
<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 8.5L17 5.5H14.5L15.5 8.5L12 18.5L19 8.5Z" stroke="#0f52ba" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.37596 8.08397C4.1462 8.42862 4.23933 8.89427 4.58397 9.12404C4.92862 9.3538 5.39427 9.26067 5.62404 8.91603L4.37596 8.08397ZM7 5.5V4.75C6.74924 4.75 6.51506 4.87533 6.37596 5.08397L7 5.5ZM9.5 6.25C9.91421 6.25 10.25 5.91421 10.25 5.5C10.25 5.08579 9.91421 4.75 9.5 4.75V6.25ZM5.61442 8.0699C5.37689 7.73057 4.90924 7.64804 4.5699 7.88558C4.23057 8.12311 4.14804 8.59076 4.38558 8.9301L5.61442 8.0699ZM12 18.5L11.3856 18.9301C11.6004 19.237 12.0088 19.3383 12.3421 19.1674C12.6755 18.9965 12.8317 18.6058 12.7079 18.2522L12 18.5ZM9.20789 8.25224C9.07106 7.86128 8.6432 7.65527 8.25224 7.79211C7.86128 7.92894 7.65527 8.3568 7.79211 8.74776L9.20789 8.25224ZM5 7.75C4.58579 7.75 4.25 8.08579 4.25 8.5C4.25 8.91421 4.58579 9.25 5 9.25V7.75ZM8.5 9.25C8.91421 9.25 9.25 8.91421 9.25 8.5C9.25 8.08579 8.91421 7.75 8.5 7.75V9.25ZM10.2115 5.73717C10.3425 5.34421 10.1301 4.91947 9.73717 4.78849C9.34421 4.6575 8.91947 4.86987 8.78849 5.26283L10.2115 5.73717ZM7.78849 8.26283C7.6575 8.65579 7.86987 9.08053 8.26283 9.21151C8.65579 9.3425 9.08053 9.13013 9.21151 8.73717L7.78849 8.26283ZM9.5 4.75C9.08579 4.75 8.75 5.08579 8.75 5.5C8.75 5.91421 9.08579 6.25 9.5 6.25V4.75ZM14.5 6.25C14.9142 6.25 15.25 5.91421 15.25 5.5C15.25 5.08579 14.9142 4.75 14.5 4.75V6.25ZM8.5 7.75C8.08579 7.75 7.75 8.08579 7.75 8.5C7.75 8.91421 8.08579 9.25 8.5 9.25V7.75ZM19 9.25C19.4142 9.25 19.75 8.91421 19.75 8.5C19.75 8.08579 19.4142 7.75 19 7.75V9.25ZM5.62404 8.91603L7.62404 5.91603L6.37596 5.08397L4.37596 8.08397L5.62404 8.91603ZM7 6.25H9.5V4.75H7V6.25ZM4.38558 8.9301L11.3856 18.9301L12.6144 18.0699L5.61442 8.0699L4.38558 8.9301ZM12.7079 18.2522L9.20789 8.25224L7.79211 8.74776L11.2921 18.7478L12.7079 18.2522ZM5 9.25H8.5V7.75H5V9.25ZM8.78849 5.26283L7.78849 8.26283L9.21151 8.73717L10.2115 5.73717L8.78849 5.26283ZM9.5 6.25H14.5V4.75H9.5V6.25ZM8.5 9.25H19V7.75H8.5V9.25Z" fill="#0f52ba"/>
</svg>`;

const svg_star = `<?xml version="1.0" encoding="utf-8"?>
<svg width="48" height="48" viewBox="0 0 24 24" fill="#ffff00" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const svg_star_2 = `<?xml version="1.0" encoding="utf-8"?>
<svg width="100%" height="24" viewBox="0 0 24 24" fill="#ffff00" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function CalculateVh()
{
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

function TogglePanel(panel)
{
  if(panel.style.display === '') panel.style.display = 'none';
  else panel.style.display = '';
}

window.addEventListener('DOMContentLoaded', CalculateVh);
window.addEventListener('resize', CalculateVh);
window.addEventListener('orientationchange', CalculateVh);

// header controls
const ScoreDisplay = document.getElementById("ScoreDisplay");
const PlayButton = document.getElementById("PlayButton");
const PauseButton = document.getElementById("PauseButton");

const GlobeButton = document.getElementById("GlobeButton");

const timerDisplay = document.getElementById("timerDisplay");

const STAT_OUTPUT = document.getElementById("STAT_OUTPUT");

// game messages
const responseDisplay = document.getElementById("responseDisplay");

// answer display
const answerContainer = document.getElementById("answerContainer");

// wordwheel display
const canvasContainer = document.getElementById("canvasContainer");
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// bottom menu
const deleteButton = document.getElementById("deleteButton");
const submitButton = document.getElementById("submitButton");
const submitAnswerID = document.getElementById("submitAnswerID");

// assignments
PlayButton.onclick = function(){ Play() };
PauseButton.onclick = function(){
  if(playing)
  {
    if(window.confirm('End this game early?'))
    {
      Pause();
    }
  }
  else Pause();
};
GlobeButton.onclick = function(){ StartGlobal() };

submitButton.onclick = function(){ ValidateAnswer() };
deleteButton.onclick = function(){ DeleteLetter() };

// wordwheel button locations and info
let buttonPoints = [];
// which buttons have been clicked
let tempButtons = [];
// holds temp colour
let col = undefined;

// monitors whether there is an active game
let playing = false;

// timer variables
let timer = 0;
let interval = undefined;
let gameTime = 300;

// game information arrays
// all possible words
let words = [];
let starter_words = [];

// to pick the 9 letters
let consonants = [];
let vowels = [];

// the 9 letters
let choices = [];

// players answers
let answers = [];
// pool of possible answers
let possibleAnswers = [];

let shuffle_timer = null;

let menu = {
  '9':0,
  '8':0,
  '7':0,
  '6':0,
  '5':0,
  '4':0,
  '3':0,
};

let score_track = {
  '9':0,
  '8':0,
  '7':0,
  '6':0,
  '5':0,
  '4':0,
  '3':0,
};

class Archive
{
  constructor()
  {
    this.init();
    this.get();
    this.print();
  }

  check_has_played_global()
  {
    let today = this.today_date();
    let last = get_storage('last_global');
    if(today === last) return true;
    else return false;
  }

  completed_global()
  {
    let today = this.today_date();
    set_storage('last_global', today);
  }

  today_date()
  {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return dd + '-' + mm + '-' + yyyy;
  }

  init()
  {
    if(get_storage('games_played') === null) set_storage('games_played', 0);
    if(get_storage('games_random') === null) set_storage('games_random', 0);
    if(get_storage('games_daily') === null) set_storage('games_daily', 0);
  
    if(get_storage('stats_total_9') === null) set_storage('stats_total_9', 0);
    if(get_storage('stats_total_8') === null) set_storage('stats_total_8', 0);
    if(get_storage('stats_total_7') === null) set_storage('stats_total_7', 0);
    if(get_storage('stats_total_6') === null) set_storage('stats_total_6', 0);
    if(get_storage('stats_total_5') === null) set_storage('stats_total_5', 0);
    if(get_storage('stats_total_4') === null) set_storage('stats_total_4', 0);
    if(get_storage('stats_total_3') === null) set_storage('stats_total_3', 0);
  
    if(get_storage('stats_got_9') === null) set_storage('stats_got_9', 0);
    if(get_storage('stats_got_8') === null) set_storage('stats_got_8', 0);
    if(get_storage('stats_got_7') === null) set_storage('stats_got_7', 0);
    if(get_storage('stats_got_6') === null) set_storage('stats_got_6', 0);
    if(get_storage('stats_got_5') === null) set_storage('stats_got_5', 0);
    if(get_storage('stats_got_4') === null) set_storage('stats_got_4', 0);
    if(get_storage('stats_got_3') === null) set_storage('stats_got_3', 0);
  
    if(get_storage('diamond') === null) set_storage('diamond', 0);
    if(get_storage('ruby') === null) set_storage('ruby', 0);
    if(get_storage('emerald') === null) set_storage('emerald', 0);
    if(get_storage('sapphire') === null) set_storage('sapphire', 0);
  
    if(get_storage('star_5') === null) set_storage('star_5', 0);
    if(get_storage('star_4') === null) set_storage('star_4', 0);
    if(get_storage('star_3') === null) set_storage('star_3', 0);
    if(get_storage('star_2') === null) set_storage('star_2', 0);
    if(get_storage('star_1') === null) set_storage('star_1', 0);
  
    if(get_storage('streak') === null) set_storage('streak', 0);
    if(get_storage('streak_max') === null) set_storage('streak_max', 0);
    if(get_storage('last_global') === null) set_storage('last_global', '01-01-1970');
  }

  get()
  {
    this.games_played = parseInt(get_storage('games_played'));
    this.games_random = parseInt(get_storage('games_random'));
    this.games_daily = parseInt(get_storage('games_daily'));

    this.stats_total_9 = parseInt(get_storage('stats_total_9'));
    this.stats_total_8 = parseInt(get_storage('stats_total_8'));
    this.stats_total_7 = parseInt(get_storage('stats_total_7'));
    this.stats_total_6 = parseInt(get_storage('stats_total_6'));
    this.stats_total_5 = parseInt(get_storage('stats_total_5'));
    this.stats_total_4 = parseInt(get_storage('stats_total_4'));
    this.stats_total_3 = parseInt(get_storage('stats_total_3'));

    this.stats_got_9 = parseInt(get_storage('stats_got_9'));
    this.stats_got_8 = parseInt(get_storage('stats_got_8'));
    this.stats_got_7 = parseInt(get_storage('stats_got_7'));
    this.stats_got_6 = parseInt(get_storage('stats_got_6'));
    this.stats_got_5 = parseInt(get_storage('stats_got_5'));
    this.stats_got_4 = parseInt(get_storage('stats_got_4'));
    this.stats_got_3 = parseInt(get_storage('stats_got_3'));

    this.diamond = parseInt(get_storage('diamond'));
    this.ruby = parseInt(get_storage('ruby'));
    this.emerald = parseInt(get_storage('emerald'));
    this.sapphire = parseInt(get_storage('sapphire'));

    this.star_5 = parseInt(get_storage('star_5'));
    this.star_4 = parseInt(get_storage('star_4'));
    this.star_3 = parseInt(get_storage('star_3'));
    this.star_2 = parseInt(get_storage('star_2'));
    this.star_1 = parseInt(get_storage('star_1'));

    this.streak = parseInt(get_storage('streak'));
    this.streak_max = parseInt(get_storage('streak_max'));
  }

  print()
  {
    STAT_OUTPUT.innerHTML = '';

    for(let key in this)
    {
      if(this.hasOwnProperty(key))
      {
        if(key.startsWith('stats') || key.startsWith('streak') || key.startsWith('games_random') || key.startsWith('games_daily')) continue;

        let div = document.createElement('div');
        div.className = 'w-full flex flex-row justify-center items-center mb-4';

        let stat_name = document.createElement('div');
        stat_name.className = 'mx-2 flex justify-center items-center text-md';
        stat_name.style.width = '560px';

        if(key === 'diamond')
        {
          stat_name.innerHTML = svg_diamond.trim();
          stat_name.className += ' h-20';
        }
        if(key === 'ruby')
        {
          stat_name.innerHTML = svg_ruby.trim();
          stat_name.className += ' h-20';
        }
        if(key === 'emerald')
        {
          stat_name.innerHTML = svg_emerald.trim();
          stat_name.className += ' h-20';
        }
        if(key === 'sapphire')
        {
          stat_name.innerHTML = svg_sapphire.trim();
          stat_name.className += ' h-20';
        }
        if(key === 'star_5')
        {
          for(let i = 0; i < 5; i++)
          {
            stat_name.innerHTML += svg_star.trim();
          }
          stat_name.className += ' h-20';
        }
        if(key === 'star_4')
        {
          for(let i = 0; i < 4; i++)
          {
            stat_name.innerHTML += svg_star.trim();
          }
          stat_name.className += ' h-20';
        }
        if(key === 'star_3')
        {
          for(let i = 0; i < 3; i++)
          {
            stat_name.innerHTML += svg_star.trim();
          }
          stat_name.className += ' h-20';
        }
        if(key === 'star_2')
        {
          for(let i = 0; i < 2; i++)
          {
            stat_name.innerHTML += svg_star.trim();
          }
          stat_name.className += ' h-20';
        }
        if(key === 'star_1')
        {
          stat_name.innerHTML += svg_star.trim();
          stat_name.className += ' h-28';
        }
        if(key === 'games_played')
        {
          stat_name.innerHTML = 'Games Played';
        }

        let stat_value = document.createElement('div');
        stat_value.innerHTML = this[key];
        stat_value.className = 'mr-2 ml-8';

        div.appendChild(stat_value);
        div.appendChild(stat_name);
        STAT_OUTPUT.appendChild(div);
      }
    }

    let reset_stats = document.createElement('button');
    reset_stats.className = 'm-2 p-2 text-white cursor-pointer border border-stone-900 rounded-lg bg-stone-800 hover:bg-stone-600 transition ease-in-out duration-300';
    reset_stats.innerHTML = 'reset';
    reset_stats.style.fontSize = '16px';
    reset_stats.onclick = function() { window.archive.reset(); };
    STAT_OUTPUT.appendChild(reset_stats);
  }

  reset()
  {
    let confirm = window.confirm('Reset all of your stats? These cannot be recovered.')
    if(confirm)
    {
      set_storage('games_played', 0);
      set_storage('games_random', 0);
      set_storage('games_daily', 0);
    
      set_storage('stats_total_9', 0);
      set_storage('stats_total_8', 0);
      set_storage('stats_total_7', 0);
      set_storage('stats_total_6', 0);
      set_storage('stats_total_5', 0);
      set_storage('stats_total_4', 0);
      set_storage('stats_total_3', 0);
    
      set_storage('stats_got_9', 0);
      set_storage('stats_got_8', 0);
      set_storage('stats_got_7', 0);
      set_storage('stats_got_6', 0);
      set_storage('stats_got_5', 0);
      set_storage('stats_got_4', 0);
      set_storage('stats_got_3', 0);
    
      set_storage('diamond', 0);
      set_storage('ruby', 0);
      set_storage('emerald', 0);
      set_storage('sapphire', 0);
    
      set_storage('star_5', 0);
      set_storage('star_4', 0);
      set_storage('star_3', 0);
      set_storage('star_2', 0);
      set_storage('star_1', 0);
    
      set_storage('streak', 0);
      set_storage('streak_max', 0);

      this.get();
      this.print();
    }
  }

  save()
  {
    set_storage('games_played', this.games_played);
    set_storage('games_random', this.games_random);
    set_storage('games_daily', this.games_daily);

    set_storage('stats_total_9', this.stats_total_9);
    set_storage('stats_total_8', this.stats_total_8);
    set_storage('stats_total_7', this.stats_total_7);
    set_storage('stats_total_6', this.stats_total_6);
    set_storage('stats_total_5', this.stats_total_5);
    set_storage('stats_total_4', this.stats_total_4);
    set_storage('stats_total_3', this.stats_total_3);

    set_storage('stats_got_9', this.stats_got_9);
    set_storage('stats_got_8', this.stats_got_8);
    set_storage('stats_got_7', this.stats_got_7);
    set_storage('stats_got_6', this.stats_got_6);
    set_storage('stats_got_5', this.stats_got_5);
    set_storage('stats_got_4', this.stats_got_4);
    set_storage('stats_got_3', this.stats_got_3);

    set_storage('diamond', this.diamond);
    set_storage('ruby', this.ruby);
    set_storage('emerald', this.emerald);
    set_storage('sapphire', this.sapphire);

    set_storage('star_5', this.star_5);
    set_storage('star_4', this.star_4);
    set_storage('star_3', this.star_3);
    set_storage('star_2', this.star_2);
    set_storage('star_1', this.star_1);

    set_storage('streak', this.streak);
    set_storage('streak_max', this.streak_max);
  }
}

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const MENU_IDS = [
  document.getElementById('MENU_9'),
  document.getElementById('MENU_8'),
  document.getElementById('MENU_7'),
  document.getElementById('MENU_6'),
  document.getElementById('MENU_5'),
  document.getElementById('MENU_4'),
  document.getElementById('MENU_3'),
];

const MAX_IDS = [
  document.getElementById('MAX_9'),
  document.getElementById('MAX_8'),
  document.getElementById('MAX_7'),
  document.getElementById('MAX_6'),
  document.getElementById('MAX_5'),
  document.getElementById('MAX_4'),
  document.getElementById('MAX_3'),
];

TogglePanel(PauseButton);

// get the word list and parse it into the words array
function Start()
{
  window.archive = new Archive();
  $.get('/wordwheel/words.txt', function (data)
  {
    words = data.split("\n");
    for(let i = 0; i < words.length; i++)
    {
      words[i] = words[i].replace("\n", "");
      words[i] = words[i].replace(" ", "");
      words[i] = words[i].replace(/\s/g, '');
      words[i] = words[i].toUpperCase();
      if(words[i].length === 9) starter_words.push(words[i]);
    }
  });
}

// switches between play game, stop game, start new game
function Play()
{
  if(!playing) // if playing, end
  {
    TogglePanel(PlayButton);
    TogglePanel(PauseButton);
    NewGame();
  }
}

function Pause()
{
  if(playing) // if playing, end
  {
    TogglePanel(PlayButton);
    TogglePanel(PauseButton);
    EndGame();
  }
}

// reset all UI, get a new word list and start the timer
function NewGame()
{
  answerContainer.innerHTML = '';
  responseDisplay.innerHTML = '';
  timerDisplay.style.color = 'black';
  let counter = 0;
  tempButtons.length = 0;
  possibleAnswers.length = 0;
  answers.length = 0;
  choices = null;
  for(let i = 0; i < menu.length; i++)
  {
    menu[i] = 0;
    score_track[i] = 0;
  }

  while(possibleAnswers.length < 10)
  {
    // GetWords();
    GetWords2();
    counter++;
    if(counter > 100)
    {
      Pause();
      break;
    }
  }
  ScoreDisplay.innerHTML = '<span style="color:var(--wordGot);">' + answers.length + '</span>' +'/' + '<span style="color:var(--wordMissed);">' +possibleAnswers.length + '</span>';
  playing = true;
  degradingInterval(RandomLetters, 0, 250, 25);
  window.archive.games_played++;
  window.archive.games_random++;
  window.archive.save();
}

function degradingInterval(callback, initialDelay, maxDelay, step) {
  let currentDelay = initialDelay;
  
  function execute() {
      callback();
      if (currentDelay < maxDelay) {
          currentDelay += step;
          setTimeout(execute, currentDelay);
      }
      else ActuallyBegin();
  }
  
  if(currentDelay < maxDelay) execute();
  else ActuallyBegin();
}

function RandomLetters()
{
  buttonPoints.length = 0;
  c.clearRect(0,0,canvas.width,canvas.height);
  let w = canvasContainer.scrollHeight * 0.9;
  canvas.width = w;
  canvas.height = w;
  c.width = w;
  c.height = w;
  c.fillStyle = "black";
  c.strokeStyle = "black";
  c.lineWidth = 1.5;
  c.font = "16px Lato";
  c.textAlign = "center";
  c.textBaseline = 'middle';
  let buttonCircle = canvas.width/10;
  // main circle
  c.beginPath();
  c.arc((c.width/2), (c.height/2), ((c.width/2)-c.lineWidth * 4), 0, (2 * Math.PI));
  c.stroke();
  /// inner circle
  c.beginPath();
  c.arc((c.width/2), (c.height/2), ((c.width/5)-c.lineWidth), 0, (2 * Math.PI));
  c.stroke();
  // middle letter
  c.fillText(alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase(), (c.width/2), (c.height/2));
  let startPoint = {x:(c.width/2), y:(c.height/2), r:((c.width/5)-c.lineWidth), c:choices[0], i:0};
  buttonPoints.push(startPoint);
  // outer button positions
  let angles = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];
  if(tempButtons.includes(0))
  {
    c.fillStyle = "rgba(" + col.r + " , " + col.g + " , " + col.b + ", 1)";
    let startPoint = {x:(c.width/2), y:(c.height/2), r:((c.width/5)-c.lineWidth-1), c:choices[0], i:0};
    c.beginPath();
    c.arc(startPoint.x, startPoint.y, startPoint.r, 0, (2 * Math.PI));
    c.fill();
    c.fillStyle = "black";
    c.fillText(alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase(), startPoint.x, startPoint.y);
  }
  let counter = 1;
  c.strokeStyle = "black";
  // draw outer buttons
  for(let i = 0; i < angles.length; i++)
  {
    let startPoint = GetCirclePoint((c.width/2), (c.height/2), ((c.width/3)-c.lineWidth), DegreeToRad(angles[i]));
    startPoint.c = choices[counter];
    startPoint.i = counter;
    if(tempButtons.includes(counter))
    {
      c.fillStyle = "rgba(" + col.r + " , " + col.g + " , " + col.b + ", 1)";
      c.beginPath();
      c.arc(startPoint.x, startPoint.y, buttonCircle, 0, (2 * Math.PI));
      c.fill();
    }
    c.beginPath();
    c.arc(startPoint.x, startPoint.y, buttonCircle, 0, (2 * Math.PI));
    c.stroke();
    c.fillStyle = "black";
    c.fillText(alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase(), startPoint.x, startPoint.y);
    counter++;
    buttonPoints.push(startPoint);
  }
}

function ActuallyBegin()
{
  responseDisplay.innerHTML = 'Game Started.';
  AnimatePop(responseDisplay);
  AnimatePop(canvas);
  Draw();
  clearInterval(interval);
  interval = undefined;
  timer = gameTime;
  StartTimer();
  ShowTimer();
  col = RandomCol(200);
}

function GetWords2()
{
  const rand = Math.floor(Math.random() * starter_words.length);
  const answer = starter_words[rand];

  choices = shuffleArray(answer.split(''));

  for(let i = 0; i < choices.length; i++)
  {
    choices[i] = choices[i].toUpperCase();
  }

  for(let key in score_track)
  {
    if(score_track.hasOwnProperty(key))
    {
      score_track[key] = 0;
    }
  }

  for(let key in menu)
  {
    if(menu.hasOwnProperty(key))
    {
      menu[key] = 0;
    }
  }

  let middle = choices[0].toString();
  for(let i = 0; i < words.length; i++)
  {
    if(!words[i].includes(middle) || words[i].length > 9 || words[i].length < 3) continue;

    let newList = [];
    let thisWord = words[i];
    let check = true;

    for(let c = 0; c < choices.length; c++)
    {
      let newC = choices[c];
      newList.push(newC);
    }

    for(let w = 0; w < thisWord.length; w++)
    {
      if(!newList.includes(thisWord[w])) check = false;
      if(newList.includes(thisWord[w]))
      {
        let iOf = newList.indexOf(thisWord[w]);
        newList.splice(iOf, 1);
      }
      if (newList.length < 0) check = false;
    }

    if(!check) continue;
    else
    {
      possibleAnswers.push(thisWord);
      menu[words[i].length]++;
    }
  }

  for(let key in menu)
  {
    if(menu.hasOwnProperty(key))
    {
      document.getElementById('MENU_' + key).innerHTML = 0;
      document.getElementById('MAX_' + key).innerHTML = menu[key];
    }
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function GetWords()
{
  answers.length = 0;
  possibleAnswers.length = 0;
  consonants.length = 0;
  consonants = [ "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", ];
  vowels.length = 0;
  vowels = [ "a", "e", "i", "o", "u" ];
  choices.length = 0;
  let count = 9;
  let pick = Math.floor(Math.random() * 4) + 1;
  count -= pick;
  for(let i = 0; i < pick; i++)
  {
    let picked = Math.floor(Math.random() * vowels.length);
    if(vowels[picked] != null)
    {
      choices.push(vowels[picked]);
      let perCent = Math.floor(Math.random() * 100);
      if(perCent < 5 && i < pick)
      {
        choices.push(vowels[picked]);
        i++;
      }
      vowels.splice(picked, 1);
    }
  }
  for(let i = 0; i < count; i++)
  {
    let picked = Math.floor(Math.random() * consonants.length);
    choices.push(consonants[picked]);
    let perCent = Math.floor(Math.random() * 100);
    if(perCent < 5 && i < count)
    {
      choices.push(consonants[picked]);
      i++;
    }
    consonants.splice(picked, 1);
  }
  choices = ShuffleArray(choices);
  if(choices.length > 9) choices.length = 9;
  let middle = choices[0].toString();
  for(let i = 0; i < words.length; i++)
  {
    if(!words[i].includes(middle) || words[i].length > 9 || words[i].length < 3) continue;
    let newList = [];
    let thisWord = words[i];
    let check = true;
    for(let c = 0; c < choices.length; c++)
    {
      let newC = choices[c];
      newList.push(newC);
    }
    for(let w = 0; w < thisWord.length; w++)
    {
      if(!newList.includes(thisWord[w])) check = false;
      if(newList.includes(thisWord[w]))
      {
        let iOf = newList.indexOf(thisWord[w]);
        newList.splice(iOf, 1);
      }
      if (newList.length <= 0) check = false;
    }
    if (!check) continue;
    else possibleAnswers.push(thisWord);
  }
}

function StartGlobal()
{
  let confirm = null;
  if(playing)
  {
    window.alert('Cannot start global challenge when in a game.');
    return;
  }
  else
  {

    if(window.archive.check_has_played_global())
    {
      window.alert('You have already played today, come back tomorrow!');
      return;
    }
    else
    {
      confirm = window.confirm('Start daily global challenge?');
    }
  }
  if(confirm === null || !confirm) return;

  answerContainer.innerHTML = '';
  responseDisplay.innerHTML = '';
  timerDisplay.style.color = 'black';
  let counter = 0;
  tempButtons.length = 0;
  possibleAnswers.length = 0;
  answers.length = 0;
  choices = null;
  for(let i = 0; i < menu.length; i++)
  {
    menu[i] = 0;
    score_track[i] = 0;
  }

  ScoreDisplay.innerHTML = '<span style="color:var(--wordGot);">' + answers.length + '</span>' +'/' + '<span style="color:var(--wordMissed);">' +possibleAnswers.length + '</span>';

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear() % 100;

  const formattedDate = `${day}-${month < 10 ? '0' + month : month}-${year}`;

  let hash = 0;
  for(let i = 0; i < formattedDate.length; i++)
  {
    hash = (hash << 5) - hash + formattedDate.charCodeAt(i);
  }

  const rand = Math.abs(hash) % starter_words.length;

  const answer = starter_words[rand];

  choices = shuffleArray(answer.split(''));

  for(let i = 0; i < choices.length; i++)
  {
    choices[i] = choices[i].toUpperCase();
  }

  for(let key in score_track)
  {
    if(score_track.hasOwnProperty(key))
    {
      score_track[key] = 0;
    }
  }

  for(let key in menu)
  {
    if(menu.hasOwnProperty(key))
    {
      menu[key] = 0;
    }
  }

  let middle = choices[0].toString();
  for(let i = 0; i < words.length; i++)
  {
    if(!words[i].includes(middle) || words[i].length > 9 || words[i].length < 3) continue;

    let newList = [];
    let thisWord = words[i];
    let check = true;

    for(let c = 0; c < choices.length; c++)
    {
      let newC = choices[c];
      newList.push(newC);
    }

    for(let w = 0; w < thisWord.length; w++)
    {
      if(!newList.includes(thisWord[w])) check = false;
      if(newList.includes(thisWord[w]))
      {
        let iOf = newList.indexOf(thisWord[w]);
        newList.splice(iOf, 1);
      }
      if (newList.length < 0) check = false;
    }

    if(!check) continue;
    else
    {
      possibleAnswers.push(thisWord);
      menu[words[i].length]++;
    }
  }

  for(let key in menu)
  {
    if(menu.hasOwnProperty(key))
    {
      document.getElementById('MENU_' + key).innerHTML = 0;
      document.getElementById('MAX_' + key).innerHTML = menu[key];
    }
  }

  playing = true;
  degradingInterval(RandomLetters, 0, 400, 50);
  window.archive.completed_global();
  window.archive.games_played++;
  window.archive.games_daily++;
  window.archive.save();
}

function ShuffleArray(array)
{
  for(let i = array.length - 1; i > 0; i--)
  {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function StartTimer()
{
  interval = setInterval(DegradeTimer, 1000);
}

function DegradeTimer()
{
  if(timer > 1)
  {
    timer--;
    if(timer <= 60 && timerDisplay.style.color !== 'red') timerDisplay.style.color = 'red';
    if(timer <= 15) AnimatePop(timerDisplay);
    ShowTimer();
  }
  else
  {
    EndGame();
  }
}

function ShowTimer()
{
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  if(minutes > 0 && seconds < 10) seconds = "0" + seconds;
  if(minutes > 0) timerDisplay.innerHTML = minutes + ":" + seconds;
  else timerDisplay.innerHTML = seconds;
}

function CheckButton(x, y)
{
  for(let i = 0; i < buttonPoints.length; i++)
  {
    let b = buttonPoints[i];
    if(CircleIntersect(x, y, 1, b.x, b.y, b.r))
    {
      return i;
    }
  }
  return false;
}

function CircleIntersect(x1, y1, r1, x2, y2, r2)
{
  let squareDistance = ( x1 - x2 ) * ( x1 - x2 ) + ( y1 - y2 ) * ( y1 - y2 );
  return squareDistance <= ( ( r1 + r2 ) * ( r1 + r2 ) );
}

function GetCirclePoint(xStart, yStart, radius, angle)
{
  let x = xStart + radius * Math.cos(angle)
  let y = yStart + radius * Math.sin(angle)
  return {x:x, y:y, r:30};
}

function DegreeToRad(degrees)
{
  return degrees * ( Math.PI / 180 );
}

function AddLetter(index)
{
  if(submitAnswerID.value.length >= 9) return;
  if(tempButtons.includes(index)) return;
  tempButtons.push(index);
  submitAnswerID.value += buttonPoints[index].c;
  Draw();
}

function DeleteLetter()
{
  if(tempButtons.length > 0)
  {
    tempButtons.length = tempButtons.length - 1;
  }
  let current = submitAnswerID.value;
  current = current.substring(0, current.length - 1);
  submitAnswerID.value = current;
  Draw();
}

function CheckManualEntry()
{
  let txt = submitAnswerID.value;
  let tempChoices = [];

  for(let i = 0; i < choices.length; i++)
  {
    tempChoices.push(choices[i]);
  }
  let newStr = "";
  for(let i = 0; i < txt.length; i++)
  {
    if(tempChoices.includes(txt[i]))
    {
      newStr += txt[i];
      let iOf = tempChoices.indexOf(txt[i]);
      tempChoices.splice(iOf, 1);
    }
  }

  submitAnswerID.value = newStr;

  tempButtons.length = 0;
  let validate = false;

  for(let i = 0; i < newStr.length; i++)
  {
    let search = newStr[i].toUpperCase();
    if(search === choices[0])
    {
      validate = true;
      tempButtons.push(0);
      continue;
    }
    if(choices.includes(search))
    {
      let iOf = choices.indexOf(search);
      if(tempButtons.includes(iOf))
      {
        let counter = 0;
        let find = iOf;
        while(find === iOf)
        {
          iOf = choices.indexOf(search, find + 1);
          counter++;
          if(counter > 100) break;
        }
      }
      validate = true;
      tempButtons.push(iOf);
    }
  }

  Draw();
  return validate;
}

function Draw()
{
  if(!playing) return;
  buttonPoints.length = 0;
  c.clearRect(0,0,canvas.width,canvas.height);
  let w = canvasContainer.scrollHeight * 0.9;
  canvas.width = w;
  canvas.height = w;
  c.width = w;
  c.height = w;
  c.fillStyle = "black";
  c.strokeStyle = "black";
  c.lineWidth = 1.5;
  c.font = "16px Lato";
  c.textAlign = "center";
  c.textBaseline = 'middle';
  let buttonCircle = canvas.width/10;
  // main circle
  c.beginPath();
  c.arc((c.width/2), (c.height/2), ((c.width/2)-c.lineWidth * 4), 0, (2 * Math.PI));
  c.stroke();
  /// inner circle
  c.beginPath();
  c.arc((c.width/2), (c.height/2), ((c.width/5)-c.lineWidth), 0, (2 * Math.PI));
  c.stroke();
  // middle letter
  c.fillText(choices[0].toUpperCase(), (c.width/2), (c.height/2));
  let startPoint = {x:(c.width/2), y:(c.height/2), r:((c.width/5)-c.lineWidth), c:choices[0], i:0};
  buttonPoints.push(startPoint);
  // outer button positions
  let angles = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];
  if(tempButtons.includes(0))
  {
    c.fillStyle = "rgba(" + col.r + " , " + col.g + " , " + col.b + ", 1)";
    let startPoint = {x:(c.width/2), y:(c.height/2), r:((c.width/5)-c.lineWidth-1), c:choices[0], i:0};
    c.beginPath();
    c.arc(startPoint.x, startPoint.y, startPoint.r, 0, (2 * Math.PI));
    c.fill();
    c.fillStyle = "black";
    c.fillText(choices[0].toUpperCase(), startPoint.x, startPoint.y);
  }
  let counter = 1;
  c.strokeStyle = "black";
  // draw outer buttons
  for(let i = 0; i < angles.length; i++)
  {
    let startPoint = GetCirclePoint((c.width/2), (c.height/2), ((c.width/3)-c.lineWidth), DegreeToRad(angles[i]));
    startPoint.c = choices[counter];
    startPoint.i = counter;
    if(tempButtons.includes(counter))
    {
      c.fillStyle = "rgba(" + col.r + " , " + col.g + " , " + col.b + ", 1)";
      c.beginPath();
      c.arc(startPoint.x, startPoint.y, buttonCircle, 0, (2 * Math.PI));
      c.fill();
    }
    c.beginPath();
    c.arc(startPoint.x, startPoint.y, buttonCircle, 0, (2 * Math.PI));
    c.stroke();
    c.fillStyle = "black";
    c.fillText(choices[counter].toUpperCase(), startPoint.x, startPoint.y);
    counter++;
    buttonPoints.push(startPoint);
  }
}

function RandomCol(floor)
{
  // let r = (Math.floor(Math.random() * 100)) + 100;
  // let g = (Math.floor(Math.random() * 100)) + 100;
  // let b = (Math.floor(Math.random() * 100)) + 100;
  let r = 150;
  let g = 150;
  let b = 255;
  return {r, g, b};
}

function AnimatePop(panel)
{
  panel.animate([
    { transform: 'scale(110%, 110%)'},
    { transform: 'scale(109%, 109%)'},
    { transform: 'scale(108%, 108%)'},
    { transform: 'scale(107%, 107%)'},
    { transform: 'scale(106%, 106%)'},
    { transform: 'scale(105%, 105%)'},
    { transform: 'scale(104%, 104%)'},
    { transform: 'scale(103%, 103%)'},
    { transform: 'scale(102%, 102%)'},
    { transform: 'scale(101%, 101%)'},
    { transform: 'scale(100%, 100%)'}],
    {
      duration: 100,
    }
  );
}

function ValidateAnswer()
{
  if(!playing) return;
  let right_answer = false;
  let submission = submitAnswerID.value;
  if(submission.length == 0) return;
  for(let i = 0; i < submission.length; i++)
  {
    if(!choices.includes(submission[i]))
    {
      responseDisplay.innerHTML = 'Invalid Answer.';
      AnimatePop(responseDisplay);
      submitAnswerID.value = '';
      return;
    }
  }
  if(possibleAnswers.includes(submission) && !answers.includes(submission))
  {
    responseDisplay.innerHTML = 'Correct.';
    AnimatePop(responseDisplay);
    answers.unshift(submission);
    submitAnswerID.value = '';
    ShowAnswersSoFar();
    score_track[submission.length]++;
    right_answer = true;
  }
  else if(possibleAnswers.includes(submission) && answers.includes(submission))
  {
    responseDisplay.innerHTML = 'Already Got.';
    AnimatePop(responseDisplay);
    submitAnswerID.value = '';
  }
  else
  {
    responseDisplay.innerHTML = 'Invalid Answer.';
    AnimatePop(responseDisplay);
    submitAnswerID.value = '';
  }
  tempButtons.length = 0;

  for(let key in menu)
  {
    if(menu.hasOwnProperty(key))
    {
      document.getElementById('MENU_' + key).innerHTML = score_track[key];
    }
  }

  Draw();
}

function ShowAnswersSoFar()
{
  if(answers.length > 0 && answerContainer != null && ScoreDisplay != null)
  {
    answerContainer.innerHTML = '';
    for(let i = 0; i < answers.length; i++)
    {
      let b2 = document.createElement("button");
      b2.className = "answerButtons p-2 m-2 rounded-lg";
      b2.style.fontSize = '20px';
      b2.style.backgroundColor = 'rgb(150,150,255)';
      b2.innerHTML = answers[i];
      b2.onclick = GetDefinition;
      answerContainer.appendChild(b2);
    }
    ScoreDisplay.innerHTML = '<span style="color:var(--wordGot);">' + answers.length + '</span>' +'/' + '<span style="color:var(--wordMissed);">' +possibleAnswers.length + '</span>';
  }
}

function GetDefinition(event)
{
  window.open("http://www.google.com/search?q=" + 'dictionary definition of ' + event.target.innerHTML); 
}

function EndGame()
{
  PlayButton.style.display = '';
  PauseButton.style.display = 'none';
  answerContainer.innerHTML = '';
  submitAnswerID.value = '';
  AnimatePop(responseDisplay);
  for(let m = 9; m >= 3; m--)
  {
    let div = document.createElement('div');
    div.className = 'seperator';
    div.style.fontSize = '20px';
    div.style.fontFamily = 'Bungee Inline';
    div.innerHTML = m;
    answerContainer.appendChild(div);
    for(var i = 0; i < possibleAnswers.length; i++)
    {
      if(possibleAnswers[i].length === m)
      {
        var b2 = document.createElement("button");
        b2.className = "answerButtons";
        b2.style.fontSize = '20px';
        if(answers.includes(possibleAnswers[i]))
        {
          b2.style.backgroundColor = 'rgb(150,150,255)';
        }
        else
        {
          b2.style.backgroundColor = 'rgb(255,150,150)';
        }
        b2.innerHTML = possibleAnswers[i];
        b2.onclick = GetDefinition;
        answerContainer.appendChild(b2);
      }
    }
  }
  timer = 0;
  clearInterval(interval);
  interval = undefined;
  timerDisplay.innerHTML = "0:00";
  tempButtons.length = 0;
  Draw();
  playing = false;

  let percent = Math.ceil((100/possibleAnswers.length) * answers.length);

  if(percent === 0)
  {
    responseDisplay.innerHTML = 'Game Terminated.';
    return;
  }
  else
  {
    responseDisplay.innerHTML = 'Game Ended.';

    for(let i = 0; i < percent; i += 20)
    {
      let div = document.createElement('div');
      div.innerHTML = svg_star_2;
      div.className = 'flex justify-center items-center mx-2 h-full'
      div.style.width = '25px';
      responseDisplay.appendChild(div);
    }
  }

  window.archive.ruby += get_value_or_zero('MENU_9');
  window.archive.emerald += get_value_or_zero('MENU_8');
  window.archive.sapphire += get_value_or_zero('MENU_7');

  window.archive.stats_got_9 += get_value_or_zero('MENU_9');
  window.archive.stats_got_8 += get_value_or_zero('MENU_8');
  window.archive.stats_got_7 += get_value_or_zero('MENU_7');
  window.archive.stats_got_6 += get_value_or_zero('MENU_6');
  window.archive.stats_got_5 += get_value_or_zero('MENU_5');
  window.archive.stats_got_4 += get_value_or_zero('MENU_4');
  window.archive.stats_got_3 += get_value_or_zero('MENU_3');

  window.archive.stats_total_9 += get_value_or_zero('MAX_9');
  window.archive.stats_total_8 += get_value_or_zero('MAX_8');
  window.archive.stats_total_7 += get_value_or_zero('MAX_7');
  window.archive.stats_total_6 += get_value_or_zero('MAX_6');
  window.archive.stats_total_5 += get_value_or_zero('MAX_5');
  window.archive.stats_total_4 += get_value_or_zero('MAX_4');
  window.archive.stats_total_3 += get_value_or_zero('MAX_3');

  if(percent >= 100) window.archive.diamond++;
  else if(percent < 100 && percent >= 80) window.archive.star_5++;
  else if(percent < 80 && percent >= 60) window.archive.star_4++;
  else if(percent < 60 && percent >= 40) window.archive.star_3++;
  else if(percent < 40 && percent >= 20) window.archive.star_2++;
  else if(percent < 20 && percent >= 0) window.archive.star_1++;
  window.archive.save();
  window.archive.print();
}

function get_value_or_zero(ref)
{
  let value = document.getElementById(ref).innerHTML;
  return (value === null) ? 0 : parseInt(value);
}

function set_storage(key, value)
{
  localStorage.setItem(key, value);
}

function get_storage(key)
{
  return (localStorage.getItem(key)) ? localStorage.getItem(key) : null;
}

canvas.onmousedown = function(event)
{
  if(event.button === 0 && playing)
  {
    event.preventDefault();
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let index = CheckButton(x, y);
    if(index !== false)
    {
      AddLetter(index);
    }
  }
}

canvas.ontouchstart = function(event)
{
  if(event.touches !== undefined && playing)
  {
    let touch = event.touches[0] || event.changedTouches[0];
    let index = CheckButton(touch.clientX, touch.clientY);
    if(index !== false)
    {
      AddLetter(index);
    }
  }
};

submitAnswerID.oninput = function()
{
  submitAnswerID.value = submitAnswerID.value.toUpperCase();
}

submitAnswerID.onkeyup = function(event)
{
  if(!playing)
  {
    submitAnswerID.value = "";
    return;
  }
  CheckManualEntry();
  if(event.key == "Enter") ValidateAnswer();
}

window.onresize = function() { if(playing) Draw(); };
document.addEventListener("DOMContentLoaded", Start);