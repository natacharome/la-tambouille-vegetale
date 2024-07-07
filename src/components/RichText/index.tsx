import React, { useState, useEffect } from "react";
import { marked } from "marked";
import { RichTextProps } from "./richText.interface";

const RichTextComponent: React.FC<RichTextProps> = ({ richText }) => {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    const convertToHtml = async () => {
      const markdownToHtml = await marked(richText);
      setHtml(markdownToHtml);
    };
    convertToHtml();
  }, [richText]);

  return (
    <div className="prose mb-5" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default RichTextComponent;
