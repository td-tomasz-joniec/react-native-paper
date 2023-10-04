"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4338],{23938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var i=t(87462),o=(t(67294),t(3905)),a=t(50214),r=(t(47582),t(58764)),l=t(29518);const s={title:"Banner"},p=void 0,d={unversionedId:"components/Banner",id:"components/Banner",title:"Banner",description:"Banner displays a prominent message and related actions.",source:"@site/docs/components/Banner.mdx",sourceDirName:"components",slug:"/components/Banner",permalink:"/react-native-paper/docs/components/Banner",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/Banner.tsx",tags:[],version:"current",frontMatter:{title:"Banner"},sidebar:"components",previous:{title:"Badge",permalink:"/react-native-paper/docs/components/Badge"},next:{title:"BottomNavigation",permalink:"/react-native-paper/docs/components/BottomNavigation/"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"visible (required)",id:"visible-required",level:3},{value:"children (required)",id:"children-required",level:3},{value:"icon",id:"icon",level:3},{value:"actions",id:"actions",level:3},{value:"contentStyle",id:"contentstyle",level:3},{value:'elevation  <span class="badge badge-supported "><span class="badge-text">Available in v5.x with theme version 3</span></span>',id:"elevation--available-in-v5x-with-theme-version-3",level:3},{value:"style",id:"style",level:3},{value:"ref",id:"ref",level:3},{value:"theme",id:"theme",level:3},{value:"onShowAnimationFinished",id:"onshowanimationfinished",level:3},{value:"onHideAnimationFinished",id:"onhideanimationfinished",level:3},{value:"Theme colors",id:"theme-colors",level:2}],v={toc:m};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Banner displays a prominent message and related actions."),(0,o.kt)(l.Z,{screenshotData:"screenshots/banner.gif",baseUrl:"/react-native-paper/",mdxType:"ScreenshotTabs"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Image } from 'react-native';\nimport { Banner } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [visible, setVisible] = React.useState(true);\n\n  return (\n    <Banner\n      visible={visible}\n      actions={[\n        {\n          label: 'Fix it',\n          onPress: () => setVisible(false),\n        },\n        {\n          label: 'Learn more',\n          onPress: () => setVisible(false),\n        },\n      ]}\n      icon={({size}) => (\n        <Image\n          source={{\n            uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',\n          }}\n          style={{\n            width: size,\n            height: size,\n          }}\n        />\n      )}>\n      There was a problem processing a transaction on your credit card.\n    </Banner>\n  );\n};\n\nexport default MyComponent;\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("span",null),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"visible-required"},"visible (required)")),(0,o.kt)(a.Z,{componentLink:"Banner",prop:"visible",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"children-required"},"children (required)")),(0,o.kt)(a.Z,{componentLink:"Banner",prop:"children",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"icon"},"icon")),(0,o.kt)(a.Z,{componentLink:"Banner",prop:"icon",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"actions"},"actions")),(0,o.kt)(a.Z,{componentLink:"Banner",prop:"actions",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"contentstyle"},"contentStyle")),(0,o.kt)(a.Z,{componentLink:"Banner",prop:"contentStyle",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"elevation--available-in-v5x-with-theme-version-3"},"elevation  ",(0,o.kt)("span",{class:"badge badge-supported "},(0,o.kt)("span",{class:"badge-text"},"Available in v5.x with theme version 3")))),(0,o.kt)(a.Z,{componentLink:"Banner",prop:"elevation",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"style"},"style")),(0,o.kt)(a.Z,{componentLink:"Banner",prop:"style",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"ref"},"ref")),(0,o.kt)(a.Z,{componentLink:"Banner",prop:"ref",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"theme"},"theme")),(0,o.kt)(a.Z,{componentLink:"Banner",prop:"theme",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"onshowanimationfinished"},"onShowAnimationFinished")),(0,o.kt)(a.Z,{componentLink:"Banner",prop:"onShowAnimationFinished",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"onhideanimationfinished"},"onHideAnimationFinished")),(0,o.kt)(a.Z,{componentLink:"Banner",prop:"onHideAnimationFinished",mdxType:"PropTable"}),(0,o.kt)("span",null),(0,o.kt)("h2",{id:"theme-colors"},"Theme colors"),(0,o.kt)(r.Z,{themeColorsData:{"-":{textColor:"theme.colors.onSurface","action textColor":"theme.colors.primary"}},componentName:"Banner",mdxType:"ThemeColorsTable"}),(0,o.kt)("span",null))}h.isMDXComponent=!0}}]);