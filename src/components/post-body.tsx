import markdownStyles from "./markdown-styles.module.css";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="">
      {/*<div className="max-w-2xl mx-auto">*/}
      {/*<--   */}
      {/*<ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {content}
      </ReactMarkdown>*/}
      <div
        className={`${markdownStyles["markdown"]} prose prose-slate max-w-none text-lg text-gray-800 dark:text-gray-200`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
