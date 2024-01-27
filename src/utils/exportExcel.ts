import ExcelJS from 'exceljs';


export const handleExportExcel = async (dataSource: any) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Datos');

    // Agregar encabezados
    const headers = Object.keys(dataSource[0]);
    worksheet.addRow(headers);

    // Agregar datos
    dataSource.forEach((item: any) => {
      const row = Object.values(item);
      worksheet.addRow(row);
    });

    // Crear archivo
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    // Crear enlace y descargar archivo
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'mi_archivo.xlsx';
    link.click();
  };