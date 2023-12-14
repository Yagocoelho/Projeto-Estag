import React, { useState, ChangeEvent } from "react";

interface Documento {
  name: string;
  url: string;
}

const DocumentManager: React.FC = () => {
  const [newDocuments, setNewDocuments] = useState<Documento[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const documentos = Array.from(files).map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
      }));

      setNewDocuments(documentos);
    }
  };
  
  return (
    
    <div>
      
       

        <h1>GERENCIE SEUS DOCUMENTOS</h1>
      
     
        
        <span>Pronto pra começar?</span>
        <br></br>
        <br></br>
        
        <input type="file" onChange={handleFileChange} multiple />
        <ul>
          {newDocuments.map((documento, index) => (
            <li key={index}>
              <a href={documento.url} target="_blank" rel="noopener noreferrer">
                {documento.name}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <li><a href="#"  >Adicione</a></li>
          <li><a href="#">Visualize</a></li>
          <li> <a href="#">Delete</a></li>
        </ul>
      
    </div>
  );
  
};

export default DocumentManager;
