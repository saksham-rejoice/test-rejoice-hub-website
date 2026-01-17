import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

type CommanProps = {
  markdown: string | undefined;
}

const CaseStudiesMarkdown: React.FC<CommanProps> = ({ markdown }) => {
  if (!markdown) return null;

  return (
    <article className="mb-2 mt-10">
      <div className="prose prose-lg max-w-none text-slate-800 prose-headings:text-slate-900 prose-headings:font-bold prose-h1:text-4xl prose-h1:leading-tight prose-h2:text-3xl prose-h2:leading-tight prose-h3:text-2xl prose-h4:text-xl prose-li:marker:text-blue-500 prose-ul:list-disc prose-ol:list-decimal prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-lg prose-img:shadow-md prose-strong:text-slate-900 prose-code:text-pink-600 prose-code:bg-pink-50">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ node, ...props }) => {
              const id = typeof props.children === 'string'
                ? props.children.toLowerCase().replace(/[^\w]+/g, '-')
                : String(props.children).toLowerCase().replace(/[^\w]+/g, '-');
              return <h1 id={id} className="text-4xl max-mobile:text-3xl font-bold text-navy-900 mt-8 mb-8" {...props} />;
            },
            h2: ({ node, ...props }) => {
              const id = typeof props.children === 'string'
                ? props.children.toLowerCase().replace(/[^\w]+/g, '-')
                : String(props.children).toLowerCase().replace(/[^\w]+/g, '-');
              return <h2 id={id} className="text-3xl max-mobile:text-2xl font-semibold text-navy-900 mt-6 mb-6" {...props} />;
            }, 
            h3: ({ node, ...props }) => <h3 className="text-2xl max-mobile:text-xl font-semibold text-navy-900 mt-5 mb-4" {...props} />, 
            h4: ({ node, ...props }) => <h4 className="text-xl font-semibold text-navy-900 mt-4 mb-4" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc ml-6 mb-4" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal ml-6 mb-4" {...props} />,
            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
            u: ({ node, children, ...props }) => (
              <u className="no-underline text-navy-900" {...props}>
                {children}
              </u>
            ),
            a: ({ node, ...props }) => (
              <a className="text-warning-700 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
            ),
            img: ({ node, ...props }) => (
              <img className="rounded-lg shadow max-w-full h-auto my-4" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-4" {...props} />
            ),
            code: ({ inline, className, children, ...props }: { inline?:boolean; className?:string; children?:React.ReactNode; node?:any }) => {
              const codeClasses = "text-sm font-mono whitespace-pre-wrap";
            
              if (inline) {
                return (
                  <code className={`bg-gray-100 text-pink-600 px-1 py-0.5 rounded ${codeClasses}`} {...props}>
                    {children}
                  </code>
                );
              }
            
              return (
                <pre className="bg-navy-900 text-white rounded p-4 overflow-x-auto my-4">
                  <code className={codeClasses} {...props}>
                    {children}
                  </code>
                </pre>
              );
            },
            
            
            p: ({ node, ...props }) => <p className="mb-4" {...props} />,
            table: ({ node, ...props }) => (
              <table className="table-auto border-collapse  w-full my-6" {...props} />
            ),
            thead: ({ node, ...props }) => <thead className="bg-accent-100" {...props} />,
            tbody: ({ node, ...props }) => <tbody {...props} />,
            tr: ({ node, ...props }) => <tr className="border-b border-accent-200" {...props} />,
            th: ({ node, ...props }) => (
              <th className="text-left px-4 py-2 font-semibold text-navy-900" {...props} />
            ),
            td: ({ node, ...props }) => <td className="px-4 py-2 text-navy-900" {...props} />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default CaseStudiesMarkdown;
