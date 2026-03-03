import React from 'react';

import {Document, Page, pdfjs} from 'react-pdf';
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import {Download} from "lucide-react";

import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();


const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>FNL_Resume.pdf</h2>

                <a href="public/files/resume.pdf" download className="cursor-pointer" title="Download Resume">
                    <Download className="icon"/>
                </a>
            </div>
            <Document file="public/files/resume.pdf">
                <Page
                    pageNumber={1}
                    renderAnnotationLayer
                    renderTextLayer
                />
            </Document>
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, 'resume');


export default ResumeWindow;
