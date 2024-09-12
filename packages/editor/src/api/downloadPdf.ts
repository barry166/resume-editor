import request from "@/utils/request";

export const downloadPdf = () => {
  request
    .post(
      "/api/download",
      {},
      {
        responseType: "blob",
      }
    )
    .then((response) => {
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "generated.pdf"); // 设置下载文件名
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error("Error downloading the PDF:", error);
    });
};
