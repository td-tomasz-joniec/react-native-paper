"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3891],{85255:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>u,toc:()=>r});var a=o(87462),n=(o(67294),o(3905)),l=o(50214),i=(o(47582),o(58764),o(29518));const d={title:"RadioButton.Item"},s=void 0,u={unversionedId:"components/RadioButton/RadioButtonItem",id:"components/RadioButton/RadioButtonItem",title:"RadioButton.Item",description:"RadioButton.Item allows you to press the whole row (item) instead of only the RadioButton.",source:"@site/docs/components/RadioButton/RadioButtonItem.mdx",sourceDirName:"components/RadioButton",slug:"/components/RadioButton/RadioButtonItem",permalink:"/react-native-paper/docs/components/RadioButton/RadioButtonItem",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/RadioButton/RadioButtonItem.tsx",tags:[],version:"current",frontMatter:{title:"RadioButton.Item"},sidebar:"components",previous:{title:"RadioButton.IOS",permalink:"/react-native-paper/docs/components/RadioButton/RadioButtonIOS"},next:{title:"Searchbar",permalink:"/react-native-paper/docs/components/Searchbar"}},p={},r=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"value (required)",id:"value-required",level:3},{value:"label (required)",id:"label-required",level:3},{value:"disabled",id:"disabled",level:3},{value:"onPress",id:"onpress",level:3},{value:"accessibilityLabel",id:"accessibilitylabel",level:3},{value:"uncheckedColor",id:"uncheckedcolor",level:3},{value:"color",id:"color",level:3},{value:"status",id:"status",level:3},{value:"style",id:"style",level:3},{value:"labelStyle",id:"labelstyle",level:3},{value:'labelVariant  <span class="badge badge-supported "><span class="badge-text">Available in v5.x with theme version 3</span></span>',id:"labelvariant--available-in-v5x-with-theme-version-3",level:3},{value:"theme",id:"theme",level:3},{value:"testID",id:"testid",level:3},{value:"mode",id:"mode",level:3},{value:"position",id:"position",level:3}],m={toc:r};function c(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"RadioButton.Item allows you to press the whole row (item) instead of only the RadioButton."),(0,n.kt)(i.Z,{screenshotData:"screenshots/radio-item.ios.png",baseUrl:"/react-native-paper/",mdxType:"ScreenshotTabs"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import * as React from \'react\';\nimport { RadioButton } from \'react-native-paper\';\n\nconst MyComponent = () => {\n  const [value, setValue] = React.useState(\'first\');\n\n  return (\n    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>\n      <RadioButton.Item label="First item" value="first" />\n      <RadioButton.Item label="Second item" value="second" />\n    </RadioButton.Group>\n  );\n};\n\nexport default MyComponent;\n')),(0,n.kt)("h2",{id:"props"},"Props"),(0,n.kt)("span",null),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"value-required"},"value (required)")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"value",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"label-required"},"label (required)")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"label",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"disabled"},"disabled")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"disabled",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"onpress"},"onPress")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"onPress",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"accessibilitylabel"},"accessibilityLabel")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"accessibilityLabel",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"uncheckedcolor"},"uncheckedColor")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"uncheckedColor",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"color"},"color")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"color",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"status"},"status")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"status",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"style"},"style")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"style",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"labelstyle"},"labelStyle")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"labelStyle",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"labelvariant--available-in-v5x-with-theme-version-3"},"labelVariant  ",(0,n.kt)("span",{class:"badge badge-supported "},(0,n.kt)("span",{class:"badge-text"},"Available in v5.x with theme version 3")))),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"labelVariant",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"theme"},"theme")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"theme",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"testid"},"testID")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"testID",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"mode"},"mode")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"mode",mdxType:"PropTable"}),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"position"},"position")),(0,n.kt)(l.Z,{componentLink:"RadioButton/RadioButtonItem",prop:"position",mdxType:"PropTable"}),(0,n.kt)("span",null),(0,n.kt)("span",null),(0,n.kt)("span",null))}c.isMDXComponent=!0}}]);