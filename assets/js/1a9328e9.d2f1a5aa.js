"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3],{88346:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>r,metadata:()=>m,toc:()=>u});var n=o(87462),a=(o(67294),o(3905)),i=o(50214),s=(o(58764),o(29518));const r={title:"BottomNavigation"},c=void 0,m={unversionedId:"components/BottomNavigation/BottomNavigation",id:"components/BottomNavigation/BottomNavigation",title:"BottomNavigation",description:"BottomNavigation provides quick navigation between top-level views of an app with a bottom navigation bar.",source:"@site/docs/components/BottomNavigation/BottomNavigation.mdx",sourceDirName:"components/BottomNavigation",slug:"/components/BottomNavigation/",permalink:"/react-native-paper/docs/components/BottomNavigation/",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/BottomNavigation/BottomNavigation.tsx",tags:[],version:"current",frontMatter:{title:"BottomNavigation"},sidebar:"components",previous:{title:"Banner",permalink:"/react-native-paper/docs/components/Banner"},next:{title:"BottomNavigation.Bar",permalink:"/react-native-paper/docs/components/BottomNavigation/BottomNavigationBar"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],l={toc:u};function v(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"BottomNavigation provides quick navigation between top-level views of an app with a bottom navigation bar.\nIt is primarily designed for use on mobile. If you want to use the navigation bar only see ",(0,a.kt)("a",{parentName:"p",href:"BottomNavigationBar"},(0,a.kt)("inlineCode",{parentName:"a"},"BottomNavigation.Bar")),"."),(0,a.kt)("p",null,"By default BottomNavigation uses primary color as a background, in dark theme with ",(0,a.kt)("inlineCode",{parentName:"p"},"adaptive")," mode it will use surface colour instead.\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme"},"Dark Theme")," for more information."),(0,a.kt)(s.Z,{screenshotData:"screenshots/bottom-navigation.gif",baseUrl:"/react-native-paper/",mdxType:"ScreenshotTabs"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { BottomNavigation, Text } from 'react-native-paper';\n\nconst MusicRoute = () => <Text>Music</Text>;\n\nconst AlbumsRoute = () => <Text>Albums</Text>;\n\nconst RecentsRoute = () => <Text>Recents</Text>;\n\nconst NotificationsRoute = () => <Text>Notifications</Text>;\n\nconst MyComponent = () => {\n  const [index, setIndex] = React.useState(0);\n  const [routes] = React.useState([\n    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},\n    { key: 'albums', title: 'Albums', focusedIcon: 'album' },\n    { key: 'recents', title: 'Recents', focusedIcon: 'history' },\n    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },\n  ]);\n\n  const renderScene = BottomNavigation.SceneMap({\n    music: MusicRoute,\n    albums: AlbumsRoute,\n    recents: RecentsRoute,\n    notifications: NotificationsRoute,\n  });\n\n  return (\n    <BottomNavigation\n      navigationState={{ index, routes }}\n      onIndexChange={setIndex}\n      renderScene={renderScene}\n    />\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("span",null),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(i.Z,{link:"BottomNavigation/BottomNavigation",mdxType:"PropTable"}),(0,a.kt)("span",null),(0,a.kt)("span",null))}v.isMDXComponent=!0}}]);