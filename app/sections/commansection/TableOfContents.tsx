
export type Heading = {
  level: number;
  text: string;
  id: string;
};

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  return (
    <nav className="sticky top-24 max-h-[80vh] w-80 overflow-y-auto bg-accent-50 border-r border-slate-200  px-5 py-6">
      <h2 className="text-xl font-semibold text-navy-900 mb-5 tracking-tight">Table of Contents</h2>
      
      <ul className="space-y-2 relative">
        {headings.filter(h => h.level === 1 || h.level === 2).map((heading) => (
       <li
       key={heading.id}
       className={`group truncate transition-all duration-200 ${
         heading.level === 2 ? 'ml-3 pl-2 border-l-2 border-amber-500' : ''
       }`}
       title={heading.text} 
     >
       <button
         className={`text-left w-full text-sm truncate cursor-pointer ${
           heading.level === 1 ? 'font-bold text-navy-900' : 'font-medium text-navy-900'
         } group-hover:text-navy-600 transition-colors duration-150`}
         onClick={() => {
           const el = document.getElementById(heading.id);
           if (el) {
             el.scrollIntoView({ behavior: 'smooth', block: 'start' });
           }
         }}
       >
         {heading.text}
       </button>
     </li>
     
        ))}
      </ul>
    </nav>
  );
}