"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8406],{9990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var o=t(5893),r=t(1151);const s={sidebar_position:2e3},a="Python Commands",d={id:"fqcmd/Py_cmds",title:"Python Commands",description:"* STATA data load by chunks:",source:"@site/docs/fqcmd/2000. Py_cmds.md",sourceDirName:"fqcmd",slug:"/fqcmd/Py_cmds",permalink:"/Notebooks_Courses/docs/fqcmd/Py_cmds",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2e3,frontMatter:{sidebar_position:2e3},sidebar:"fqcmdSidebar",previous:{title:"Terminal Commands",permalink:"/Notebooks_Courses/docs/fqcmd/terminal_cmds"}},c={},i=[];function m(e){const n={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"python-commands",children:"Python Commands"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"STATA data load by chunks:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# Specify the number of rows to read\r\nn_rows_to_read = 10\r\n\r\n# Create an empty DataFrame to store the data\r\ndf = pd.DataFrame()\r\n\r\n# Read the .dta file in chunks and append to the DataFrame\r\nchunksize = 1000  # Adjust chunk size as needed\r\nfor chunk in pd.read_stata('/content/drive/MyDrive/Colab Notebooks/IAIR7EFL.DTA',columns=['caseid'], chunksize=chunksize, convert_categoricals=False):\r\n    df = pd.concat([df, chunk], ignore_index=True)\r\n    if len(df) >= n_rows_to_read:\r\n        break\r\n\r\n# Display the first few rows to verify\r\ndf.head()\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var o=t(7294);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);