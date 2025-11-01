import { useState, useEffect, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Match the worker version to the API version (5.4.296)
// Using unpkg with the exact version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ pdfPath }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const [containerWidth, setContainerWidth] = useState(800);

  // Memoize options to prevent unnecessary reloads
  const options = useMemo(
    () => ({
      cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
      cMapPacked: true,
      standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
    }),
    []
  );

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error) {
    console.error("Error loading PDF:", error);
    setError("Failed to load PDF preview. Please try downloading it instead.");
  }

  // Handle responsive width
  useEffect(() => {
    const updateWidth = () => {
      setContainerWidth(Math.min(800, window.innerWidth * 0.9));
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Add a check for the PDF path
  useEffect(() => {
    console.log("PDF Path:", pdfPath);
    console.log("PDF.js version:", pdfjs.version);
  }, [pdfPath]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden my-8">
      <div className="p-4 bg-gray-100 dark:bg-gray-700 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {numPages && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Page {pageNumber} of {numPages}
            </span>
          )}
        </div>
        <a
          href={pdfPath}
          download
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Download PDF
        </a>
      </div>

      <div className="overflow-auto max-h-[80vh] p-4">
        {error ? (
          <div className="text-center p-8">
            <p className="text-red-500 mb-4">{error}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Tried to load: {pdfPath}
            </p>
            <a
              href={pdfPath}
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF in new tab
            </a>
          </div>
        ) : (
          <Document
            file={pdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            options={options}
            loading={
              <div className="flex justify-center items-center h-64">
                <div className="animate-pulse text-gray-500">
                  Loading PDF...
                </div>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              width={containerWidth}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="mx-auto"
              loading={
                <div className="flex justify-center items-center h-64">
                  <div className="animate-pulse text-gray-500">
                    Loading page {pageNumber}...
                  </div>
                </div>
              }
            />
          </Document>
        )}
      </div>

      {numPages > 1 && (
        <div className="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <button
            onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {pageNumber} / {numPages}
          </div>
          <button
            onClick={() =>
              setPageNumber((prev) => Math.min(prev + 1, numPages))
            }
            disabled={pageNumber >= numPages}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
