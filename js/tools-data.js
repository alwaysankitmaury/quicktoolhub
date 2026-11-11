/**
 * tools-data.js
 * Tool catalog: categories + tools. Extend by appending to TOOL_CATEGORIES / TOOLS.
 *
 * Tool fields:
 *   id, slug (unique), name, category (matches a category id), shortDescription, howToUse,
 *   features[], faqs[{question,answer}], seoTitle, metaDescription, keywords[], icon,
 *   toolType, processing ("browser" | "server" | "external-api"),
 *   implementationNote (optional: what must exist for the tool to work as described)
 *
 * processing: "browser" = runs locally in the visitor's browser;
 *   "server" = needs your backend; "external-api" = needs a third-party service or ML model.
 * Tools with "server"/"external-api" should not be shown as live until that backend exists.
 */
const TOOL_CATEGORIES = [
  {
    "id": "pdf-tools",
    "slug": "pdf-tools",
    "name": "PDF Tools",
    "icon": "file-text",
    "description": "Merge, split, convert, and edit PDF files.",
    "order": 1
  },
  {
    "id": "image-tools",
    "slug": "image-tools",
    "name": "Image Tools",
    "icon": "image",
    "description": "Resize, compress, convert, and analyze images.",
    "order": 2
  },
  {
    "id": "photo-editing-tools",
    "slug": "photo-editing-tools",
    "name": "Photo Editing Tools",
    "icon": "wand",
    "description": "Edit, enhance, and create with photos.",
    "order": 3
  },
  {
    "id": "video-tools",
    "slug": "video-tools",
    "name": "Video Tools",
    "icon": "video",
    "description": "Compress, trim, convert, and edit videos.",
    "order": 4
  },
  {
    "id": "text-writing-tools",
    "slug": "text-writing-tools",
    "name": "Text & Writing Tools",
    "icon": "type",
    "description": "Count, convert, and generate text.",
    "order": 5
  },
  {
    "id": "seo-tools",
    "slug": "seo-tools",
    "name": "SEO Tools",
    "icon": "search",
    "description": "Improve how your site appears in search.",
    "order": 6
  },
  {
    "id": "developer-tools",
    "slug": "developer-tools",
    "name": "Developer Tools",
    "icon": "code",
    "description": "Format, encode, and minify code and data.",
    "order": 7
  },
  {
    "id": "calculators-converters",
    "slug": "calculators-converters",
    "name": "Calculators & Converters",
    "icon": "calculator",
    "description": "Everyday calculators and unit converters.",
    "order": 8
  },
  {
    "id": "qr-social-media-tools",
    "slug": "qr-social-media-tools",
    "name": "QR & Social Media Tools",
    "icon": "qr-code",
    "description": "QR codes, barcodes, and social media helpers.",
    "order": 9
  },
  {
    "id": "security-utility-tools",
    "slug": "security-utility-tools",
    "name": "Security & Utility Tools",
    "icon": "shield",
    "description": "Passwords, hashes, timers, and handy utilities.",
    "order": 10
  }
];

const TOOLS = [
  {
    "id": "tool-001",
    "slug": "pdf-merge",
    "name": "PDF Merge",
    "category": "pdf-tools",
    "shortDescription": "Combine several PDF files into one document in the order you choose.",
    "howToUse": "Add two or more PDFs, drag them into the order you want, and click Merge. Download the combined file when it finishes. Files are processed in your browser, so they are not uploaded.",
    "features": [
      "Merge unlimited files within your device's memory",
      "Drag-and-drop reordering",
      "Keeps original page size and quality",
      "Private browser-based processing"
    ],
    "faqs": [
      {
        "question": "Will merging reduce the quality of my PDFs?",
        "answer": "No. Pages are copied into the new file as they are, so text, images, and layout stay unchanged."
      },
      {
        "question": "Can I merge password-protected PDFs?",
        "answer": "Not directly. Remove the password first with the PDF Unlock tool, then merge the files."
      }
    ],
    "seoTitle": "Merge PDF Files Online – Free PDF Merger",
    "metaDescription": "Combine multiple PDF files into one document in seconds. Reorder files, merge privately in your browser, and download the result for free.",
    "keywords": [
      "merge pdf",
      "combine pdf",
      "pdf merger",
      "join pdf files"
    ],
    "icon": "file-merge",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-002",
    "slug": "pdf-split",
    "name": "PDF Split",
    "category": "pdf-tools",
    "shortDescription": "Split a PDF into separate files by page range or into single pages.",
    "howToUse": "Upload a PDF, choose whether to split every page or by custom ranges such as 1-3, 4-8, then click Split. Download each part individually or as a ZIP archive.",
    "features": [
      "Split by range or every page",
      "Preview page thumbnails",
      "Download as individual files or ZIP",
      "Runs locally in your browser"
    ],
    "faqs": [
      {
        "question": "How do I split a PDF into individual pages?",
        "answer": "Choose the 'every page' option and each page is saved as its own PDF file."
      },
      {
        "question": "Is there a page limit?",
        "answer": "The practical limit depends on your device's memory. Very large PDFs may take longer to process."
      }
    ],
    "seoTitle": "Split PDF Online – Free PDF Splitter",
    "metaDescription": "Split a PDF by page range or into single pages. Fast, private browser-based PDF splitting with no sign-up required.",
    "keywords": [
      "split pdf",
      "pdf splitter",
      "separate pdf pages",
      "divide pdf"
    ],
    "icon": "file-split",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-003",
    "slug": "pdf-compressor",
    "name": "PDF Compressor",
    "category": "pdf-tools",
    "shortDescription": "Reduce PDF file size so documents are easier to email and upload.",
    "howToUse": "Upload a PDF, pick a compression level, and click Compress. Compare the original and new sizes, then download the result. Higher compression may lower image quality.",
    "features": [
      "Multiple compression levels",
      "Before and after size comparison",
      "Optimizes embedded images",
      "Best results on image-heavy PDFs"
    ],
    "faqs": [
      {
        "question": "How much smaller will my PDF get?",
        "answer": "It depends on the content. PDFs with large images often shrink a lot, while text-only files may change very little."
      },
      {
        "question": "Will text remain selectable after compression?",
        "answer": "Yes, in most cases. Compression mainly targets images and unused data, not text."
      }
    ],
    "seoTitle": "Compress PDF Online – Reduce PDF File Size",
    "metaDescription": "Shrink PDF files for email and uploads. Choose a compression level and compare sizes before you download. Free and easy to use.",
    "keywords": [
      "compress pdf",
      "reduce pdf size",
      "pdf compressor",
      "shrink pdf"
    ],
    "icon": "file-compress",
    "toolType": "file-processor",
    "processing": "browser",
    "implementationNote": "Browser compression mainly recompresses images; for deep optimization a server-side tool such as Ghostscript gives stronger results."
  },
  {
    "id": "tool-004",
    "slug": "pdf-to-word",
    "name": "PDF to Word",
    "category": "pdf-tools",
    "shortDescription": "Convert a PDF into an editable Word (.docx) document.",
    "howToUse": "Upload your PDF and click Convert. When processing finishes, download the .docx file. Complex layouts may need minor cleanup after conversion.",
    "features": [
      "Outputs editable .docx files",
      "Keeps basic text and headings",
      "Handles multi-page documents",
      "Server-side processing for better layout recovery"
    ],
    "faqs": [
      {
        "question": "Will the formatting stay exactly the same?",
        "answer": "Simple documents convert well, but tables, columns, and unusual fonts can shift. Review the result before sharing it."
      },
      {
        "question": "Can it convert scanned PDFs?",
        "answer": "Scanned PDFs are images, so they need OCR to become editable text. Results depend on scan quality."
      }
    ],
    "seoTitle": "PDF to Word Converter – Convert PDF to DOCX",
    "metaDescription": "Convert PDF files to editable Word documents online. Upload, convert, and download a .docx file quickly and easily.",
    "keywords": [
      "pdf to word",
      "pdf to docx",
      "convert pdf to word",
      "editable pdf"
    ],
    "icon": "file-word",
    "toolType": "file-converter",
    "processing": "server",
    "implementationNote": "Requires a server-side converter (for example LibreOffice or a conversion library). Files are uploaded for processing and should be deleted after conversion."
  },
  {
    "id": "tool-005",
    "slug": "word-to-pdf",
    "name": "Word to PDF",
    "category": "pdf-tools",
    "shortDescription": "Turn Word documents (.doc and .docx) into PDF files.",
    "howToUse": "Upload a Word file and click Convert to PDF. Download the finished PDF once it is ready. Fonts missing on the server may be substituted.",
    "features": [
      "Supports .doc and .docx",
      "Keeps text, images, and basic layout",
      "Creates shareable PDFs",
      "Server-side processing"
    ],
    "faqs": [
      {
        "question": "Why does my PDF look slightly different from Word?",
        "answer": "If a font used in your document is not available during conversion, a similar font is substituted."
      },
      {
        "question": "Are my files stored after conversion?",
        "answer": "Uploaded files should be deleted automatically after processing. Check the site's privacy policy for retention details."
      }
    ],
    "seoTitle": "Word to PDF Converter – Convert DOCX to PDF",
    "metaDescription": "Convert Word documents to PDF online. Upload a .doc or .docx file and download a ready-to-share PDF in moments.",
    "keywords": [
      "word to pdf",
      "docx to pdf",
      "convert word to pdf",
      "doc to pdf"
    ],
    "icon": "file-pdf",
    "toolType": "file-converter",
    "processing": "server",
    "implementationNote": "Requires a server-side converter such as LibreOffice headless."
  },
  {
    "id": "tool-006",
    "slug": "pdf-to-jpg",
    "name": "PDF to JPG",
    "category": "pdf-tools",
    "shortDescription": "Convert each page of a PDF into a JPG image.",
    "howToUse": "Upload a PDF, choose image quality, and click Convert. Download pages as individual JPG files or as a ZIP archive.",
    "features": [
      "One image per page",
      "Adjustable quality and resolution",
      "ZIP download for multi-page files",
      "Processed in your browser"
    ],
    "faqs": [
      {
        "question": "What resolution will my images have?",
        "answer": "You can pick a resolution. Higher settings give sharper images but larger files."
      },
      {
        "question": "Can I convert only certain pages?",
        "answer": "Yes. Select the pages you want before converting, or use the PDF Page Extractor first."
      }
    ],
    "seoTitle": "PDF to JPG Converter – Convert PDF Pages to Images",
    "metaDescription": "Convert PDF pages to high-quality JPG images online. Choose quality, convert in your browser, and download instantly.",
    "keywords": [
      "pdf to jpg",
      "pdf to image",
      "convert pdf to jpeg",
      "pdf page to image"
    ],
    "icon": "file-image",
    "toolType": "file-converter",
    "processing": "browser"
  },
  {
    "id": "tool-007",
    "slug": "jpg-to-pdf",
    "name": "JPG to PDF",
    "category": "pdf-tools",
    "shortDescription": "Combine one or more JPG images into a single PDF.",
    "howToUse": "Add your images, arrange them in order, choose page size and orientation, and click Create PDF. Download the finished file.",
    "features": [
      "Multiple images in one PDF",
      "Page size and margin options",
      "Drag-and-drop ordering",
      "Private browser processing"
    ],
    "faqs": [
      {
        "question": "Can I put several photos in one PDF?",
        "answer": "Yes. Add them all, reorder as needed, and each image becomes its own page."
      },
      {
        "question": "Do the images lose quality?",
        "answer": "Images are embedded without extra compression, so quality stays close to the original."
      }
    ],
    "seoTitle": "JPG to PDF Converter – Images to PDF Online",
    "metaDescription": "Turn JPG images into a PDF in seconds. Set page size, reorder photos, and download your PDF privately in your browser.",
    "keywords": [
      "jpg to pdf",
      "image to pdf",
      "photos to pdf",
      "jpeg to pdf"
    ],
    "icon": "image-pdf",
    "toolType": "file-converter",
    "processing": "browser"
  },
  {
    "id": "tool-008",
    "slug": "pdf-unlock",
    "name": "PDF Unlock",
    "category": "pdf-tools",
    "shortDescription": "Remove a known password from a PDF you own so it opens without prompts.",
    "howToUse": "Upload the protected PDF, enter the password you already know, and click Unlock. Download the unprotected copy. This tool cannot recover forgotten passwords.",
    "features": [
      "Removes password protection when you know the password",
      "Works locally in your browser",
      "Keeps content unchanged",
      "Does not crack or guess passwords"
    ],
    "faqs": [
      {
        "question": "Can this recover a forgotten password?",
        "answer": "No. You must know the current password. The tool only removes protection from files you are allowed to open."
      },
      {
        "question": "Is it legal to unlock a PDF?",
        "answer": "Unlocking your own documents is fine. Only unlock files you have permission to modify."
      }
    ],
    "seoTitle": "Unlock PDF Online – Remove PDF Password",
    "metaDescription": "Remove password protection from a PDF when you know the password. Private, browser-based unlocking with no sign-up.",
    "keywords": [
      "unlock pdf",
      "remove pdf password",
      "pdf password remover",
      "decrypt pdf"
    ],
    "icon": "lock-open",
    "toolType": "file-processor",
    "processing": "browser",
    "implementationNote": "Browser-side decryption needs a library that supports encrypted PDFs; verify support for AES-256 files before launch."
  },
  {
    "id": "tool-009",
    "slug": "pdf-rotate",
    "name": "PDF Rotate",
    "category": "pdf-tools",
    "shortDescription": "Rotate PDF pages by 90, 180, or 270 degrees and save the result.",
    "howToUse": "Upload your PDF, select all pages or specific ones, choose a rotation angle, and click Rotate. Download the corrected file.",
    "features": [
      "Rotate all or selected pages",
      "90, 180, and 270 degree options",
      "Live page thumbnails",
      "Browser-based and private"
    ],
    "faqs": [
      {
        "question": "Can I rotate only one page?",
        "answer": "Yes. Select just that page, then apply the rotation."
      },
      {
        "question": "Is the rotation permanent?",
        "answer": "Yes, the downloaded PDF is saved with the new orientation."
      }
    ],
    "seoTitle": "Rotate PDF Pages Online – Free PDF Rotator",
    "metaDescription": "Rotate PDF pages 90, 180, or 270 degrees. Fix sideways scans quickly and download the corrected PDF for free.",
    "keywords": [
      "rotate pdf",
      "pdf rotator",
      "flip pdf page",
      "fix sideways pdf"
    ],
    "icon": "rotate",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-010",
    "slug": "pdf-page-extractor",
    "name": "PDF Page Extractor",
    "category": "pdf-tools",
    "shortDescription": "Pull selected pages out of a PDF into a new, smaller document.",
    "howToUse": "Upload a PDF, enter the pages you need (for example 2, 5, 8-10), and click Extract. Download the new PDF containing only those pages.",
    "features": [
      "Select by number or range",
      "Visual page thumbnails",
      "Keeps original quality",
      "Processed locally"
    ],
    "faqs": [
      {
        "question": "What is the difference between extracting and splitting?",
        "answer": "Extracting creates one new file from chosen pages. Splitting divides a document into several files."
      },
      {
        "question": "Does the original PDF change?",
        "answer": "No. Your original file is untouched; you get a separate new PDF."
      }
    ],
    "seoTitle": "Extract Pages from PDF – Free PDF Page Extractor",
    "metaDescription": "Extract specific pages from a PDF and save them as a new file. Quick, private, and free to use in your browser.",
    "keywords": [
      "extract pdf pages",
      "pdf page extractor",
      "save pdf pages",
      "remove pdf pages"
    ],
    "icon": "file-extract",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-011",
    "slug": "image-resizer",
    "name": "Image Resizer",
    "category": "image-tools",
    "shortDescription": "Change the width and height of an image to exact pixel sizes or a percentage.",
    "howToUse": "Upload an image, enter the new dimensions or a percentage, choose whether to keep the aspect ratio, and click Resize. Download the result in the original format.",
    "features": [
      "Pixel and percentage resizing",
      "Aspect ratio lock",
      "Common presets for web and social",
      "Processed in your browser"
    ],
    "faqs": [
      {
        "question": "Will resizing make my image blurry?",
        "answer": "Making an image smaller keeps it sharp. Enlarging it beyond its original size can cause softness."
      },
      {
        "question": "How do I keep the proportions?",
        "answer": "Leave the aspect ratio lock on and change only width or height; the other value updates automatically."
      }
    ],
    "seoTitle": "Resize Image Online – Free Image Resizer",
    "metaDescription": "Resize images to exact pixel dimensions or percentages. Keep the aspect ratio and download instantly, all in your browser.",
    "keywords": [
      "resize image",
      "image resizer",
      "change image dimensions",
      "resize photo"
    ],
    "icon": "resize",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-012",
    "slug": "image-compressor",
    "name": "Image Compressor",
    "category": "image-tools",
    "shortDescription": "Reduce the file size of JPG, PNG, and WebP images with adjustable quality.",
    "howToUse": "Upload images, move the quality slider, and compare the preview with the original. Click Download when the size and quality look right.",
    "features": [
      "Adjustable quality slider",
      "Batch compression",
      "Size savings shown per file",
      "No upload to a server"
    ],
    "faqs": [
      {
        "question": "What quality setting should I use?",
        "answer": "For web photos, 70 to 80 percent usually looks nearly identical while cutting size significantly."
      },
      {
        "question": "Does PNG compression lose quality?",
        "answer": "Browser compression of PNG is limited. Converting to WebP or JPG often saves more space."
      }
    ],
    "seoTitle": "Compress Images Online – JPG, PNG, WebP Compressor",
    "metaDescription": "Shrink image file sizes without noticeable quality loss. Compress JPG, PNG, and WebP files privately in your browser.",
    "keywords": [
      "compress image",
      "image compressor",
      "reduce image size",
      "optimize images"
    ],
    "icon": "compress",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-013",
    "slug": "image-cropper",
    "name": "Image Cropper",
    "category": "image-tools",
    "shortDescription": "Crop an image to a custom area or a fixed aspect ratio.",
    "howToUse": "Upload an image, drag the crop box over the area you want, or choose a ratio such as 1:1 or 16:9. Click Crop and download the result.",
    "features": [
      "Free-form and fixed-ratio crops",
      "Drag and resize crop box",
      "Precise pixel inputs",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Can I crop to a square?",
        "answer": "Yes. Choose the 1:1 ratio and position the box where you want it."
      },
      {
        "question": "Does cropping change the original file?",
        "answer": "No. You download a new cropped copy and your original stays as it is."
      }
    ],
    "seoTitle": "Crop Image Online – Free Photo Cropper",
    "metaDescription": "Crop photos to any size or aspect ratio. Drag, adjust, and download your cropped image instantly in your browser.",
    "keywords": [
      "crop image",
      "photo cropper",
      "crop picture",
      "image crop tool"
    ],
    "icon": "crop",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-014",
    "slug": "image-converter",
    "name": "Image Converter",
    "category": "image-tools",
    "shortDescription": "Convert images between JPG, PNG, WebP, and other common formats.",
    "howToUse": "Upload an image, select the output format, and click Convert. Download the new file. Transparency is kept when the target format supports it.",
    "features": [
      "Common format support",
      "Batch conversion",
      "Adjustable output quality",
      "Runs in your browser"
    ],
    "faqs": [
      {
        "question": "Which formats are supported?",
        "answer": "Common web formats such as JPG, PNG, and WebP are supported. Other formats depend on browser capability."
      },
      {
        "question": "Will transparency be preserved?",
        "answer": "Yes for PNG and WebP. JPG has no transparency, so transparent areas are filled with a solid color."
      }
    ],
    "seoTitle": "Image Converter – Convert JPG, PNG, WebP Online",
    "metaDescription": "Convert images between JPG, PNG, and WebP formats. Fast, private, and free browser-based image conversion.",
    "keywords": [
      "image converter",
      "convert image format",
      "change image type",
      "photo converter"
    ],
    "icon": "convert",
    "toolType": "file-converter",
    "processing": "browser"
  },
  {
    "id": "tool-015",
    "slug": "png-to-jpg",
    "name": "PNG to JPG",
    "category": "image-tools",
    "shortDescription": "Convert PNG images to smaller JPG files.",
    "howToUse": "Upload one or more PNG files, pick a quality level and background color for transparent areas, then click Convert. Download your JPGs.",
    "features": [
      "Choose background for transparency",
      "Quality control",
      "Batch conversion",
      "Private processing"
    ],
    "faqs": [
      {
        "question": "Why did my transparent background turn white?",
        "answer": "JPG cannot store transparency, so transparent pixels are filled with a color. You can pick a different one."
      },
      {
        "question": "Will the JPG be smaller?",
        "answer": "Usually yes, especially for photographs, though flat graphics may not shrink much."
      }
    ],
    "seoTitle": "PNG to JPG Converter – Free Online Tool",
    "metaDescription": "Convert PNG to JPG in seconds. Pick quality and background color, and download smaller images privately in your browser.",
    "keywords": [
      "png to jpg",
      "png to jpeg",
      "convert png",
      "png converter"
    ],
    "icon": "image-swap",
    "toolType": "file-converter",
    "processing": "browser"
  },
  {
    "id": "tool-016",
    "slug": "jpg-to-png",
    "name": "JPG to PNG",
    "category": "image-tools",
    "shortDescription": "Convert JPG images to lossless PNG files.",
    "howToUse": "Upload JPG files and click Convert to PNG. Download each result. Converting does not restore detail already lost in the JPG.",
    "features": [
      "Lossless PNG output",
      "Batch conversion",
      "Keeps original dimensions",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Does converting to PNG improve quality?",
        "answer": "No. It prevents further loss but cannot recover detail removed by earlier JPG compression."
      },
      {
        "question": "Why is the PNG larger than the JPG?",
        "answer": "PNG stores images without lossy compression, so photo files are often much bigger."
      }
    ],
    "seoTitle": "JPG to PNG Converter – Convert JPEG to PNG",
    "metaDescription": "Convert JPG images to PNG format online. Quick, private conversion in your browser with no sign-up needed.",
    "keywords": [
      "jpg to png",
      "jpeg to png",
      "convert jpg",
      "jpg converter"
    ],
    "icon": "image-swap",
    "toolType": "file-converter",
    "processing": "browser"
  },
  {
    "id": "tool-017",
    "slug": "webp-converter",
    "name": "WebP Converter",
    "category": "image-tools",
    "shortDescription": "Convert images to and from the modern WebP format.",
    "howToUse": "Upload an image, choose WebP or another target format, set quality, and convert. Download the new file for use on your website.",
    "features": [
      "Convert to and from WebP",
      "Quality slider",
      "Usually smaller than JPG or PNG",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Why use WebP?",
        "answer": "WebP files are typically smaller than JPG or PNG at similar quality, which helps pages load faster."
      },
      {
        "question": "Do all browsers support WebP?",
        "answer": "All major modern browsers support it. Very old browsers and some older software may not."
      }
    ],
    "seoTitle": "WebP Converter – Convert Images to WebP Online",
    "metaDescription": "Convert JPG and PNG to WebP, or WebP back to common formats. Free, fast, and private in your browser.",
    "keywords": [
      "webp converter",
      "jpg to webp",
      "png to webp",
      "webp to jpg"
    ],
    "icon": "image-swap",
    "toolType": "file-converter",
    "processing": "browser"
  },
  {
    "id": "tool-018",
    "slug": "image-to-base64",
    "name": "Image to Base64",
    "category": "image-tools",
    "shortDescription": "Encode an image as a Base64 string or data URI for use in code.",
    "howToUse": "Upload an image and the Base64 output appears instantly. Copy the plain string or the full data URI for HTML and CSS.",
    "features": [
      "Plain Base64 and data URI output",
      "One-click copy",
      "Supports common image formats",
      "Nothing leaves your browser"
    ],
    "faqs": [
      {
        "question": "When should I use Base64 images?",
        "answer": "They suit small icons or inline assets. Large images become bulky, so regular files are usually better."
      },
      {
        "question": "How much bigger is Base64?",
        "answer": "Encoded data is roughly 33 percent larger than the original file."
      }
    ],
    "seoTitle": "Image to Base64 Converter – Create Data URI",
    "metaDescription": "Convert images to Base64 strings and data URIs for HTML, CSS, and email. Free browser-based encoder.",
    "keywords": [
      "image to base64",
      "base64 image",
      "data uri generator",
      "encode image"
    ],
    "icon": "code",
    "toolType": "file-converter",
    "processing": "browser"
  },
  {
    "id": "tool-019",
    "slug": "background-remover",
    "name": "Background Remover",
    "category": "image-tools",
    "shortDescription": "Remove the background from a photo and export a transparent PNG.",
    "howToUse": "Upload a photo, wait for the background to be detected and removed, then refine the edges if needed. Download as a transparent PNG.",
    "features": [
      "Automatic subject detection",
      "Transparent PNG export",
      "Works best on clear subjects",
      "Needs an ML model or API to run"
    ],
    "faqs": [
      {
        "question": "How accurate is automatic background removal?",
        "answer": "It works well on clear subjects with good contrast. Hair, glass, and busy scenes may need manual touch-ups."
      },
      {
        "question": "Is my photo uploaded anywhere?",
        "answer": "That depends on how the tool is deployed. See the processing note on this page for details."
      }
    ],
    "seoTitle": "Background Remover – Remove Image Background",
    "metaDescription": "Remove photo backgrounds and download a transparent PNG. Best for portraits, products, and clear subjects.",
    "keywords": [
      "remove background",
      "background remover",
      "transparent background",
      "cut out image"
    ],
    "icon": "eraser",
    "toolType": "file-processor",
    "processing": "external-api",
    "implementationNote": "Requires a real segmentation model (an in-browser ML library or a third-party API). Do not publish as functional until one is integrated."
  },
  {
    "id": "tool-020",
    "slug": "image-color-picker",
    "name": "Image Color Picker",
    "category": "image-tools",
    "shortDescription": "Pick any color from an uploaded image and get its HEX, RGB, and HSL values.",
    "howToUse": "Upload an image and click anywhere on it. The color code appears instantly and can be copied. Build a palette by picking several points.",
    "features": [
      "HEX, RGB, and HSL output",
      "Magnifier for precise picking",
      "Palette from multiple picks",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Are the colors exact?",
        "answer": "They match the pixel you click. Compressed JPGs can contain slight color variations."
      },
      {
        "question": "Can I save a palette?",
        "answer": "Pick several colors and copy them together as a list."
      }
    ],
    "seoTitle": "Image Color Picker – Get HEX, RGB from Photos",
    "metaDescription": "Pick colors from any image and copy HEX, RGB, or HSL codes. Free, private, and runs in your browser.",
    "keywords": [
      "image color picker",
      "pick color from image",
      "hex from image",
      "color extractor"
    ],
    "icon": "eyedropper",
    "toolType": "utility",
    "processing": "browser"
  },
  {
    "id": "tool-021",
    "slug": "photo-editor",
    "name": "Photo Editor",
    "category": "photo-editing-tools",
    "shortDescription": "Make quick edits to photos: crop, rotate, adjust light and color, and add text.",
    "howToUse": "Upload a photo, choose an adjustment from the toolbar, and fine-tune with the sliders. Use Undo if you change your mind, then download the edited image.",
    "features": [
      "Crop, rotate, and flip",
      "Light and color adjustments",
      "Text overlay",
      "Undo and reset"
    ],
    "faqs": [
      {
        "question": "Does editing damage my original photo?",
        "answer": "No. Edits are applied to a copy, and your original file is untouched."
      },
      {
        "question": "What formats can I export?",
        "answer": "You can typically export JPG, PNG, or WebP."
      }
    ],
    "seoTitle": "Free Online Photo Editor – Edit Images in Browser",
    "metaDescription": "Edit photos online with crop, rotate, brightness, contrast, and text tools. Private and free, no software to install.",
    "keywords": [
      "photo editor",
      "online photo editor",
      "edit pictures",
      "image editor"
    ],
    "icon": "edit",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-022",
    "slug": "blur-photo",
    "name": "Blur Photo",
    "category": "photo-editing-tools",
    "shortDescription": "Blur an entire photo or selected areas to hide details or soften a background.",
    "howToUse": "Upload a photo, choose full or selected-area blur, set the strength, and paint or drag over the area. Download the result.",
    "features": [
      "Full or partial blur",
      "Adjustable strength",
      "Hide faces or text",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Is blur a safe way to hide sensitive text?",
        "answer": "Light blur can sometimes be reversed. For private information, use a strong blur or cover it with a solid block."
      },
      {
        "question": "Can I blur just the background?",
        "answer": "You can blur selected areas manually. Automatic subject detection is not included."
      }
    ],
    "seoTitle": "Blur Photo Online – Free Image Blur Tool",
    "metaDescription": "Blur photos or specific areas with adjustable strength. Hide details or soften backgrounds privately in your browser.",
    "keywords": [
      "blur photo",
      "blur image",
      "blur background",
      "blur face"
    ],
    "icon": "blur",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-023",
    "slug": "photo-enhancer",
    "name": "Photo Enhancer",
    "category": "photo-editing-tools",
    "shortDescription": "Improve a photo's contrast, sharpness, and color balance with one click.",
    "howToUse": "Upload a photo and apply Auto Enhance, or adjust contrast, saturation, and sharpness manually. Compare before and after, then download.",
    "features": [
      "One-click auto enhance",
      "Manual contrast, saturation, and sharpness",
      "Before and after comparison",
      "Browser-based processing"
    ],
    "faqs": [
      {
        "question": "Can this fix a very blurry photo?",
        "answer": "It can improve mild softness, but it cannot recover detail that was never captured."
      },
      {
        "question": "Is this AI upscaling?",
        "answer": "No. It applies standard image adjustments, not AI-based upscaling."
      }
    ],
    "seoTitle": "Photo Enhancer – Improve Image Quality Online",
    "metaDescription": "Enhance photos with auto and manual adjustments for contrast, color, and sharpness. Free and private in your browser.",
    "keywords": [
      "photo enhancer",
      "enhance photo",
      "improve image quality",
      "sharpen image"
    ],
    "icon": "sparkles",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-024",
    "slug": "brightness-adjuster",
    "name": "Brightness Adjuster",
    "category": "photo-editing-tools",
    "shortDescription": "Make a photo lighter or darker with a simple slider.",
    "howToUse": "Upload a photo, drag the brightness slider until it looks right, and download the adjusted image. Contrast control is also available.",
    "features": [
      "Brightness and contrast sliders",
      "Live preview",
      "Quick reset",
      "Runs in your browser"
    ],
    "faqs": [
      {
        "question": "How do I fix an underexposed photo?",
        "answer": "Raise brightness gradually and add a little contrast to keep the image from looking flat."
      },
      {
        "question": "Can I brighten only part of a photo?",
        "answer": "This tool adjusts the whole image. Use the Photo Editor for localized changes."
      }
    ],
    "seoTitle": "Brightness Adjuster – Lighten or Darken Photos",
    "metaDescription": "Adjust photo brightness and contrast online. Live preview and instant download, free in your browser.",
    "keywords": [
      "adjust brightness",
      "brighten photo",
      "darken image",
      "brightness tool"
    ],
    "icon": "sun",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-025",
    "slug": "image-filters",
    "name": "Image Filters",
    "category": "photo-editing-tools",
    "shortDescription": "Apply filters like grayscale, sepia, vintage, and more to your photos.",
    "howToUse": "Upload an image, click a filter preset, and adjust its intensity. Download the filtered picture when you are happy with it.",
    "features": [
      "Grayscale, sepia, and vintage styles",
      "Intensity control",
      "Instant previews",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Can I combine filters?",
        "answer": "Yes. Apply one, then add another, or fine-tune the intensity of each."
      },
      {
        "question": "Will filters reduce image quality?",
        "answer": "Exports keep the original resolution. Only the colors and tones change."
      }
    ],
    "seoTitle": "Image Filters – Add Photo Effects Online",
    "metaDescription": "Apply grayscale, sepia, and vintage filters to your photos. Free online filter tool that works in your browser.",
    "keywords": [
      "image filters",
      "photo filters",
      "sepia filter",
      "black and white photo"
    ],
    "icon": "filter",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-026",
    "slug": "photo-collage-maker",
    "name": "Photo Collage Maker",
    "category": "photo-editing-tools",
    "shortDescription": "Arrange several photos into a collage using ready-made layouts.",
    "howToUse": "Pick a layout, add your photos to each slot, adjust spacing and background color, and click Download to save the collage.",
    "features": [
      "Multiple layout templates",
      "Adjustable spacing and borders",
      "Custom background color",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "How many photos can I add?",
        "answer": "Each layout has a set number of slots, typically 2 to 9 photos."
      },
      {
        "question": "What size is the finished collage?",
        "answer": "You can pick an output size suited to social media or printing."
      }
    ],
    "seoTitle": "Photo Collage Maker – Create Collages Online",
    "metaDescription": "Make photo collages with layouts, borders, and custom backgrounds. Free, private, and easy to use in your browser.",
    "keywords": [
      "photo collage maker",
      "collage maker",
      "picture collage",
      "combine photos"
    ],
    "icon": "layout-grid",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-027",
    "slug": "passport-photo-maker",
    "name": "Passport Photo Maker",
    "category": "photo-editing-tools",
    "shortDescription": "Crop a photo to common passport and ID sizes and prepare a printable sheet.",
    "howToUse": "Upload a portrait, choose your country's photo size, align your face using the guides, and download a single photo or a print-ready sheet.",
    "features": [
      "Common passport and ID sizes",
      "Face alignment guides",
      "Print sheet layout",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Will my photo be accepted automatically?",
        "answer": "Not guaranteed. Always check your country's official requirements for background, expression, and lighting."
      },
      {
        "question": "Does it remove the background?",
        "answer": "No. Use a plain, light background when taking the photo or edit it with a background tool."
      }
    ],
    "seoTitle": "Passport Photo Maker – Crop ID Photos Online",
    "metaDescription": "Crop photos to passport and ID sizes for the US, UK, Canada, and the EU. Create printable sheets privately in your browser.",
    "keywords": [
      "passport photo maker",
      "id photo",
      "passport size photo",
      "visa photo"
    ],
    "icon": "id-card",
    "toolType": "generator",
    "processing": "browser",
    "implementationNote": "Photo size presets must be verified against official government specifications before launch."
  },
  {
    "id": "tool-028",
    "slug": "meme-generator",
    "name": "Meme Generator",
    "category": "photo-editing-tools",
    "shortDescription": "Add top and bottom captions to an image to create a meme.",
    "howToUse": "Upload an image, type your text, adjust font size and color, then download the finished meme.",
    "features": [
      "Top and bottom captions",
      "Font size and color options",
      "Use your own images",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Can I use any image?",
        "answer": "Use images you own or have permission to use. You are responsible for copyright compliance."
      },
      {
        "question": "Which format is the meme saved in?",
        "answer": "Memes download as PNG or JPG images."
      }
    ],
    "seoTitle": "Meme Generator – Make Memes Online for Free",
    "metaDescription": "Create memes with your own images and captions. Customize text and download instantly in your browser.",
    "keywords": [
      "meme generator",
      "make a meme",
      "meme maker",
      "add text to image"
    ],
    "icon": "smile",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-029",
    "slug": "watermark-adder",
    "name": "Watermark Adder",
    "category": "photo-editing-tools",
    "shortDescription": "Add a text or logo watermark to protect and brand your images.",
    "howToUse": "Upload your images, add text or a logo, set position, size, and opacity, and download the watermarked files.",
    "features": [
      "Text and logo watermarks",
      "Position, size, and opacity controls",
      "Batch watermarking",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Can a watermark be removed by others?",
        "answer": "A watermark discourages casual copying but cannot completely prevent removal."
      },
      {
        "question": "Can I add my logo?",
        "answer": "Yes. Upload a PNG with a transparent background for the cleanest result."
      }
    ],
    "seoTitle": "Add Watermark to Photos – Free Watermark Tool",
    "metaDescription": "Add text or logo watermarks to images. Control size, position, and opacity, and download privately in your browser.",
    "keywords": [
      "add watermark",
      "watermark photo",
      "watermark maker",
      "logo on image"
    ],
    "icon": "stamp",
    "toolType": "file-processor",
    "processing": "browser"
  },
  {
    "id": "tool-030",
    "slug": "photo-background-changer",
    "name": "Photo Background Changer",
    "category": "photo-editing-tools",
    "shortDescription": "Replace a photo's background with a solid color or another image.",
    "howToUse": "Upload a portrait, remove the existing background, then choose a new color or upload a replacement image. Download the finished photo.",
    "features": [
      "Solid color or image backgrounds",
      "Edge refinement",
      "Transparent PNG option",
      "Needs a background removal engine"
    ],
    "faqs": [
      {
        "question": "Does this work on any photo?",
        "answer": "It works best when the subject is clearly separated from the background."
      },
      {
        "question": "Is the process automatic?",
        "answer": "Automatic removal needs a segmentation model or API; see this tool's processing note."
      }
    ],
    "seoTitle": "Photo Background Changer – Replace Image Backgrounds",
    "metaDescription": "Change photo backgrounds to a new color or image. Great for profile pictures and product shots.",
    "keywords": [
      "change photo background",
      "replace background",
      "background changer",
      "new photo background"
    ],
    "icon": "image-plus",
    "toolType": "file-processor",
    "processing": "external-api",
    "implementationNote": "Depends on the same segmentation model or API as the Background Remover; do not mark functional until integrated."
  },
  {
    "id": "tool-031",
    "slug": "video-compressor",
    "name": "Video Compressor",
    "category": "video-tools",
    "shortDescription": "Reduce a video's file size for easier sharing and uploading.",
    "howToUse": "Upload a video, choose a quality or target size, and click Compress. Download the smaller file when processing completes. Large videos take longer.",
    "features": [
      "Quality and size presets",
      "Keeps the original format where possible",
      "Before and after file sizes",
      "Runs locally using WebAssembly"
    ],
    "faqs": [
      {
        "question": "Will compression reduce video quality?",
        "answer": "Some quality is traded for size. Moderate settings usually look close to the original."
      },
      {
        "question": "Why is it slow on big files?",
        "answer": "Processing happens on your device, so speed depends on its CPU and memory."
      }
    ],
    "seoTitle": "Compress Video Online – Reduce Video File Size",
    "metaDescription": "Shrink video files for email, messaging, and uploads. Choose a quality level and compress privately in your browser.",
    "keywords": [
      "compress video",
      "video compressor",
      "reduce video size",
      "shrink mp4"
    ],
    "icon": "video-compress",
    "toolType": "file-processor",
    "processing": "browser",
    "implementationNote": "Needs an in-browser FFmpeg (WebAssembly) build; browser memory limits apply to large files."
  },
  {
    "id": "tool-032",
    "slug": "video-trimmer",
    "name": "Video Trimmer",
    "category": "video-tools",
    "shortDescription": "Cut a video to keep only the part you want.",
    "howToUse": "Upload a video, drag the start and end handles on the timeline, preview the selection, and click Trim. Download the shortened clip.",
    "features": [
      "Timeline handles with preview",
      "Frame-accurate start and end inputs",
      "Fast stream-copy trimming where possible",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Does trimming re-encode the video?",
        "answer": "When possible it copies the video stream, which is fast and keeps quality. Otherwise it re-encodes."
      },
      {
        "question": "Can I remove a section from the middle?",
        "answer": "This tool keeps one selected segment. Trim twice and merge to remove a middle part."
      }
    ],
    "seoTitle": "Video Trimmer – Cut Videos Online for Free",
    "metaDescription": "Trim videos by setting start and end points. Preview your clip and download it quickly in your browser.",
    "keywords": [
      "trim video",
      "video cutter",
      "cut video online",
      "video trimmer"
    ],
    "icon": "scissors",
    "toolType": "file-processor",
    "processing": "browser",
    "implementationNote": "Needs in-browser FFmpeg (WebAssembly)."
  },
  {
    "id": "tool-033",
    "slug": "video-cropper",
    "name": "Video Cropper",
    "category": "video-tools",
    "shortDescription": "Crop the frame of a video to a new size or aspect ratio.",
    "howToUse": "Upload a video, drag the crop box or choose a ratio like 9:16, and click Crop. Download the new video.",
    "features": [
      "Free-form and preset ratios",
      "Live crop preview",
      "Great for vertical social videos",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Is this the same as trimming?",
        "answer": "No. Cropping changes the visible frame area; trimming changes the length."
      },
      {
        "question": "Does cropping lower quality?",
        "answer": "The video is re-encoded, so a small quality change is possible."
      }
    ],
    "seoTitle": "Crop Video Online – Free Video Cropper",
    "metaDescription": "Crop videos to any size or aspect ratio, such as 9:16 or 1:1. Preview and download in your browser.",
    "keywords": [
      "crop video",
      "video cropper",
      "change video aspect ratio",
      "vertical video"
    ],
    "icon": "crop",
    "toolType": "file-processor",
    "processing": "browser",
    "implementationNote": "Needs in-browser FFmpeg (WebAssembly)."
  },
  {
    "id": "tool-034",
    "slug": "video-to-gif",
    "name": "Video to GIF",
    "category": "video-tools",
    "shortDescription": "Convert a short video clip into an animated GIF.",
    "howToUse": "Upload a video, select the start and end time, choose size and frame rate, and click Convert. Download your GIF.",
    "features": [
      "Choose clip length and frame rate",
      "Resize output",
      "Optimized GIF palette",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Why is my GIF so large?",
        "answer": "GIFs are inefficient. Shorter clips, smaller sizes, and lower frame rates reduce file size."
      },
      {
        "question": "What clip length works best?",
        "answer": "Under 10 seconds usually gives a manageable size."
      }
    ],
    "seoTitle": "Video to GIF Converter – Make GIFs Online",
    "metaDescription": "Turn video clips into animated GIFs. Set length, size, and frame rate, and convert privately in your browser.",
    "keywords": [
      "video to gif",
      "make gif",
      "mp4 to gif",
      "gif maker"
    ],
    "icon": "film",
    "toolType": "file-converter",
    "processing": "browser",
    "implementationNote": "Needs in-browser FFmpeg (WebAssembly)."
  },
  {
    "id": "tool-035",
    "slug": "gif-to-video",
    "name": "GIF to Video",
    "category": "video-tools",
    "shortDescription": "Convert an animated GIF into a smaller MP4 or WebM video.",
    "howToUse": "Upload a GIF, choose MP4 or WebM, and click Convert. Download the video, which is usually much smaller than the GIF.",
    "features": [
      "MP4 and WebM output",
      "Much smaller than GIF",
      "Keeps animation timing",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Why convert a GIF to video?",
        "answer": "Video files are far smaller and load faster than GIFs with the same animation."
      },
      {
        "question": "Will the video have sound?",
        "answer": "No. GIFs do not contain audio."
      }
    ],
    "seoTitle": "GIF to Video Converter – GIF to MP4 Online",
    "metaDescription": "Convert GIFs to MP4 or WebM for smaller files and faster loading. Free and private in your browser.",
    "keywords": [
      "gif to mp4",
      "gif to video",
      "convert gif",
      "gif to webm"
    ],
    "icon": "film",
    "toolType": "file-converter",
    "processing": "browser",
    "implementationNote": "Needs in-browser FFmpeg (WebAssembly)."
  },
  {
    "id": "tool-036",
    "slug": "video-converter",
    "name": "Video Converter",
    "category": "video-tools",
    "shortDescription": "Convert videos between MP4, WebM, MOV, and other formats.",
    "howToUse": "Upload a video, choose the output format, and click Convert. Download the converted file when it is ready.",
    "features": [
      "Popular format support",
      "Quality presets",
      "Keeps resolution by default",
      "Local WebAssembly processing"
    ],
    "faqs": [
      {
        "question": "Which format works on most devices?",
        "answer": "MP4 with H.264 video is the most widely compatible."
      },
      {
        "question": "Is there a file size limit?",
        "answer": "Browser memory sets a practical limit. Very large files may need a desktop tool."
      }
    ],
    "seoTitle": "Video Converter – Convert MP4, WebM, MOV Online",
    "metaDescription": "Convert videos between popular formats like MP4 and WebM. Choose quality and convert in your browser.",
    "keywords": [
      "video converter",
      "convert video",
      "mov to mp4",
      "mp4 converter"
    ],
    "icon": "video",
    "toolType": "file-converter",
    "processing": "browser",
    "implementationNote": "Needs in-browser FFmpeg (WebAssembly); some codecs may be unavailable in the WASM build."
  },
  {
    "id": "tool-037",
    "slug": "video-resizer",
    "name": "Video Resizer",
    "category": "video-tools",
    "shortDescription": "Change a video's resolution for different screens and platforms.",
    "howToUse": "Upload a video, pick a preset like 1080p, 720p, or 480p, or enter custom dimensions, and click Resize. Download the result.",
    "features": [
      "Resolution presets",
      "Custom dimensions",
      "Aspect ratio lock",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Does lowering resolution reduce file size?",
        "answer": "Yes. Fewer pixels generally means a smaller file."
      },
      {
        "question": "Can I upscale a low-resolution video?",
        "answer": "You can enlarge it, but it will not gain real detail."
      }
    ],
    "seoTitle": "Video Resizer – Change Video Resolution Online",
    "metaDescription": "Resize videos to 1080p, 720p, or custom dimensions. Free, private, and runs in your browser.",
    "keywords": [
      "resize video",
      "video resolution changer",
      "change video size",
      "video resizer"
    ],
    "icon": "maximize",
    "toolType": "file-processor",
    "processing": "browser",
    "implementationNote": "Needs in-browser FFmpeg (WebAssembly)."
  },
  {
    "id": "tool-038",
    "slug": "audio-extractor",
    "name": "Audio Extractor",
    "category": "video-tools",
    "shortDescription": "Pull the audio track from a video and save it as MP3 or WAV.",
    "howToUse": "Upload a video, choose MP3 or WAV, and click Extract. Download the audio file.",
    "features": [
      "MP3 and WAV output",
      "Keeps full audio length",
      "Adjustable bitrate",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Does extracting audio change the video?",
        "answer": "No. Your original video stays the same."
      },
      {
        "question": "What if the video has no audio?",
        "answer": "The tool will tell you no audio track was found."
      }
    ],
    "seoTitle": "Audio Extractor – Extract Audio from Video",
    "metaDescription": "Extract audio from video files and save as MP3 or WAV. Free and private conversion in your browser.",
    "keywords": [
      "extract audio",
      "video to mp3",
      "audio extractor",
      "mp4 to mp3"
    ],
    "icon": "music",
    "toolType": "file-converter",
    "processing": "browser",
    "implementationNote": "MP3 encoding in the browser needs an FFmpeg WASM build that includes an MP3 encoder."
  },
  {
    "id": "tool-039",
    "slug": "video-speed-changer",
    "name": "Video Speed Changer",
    "category": "video-tools",
    "shortDescription": "Speed up or slow down a video from 0.25x to 4x.",
    "howToUse": "Upload a video, select a speed multiplier, choose whether to keep audio pitch, and click Apply. Download the adjusted video.",
    "features": [
      "0.25x to 4x speed range",
      "Optional audio pitch correction",
      "Live preview",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Will the audio change?",
        "answer": "Audio speeds up or slows down too, and you can choose to preserve pitch."
      },
      {
        "question": "Can I change speed for only part of a video?",
        "answer": "This tool applies one speed to the whole clip. Trim first for partial changes."
      }
    ],
    "seoTitle": "Video Speed Changer – Speed Up or Slow Down Video",
    "metaDescription": "Change video speed from 0.25x to 4x. Make slow motion or timelapse clips privately in your browser.",
    "keywords": [
      "change video speed",
      "slow motion video",
      "speed up video",
      "video speed"
    ],
    "icon": "gauge",
    "toolType": "file-processor",
    "processing": "browser",
    "implementationNote": "Needs in-browser FFmpeg (WebAssembly)."
  },
  {
    "id": "tool-040",
    "slug": "video-thumbnail-maker",
    "name": "Video Thumbnail Maker",
    "category": "video-tools",
    "shortDescription": "Capture a frame from a video and save it as a thumbnail image.",
    "howToUse": "Upload a video, scrub to the frame you want, and click Capture. Download the frame as JPG or PNG.",
    "features": [
      "Frame-by-frame scrubbing",
      "JPG and PNG export",
      "Keeps original resolution",
      "Uses the browser's built-in video player"
    ],
    "faqs": [
      {
        "question": "Can I use the thumbnail on YouTube?",
        "answer": "Yes, as long as it meets the platform's size and file limits."
      },
      {
        "question": "Does it add text or effects?",
        "answer": "No. It captures a frame only. Use the Photo Editor to add text."
      }
    ],
    "seoTitle": "Video Thumbnail Maker – Capture Video Frames",
    "metaDescription": "Capture any frame from a video as a JPG or PNG thumbnail. Free, instant, and private in your browser.",
    "keywords": [
      "video thumbnail",
      "capture video frame",
      "thumbnail maker",
      "video screenshot"
    ],
    "icon": "image",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-041",
    "slug": "word-counter",
    "name": "Word Counter",
    "category": "text-writing-tools",
    "shortDescription": "Count words, characters, sentences, and paragraphs as you type.",
    "howToUse": "Type or paste your text into the box. Counts update instantly. Reading and speaking time estimates appear alongside.",
    "features": [
      "Live word and sentence counts",
      "Reading and speaking time",
      "Paragraph count",
      "Works entirely in your browser"
    ],
    "faqs": [
      {
        "question": "How does it count words?",
        "answer": "Words are groups of characters separated by spaces or line breaks."
      },
      {
        "question": "Is my text saved?",
        "answer": "No. Your text stays in your browser and is not sent anywhere."
      }
    ],
    "seoTitle": "Word Counter – Count Words and Characters Online",
    "metaDescription": "Count words, characters, sentences, and paragraphs instantly. See reading time too. Free and private in your browser.",
    "keywords": [
      "word counter",
      "count words",
      "word count tool",
      "essay word count"
    ],
    "icon": "hash",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-042",
    "slug": "character-counter",
    "name": "Character Counter",
    "category": "text-writing-tools",
    "shortDescription": "Count characters with and without spaces for limits like tweets and meta tags.",
    "howToUse": "Paste your text to see character counts update instantly. Compare against common limits for social posts and SEO fields.",
    "features": [
      "With and without spaces",
      "Common platform limits",
      "Live updates",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Do spaces count as characters?",
        "answer": "Most platforms count them. This tool shows both totals so you can check either way."
      },
      {
        "question": "Are emojis counted correctly?",
        "answer": "Emojis may count as more than one character on some platforms, so confirm with the platform's own counter."
      }
    ],
    "seoTitle": "Character Counter – Count Characters Online",
    "metaDescription": "Count characters with and without spaces. Check limits for social posts, meta descriptions, and more.",
    "keywords": [
      "character counter",
      "count characters",
      "character count",
      "letter counter"
    ],
    "icon": "type",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-043",
    "slug": "case-converter",
    "name": "Case Converter",
    "category": "text-writing-tools",
    "shortDescription": "Switch text between uppercase, lowercase, title case, sentence case, and more.",
    "howToUse": "Paste your text, click the case style you want, and copy the result.",
    "features": [
      "Upper, lower, title, and sentence case",
      "camelCase and snake_case options",
      "One-click copy",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "What is title case?",
        "answer": "Title case capitalizes the main words in a heading while leaving small words like 'and' in lowercase."
      },
      {
        "question": "Will it fix capitalization of names?",
        "answer": "It applies simple rules, so proper nouns may need manual correction."
      }
    ],
    "seoTitle": "Case Converter – Change Text Case Online",
    "metaDescription": "Convert text to uppercase, lowercase, title case, sentence case, and more. Free and instant in your browser.",
    "keywords": [
      "case converter",
      "uppercase to lowercase",
      "title case converter",
      "change text case"
    ],
    "icon": "case-sensitive",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-044",
    "slug": "remove-duplicate-lines",
    "name": "Remove Duplicate Lines",
    "category": "text-writing-tools",
    "shortDescription": "Delete repeated lines from a list or block of text.",
    "howToUse": "Paste your text with one item per line, choose whether to ignore case or trim spaces, and click Remove Duplicates. Copy the cleaned list.",
    "features": [
      "Case-sensitive or insensitive",
      "Trim whitespace option",
      "Optional sorting",
      "Shows how many lines were removed"
    ],
    "faqs": [
      {
        "question": "Does it keep the original order?",
        "answer": "Yes by default. You can also choose to sort the results."
      },
      {
        "question": "Can it remove duplicates across large lists?",
        "answer": "Yes, up to what your browser can handle, typically many thousands of lines."
      }
    ],
    "seoTitle": "Remove Duplicate Lines – Clean Text Lists Online",
    "metaDescription": "Remove duplicate lines from lists instantly. Ignore case, trim spaces, and copy the clean results.",
    "keywords": [
      "remove duplicate lines",
      "deduplicate list",
      "unique lines",
      "remove duplicates text"
    ],
    "icon": "list-minus",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-045",
    "slug": "text-reverser",
    "name": "Text Reverser",
    "category": "text-writing-tools",
    "shortDescription": "Reverse text by characters, words, or lines.",
    "howToUse": "Enter your text, pick a reverse mode, and copy the output.",
    "features": [
      "Reverse characters, words, or lines",
      "Instant results",
      "One-click copy",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "What is the difference between reversing words and characters?",
        "answer": "Reversing characters flips every letter, while reversing words keeps each word intact but flips their order."
      },
      {
        "question": "Does it work with emojis?",
        "answer": "Complex emojis may break when reversed by character."
      }
    ],
    "seoTitle": "Text Reverser – Reverse Text Online",
    "metaDescription": "Reverse text by character, word, or line order. Quick, free, and runs in your browser.",
    "keywords": [
      "reverse text",
      "text reverser",
      "reverse words",
      "flip text"
    ],
    "icon": "repeat",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-046",
    "slug": "grammar-checker",
    "name": "Grammar Checker",
    "category": "text-writing-tools",
    "shortDescription": "Check text for common spelling and grammar issues.",
    "howToUse": "Paste your text and click Check. Suggested fixes are highlighted. Accept or ignore each suggestion before copying the result.",
    "features": [
      "Spelling and grammar suggestions",
      "Inline highlights",
      "Copy corrected text",
      "Requires a grammar engine or API"
    ],
    "faqs": [
      {
        "question": "Can it catch every mistake?",
        "answer": "No automatic checker is perfect. Always proofread important writing yourself."
      },
      {
        "question": "Is my text sent to a server?",
        "answer": "If the tool uses an external checking service, your text is sent to it. See the processing note."
      }
    ],
    "seoTitle": "Grammar Checker – Check Spelling and Grammar",
    "metaDescription": "Check your writing for grammar and spelling mistakes. Review suggestions and copy corrected text.",
    "keywords": [
      "grammar checker",
      "spell check",
      "proofread online",
      "grammar check"
    ],
    "icon": "spell-check",
    "toolType": "text-utility",
    "processing": "external-api",
    "implementationNote": "Needs a real grammar engine (for example a self-hosted LanguageTool server or a third-party API). It is not AI unless an AI service is integrated."
  },
  {
    "id": "tool-047",
    "slug": "lorem-ipsum-generator",
    "name": "Lorem Ipsum Generator",
    "category": "text-writing-tools",
    "shortDescription": "Generate placeholder text for designs and mockups.",
    "howToUse": "Choose paragraphs, sentences, or words, set the amount, and click Generate. Copy the text into your project.",
    "features": [
      "Paragraphs, sentences, or words",
      "Option to start with 'Lorem ipsum'",
      "Instant copy",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "What is Lorem Ipsum?",
        "answer": "It is placeholder text used in design and publishing to show how a layout looks with real-length content."
      },
      {
        "question": "Is it real Latin?",
        "answer": "It is scrambled text derived from a classical Latin passage and has no readable meaning."
      }
    ],
    "seoTitle": "Lorem Ipsum Generator – Placeholder Text Online",
    "metaDescription": "Generate lorem ipsum paragraphs, sentences, or words for mockups and designs. Free and instant.",
    "keywords": [
      "lorem ipsum",
      "placeholder text",
      "dummy text generator",
      "lipsum"
    ],
    "icon": "align-left",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-048",
    "slug": "text-to-speech",
    "name": "Text to Speech",
    "category": "text-writing-tools",
    "shortDescription": "Listen to written text read aloud in a synthetic voice.",
    "howToUse": "Paste your text, choose a voice, language, and speed, and click Play. Voices available depend on your device and browser.",
    "features": [
      "Multiple voices and languages",
      "Speed and pitch control",
      "Uses your browser's speech engine",
      "No audio download unless a TTS service is added"
    ],
    "faqs": [
      {
        "question": "Why do voices sound different on my phone?",
        "answer": "The tool uses voices built into your device and browser, which vary by system."
      },
      {
        "question": "Can I download the audio?",
        "answer": "The built-in browser speech engine only plays audio. Downloads need a separate TTS service."
      }
    ],
    "seoTitle": "Text to Speech – Read Text Aloud Online",
    "metaDescription": "Turn text into spoken audio with adjustable voice, language, and speed. Free in your browser.",
    "keywords": [
      "text to speech",
      "read text aloud",
      "tts online",
      "speech synthesis"
    ],
    "icon": "volume",
    "toolType": "text-utility",
    "processing": "browser",
    "implementationNote": "Uses the Web Speech API (speechSynthesis); audio export is not supported without an external service."
  },
  {
    "id": "tool-049",
    "slug": "speech-to-text",
    "name": "Speech to Text",
    "category": "text-writing-tools",
    "shortDescription": "Dictate with your microphone and see your words appear as text.",
    "howToUse": "Click Start, allow microphone access, and speak clearly. Your words appear on screen. Stop when finished and copy the text.",
    "features": [
      "Live dictation",
      "Multiple languages",
      "Copy or clear text",
      "Depends on browser speech recognition"
    ],
    "faqs": [
      {
        "question": "Which browsers support it?",
        "answer": "Support varies. Chrome and Edge work well, while others may be limited or unsupported."
      },
      {
        "question": "Is my voice sent to a server?",
        "answer": "In some browsers the speech recognition service sends audio to the browser vendor's servers."
      }
    ],
    "seoTitle": "Speech to Text – Free Voice Dictation Online",
    "metaDescription": "Convert your speech to text with your microphone. Multiple languages supported in compatible browsers.",
    "keywords": [
      "speech to text",
      "voice to text",
      "dictation online",
      "voice typing"
    ],
    "icon": "mic",
    "toolType": "text-utility",
    "processing": "external-api",
    "implementationNote": "Uses the browser's SpeechRecognition API, which relies on the browser vendor's cloud service and is unavailable in some browsers."
  },
  {
    "id": "tool-050",
    "slug": "paragraph-generator",
    "name": "Paragraph Generator",
    "category": "text-writing-tools",
    "shortDescription": "Generate sample paragraphs of readable text for drafts and layouts.",
    "howToUse": "Choose how many paragraphs and sentences per paragraph you need, then click Generate. Copy the text.",
    "features": [
      "Control paragraph and sentence count",
      "Readable placeholder sentences",
      "Instant copy",
      "Template-based, not AI-written"
    ],
    "faqs": [
      {
        "question": "Is the text written by AI?",
        "answer": "No. It is assembled from sentence templates and word lists, so it is meant for placeholders only."
      },
      {
        "question": "Can I use it for real articles?",
        "answer": "It is not suited to publishing. Use it only for layout and testing."
      }
    ],
    "seoTitle": "Paragraph Generator – Random Text Paragraphs",
    "metaDescription": "Generate random readable paragraphs for mockups and testing. Free, instant, and no sign-up.",
    "keywords": [
      "paragraph generator",
      "random paragraph",
      "sample text",
      "text generator"
    ],
    "icon": "pilcrow",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-051",
    "slug": "meta-tag-generator",
    "name": "Meta Tag Generator",
    "category": "seo-tools",
    "shortDescription": "Create title, description, and viewport meta tags for your web pages.",
    "howToUse": "Enter your page title, description, and optional keywords, language, and robots settings. Copy the generated HTML into your page's head section.",
    "features": [
      "Title and description tags",
      "Robots and viewport options",
      "Character length guidance",
      "Copy-ready HTML"
    ],
    "faqs": [
      {
        "question": "How long should a meta description be?",
        "answer": "Aim for roughly 120 to 160 characters so it is less likely to be cut off in search results."
      },
      {
        "question": "Do meta keywords help rankings?",
        "answer": "Google does not use the meta keywords tag, so it is optional."
      }
    ],
    "seoTitle": "Meta Tag Generator – Create SEO Meta Tags",
    "metaDescription": "Generate SEO-friendly meta tags for your pages. Add title, description, and robots tags and copy the HTML.",
    "keywords": [
      "meta tag generator",
      "seo meta tags",
      "meta description generator",
      "html meta tags"
    ],
    "icon": "tags",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-052",
    "slug": "meta-tag-analyzer",
    "name": "Meta Tag Analyzer",
    "category": "seo-tools",
    "shortDescription": "Check the meta tags of a page and spot common SEO issues.",
    "howToUse": "Paste your page's HTML head code or a URL, and click Analyze. Review the title, description, and robots tags with suggestions.",
    "features": [
      "Title and description length checks",
      "Robots and canonical detection",
      "Open Graph overview",
      "URL fetching needs a server"
    ],
    "faqs": [
      {
        "question": "Can it analyze any URL?",
        "answer": "Fetching a live URL needs a server-side request because browsers block cross-site fetching. Pasting HTML always works."
      },
      {
        "question": "What makes a good title tag?",
        "answer": "A clear, unique title that describes the page, usually under about 60 characters."
      }
    ],
    "seoTitle": "Meta Tag Analyzer – Check Page SEO Tags",
    "metaDescription": "Analyze title, description, and robots meta tags with clear recommendations. Paste HTML or enter a URL.",
    "keywords": [
      "meta tag analyzer",
      "meta tag checker",
      "seo tag checker",
      "analyze meta tags"
    ],
    "icon": "search",
    "toolType": "checker",
    "processing": "server",
    "implementationNote": "Pasted-HTML analysis runs in the browser; URL analysis needs a server-side fetch (watch SSRF protections and rate limits)."
  },
  {
    "id": "tool-053",
    "slug": "keyword-density-checker",
    "name": "Keyword Density Checker",
    "category": "seo-tools",
    "shortDescription": "See how often each word and phrase appears in your content.",
    "howToUse": "Paste your text and click Check. A table shows word counts and percentages for single words and phrases.",
    "features": [
      "Single words and phrases",
      "Percentage frequency",
      "Stop-word filtering",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "What is a good keyword density?",
        "answer": "There is no ideal number. Write naturally and avoid repeating a phrase just to hit a target."
      },
      {
        "question": "Does it ignore common words like 'the'?",
        "answer": "Yes, you can filter out common stop words."
      }
    ],
    "seoTitle": "Keyword Density Checker – Analyze Text Keywords",
    "metaDescription": "Check word and phrase frequency in your content. Spot overuse and improve readability. Free and private.",
    "keywords": [
      "keyword density",
      "keyword checker",
      "word frequency",
      "seo content analysis"
    ],
    "icon": "bar-chart",
    "toolType": "checker",
    "processing": "browser"
  },
  {
    "id": "tool-054",
    "slug": "sitemap-generator",
    "name": "Sitemap Generator",
    "category": "seo-tools",
    "shortDescription": "Create an XML sitemap file from a list of URLs.",
    "howToUse": "Paste your URLs one per line, set optional priority and change frequency, and click Generate. Download or copy the sitemap.xml file.",
    "features": [
      "Valid XML sitemap output",
      "Optional lastmod, priority, and frequency",
      "Download as sitemap.xml",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Does this crawl my website?",
        "answer": "No. It builds a sitemap from the URLs you provide. Automatic crawling needs a server."
      },
      {
        "question": "Where do I upload the sitemap?",
        "answer": "Place it at the root of your site and submit it in Google Search Console."
      }
    ],
    "seoTitle": "XML Sitemap Generator – Create sitemap.xml",
    "metaDescription": "Generate a valid XML sitemap from your URLs. Download sitemap.xml and submit it to search engines.",
    "keywords": [
      "sitemap generator",
      "xml sitemap",
      "create sitemap",
      "sitemap.xml"
    ],
    "icon": "sitemap",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-055",
    "slug": "robots-txt-generator",
    "name": "Robots.txt Generator",
    "category": "seo-tools",
    "shortDescription": "Build a robots.txt file to guide search engine crawlers.",
    "howToUse": "Choose which paths to allow or block, add your sitemap URL, and click Generate. Copy or download robots.txt and upload it to your site's root.",
    "features": [
      "Allow and disallow rules",
      "Sitemap line support",
      "Preset templates",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Does robots.txt hide pages from Google?",
        "answer": "Not reliably. It asks crawlers not to crawl a page. Use a noindex tag to keep pages out of search results."
      },
      {
        "question": "Where does robots.txt go?",
        "answer": "It must be at the root of your domain, such as example.com/robots.txt."
      }
    ],
    "seoTitle": "Robots.txt Generator – Create robots.txt Online",
    "metaDescription": "Create a robots.txt file with allow and disallow rules and your sitemap link. Free and easy to use.",
    "keywords": [
      "robots.txt generator",
      "create robots.txt",
      "robots file",
      "block crawlers"
    ],
    "icon": "bot",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-056",
    "slug": "slug-generator",
    "name": "Slug Generator",
    "category": "seo-tools",
    "shortDescription": "Turn titles into clean, URL-friendly slugs.",
    "howToUse": "Type or paste a title. The slug appears instantly with lowercase letters and hyphens. Choose whether to remove stop words.",
    "features": [
      "Lowercase, hyphenated output",
      "Special character and accent handling",
      "Optional stop-word removal",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "What makes a good URL slug?",
        "answer": "Short, descriptive, lowercase, and separated by hyphens."
      },
      {
        "question": "Does it handle accents?",
        "answer": "Yes. Accented letters like é and ü are converted to plain letters."
      }
    ],
    "seoTitle": "Slug Generator – Create SEO-Friendly URLs",
    "metaDescription": "Convert titles to clean URL slugs. Handles accents and special characters. Free and instant.",
    "keywords": [
      "slug generator",
      "url slug",
      "seo friendly url",
      "permalink generator"
    ],
    "icon": "link",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-057",
    "slug": "serp-snippet-preview",
    "name": "SERP Snippet Preview",
    "category": "seo-tools",
    "shortDescription": "Preview how your title and description may appear in Google results.",
    "howToUse": "Enter your title, URL, and meta description. The preview shows desktop and mobile snippets and warns when text may be truncated.",
    "features": [
      "Desktop and mobile previews",
      "Truncation warnings",
      "Pixel-width estimation",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Is the preview exactly what Google shows?",
        "answer": "No. Google may rewrite titles and descriptions, so treat it as an estimate."
      },
      {
        "question": "Why is my title cut off?",
        "answer": "Search results truncate titles by pixel width, usually around 580 to 600 pixels."
      }
    ],
    "seoTitle": "SERP Snippet Preview Tool – Google Result Preview",
    "metaDescription": "Preview your title and meta description as they might appear in Google search results on desktop and mobile.",
    "keywords": [
      "serp preview",
      "google snippet preview",
      "title preview",
      "meta description preview"
    ],
    "icon": "eye",
    "toolType": "checker",
    "processing": "browser"
  },
  {
    "id": "tool-058",
    "slug": "xml-formatter",
    "name": "XML Formatter",
    "category": "seo-tools",
    "shortDescription": "Format, indent, and validate XML so it is easy to read.",
    "howToUse": "Paste your XML, choose an indent size, and click Format. Errors are flagged with a helpful message. Copy the cleaned output.",
    "features": [
      "Pretty-print with custom indent",
      "Well-formedness validation",
      "Minify option",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Does it validate against a schema?",
        "answer": "It checks that XML is well-formed. Validation against XSD schemas is not included."
      },
      {
        "question": "Can it handle large files?",
        "answer": "Yes, within your browser's memory limits."
      }
    ],
    "seoTitle": "XML Formatter – Format and Validate XML Online",
    "metaDescription": "Beautify, minify, and validate XML online. Clear error messages and instant copy in your browser.",
    "keywords": [
      "xml formatter",
      "xml beautifier",
      "format xml",
      "xml validator"
    ],
    "icon": "code-xml",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-059",
    "slug": "schema-markup-generator",
    "name": "Schema Markup Generator",
    "category": "seo-tools",
    "shortDescription": "Generate JSON-LD structured data for articles, products, FAQs, and more.",
    "howToUse": "Choose a schema type, fill in the fields, and copy the JSON-LD into your page. Test the result with Google's Rich Results Test.",
    "features": [
      "JSON-LD output",
      "Article, product, FAQ, and organization types",
      "Required field hints",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Does schema markup improve rankings?",
        "answer": "It does not directly boost rankings but can make you eligible for rich results."
      },
      {
        "question": "How do I test it?",
        "answer": "Use Google's Rich Results Test or the Schema Markup Validator."
      }
    ],
    "seoTitle": "Schema Markup Generator – Create JSON-LD Online",
    "metaDescription": "Create JSON-LD structured data for articles, products, FAQs, and organizations. Copy and paste into your site.",
    "keywords": [
      "schema markup generator",
      "json-ld generator",
      "structured data",
      "faq schema"
    ],
    "icon": "braces",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-060",
    "slug": "open-graph-preview",
    "name": "Open Graph Preview",
    "category": "seo-tools",
    "shortDescription": "Preview how a link looks when shared on social platforms.",
    "howToUse": "Enter your Open Graph title, description, image URL, and page URL. See sample cards for popular social platforms and copy the tags.",
    "features": [
      "Social card previews",
      "Open Graph and Twitter Card tags",
      "Image size guidance",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "What image size works best?",
        "answer": "About 1200 by 630 pixels is widely recommended for link previews."
      },
      {
        "question": "Why does a platform show an old preview?",
        "answer": "Platforms cache previews. Use their sharing debugger to refresh it."
      }
    ],
    "seoTitle": "Open Graph Preview – Social Share Card Checker",
    "metaDescription": "Preview Open Graph and Twitter Card links before you share. Generate tags and fix social previews.",
    "keywords": [
      "open graph preview",
      "og tags",
      "social share preview",
      "twitter card"
    ],
    "icon": "share",
    "toolType": "checker",
    "processing": "browser",
    "implementationNote": "Live URL fetching would need a server; this version previews values you enter."
  },
  {
    "id": "tool-061",
    "slug": "json-formatter",
    "name": "JSON Formatter",
    "category": "developer-tools",
    "shortDescription": "Format and beautify JSON for easier reading and debugging.",
    "howToUse": "Paste your JSON, choose indentation, and click Format. Syntax errors are highlighted. Copy the formatted result.",
    "features": [
      "Pretty-print and minify",
      "Adjustable indentation",
      "Error location hints",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Is my JSON data sent anywhere?",
        "answer": "No. Formatting happens in your browser."
      },
      {
        "question": "Why is my JSON invalid?",
        "answer": "Common causes are trailing commas, single quotes, and unquoted keys."
      }
    ],
    "seoTitle": "JSON Formatter – Beautify JSON Online",
    "metaDescription": "Format, beautify, and minify JSON with clear error messages. Fast and private in your browser.",
    "keywords": [
      "json formatter",
      "json beautifier",
      "pretty print json",
      "format json"
    ],
    "icon": "braces",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-062",
    "slug": "json-validator",
    "name": "JSON Validator",
    "category": "developer-tools",
    "shortDescription": "Check whether your JSON is valid and see exactly where it breaks.",
    "howToUse": "Paste JSON and click Validate. A success message or an error with the line and position is shown.",
    "features": [
      "Strict JSON validation",
      "Line and column of errors",
      "Instant feedback",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "What does 'Unexpected token' mean?",
        "answer": "The parser found a character where it did not expect one, often a missing comma or quote."
      },
      {
        "question": "Does it support JSON with comments?",
        "answer": "No. Standard JSON does not allow comments."
      }
    ],
    "seoTitle": "JSON Validator – Check JSON Syntax Online",
    "metaDescription": "Validate JSON and find syntax errors quickly. Clear messages show exactly where the problem is.",
    "keywords": [
      "json validator",
      "validate json",
      "json checker",
      "json lint"
    ],
    "icon": "check-circle",
    "toolType": "checker",
    "processing": "browser"
  },
  {
    "id": "tool-063",
    "slug": "html-minifier",
    "name": "HTML Minifier",
    "category": "developer-tools",
    "shortDescription": "Reduce HTML file size by removing unnecessary whitespace and comments.",
    "howToUse": "Paste your HTML, choose options like removing comments, and click Minify. Copy the compact output. Test the page afterward.",
    "features": [
      "Removes whitespace and comments",
      "Size savings displayed",
      "Safe-mode options",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Can minifying break my page?",
        "answer": "Rarely, for example with whitespace-sensitive content. Test the result before deploying."
      },
      {
        "question": "How much will it save?",
        "answer": "Typically a few percent to a quarter, depending on how the HTML was written."
      }
    ],
    "seoTitle": "HTML Minifier – Compress HTML Online",
    "metaDescription": "Minify HTML by removing extra whitespace and comments. See size savings and copy the result.",
    "keywords": [
      "html minifier",
      "minify html",
      "compress html",
      "html compressor"
    ],
    "icon": "file-code",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-064",
    "slug": "css-minifier",
    "name": "CSS Minifier",
    "category": "developer-tools",
    "shortDescription": "Compress CSS to speed up page loading.",
    "howToUse": "Paste your CSS and click Minify. Review size savings and copy the minified stylesheet.",
    "features": [
      "Removes comments and whitespace",
      "Shows size reduction",
      "Handles modern CSS syntax",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Does minification change how CSS works?",
        "answer": "It should not. Only unnecessary characters are removed."
      },
      {
        "question": "Should I keep the original file?",
        "answer": "Yes. Keep the readable version for editing and deploy the minified one."
      }
    ],
    "seoTitle": "CSS Minifier – Minify CSS Online",
    "metaDescription": "Minify CSS to reduce file size and improve load times. Instant results in your browser.",
    "keywords": [
      "css minifier",
      "minify css",
      "compress css",
      "css compressor"
    ],
    "icon": "file-code",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-065",
    "slug": "javascript-minifier",
    "name": "JavaScript Minifier",
    "category": "developer-tools",
    "shortDescription": "Shrink JavaScript by removing whitespace and comments.",
    "howToUse": "Paste your JavaScript and click Minify. Copy the compact code and test it before publishing.",
    "features": [
      "Strips comments and whitespace",
      "Size comparison",
      "Syntax error reporting",
      "Needs a minifier library"
    ],
    "faqs": [
      {
        "question": "Does it rename variables?",
        "answer": "Basic minification only removes whitespace and comments. Advanced mangling needs a dedicated minifier."
      },
      {
        "question": "Is it safe for production?",
        "answer": "Always test minified code. For large projects, use a build tool."
      }
    ],
    "seoTitle": "JavaScript Minifier – Minify JS Online",
    "metaDescription": "Minify JavaScript to reduce size and speed up your site. Free tool for quick compression.",
    "keywords": [
      "javascript minifier",
      "minify js",
      "compress javascript",
      "js compressor"
    ],
    "icon": "file-code",
    "toolType": "text-utility",
    "processing": "browser",
    "implementationNote": "Needs a bundled minifier such as Terser for the browser; a naive regex minifier can break code."
  },
  {
    "id": "tool-066",
    "slug": "base64-encoder",
    "name": "Base64 Encoder",
    "category": "developer-tools",
    "shortDescription": "Encode text into Base64 format.",
    "howToUse": "Paste your text, click Encode, and copy the Base64 output. Unicode text is handled correctly.",
    "features": [
      "UTF-8 safe encoding",
      "One-click copy",
      "URL-safe option",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Is Base64 encryption?",
        "answer": "No. It is an encoding, not security. Anyone can decode it."
      },
      {
        "question": "Why does Base64 end with equals signs?",
        "answer": "They are padding to make the length a multiple of four."
      }
    ],
    "seoTitle": "Base64 Encoder – Encode Text to Base64",
    "metaDescription": "Encode text to Base64 instantly. UTF-8 safe, with URL-safe options. Free and private in your browser.",
    "keywords": [
      "base64 encode",
      "text to base64",
      "base64 encoder",
      "encode base64"
    ],
    "icon": "binary",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-067",
    "slug": "base64-decoder",
    "name": "Base64 Decoder",
    "category": "developer-tools",
    "shortDescription": "Decode Base64 strings back into readable text.",
    "howToUse": "Paste a Base64 string and click Decode. The original text appears. Invalid input is flagged.",
    "features": [
      "UTF-8 aware decoding",
      "Handles URL-safe Base64",
      "Error detection",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Why does decoding show strange characters?",
        "answer": "The data may be binary, such as an image, not text."
      },
      {
        "question": "Can it decode images?",
        "answer": "Use the Image to Base64 tool's data URI output for images."
      }
    ],
    "seoTitle": "Base64 Decoder – Decode Base64 to Text",
    "metaDescription": "Decode Base64 strings to plain text. Handles URL-safe input and invalid data. Free in your browser.",
    "keywords": [
      "base64 decode",
      "base64 to text",
      "base64 decoder",
      "decode base64"
    ],
    "icon": "binary",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-068",
    "slug": "url-encoder",
    "name": "URL Encoder",
    "category": "developer-tools",
    "shortDescription": "Percent-encode text so it is safe to use in a URL.",
    "howToUse": "Paste text or a query value, choose component or full-URL mode, and click Encode.",
    "features": [
      "Component and full URL modes",
      "UTF-8 support",
      "One-click copy",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Which characters get encoded?",
        "answer": "Spaces, symbols, and non-ASCII characters are replaced with percent codes like %20."
      },
      {
        "question": "What is the difference between the two modes?",
        "answer": "Component mode encodes reserved characters like slashes and question marks. Full URL mode leaves them alone."
      }
    ],
    "seoTitle": "URL Encoder – Percent-Encode URLs Online",
    "metaDescription": "Encode text for safe use in URLs. Component and full-URL modes. Free and instant.",
    "keywords": [
      "url encoder",
      "urlencode",
      "percent encoding",
      "encode url"
    ],
    "icon": "link",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-069",
    "slug": "url-decoder",
    "name": "URL Decoder",
    "category": "developer-tools",
    "shortDescription": "Decode percent-encoded URL text into readable form.",
    "howToUse": "Paste an encoded URL or string and click Decode. Copy the readable result.",
    "features": [
      "Component and full URL modes",
      "Plus-to-space option",
      "Error detection",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Why does decoding fail?",
        "answer": "Malformed percent sequences, such as a lone % sign, cannot be decoded."
      },
      {
        "question": "What does %20 mean?",
        "answer": "It is the encoded form of a space."
      }
    ],
    "seoTitle": "URL Decoder – Decode Percent-Encoded URLs",
    "metaDescription": "Decode URL-encoded strings into readable text instantly. Free and private in your browser.",
    "keywords": [
      "url decoder",
      "urldecode",
      "decode url",
      "percent decode"
    ],
    "icon": "link",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-070",
    "slug": "html-entity-encoder",
    "name": "HTML Entity Encoder",
    "category": "developer-tools",
    "shortDescription": "Convert special characters into HTML entities and back.",
    "howToUse": "Paste text, choose encode or decode, and click Convert. Copy the output into your HTML.",
    "features": [
      "Encode and decode",
      "Named and numeric entities",
      "Handles quotes and symbols",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Why encode HTML entities?",
        "answer": "Characters like < and & have special meaning in HTML. Encoding displays them as text safely."
      },
      {
        "question": "Does it prevent XSS?",
        "answer": "It helps when escaping output, but use proper security practices in your application."
      }
    ],
    "seoTitle": "HTML Entity Encoder – Encode and Decode HTML",
    "metaDescription": "Convert special characters to HTML entities and back. Quick, free, and private in your browser.",
    "keywords": [
      "html entity encoder",
      "html escape",
      "html entities",
      "encode html"
    ],
    "icon": "code",
    "toolType": "text-utility",
    "processing": "browser"
  },
  {
    "id": "tool-071",
    "slug": "percentage-calculator",
    "name": "Percentage Calculator",
    "category": "calculators-converters",
    "shortDescription": "Work out percentages, percentage change, and what percent one number is of another.",
    "howToUse": "Choose a calculation type, enter your numbers, and see the result instantly with the formula used.",
    "features": [
      "Percent of a number",
      "Percentage increase and decrease",
      "X is what percent of Y",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "How do I calculate a percentage of a number?",
        "answer": "Multiply the number by the percentage and divide by 100. For example, 15% of 200 is 30."
      },
      {
        "question": "How is percentage change calculated?",
        "answer": "Subtract the old value from the new value, divide by the old value, and multiply by 100."
      }
    ],
    "seoTitle": "Percentage Calculator – Calculate Percent Online",
    "metaDescription": "Calculate percentages, percent change, and percent of a number. Free calculator with clear formulas.",
    "keywords": [
      "percentage calculator",
      "percent calculator",
      "percent change",
      "calculate percentage"
    ],
    "icon": "percent",
    "toolType": "calculator",
    "processing": "browser"
  },
  {
    "id": "tool-072",
    "slug": "age-calculator",
    "name": "Age Calculator",
    "category": "calculators-converters",
    "shortDescription": "Find your exact age in years, months, and days.",
    "howToUse": "Enter your date of birth and, optionally, another date to compare against. Your exact age and next birthday countdown appear.",
    "features": [
      "Years, months, and days",
      "Custom comparison date",
      "Days until next birthday",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Does it handle leap years?",
        "answer": "Yes. Leap years are accounted for in the calculation."
      },
      {
        "question": "Can I calculate someone else's age?",
        "answer": "Yes. Enter any date of birth."
      }
    ],
    "seoTitle": "Age Calculator – Calculate Exact Age Online",
    "metaDescription": "Calculate your exact age in years, months, and days and see when your next birthday is.",
    "keywords": [
      "age calculator",
      "calculate age",
      "date of birth calculator",
      "how old am i"
    ],
    "icon": "cake",
    "toolType": "calculator",
    "processing": "browser"
  },
  {
    "id": "tool-073",
    "slug": "bmi-calculator",
    "name": "BMI Calculator",
    "category": "calculators-converters",
    "shortDescription": "Calculate body mass index from your height and weight.",
    "howToUse": "Choose metric or imperial units, enter your height and weight, and see your BMI with its standard category. This is a screening number, not a diagnosis.",
    "features": [
      "Metric and imperial units",
      "Standard BMI categories",
      "Clear formula explanation",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Is BMI a reliable measure of health?",
        "answer": "It is a general screening tool. It does not account for muscle mass, age, or body composition, so talk to a healthcare professional."
      },
      {
        "question": "What is a healthy BMI range?",
        "answer": "The standard range for adults is 18.5 to 24.9, according to widely used guidelines."
      }
    ],
    "seoTitle": "BMI Calculator – Body Mass Index Calculator",
    "metaDescription": "Calculate your BMI using metric or imperial units. Understand what the number means. Not medical advice.",
    "keywords": [
      "bmi calculator",
      "body mass index",
      "calculate bmi",
      "bmi chart"
    ],
    "icon": "activity",
    "toolType": "calculator",
    "processing": "browser"
  },
  {
    "id": "tool-074",
    "slug": "loan-calculator",
    "name": "Loan Calculator",
    "category": "calculators-converters",
    "shortDescription": "Estimate monthly payments and total interest on a loan.",
    "howToUse": "Enter the loan amount, interest rate, and term. See the monthly payment, total interest, and an amortization table. Results are estimates only.",
    "features": [
      "Monthly payment estimate",
      "Total interest and cost",
      "Amortization schedule",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Are the results exact?",
        "answer": "They are estimates. Your lender's terms, fees, and rounding may differ."
      },
      {
        "question": "How does a shorter term affect cost?",
        "answer": "Monthly payments rise, but total interest paid is lower."
      }
    ],
    "seoTitle": "Loan Calculator – Monthly Payment Estimator",
    "metaDescription": "Estimate loan payments, total interest, and amortization. Free calculator for personal and auto loans.",
    "keywords": [
      "loan calculator",
      "monthly payment calculator",
      "loan interest",
      "amortization calculator"
    ],
    "icon": "banknote",
    "toolType": "calculator",
    "processing": "browser"
  },
  {
    "id": "tool-075",
    "slug": "mortgage-calculator",
    "name": "Mortgage Calculator",
    "category": "calculators-converters",
    "shortDescription": "Estimate monthly mortgage payments including property tax and insurance.",
    "howToUse": "Enter the home price, down payment, rate, and term. Optionally add property tax and insurance. See the monthly estimate and amortization breakdown.",
    "features": [
      "Principal and interest estimate",
      "Optional tax and insurance",
      "Down payment percentage",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "What is included in the estimate?",
        "answer": "Principal and interest, plus any tax and insurance you enter. Fees and PMI are not included unless added."
      },
      {
        "question": "How much should I put down?",
        "answer": "It varies by lender and country. Talk to a mortgage professional for advice."
      }
    ],
    "seoTitle": "Mortgage Calculator – Monthly Payment Estimator",
    "metaDescription": "Estimate monthly mortgage payments with down payment, tax, and insurance. Free and easy to use.",
    "keywords": [
      "mortgage calculator",
      "home loan calculator",
      "mortgage payment",
      "monthly mortgage"
    ],
    "icon": "home",
    "toolType": "calculator",
    "processing": "browser"
  },
  {
    "id": "tool-076",
    "slug": "discount-calculator",
    "name": "Discount Calculator",
    "category": "calculators-converters",
    "shortDescription": "Find the sale price and savings after a percentage discount.",
    "howToUse": "Enter the original price and the discount percentage. See the final price and how much you save. Add sales tax if needed.",
    "features": [
      "Final price and savings",
      "Optional sales tax",
      "Stacked discount support",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "How do I calculate a 30% discount?",
        "answer": "Multiply the price by 0.30 to get the savings, then subtract it from the original price."
      },
      {
        "question": "How do two discounts combine?",
        "answer": "They apply one after the other, so 20% then 10% is not the same as 30% off."
      }
    ],
    "seoTitle": "Discount Calculator – Calculate Sale Prices",
    "metaDescription": "Calculate sale prices, savings, and stacked discounts with optional tax. Free and instant.",
    "keywords": [
      "discount calculator",
      "sale price calculator",
      "percent off",
      "price after discount"
    ],
    "icon": "tag",
    "toolType": "calculator",
    "processing": "browser"
  },
  {
    "id": "tool-077",
    "slug": "tip-calculator",
    "name": "Tip Calculator",
    "category": "calculators-converters",
    "shortDescription": "Calculate the tip and split the bill between people.",
    "howToUse": "Enter the bill total, choose a tip percentage, and set how many people are sharing. See the tip and each person's share.",
    "features": [
      "Custom tip percentage",
      "Bill splitting",
      "Rounding options",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "How much should I tip?",
        "answer": "Customs vary. In the United States, 15 to 20 percent is common at restaurants. Check local norms elsewhere."
      },
      {
        "question": "Can I round the total?",
        "answer": "Yes. Choose rounding to the nearest dollar if you prefer."
      }
    ],
    "seoTitle": "Tip Calculator – Split the Bill and Tip",
    "metaDescription": "Calculate tips and split bills between friends. Choose a tip percentage and see each person's share.",
    "keywords": [
      "tip calculator",
      "bill splitter",
      "gratuity calculator",
      "split bill"
    ],
    "icon": "receipt",
    "toolType": "calculator",
    "processing": "browser"
  },
  {
    "id": "tool-078",
    "slug": "currency-converter",
    "name": "Currency Converter",
    "category": "calculators-converters",
    "shortDescription": "Convert between world currencies using exchange rates.",
    "howToUse": "Choose your currencies, enter an amount, and see the converted value with the rate and update time.",
    "features": [
      "Major world currencies",
      "Rate and update time shown",
      "Swap currencies quickly",
      "Needs a live exchange-rate API"
    ],
    "faqs": [
      {
        "question": "Are the rates live?",
        "answer": "Rates depend on the data source and update schedule. Check the timestamp shown."
      },
      {
        "question": "Will my bank use the same rate?",
        "answer": "Probably not. Banks and card providers add fees and margins."
      }
    ],
    "seoTitle": "Currency Converter – Live Exchange Rates",
    "metaDescription": "Convert USD, GBP, EUR, CAD, AUD, and more. See the rate and update time. Rates are for information only.",
    "keywords": [
      "currency converter",
      "exchange rate",
      "convert currency",
      "usd to eur"
    ],
    "icon": "coins",
    "toolType": "calculator",
    "processing": "external-api",
    "implementationNote": "Requires an exchange-rate API (for example a free-tier or paid provider). No API key is included; check licensing terms before launch."
  },
  {
    "id": "tool-079",
    "slug": "unit-converter",
    "name": "Unit Converter",
    "category": "calculators-converters",
    "shortDescription": "Convert length, weight, temperature, volume, and more.",
    "howToUse": "Pick a measurement type, choose the units, and enter a value. The converted result appears right away.",
    "features": [
      "Length, weight, temperature, volume, and area",
      "Metric and imperial",
      "Instant results",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "How do I convert Celsius to Fahrenheit?",
        "answer": "Multiply by 9/5 and add 32."
      },
      {
        "question": "Does it work offline?",
        "answer": "Yes. After the page loads, conversions run locally."
      }
    ],
    "seoTitle": "Unit Converter – Metric and Imperial Conversions",
    "metaDescription": "Convert length, weight, temperature, volume, and more between metric and imperial units. Free and instant.",
    "keywords": [
      "unit converter",
      "metric to imperial",
      "convert units",
      "measurement converter"
    ],
    "icon": "ruler",
    "toolType": "calculator",
    "processing": "browser"
  },
  {
    "id": "tool-080",
    "slug": "date-difference-calculator",
    "name": "Date Difference Calculator",
    "category": "calculators-converters",
    "shortDescription": "Find the time between two dates in days, weeks, months, and years.",
    "howToUse": "Pick a start date and an end date. The difference appears in several units. Optionally exclude weekends.",
    "features": [
      "Days, weeks, months, and years",
      "Business days option",
      "Leap year aware",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Does it include the end date?",
        "answer": "You can choose whether to include it in the count."
      },
      {
        "question": "Can it count only weekdays?",
        "answer": "Yes. Enable the business days option. Public holidays are not included."
      }
    ],
    "seoTitle": "Date Difference Calculator – Days Between Dates",
    "metaDescription": "Calculate the number of days, weeks, and months between two dates. Includes a business days option.",
    "keywords": [
      "date difference",
      "days between dates",
      "date calculator",
      "business days calculator"
    ],
    "icon": "calendar",
    "toolType": "calculator",
    "processing": "browser"
  },
  {
    "id": "tool-081",
    "slug": "qr-code-generator",
    "name": "QR Code Generator",
    "category": "qr-social-media-tools",
    "shortDescription": "Create QR codes for links, text, email, and phone numbers.",
    "howToUse": "Enter your content, choose size and colors, and download the QR code as PNG or SVG. Test it with your phone before printing.",
    "features": [
      "URL, text, email, and phone codes",
      "Custom colors and size",
      "PNG and SVG download",
      "Static codes that never expire"
    ],
    "faqs": [
      {
        "question": "Do these QR codes expire?",
        "answer": "No. They are static, so the data is stored in the code itself and works as long as your link works."
      },
      {
        "question": "How large should I print a QR code?",
        "answer": "At least about 2 by 2 centimeters, and test it before mass printing."
      }
    ],
    "seoTitle": "QR Code Generator – Create Free QR Codes",
    "metaDescription": "Create QR codes for URLs, text, email, and more. Customize colors and download PNG or SVG. No sign-up.",
    "keywords": [
      "qr code generator",
      "create qr code",
      "free qr code",
      "qr maker"
    ],
    "icon": "qr-code",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-082",
    "slug": "qr-code-scanner",
    "name": "QR Code Scanner",
    "category": "qr-social-media-tools",
    "shortDescription": "Scan QR codes with your camera or from an uploaded image.",
    "howToUse": "Allow camera access and point at a QR code, or upload an image. The decoded content appears. Check links carefully before opening them.",
    "features": [
      "Camera and image scanning",
      "Copy decoded content",
      "Link safety reminder",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Is it safe to open scanned links?",
        "answer": "Not always. Check the URL first, because QR codes can lead to malicious sites."
      },
      {
        "question": "Why can't it read my QR code?",
        "answer": "Poor lighting, blur, or damage can prevent scanning. Try a clearer image."
      }
    ],
    "seoTitle": "QR Code Scanner – Scan QR Codes Online",
    "metaDescription": "Scan QR codes using your camera or an image file. Decode content privately in your browser.",
    "keywords": [
      "qr code scanner",
      "scan qr code",
      "qr reader",
      "read qr code"
    ],
    "icon": "scan",
    "toolType": "utility",
    "processing": "browser",
    "implementationNote": "Camera access requires HTTPS and user permission."
  },
  {
    "id": "tool-083",
    "slug": "wifi-qr-generator",
    "name": "WiFi QR Generator",
    "category": "qr-social-media-tools",
    "shortDescription": "Create a QR code that lets guests join your WiFi without typing the password.",
    "howToUse": "Enter your network name, password, and security type, then generate the code. Guests can scan it with a phone camera to connect.",
    "features": [
      "WPA, WEP, and open network support",
      "Hidden network option",
      "Printable QR code",
      "Generated locally, nothing sent"
    ],
    "faqs": [
      {
        "question": "Is it safe to put my WiFi password in a QR code?",
        "answer": "Anyone who sees the code can join the network, so only display it where you are comfortable sharing access."
      },
      {
        "question": "Does it work on all phones?",
        "answer": "Most modern iPhone and Android cameras can scan WiFi QR codes."
      }
    ],
    "seoTitle": "WiFi QR Code Generator – Share WiFi Easily",
    "metaDescription": "Generate a WiFi QR code so guests can connect instantly. Private, free, and made in your browser.",
    "keywords": [
      "wifi qr code",
      "wifi qr generator",
      "share wifi",
      "wifi password qr"
    ],
    "icon": "wifi",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-084",
    "slug": "barcode-generator",
    "name": "Barcode Generator",
    "category": "qr-social-media-tools",
    "shortDescription": "Generate barcodes in common formats like Code 128, EAN-13, and UPC.",
    "howToUse": "Choose a format, enter your number or text, and download the barcode image. Verify retail codes with an official registry.",
    "features": [
      "Code 128, EAN, UPC, and more",
      "PNG and SVG download",
      "Custom size and colors",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Can I use these for retail products?",
        "answer": "Retail barcodes like EAN and UPC must be registered through GS1. This tool only draws the image."
      },
      {
        "question": "Which format should I choose?",
        "answer": "Code 128 is flexible for internal use. EAN or UPC are for retail."
      }
    ],
    "seoTitle": "Barcode Generator – Create Barcodes Online",
    "metaDescription": "Generate Code 128, EAN-13, UPC, and other barcodes. Download PNG or SVG for free.",
    "keywords": [
      "barcode generator",
      "create barcode",
      "ean barcode",
      "code 128"
    ],
    "icon": "barcode",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-085",
    "slug": "instagram-bio-generator",
    "name": "Instagram Bio Generator",
    "category": "qr-social-media-tools",
    "shortDescription": "Build an Instagram bio from templates, emojis, and your own details.",
    "howToUse": "Enter your name, interests, and tone, then choose a template. Edit the result and copy it. Bios are template-based, not AI-written.",
    "features": [
      "Templates for different styles",
      "Emoji and line break support",
      "Character count under 150",
      "Template-based, not AI"
    ],
    "faqs": [
      {
        "question": "How long can an Instagram bio be?",
        "answer": "Instagram currently allows up to 150 characters, but limits can change."
      },
      {
        "question": "Is the bio written by AI?",
        "answer": "No. It combines templates with your details, so edit it to sound like you."
      }
    ],
    "seoTitle": "Instagram Bio Generator – Create Your Bio",
    "metaDescription": "Create an Instagram bio with templates, emojis, and a live character counter. Free and easy.",
    "keywords": [
      "instagram bio generator",
      "bio ideas",
      "instagram bio",
      "bio maker"
    ],
    "icon": "instagram",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-086",
    "slug": "hashtag-generator",
    "name": "Hashtag Generator",
    "category": "qr-social-media-tools",
    "shortDescription": "Get relevant hashtag ideas from your keywords and topic.",
    "howToUse": "Enter a keyword or topic, choose a platform, and click Generate. Copy the hashtags you like. Suggestions are keyword-based and do not reflect live trends.",
    "features": [
      "Keyword-based suggestions",
      "Platform presets",
      "Copy all or one at a time",
      "No live trend data"
    ],
    "faqs": [
      {
        "question": "How many hashtags should I use?",
        "answer": "It varies by platform and audience. A handful of relevant tags usually works better than many generic ones."
      },
      {
        "question": "Does it show trending hashtags?",
        "answer": "No. Live trends would need a social platform data source."
      }
    ],
    "seoTitle": "Hashtag Generator – Find Hashtag Ideas",
    "metaDescription": "Generate hashtag ideas from your keywords for Instagram, TikTok, and more. Free and simple.",
    "keywords": [
      "hashtag generator",
      "hashtag ideas",
      "instagram hashtags",
      "tiktok hashtags"
    ],
    "icon": "hash",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-087",
    "slug": "youtube-thumbnail-downloader",
    "name": "YouTube Thumbnail Downloader",
    "category": "qr-social-media-tools",
    "shortDescription": "Get the thumbnail image of a public YouTube video from its link.",
    "howToUse": "Paste a YouTube video URL, choose a size, and download the thumbnail. Only use thumbnails you have rights to use.",
    "features": [
      "Multiple resolutions",
      "Works with standard video URLs",
      "Direct download",
      "Thumbnails remain copyrighted"
    ],
    "faqs": [
      {
        "question": "Is it legal to download a thumbnail?",
        "answer": "Thumbnails belong to their creators. Use them only with permission or under applicable fair-use rules."
      },
      {
        "question": "Why is the highest resolution missing?",
        "answer": "Not every video has a maximum-resolution thumbnail."
      }
    ],
    "seoTitle": "YouTube Thumbnail Downloader – HD Thumbnails",
    "metaDescription": "Download YouTube video thumbnails in multiple sizes. Paste a link and save the image.",
    "keywords": [
      "youtube thumbnail downloader",
      "download youtube thumbnail",
      "youtube thumbnail",
      "thumbnail grabber"
    ],
    "icon": "youtube",
    "toolType": "utility",
    "processing": "browser",
    "implementationNote": "Builds public thumbnail image URLs from the video ID; no API key required, but the image fetch may be blocked by CORS for direct download."
  },
  {
    "id": "tool-088",
    "slug": "youtube-title-generator",
    "name": "YouTube Title Generator",
    "category": "qr-social-media-tools",
    "shortDescription": "Get video title ideas based on your topic and style.",
    "howToUse": "Enter your topic and pick a style, then generate. Edit favorites and check the length. Suggestions are template-based, not AI-written.",
    "features": [
      "Multiple title styles",
      "Length indicator",
      "Copy with one click",
      "Template-based"
    ],
    "faqs": [
      {
        "question": "How long should a YouTube title be?",
        "answer": "Keep it under about 60 characters so it is less likely to be cut off in results."
      },
      {
        "question": "Will these titles get views?",
        "answer": "No tool can guarantee that. Titles should match your actual video content."
      }
    ],
    "seoTitle": "YouTube Title Generator – Video Title Ideas",
    "metaDescription": "Generate YouTube video title ideas by topic and style. Free, instant, and easy to customize.",
    "keywords": [
      "youtube title generator",
      "video title ideas",
      "youtube titles",
      "title generator"
    ],
    "icon": "youtube",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-089",
    "slug": "social-media-post-resizer",
    "name": "Social Media Post Resizer",
    "category": "qr-social-media-tools",
    "shortDescription": "Resize images to the right dimensions for popular social platforms.",
    "howToUse": "Upload an image, choose a platform and post type, adjust the crop, and download. Presets reflect commonly published sizes and may change.",
    "features": [
      "Presets for major platforms",
      "Crop and position control",
      "Batch export for multiple sizes",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Are the sizes always up to date?",
        "answer": "Platforms change specifications from time to time, so check their current guidelines."
      },
      {
        "question": "Will it stretch my image?",
        "answer": "No. It crops to the target ratio so proportions are preserved."
      }
    ],
    "seoTitle": "Social Media Image Resizer – Post Size Tool",
    "metaDescription": "Resize images for Instagram, Facebook, X, LinkedIn, and more. Free and private in your browser.",
    "keywords": [
      "social media image size",
      "post resizer",
      "instagram size",
      "facebook image size"
    ],
    "icon": "crop",
    "toolType": "file-processor",
    "processing": "browser",
    "implementationNote": "Verify platform dimension presets against current official documentation before launch."
  },
  {
    "id": "tool-090",
    "slug": "link-in-bio-generator",
    "name": "Link in Bio Generator",
    "category": "qr-social-media-tools",
    "shortDescription": "Create a simple links page you can use as your social media bio link.",
    "howToUse": "Add your name, photo, and links, choose a theme, and generate the HTML page. Host it on any web server or static host.",
    "features": [
      "Custom links and themes",
      "Single HTML file output",
      "Mobile-friendly layout",
      "Hosting is up to you"
    ],
    "faqs": [
      {
        "question": "Where does the page live?",
        "answer": "The tool generates a file. You need to host it yourself on a website or static host."
      },
      {
        "question": "Does it track clicks?",
        "answer": "No. Click tracking would need an analytics service."
      }
    ],
    "seoTitle": "Link in Bio Generator – Create a Links Page",
    "metaDescription": "Build a simple, mobile-friendly link in bio page. Export a single HTML file you can host anywhere.",
    "keywords": [
      "link in bio",
      "link in bio generator",
      "bio link page",
      "linktree alternative"
    ],
    "icon": "link",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-091",
    "slug": "password-generator",
    "name": "Password Generator",
    "category": "security-utility-tools",
    "shortDescription": "Create strong, random passwords with the length and characters you choose.",
    "howToUse": "Set the length, choose character types, and click Generate. Copy the password and store it in a password manager.",
    "features": [
      "Length up to 64 characters",
      "Uppercase, lowercase, numbers, and symbols",
      "Uses your browser's secure random source",
      "Nothing is stored or sent"
    ],
    "faqs": [
      {
        "question": "How long should a password be?",
        "answer": "Longer is better. Many experts recommend at least 12 to 16 characters for important accounts."
      },
      {
        "question": "Is a generated password stored anywhere?",
        "answer": "No. It is created in your browser and disappears when you leave the page."
      }
    ],
    "seoTitle": "Password Generator – Create Strong Passwords",
    "metaDescription": "Generate strong random passwords with custom length and characters. Private and created in your browser.",
    "keywords": [
      "password generator",
      "strong password",
      "random password",
      "secure password"
    ],
    "icon": "key",
    "toolType": "generator",
    "processing": "browser",
    "implementationNote": "Use crypto.getRandomValues, not Math.random."
  },
  {
    "id": "tool-092",
    "slug": "password-strength-checker",
    "name": "Password Strength Checker",
    "category": "security-utility-tools",
    "shortDescription": "Estimate how strong a password is and get tips to improve it.",
    "howToUse": "Type a password to see an instant strength estimate and suggestions. Avoid entering a password you use for real accounts on sites you do not trust.",
    "features": [
      "Real-time strength estimate",
      "Improvement tips",
      "Common pattern detection",
      "Checked locally in your browser"
    ],
    "faqs": [
      {
        "question": "Is it safe to type my real password?",
        "answer": "This tool runs locally and sends nothing, but it is safer to test a similar example rather than your actual password."
      },
      {
        "question": "Does a high score guarantee safety?",
        "answer": "No. A password can still be exposed in a data breach, so use unique passwords and two-factor authentication."
      }
    ],
    "seoTitle": "Password Strength Checker – Test Your Password",
    "metaDescription": "Check password strength and get tips to make it stronger. Runs locally in your browser.",
    "keywords": [
      "password strength checker",
      "check password strength",
      "password tester",
      "how strong is my password"
    ],
    "icon": "shield-check",
    "toolType": "checker",
    "processing": "browser"
  },
  {
    "id": "tool-093",
    "slug": "hash-generator",
    "name": "Hash Generator",
    "category": "security-utility-tools",
    "shortDescription": "Generate SHA-256, SHA-512, and other hashes from text.",
    "howToUse": "Enter text, choose an algorithm, and see the hash instantly. Copy the result. Do not use plain hashes alone to store passwords.",
    "features": [
      "SHA-1, SHA-256, SHA-384, and SHA-512",
      "Instant results",
      "Hex output",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Is hashing the same as encryption?",
        "answer": "No. Hashing is one-way and cannot be reversed, while encryption can be decrypted with a key."
      },
      {
        "question": "Should I use MD5 or SHA-1?",
        "answer": "Both are considered weak for security. Use SHA-256 or stronger."
      }
    ],
    "seoTitle": "Hash Generator – SHA-256, SHA-512 Online",
    "metaDescription": "Generate SHA hashes from text in your browser. Fast, free, and private.",
    "keywords": [
      "hash generator",
      "sha256 generator",
      "sha512 hash",
      "text to hash"
    ],
    "icon": "fingerprint",
    "toolType": "generator",
    "processing": "browser",
    "implementationNote": "Web Crypto API supports SHA-1/256/384/512; MD5 needs a separate library."
  },
  {
    "id": "tool-094",
    "slug": "uuid-generator",
    "name": "UUID Generator",
    "category": "security-utility-tools",
    "shortDescription": "Generate random version 4 UUIDs for databases and applications.",
    "howToUse": "Choose how many UUIDs you need, click Generate, and copy them. Optionally uppercase or remove hyphens.",
    "features": [
      "Version 4 UUIDs",
      "Bulk generation",
      "Format options",
      "Uses secure randomness"
    ],
    "faqs": [
      {
        "question": "Are UUIDs truly unique?",
        "answer": "Version 4 UUIDs are random, so collisions are extremely unlikely but not mathematically impossible."
      },
      {
        "question": "What does a UUID look like?",
        "answer": "It is 32 hexadecimal characters in five groups separated by hyphens."
      }
    ],
    "seoTitle": "UUID Generator – Create Random UUID v4",
    "metaDescription": "Generate UUID v4 values in bulk. Copy with one click. Free and private in your browser.",
    "keywords": [
      "uuid generator",
      "guid generator",
      "random uuid",
      "uuid v4"
    ],
    "icon": "fingerprint",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-095",
    "slug": "random-number-generator",
    "name": "Random Number Generator",
    "category": "security-utility-tools",
    "shortDescription": "Pick random numbers within a range you set.",
    "howToUse": "Enter a minimum and maximum, choose how many numbers, and click Generate. Choose whether duplicates are allowed.",
    "features": [
      "Custom range and quantity",
      "Unique-only option",
      "Instant results",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Is it truly random?",
        "answer": "It uses your browser's random source, which is suitable for everyday uses but not for gambling or cryptography."
      },
      {
        "question": "Can I pick without repeats?",
        "answer": "Yes. Turn on the unique numbers option."
      }
    ],
    "seoTitle": "Random Number Generator – Pick Random Numbers",
    "metaDescription": "Generate random numbers in any range with optional unique results. Free and instant.",
    "keywords": [
      "random number generator",
      "random number picker",
      "rng",
      "number generator"
    ],
    "icon": "dices",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-096",
    "slug": "stopwatch",
    "name": "Stopwatch",
    "category": "security-utility-tools",
    "shortDescription": "Time anything with a simple online stopwatch that supports laps.",
    "howToUse": "Click Start to begin timing, Lap to record split times, and Stop when finished. Reset clears the timer.",
    "features": [
      "Start, stop, and reset",
      "Lap times",
      "Millisecond display",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Does it keep running if I switch tabs?",
        "answer": "Yes. It uses timestamps, so the time stays accurate even in a background tab."
      },
      {
        "question": "How accurate is it?",
        "answer": "Accurate enough for everyday use. It is not suited to professional timing."
      }
    ],
    "seoTitle": "Online Stopwatch – Free Timer with Laps",
    "metaDescription": "Free online stopwatch with lap times. Simple, accurate, and works in your browser.",
    "keywords": [
      "online stopwatch",
      "stopwatch",
      "lap timer",
      "timer with laps"
    ],
    "icon": "timer",
    "toolType": "utility",
    "processing": "browser"
  },
  {
    "id": "tool-097",
    "slug": "countdown-timer",
    "name": "Countdown Timer",
    "category": "security-utility-tools",
    "shortDescription": "Set a countdown for any duration and get an alert when time is up.",
    "howToUse": "Enter hours, minutes, and seconds, then click Start. A sound plays when the timer ends if your browser allows audio.",
    "features": [
      "Custom duration",
      "Sound alert",
      "Pause and resume",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Will the alarm sound if the tab is in the background?",
        "answer": "Usually, but some browsers limit background audio. Keep the tab open for best results."
      },
      {
        "question": "Can I set a countdown to a date?",
        "answer": "This tool counts down a duration. Use the Date Difference Calculator for dates."
      }
    ],
    "seoTitle": "Countdown Timer – Free Online Timer",
    "metaDescription": "Set a countdown timer with alarm. Choose any duration and get notified when time is up.",
    "keywords": [
      "countdown timer",
      "online timer",
      "timer alarm",
      "kitchen timer"
    ],
    "icon": "hourglass",
    "toolType": "utility",
    "processing": "browser"
  },
  {
    "id": "tool-098",
    "slug": "color-picker",
    "name": "Color Picker",
    "category": "security-utility-tools",
    "shortDescription": "Pick colors visually and copy HEX, RGB, and HSL values.",
    "howToUse": "Use the color panel or enter a value. Copy the format you need. Save colors to a quick palette.",
    "features": [
      "HEX, RGB, and HSL conversion",
      "Visual picker",
      "Quick palette",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "What is a HEX color code?",
        "answer": "It is a six-digit code starting with #, representing red, green, and blue values."
      },
      {
        "question": "Can I check contrast?",
        "answer": "This tool shows color values only. Use a dedicated contrast checker for accessibility."
      }
    ],
    "seoTitle": "Color Picker – HEX, RGB, HSL Converter",
    "metaDescription": "Pick colors and copy HEX, RGB, and HSL codes. Free online color picker with quick palette.",
    "keywords": [
      "color picker",
      "hex color",
      "rgb to hex",
      "color converter"
    ],
    "icon": "palette",
    "toolType": "utility",
    "processing": "browser"
  },
  {
    "id": "tool-099",
    "slug": "qr-wifi-password-tool",
    "name": "QR WiFi Password Tool",
    "category": "security-utility-tools",
    "shortDescription": "Make a printable WiFi card with your network name, password, and a scannable QR code.",
    "howToUse": "Enter your network details, choose a card layout, and download or print it. Display it only where guests are welcome to connect.",
    "features": [
      "Printable card layout",
      "QR code and written password",
      "Several card styles",
      "Created locally in your browser"
    ],
    "faqs": [
      {
        "question": "How is this different from the WiFi QR Generator?",
        "answer": "This tool creates a complete printable card with a QR code and readable text, not just the code image."
      },
      {
        "question": "Is my password saved?",
        "answer": "No. It is processed in your browser and never uploaded."
      }
    ],
    "seoTitle": "WiFi Password Card – Printable QR WiFi Sheet",
    "metaDescription": "Create a printable WiFi card with a QR code and password for guests. Private and free.",
    "keywords": [
      "wifi password card",
      "printable wifi qr",
      "guest wifi sign",
      "wifi sign generator"
    ],
    "icon": "wifi",
    "toolType": "generator",
    "processing": "browser"
  },
  {
    "id": "tool-100",
    "slug": "file-extension-checker",
    "name": "File Extension Checker",
    "category": "security-utility-tools",
    "shortDescription": "Check a file's extension and see what type of file it is.",
    "howToUse": "Select a file or type a name. The tool shows the extension, common type, and whether the extension matches the file's detected content type.",
    "features": [
      "Extension and MIME type display",
      "Mismatch warning",
      "Common type descriptions",
      "Browser-based"
    ],
    "faqs": [
      {
        "question": "Can it detect a disguised file?",
        "answer": "It compares the extension to the file's content signature for common types, but it is not a virus scanner."
      },
      {
        "question": "Is the file uploaded?",
        "answer": "No. It only reads the file's name and first bytes locally."
      }
    ],
    "seoTitle": "File Extension Checker – Identify File Types",
    "metaDescription": "Check a file's extension and detected type. Spot mismatched extensions quickly, privately in your browser.",
    "keywords": [
      "file extension checker",
      "file type checker",
      "identify file type",
      "check file extension"
    ],
    "icon": "file-search",
    "toolType": "checker",
    "processing": "browser",
    "implementationNote": "Not antivirus software; limited to common file signatures."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { TOOL_CATEGORIES, TOOLS };
}
if (typeof window !== "undefined") {
  window.TOOL_CATEGORIES = TOOL_CATEGORIES;
  window.TOOLS = TOOLS;
}
