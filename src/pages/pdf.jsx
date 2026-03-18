import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function Pdf() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center">
      <div className="bg-white shadow-2xl rounded-xl p-4">
        <Document
          file="https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={() => setPageNumber((p) => p - 1)}
          disabled={pageNumber <= 1}
          className="px-4 py-2 rounded-md border hover:bg-gray-200"
        >
          Prev
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          onClick={() => setPageNumber((p) => p + 1)}
          disabled={pageNumber >= numPages}
          className="px-4 py-2 rounded-md border hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pdf;
