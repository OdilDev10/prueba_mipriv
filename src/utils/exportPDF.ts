import jsPDF from "jspdf";

export const handlePrintPDF = (data: any) => {
  const pdf = new jsPDF();
  generatePDFContent(pdf, data);
  pdf.save("mi_documento.pdf");
};

const generatePDFContent = (pdf: any, data: any) => {
  // Agrega contenido al PDF usando los métodos de jsPDF
  pdf.text(`Nombre: ${data.name}`, 20, 30);
  pdf.text(`Fecha: ${data.date}`, 20, 40);
  pdf.text(`Contenido: ${data.content}`, 20, 50);
  pdf.text(`Cantidad: ${data.quantity}`, 20, 60);
  // Puedes continuar agregando más contenido según tus necesidades
};
