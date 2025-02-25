import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-zKTt_uPv.js";import{M as i,b as l,c as s}from"./index-Dc7gA_AT.js";import"./index-F28aNuxU.js";import"./iframe-cjtnJ5Q_.js";import"./index-BOSlZsdm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Introduction"}),`
`,n.jsx(r.h1,{id:"introduction",children:"Introduction"}),`
`,n.jsxs(r.p,{children:["이 문서는 ",n.jsx(r.a,{href:"https://hjnk125.github.io",rel:"nofollow",children:"김호정 | 프론트엔드 개발자"}),"의 포트폴리오 페이지에서 사용한 컴포넌트를 소개하기 위해 작성되었습니다."]}),`
`,n.jsx("br",{}),`
`,n.jsx(r.h3,{id:"디자인-토큰-및-유틸리티-클래스",children:"디자인 토큰 및 유틸리티 클래스"}),`
`,n.jsx(r.p,{children:"index.css에 breakpoints, 폰트, 색상, 그리고 Tailwind CSS 기반 유틸리티 클래스를 정의하여 사용하고 있습니다."}),`
`,n.jsx("br",{}),`
`,n.jsx(r.h3,{id:"colors",children:"Colors"}),`
`,n.jsxs(l,{children:[n.jsx(s,{title:"Background",subtitle:"",colors:{background:"#f4f4f4","dark-background":"#212121"}}),n.jsx(s,{title:"Grayscale",subtitle:"",colors:{"light-gray":"#d1d1d1",gray:"#aaaaaa","dark-gray":"#111111"}}),n.jsx(s,{title:"Primary",subtitle:"",colors:{primary:"#f7f168"}})]}),`
`,n.jsx(r.h3,{id:"breakpoints",children:"Breakpoints"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{children:`--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-2xl: 1440px;
`})}),`
`,n.jsx(r.h3,{id:"fonts",children:"Fonts"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{children:`--font-roboto: 'Roboto', sans-serif;
--font-pretendard: 'Pretendard', sans-serif;
--font-manrope: 'Manrope', sans-serif;
`})}),`
`,n.jsx(r.h3,{id:"utility-classes",children:"Utility Classes"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"theme-background-color"}),n.jsx("br",{}),`
테마 별 배경 색상을 지정합니다.`]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-css",children:`.theme-background-color {
  @apply bg-background dark:bg-dark-background;
}
`})}),`
`]}),`
`,n.jsxs(r.li,{children:[`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"theme-text-color"}),n.jsx("br",{}),`
테마 별 글자 색상을 지정합니다.`]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-css",children:`.theme-text-color {
  @apply text-black dark:text-white;
}
`})}),`
`]}),`
`,n.jsxs(r.li,{children:[`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"transition-default-all"}),n.jsx("br",{}),`
동일한 duration 값을 사용하기 위한 클래스입니다.`]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-css",children:`.transition-default-all {
  @apply transition-all duration-300 ease-in-out;
}
`})}),`
`]}),`
`,n.jsxs(r.li,{children:[`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"bento"}),n.jsx("br",{}),`
bento grid의 아이템에 동일한 border-radius 값을 사용하기 위한 클래스입니다.`]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-css",children:`.bento {
  @apply rounded-[24px];
}
`})}),`
`]}),`
`,n.jsxs(r.li,{children:[`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"p-bento"}),n.jsx("br",{}),`
bento grid의 아이템에 동일한 padding 값을 사용하기 위한 클래스입니다.`]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-css",children:`.p-bento {
  @apply p-[24px] lg:p-[32px];
}
`})}),`
`]}),`
`]})]})}function g(e={}){const{wrapper:r}={...t(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(o,{...e})}):o(e)}export{g as default};
