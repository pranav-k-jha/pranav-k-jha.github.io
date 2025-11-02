import { useState, useEffect, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ pdfPath }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // requested page
  const [displayedPage, setDisplayedPage] = useState(1); // actually displayed
  const [error, setError] = useState(null);
  const [containerWidth, setContainerWidth] = useState(600);
  const [scale, setScale] = useState(1.0);

  const options = useMemo(
    () => ({
      cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
      cMapPacked: true,
      standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
    }),
    []
  );

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setError(null);
  };

  const onDocumentLoadError = (err) => {
    console.error("Error loading PDF:", err);
    setError("Failed to load PDF preview. Please try downloading it instead.");
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const zoomReset = () => setScale(1.0);

  useEffect(() => {
    const updateWidth = () =>
      setContainerWidth(Math.min(600, window.innerWidth * 0.9));
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const goToPage = (page) => {
    if (page !== pageNumber) setPageNumber(page);
  };

  const isPageLoading = pageNumber !== displayedPage;

  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden my-6 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="p-3 bg-gray-50 dark:bg-gray-700 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center space-x-2">
          {numPages && (
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Page {pageNumber} of {numPages}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md divide-x divide-gray-300 dark:divide-gray-600">
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="px-2 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50"
              title="Zoom Out"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>
            <button
              onClick={zoomReset}
              className="px-2 py-1 text-xs text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
              title="Reset Zoom"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              onClick={zoomIn}
              disabled={scale >= 2.5}
              className="px-2 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50"
              title="Zoom In"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>

          <a
            href={pdfPath}
            download
            className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="overflow-auto h-[70vh] p-3 relative min-h-[500px]">
        {error ? (
          <div className="text-center p-6">
            <p className="text-red-500 text-sm mb-3">{error}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Tried to load: {pdfPath}
            </p>
            <a
              href={pdfPath}
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
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
              <div className="flex justify-center items-center h-48">
                <div className="animate-pulse text-gray-500 text-sm">
                  Loading PDF...
                </div>
              </div>
            }
          >
            <div className="relative flex justify-center">
              {/* Current page */}
              <Page
                pageNumber={displayedPage}
                width={containerWidth * scale}
                renderTextLayer
                renderAnnotationLayer
              />

              {/* Loading overlay with next page */}
              {isPageLoading && (
                <div className="absolute inset-0 flex justify-center items-center z-10 bg-white/70 dark:bg-gray-800/70">
                  <Page
                    pageNumber={pageNumber}
                    width={containerWidth * scale}
                    renderTextLayer
                    renderAnnotationLayer
                    onLoadSuccess={() => setDisplayedPage(pageNumber)}
                  />
                  <div className="absolute animate-pulse text-gray-500 text-sm">
                    Loading page {pageNumber}...
                  </div>
                </div>
              )}
            </div>
          </Document>
        )}
      </div>

      {/* Footer / Pagination */}
      {numPages > 1 && (
        <div className="p-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <button
            onClick={() => goToPage(Math.max(pageNumber - 1, 1))}
            disabled={pageNumber <= 1 || isPageLoading}
            className="px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <div className="text-xs text-gray-600 dark:text-gray-300">
            {pageNumber} / {numPages}
          </div>
          <button
            onClick={() => goToPage(Math.min(pageNumber + 1, numPages))}
            disabled={pageNumber >= numPages || isPageLoading}
            className="px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
