"use client";
import { useState, useEffect } from "react";

const string = `
 # Title
 ## Subtitle
 img[https://static.wikia.nocookie.net/dublagem/images/c/c4/Ben_10_Poster.png/revision/latest?cb=20231225132759&path-prefix=pt-br]
`

const RenderText = ({texto}: any) => {
  const [html, setHtml] = useState('');
  useEffect(() => {
    const renderHTML = () => {
      let html = '';
      const lines = texto.trim().split('\n'); // Dividir o texto em linhas para processar cada uma separadamente.

      lines.forEach((line: string) => {
        if (line.startsWith('# ')) {
          // Renderizar títulos de nível 1.
          const content = line.replace('# ', '');
          html += `<h1 class="text-xl font-bold">${content}</h1>`;
        } else if (line.startsWith('## ')) {
          // Renderizar títulos de nível 2.
          const content = line.replace('## ', '');
          html += `<h2 class="text-lg font-semibold">${content}</h2>`;
        } else if (line.startsWith('img[') && line.endsWith(']')) {
          // Renderizar imagens.
          const imageUrl = line.slice(4, -1); // Extrair a URL dentro do `img[]`.
          html += `<img src="${imageUrl}" alt="Image" class="my-4 rounded-lg" />`;
        }
      });

      setHtml(html);
    };

    renderHTML();
  }, [texto]);
  return <>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </>
}

const DashboardPage = () => {
  const [post, setPost] = useState();
  return (
    <div>
      <h4 className="py-2">welcome to my brain administrator</h4>
      <div></div>
      <RenderText texto={string}/>
    </div>
  );
};

export default DashboardPage;
