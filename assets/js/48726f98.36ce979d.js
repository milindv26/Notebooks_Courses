"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7349],{6618:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=i(5893),s=i(1151);const a={sidebar_position:90},o="Greedy Algorithm",r={id:"ml/Algorithms/Greedy Knapsack",title:"Greedy Algorithm",description:"Basics",source:"@site/docs/ml/Algorithms/90. Greedy Knapsack.md",sourceDirName:"ml/Algorithms",slug:"/ml/Algorithms/Greedy Knapsack",permalink:"/Notebooks_Courses/docs/ml/Algorithms/Greedy Knapsack",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"mlSidebar",next:{title:"Decision Tree",permalink:"/Notebooks_Courses/docs/ml/Algorithms/Decision Tree"}},l={},c=[{value:"Basics",id:"basics",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Python Code",id:"python-code",level:3}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"greedy-algorithm",children:"Greedy Algorithm"}),"\n",(0,n.jsx)(t.h2,{id:"basics",children:"Basics"}),"\n",(0,n.jsxs)("div",{style:{textAlign:"justify"},children:[(0,n.jsx)(t.p,{children:"A greedy algorithm is a problem-solving technique that builds up a solution piece by piece, always choosing the next piece that offers the most immediate benefit or the largest local gain. In simpler terms, a greedy algorithm makes a series of choices, each of which looks the best at the moment, without reconsidering those choices later on."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Key Characteristics:"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Local Optimization:"})," At each step, the algorithm selects the option that seems the best right now (the local optimum) without worrying about whether it leads to the best global solution."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Greedy Choice Property:"})," The choice made by the algorithm at each step is the one that appears best according to some criterion. This decision is made without considering the future consequences."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Optimal Substructure:"})," A problem has an optimal substructure if an optimal solution to the problem contains optimal solutions to its subproblems."]}),"\n"]}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,n.jsx)(t.p,{children:"Here\u2019s a demonstration of the Greedy Algorithm applied to the fractional knapsack problem."}),"\n",(0,n.jsx)("div",{style:{textAlign:"justify"},children:(0,n.jsx)(t.p,{children:"You have to maximize the total value of items that can be placed in a knapsack with a given weight capacity. You are given a list of items, each with a specific value and weight, and you can take fractions of items if necessary. The goal is to determine the optimal combination of items (or portions of items) to include in the knapsack so that the total value is as high as possible without exceeding the knapsack's weight limit."})}),"\n",(0,n.jsx)(t.h3,{id:"python-code",children:"Python Code"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'def fractional_knapsack(items, capacity):\r\n    # Calculate value-to-weight ratio for each item and sort them in descending order\r\n    items = sorted(items, key=lambda x: x[0]/x[1], reverse=True)\r\n    \r\n    total_value = 0.0  # Total value accumulated in the knapsack\r\n    for value, weight in items:\r\n        if capacity >= weight:\r\n            # If the item can be fully added\r\n            capacity -= weight\r\n            total_value += value\r\n        else:\r\n            # Take the fraction of the remaining capacity\r\n            total_value += value * (capacity / weight)\r\n            break\r\n\r\n    return total_value\r\n\r\n# Example usage:\r\nitems = [(60, 10), (100, 20), (120, 30)]  # Each tuple is (value, weight)\r\ncapacity = 50\r\n\r\nmax_value = fractional_knapsack(items, capacity)\r\nprint(f"Maximum value in knapsack: {max_value}")\n'})}),"\n",(0,n.jsx)(t.p,{children:"Output : Maximum value in knapsack: 240.0"})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(7294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);