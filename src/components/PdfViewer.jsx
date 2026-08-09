import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  ExternalLink,
  FileText,
  Maximize2,
  Minimize2,
  Minus,
  Plus,
  RefreshCcw,
  RotateCcw,
  ZoomIn,
} from "lucide-react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

/* -------------------------------------------------------------------------- */
/*                              PDF.js Worker                                 */
/* -------------------------------------------------------------------------- */

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

/* -------------------------------------------------------------------------- */
/*                                Constants                                   */
/* -------------------------------------------------------------------------- */

const MIN_SCALE = 0.5;
const MAX_SCALE = 2.5;
const SCALE_STEP = 0.25;

/* -------------------------------------------------------------------------- */
/*                              PDF Viewer                                    */
/* -------------------------------------------------------------------------- */

export default function PdfViewer({ pdfPath }) {
  const [numPages, setNumPages] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);

  const [scale, setScale] = useState(1);

  const [rotation, setRotation] = useState(0);

  const [error, setError] = useState(null);

  const [isDocumentLoading, setIsDocumentLoading] = useState(true);

  const [isPageLoading, setIsPageLoading] = useState(false);

  const [containerWidth, setContainerWidth] = useState(700);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const [pageInput, setPageInput] = useState("1");

  const wrapperRef = useRef(null);
  const viewerRef = useRef(null);

  /* ------------------------------------------------------------------------ */
  /*                              PDF Options                                 */
  /* ------------------------------------------------------------------------ */

  const options = useMemo(
    () => ({
      cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
      cMapPacked: true,

      standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
    }),
    [],
  );

  /* ------------------------------------------------------------------------ */
  /*                        Reset when PDF changes                            */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    setNumPages(null);
    setPageNumber(1);
    setPageInput("1");
    setScale(1);
    setRotation(0);
    setError(null);
    setIsDocumentLoading(true);
    setIsPageLoading(false);
  }, [pdfPath]);

  /* ------------------------------------------------------------------------ */
  /*                           Responsive Width                               */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (!wrapperRef.current) return;

    const updateWidth = () => {
      if (!wrapperRef.current) return;

      const width = wrapperRef.current.clientWidth;

      /*
       * Leave some horizontal padding so the PDF
       * never touches the viewer edges.
       */
      setContainerWidth(Math.max(280, Math.min(width - 48, 900)));
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                           Fullscreen State                               */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === viewerRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                          Keyboard Navigation                             */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const handleKeyDown = (event) => {
      /*
       * Do not hijack keyboard arrows while the
       * user is typing inside an input field.
       */
      const tagName = event.target?.tagName?.toLowerCase();

      if (
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select"
      ) {
        return;
      }

      if (event.key === "ArrowLeft") {
        previousPage();
      }

      if (event.key === "ArrowRight") {
        nextPage();
      }

      if (event.key === "+" || event.key === "=") {
        zoomIn();
      }

      if (event.key === "-") {
        zoomOut();
      }

      if (event.key === "0") {
        resetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  /* ------------------------------------------------------------------------ */
  /*                            Load Handlers                                 */
  /* ------------------------------------------------------------------------ */

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setError(null);
    setIsDocumentLoading(false);

    setPageNumber((current) => Math.min(current, numPages));
  };

  const onDocumentLoadError = (err) => {
    console.error("Error loading PDF:", err);

    setError("The PDF preview could not be loaded.");

    setIsDocumentLoading(false);
  };

  const onPageLoadSuccess = () => {
    setIsPageLoading(false);
  };

  /* ------------------------------------------------------------------------ */
  /*                              Navigation                                  */
  /* ------------------------------------------------------------------------ */

  const goToPage = (page) => {
    if (!numPages) return;

    const normalizedPage = Math.max(1, Math.min(page, numPages));

    if (normalizedPage === pageNumber) {
      setPageInput(String(normalizedPage));

      return;
    }

    setIsPageLoading(true);

    setPageNumber(normalizedPage);

    setPageInput(String(normalizedPage));
  };

  const previousPage = () => {
    if (pageNumber <= 1) return;

    goToPage(pageNumber - 1);
  };

  const nextPage = () => {
    if (!numPages || pageNumber >= numPages) {
      return;
    }

    goToPage(pageNumber + 1);
  };

  const handlePageInputChange = (event) => {
    setPageInput(event.target.value);
  };

  const handlePageInputSubmit = (event) => {
    event.preventDefault();

    const parsed = Number.parseInt(pageInput, 10);

    if (Number.isNaN(parsed)) {
      setPageInput(String(pageNumber));

      return;
    }

    goToPage(parsed);
  };

  /* ------------------------------------------------------------------------ */
  /*                                Zoom                                      */
  /* ------------------------------------------------------------------------ */

  const zoomIn = () => {
    setScale((current) => Math.min(current + SCALE_STEP, MAX_SCALE));
  };

  const zoomOut = () => {
    setScale((current) => Math.max(current - SCALE_STEP, MIN_SCALE));
  };

  const resetZoom = () => {
    setScale(1);
  };

  /* ------------------------------------------------------------------------ */
  /*                               Rotation                                   */
  /* ------------------------------------------------------------------------ */

  const rotateDocument = () => {
    setRotation((current) => (current + 90) % 360);
  };

  /* ------------------------------------------------------------------------ */
  /*                              Fullscreen                                  */
  /* ------------------------------------------------------------------------ */

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await viewerRef.current?.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  /* ------------------------------------------------------------------------ */
  /*                                  UI                                      */
  /* ------------------------------------------------------------------------ */

  if (!pdfPath) {
    return (
      <div
        className="
          flex
          min-h-[500px]
          items-center
          justify-center
          rounded-2xl
          border
          border-dashed
          border-gray-300
          bg-white

          dark:border-gray-700
          dark:bg-gray-900
        "
      >
        <div className="text-center">
          <div
            className="
              mx-auto
              mb-4
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gray-100
              text-gray-400

              dark:bg-gray-800
            "
          >
            <FileText className="h-7 w-7" />
          </div>

          <p
            className="
              text-sm
              font-medium
              text-gray-700

              dark:text-gray-300
            "
          >
            No PDF selected
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={viewerRef}
      className={`
        flex
        w-full
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-gray-200/80
        bg-white
        shadow-xl
        shadow-gray-900/[0.05]

        dark:border-gray-800
        dark:bg-gray-900
        dark:shadow-black/20

        ${isFullscreen ? "h-screen rounded-none border-0" : ""}
      `}
    >
      {/* ================================================================== */}
      {/* TOOLBAR                                                            */}
      {/* ================================================================== */}

      <div
        className="
          flex
          flex-wrap
          items-center
          justify-between
          gap-3
          border-b
          border-gray-200/80
          bg-white/95
          px-4
          py-3
          backdrop-blur-xl

          dark:border-gray-800
          dark:bg-gray-900/95
        "
      >
        {/* Left */}

        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-red-500
              to-rose-600
              text-white
              shadow-sm
              shadow-red-500/20
            "
          >
            <FileText className="h-4.5 w-4.5" />
          </div>

          <div className="min-w-0">
            <p
              className="
                text-sm
                font-semibold
                text-gray-900

                dark:text-white
              "
            >
              PDF Preview
            </p>

            <p
              className="
                text-[11px]
                text-gray-500

                dark:text-gray-400
              "
            >
              {numPages
                ? `${numPages} ${numPages === 1 ? "page" : "pages"}`
                : "Loading document..."}
            </p>
          </div>
        </div>

        {/* Right Actions */}

        <div className="flex flex-wrap items-center gap-2">
          {/* Zoom */}

          <div
            className="
              flex
              items-center
              overflow-hidden
              rounded-xl
              border
              border-gray-200
              bg-gray-50

              dark:border-gray-700
              dark:bg-gray-800
            "
          >
            <ToolbarButton
              onClick={zoomOut}
              disabled={scale <= MIN_SCALE}
              title="Zoom out"
            >
              <Minus className="h-4 w-4" />
            </ToolbarButton>

            <button
              type="button"
              onClick={resetZoom}
              title="Reset zoom"
              className="
                min-w-[58px]
                border-x
                border-gray-200
                px-2
                py-2
                text-xs
                font-semibold
                text-gray-600
                transition-colors

                hover:bg-white
                hover:text-gray-900

                dark:border-gray-700
                dark:text-gray-300
                dark:hover:bg-gray-700
                dark:hover:text-white
              "
            >
              {Math.round(scale * 100)}%
            </button>

            <ToolbarButton
              onClick={zoomIn}
              disabled={scale >= MAX_SCALE}
              title="Zoom in"
            >
              <Plus className="h-4 w-4" />
            </ToolbarButton>
          </div>

          {/* Rotate */}

          <ToolbarButton onClick={rotateDocument} title="Rotate PDF" bordered>
            <RotateCcw className="h-4 w-4" />
          </ToolbarButton>

          {/* Fullscreen */}

          <ToolbarButton
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            bordered
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </ToolbarButton>

          {/* New Tab */}

          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new tab"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              bg-white
              text-gray-600
              transition-all

              hover:border-gray-300
              hover:bg-gray-50
              hover:text-gray-900

              dark:border-gray-700
              dark:bg-gray-800
              dark:text-gray-300
              dark:hover:bg-gray-700
              dark:hover:text-white
            "
          >
            <ExternalLink className="h-4 w-4" />
          </a>

          {/* Download */}

          <a
            href={pdfPath}
            download
            className="
              inline-flex
              h-9
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-3.5
              text-xs
              font-semibold
              text-white
              shadow-sm
              shadow-blue-500/20
              transition-all

              hover:-translate-y-0.5
              hover:from-blue-700
              hover:to-cyan-600
              hover:shadow-md
            "
          >
            <Download className="h-3.5 w-3.5" />

            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </div>

      {/* ================================================================== */}
      {/* PDF AREA                                                           */}
      {/* ================================================================== */}

      <div
        ref={wrapperRef}
        className={`
          relative
          overflow-auto
          bg-gray-100/70
          p-4

          sm:p-6

          dark:bg-gray-950/60

          ${isFullscreen ? "flex-1" : "h-[72vh] min-h-[520px]"}
        `}
      >
        {error ? (
          <ErrorState error={error} pdfPath={pdfPath} />
        ) : (
          <Document
            file={pdfPath}
            options={options}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<DocumentLoadingState />}
          >
            <div
              className="
                relative
                flex
                min-h-full
                justify-center
                py-2
              "
            >
              <div
                className="
                  relative
                  h-fit
                  overflow-hidden
                  rounded-lg
                  bg-white
                  shadow-2xl
                  shadow-gray-900/10

                  dark:shadow-black/30
                "
              >
                <Page
                  key={`${pageNumber}-${scale}-${rotation}`}
                  pageNumber={pageNumber}
                  width={containerWidth * scale}
                  rotate={rotation}
                  renderTextLayer
                  renderAnnotationLayer
                  onLoadSuccess={onPageLoadSuccess}
                  onRenderSuccess={() => setIsPageLoading(false)}
                  loading={<PageLoadingState />}
                />

                {/* Loading Overlay */}

                {isPageLoading && (
                  <div
                    className="
                      absolute
                      inset-0
                      z-20
                      flex
                      items-center
                      justify-center
                      bg-white/75
                      backdrop-blur-sm

                      dark:bg-gray-900/75
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-gray-200
                        bg-white
                        px-4
                        py-2
                        text-xs
                        font-medium
                        text-gray-600
                        shadow-lg

                        dark:border-gray-700
                        dark:bg-gray-800
                        dark:text-gray-300
                      "
                    >
                      <RefreshCcw className="h-3.5 w-3.5 animate-spin" />
                      Loading page {pageNumber}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Document>
        )}
      </div>

      {/* ================================================================== */}
      {/* PAGINATION                                                         */}
      {/* ================================================================== */}

      {numPages > 0 && (
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-3
            border-t
            border-gray-200/80
            bg-white
            px-4
            py-3

            dark:border-gray-800
            dark:bg-gray-900
          "
        >
          {/* Previous */}

          <button
            type="button"
            onClick={previousPage}
            disabled={pageNumber <= 1 || isPageLoading}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-3.5
              py-2
              text-xs
              font-semibold
              text-gray-700
              transition-all

              hover:border-gray-300
              hover:bg-gray-50

              disabled:cursor-not-allowed
              disabled:opacity-40

              dark:border-gray-700
              dark:bg-gray-800
              dark:text-gray-300
              dark:hover:bg-gray-700
            "
          >
            <ArrowLeft
              className="
                h-3.5
                w-3.5
                transition-transform
                group-hover:-translate-x-0.5
              "
            />
            Previous
          </button>

          {/* Page Number */}

          <form
            onSubmit={handlePageInputSubmit}
            className="
              flex
              items-center
              gap-2
              text-xs
              text-gray-500

              dark:text-gray-400
            "
          >
            <span>Page</span>

            <input
              type="number"
              min={1}
              max={numPages}
              value={pageInput}
              onChange={handlePageInputChange}
              onBlur={() => {
                if (!pageInput) {
                  setPageInput(String(pageNumber));
                }
              }}
              className="
                h-8
                w-14
                rounded-lg
                border
                border-gray-300
                bg-white
                px-2
                text-center
                text-xs
                font-semibold
                text-gray-800
                outline-none
                transition

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/10

                dark:border-gray-700
                dark:bg-gray-800
                dark:text-gray-200
              "
            />

            <span>of {numPages}</span>
          </form>

          {/* Next */}

          <button
            type="button"
            onClick={nextPage}
            disabled={pageNumber >= numPages || isPageLoading}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-3.5
              py-2
              text-xs
              font-semibold
              text-white
              shadow-sm
              transition-all

              hover:from-blue-700
              hover:to-cyan-600
              hover:shadow-md

              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            Next
            <ArrowRight
              className="
                h-3.5
                w-3.5
                transition-transform
                group-hover:translate-x-0.5
              "
            />
          </button>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           Toolbar Button                                   */
/* -------------------------------------------------------------------------- */

const ToolbarButton = ({
  children,
  onClick,
  disabled = false,
  title,
  bordered = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`
        flex
        h-9
        w-9
        items-center
        justify-center
        text-gray-600
        transition-all

        hover:bg-gray-100
        hover:text-gray-950

        disabled:cursor-not-allowed
        disabled:opacity-35

        dark:text-gray-300
        dark:hover:bg-gray-700
        dark:hover:text-white

        ${
          bordered
            ? `
              rounded-xl
              border
              border-gray-200
              bg-white

              dark:border-gray-700
              dark:bg-gray-800
            `
            : ""
        }
      `}
    >
      {children}
    </button>
  );
};

/* -------------------------------------------------------------------------- */
/*                        Document Loading State                              */
/* -------------------------------------------------------------------------- */

const DocumentLoadingState = () => {
  return (
    <div
      className="
        flex
        min-h-[450px]
        items-center
        justify-center
      "
    >
      <div className="text-center">
        <div
          className="
            mx-auto
            mb-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-blue-50
            text-blue-600

            dark:bg-blue-950/40
            dark:text-blue-400
          "
        >
          <RefreshCcw className="h-5 w-5 animate-spin" />
        </div>

        <p
          className="
            text-sm
            font-medium
            text-gray-700

            dark:text-gray-300
          "
        >
          Loading document
        </p>

        <p
          className="
            mt-1
            text-xs
            text-gray-400
          "
        >
          Preparing PDF preview...
        </p>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                           Page Loading State                               */
/* -------------------------------------------------------------------------- */

const PageLoadingState = () => {
  return (
    <div
      className="
        flex
        h-[650px]
        w-[500px]
        max-w-full
        items-center
        justify-center
        bg-white

        dark:bg-gray-900
      "
    >
      <div className="animate-pulse text-xs text-gray-400">
        Rendering page...
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Error State                                   */
/* -------------------------------------------------------------------------- */

const ErrorState = ({ error, pdfPath }) => {
  return (
    <div
      className="
        flex
        min-h-[450px]
        items-center
        justify-center
        px-4
      "
    >
      <div
        className="
          max-w-md
          rounded-2xl
          border
          border-red-200
          bg-white
          p-7
          text-center
          shadow-lg

          dark:border-red-900/60
          dark:bg-gray-900
        "
      >
        <div
          className="
            mx-auto
            mb-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-red-50
            text-red-500

            dark:bg-red-950/40
            dark:text-red-400
          "
        >
          <FileText className="h-5 w-5" />
        </div>

        <h3
          className="
            font-semibold
            text-gray-900

            dark:text-white
          "
        >
          Unable to display PDF
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-gray-500

            dark:text-gray-400
          "
        >
          {error}
        </p>

        <div
          className="
            mt-5
            flex
            flex-col
            justify-center
            gap-2

            sm:flex-row
          "
        >
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-gray-200
              px-4
              py-2.5
              text-xs
              font-semibold
              text-gray-700
              transition

              hover:bg-gray-50

              dark:border-gray-700
              dark:text-gray-300
              dark:hover:bg-gray-800
            "
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Open PDF
          </a>

          <a
            href={pdfPath}
            download
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              px-4
              py-2.5
              text-xs
              font-semibold
              text-white
              transition

              hover:bg-blue-700
            "
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
