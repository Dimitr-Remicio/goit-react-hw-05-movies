import{r as s,j as e}from"./index-28ca1cdb.js";import{n as i,M as n,a}from"./normalized-data-8e6e6bc0.js";import{f as m}from"./api-d8b78cbe.js";import"./genres-names-2136eebc.js";function u(){const[t,o]=s.useState([]);return s.useEffect(()=>{m().then(r=>{o(i(r.results))})},[]),e.jsx(n,{children:e.jsx(a,{data:t})})}function v(){return e.jsx(u,{})}export{v as default};
