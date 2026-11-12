export default {
  async fetch(request) {

    const html = `<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>ToolNest - Free Online Tools</title>

<meta name="description" content="ToolNest - Free online PDF, image, text and utility tools.">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

<style>

*{
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
}

body{
margin:0;
font-family:Arial,Helvetica,sans-serif;
background:#f5f7fb;
color:#172033;
}

header{
background:linear-gradient(135deg,#2563eb,#7c3aed);
color:white;
padding:18px 20px;
position:sticky;
top:0;
z-index:100;
box-shadow:0 4px 20px rgba(0,0,0,.12);
}

.nav{
max-width:1250px;
margin:auto;
display:flex;
align-items:center;
justify-content:space-between;
}

.logo{
font-size:29px;
font-weight:800;
}

.logo span{
color:#fde047;
}

nav a{
color:white;
text-decoration:none;
margin-left:22px;
font-size:14px;
}

.hero{
background:white;
text-align:center;
padding:70px 20px 60px;
}

.hero h1{
font-size:48px;
margin:0 0 15px;
line-height:1.15;
}

.hero h1 span{
color:#2563eb;
}

.hero p{
font-size:18px;
color:#64748b;
margin:0 0 30px;
}

.search{
width:min(700px,95%);
padding:17px 20px;
border:1px solid #d7dee8;
border-radius:15px;
font-size:16px;
outline:none;
box-shadow:0 8px 30px rgba(0,0,0,.07);
}

.container{
max-width:1250px;
margin:auto;
padding:40px 20px;
}

.section{
margin-bottom:50px;
}

.section-title{
font-size:25px;
margin-bottom:20px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(210px,1fr));
gap:17px;
}

.tool{
background:white;
border:1px solid #e5eaf1;
border-radius:17px;
padding:21px;
cursor:pointer;
transition:.2s;
box-shadow:0 5px 18px rgba(0,0,0,.04);
}

.tool:hover{
transform:translateY(-5px);
box-shadow:0 12px 30px rgba(0,0,0,.12);
border-color:#c7d2fe;
}

.icon{
width:52px;
height:52px;
display:flex;
align-items:center;
justify-content:center;
border-radius:14px;
background:#eef2ff;
font-size:27px;
margin-bottom:14px;
}

.tool h3{
margin:0 0 8px;
font-size:17px;
}

.tool p{
margin:0;
font-size:13px;
line-height:1.5;
color:#64748b;
}

.modal{
display:none;
position:fixed;
inset:0;
background:rgba(15,23,42,.72);
z-index:1000;
padding:20px;
align-items:center;
justify-content:center;
}

.modal-box{
background:white;
width:min(720px,100%);
max-height:90vh;
overflow:auto;
border-radius:22px;
padding:28px;
box-shadow:0 30px 80px rgba(0,0,0,.3);
}

.close{
float:right;
border:0;
background:#fee2e2;
color:#991b1b;
padding:9px 13px;
border-radius:9px;
cursor:pointer;
font-weight:bold;
}

.modal-title{
font-size:26px;
margin:0 0 8px;
}

.modal-description{
color:#64748b;
margin-bottom:20px;
}

input[type=file],
input[type=text],
input[type=number],
input[type=password],
select,
textarea{
width:100%;
padding:13px;
margin:7px 0 15px;
border:1px solid #cbd5e1;
border-radius:10px;
font-size:15px;
}

textarea{
min-height:190px;
resize:vertical;
}

button.action{
background:#2563eb;
color:white;
border:0;
padding:13px 19px;
border-radius:10px;
cursor:pointer;
font-weight:bold;
margin:4px;
}

button.action:hover{
background:#1d4ed8;
}

button.secondary{
background:#e2e8f0;
color:#172033;
}

.result{
margin-top:18px;
background:#f1f5f9;
border-radius:12px;
padding:15px;
white-space:pre-wrap;
word-break:break-word;
}

.download{
display:inline-block;
margin-top:12px;
padding:12px 18px;
background:#16a34a;
color:white;
border-radius:9px;
text-decoration:none;
font-weight:bold;
}

.preview{
max-width:100%;
max-height:350px;
display:block;
margin:15px auto;
border-radius:10px;
}

footer{
background:#111827;
color:#cbd5e1;
text-align:center;
padding:45px 20px;
margin-top:20px;
}

footer h2{
color:white;
margin:0 0 10px;
}

.no-result{
display:none;
text-align:center;
padding:30px;
color:#64748b;
}

@media(max-width:700px){

nav{
display:none;
}

.hero{
padding:50px 15px;
}

.hero h1{
font-size:34px;
}

.hero p{
font-size:16px;
}

.grid{
grid-template-columns:repeat(2,1fr);
gap:12px;
}

.tool{
padding:15px;
}

.tool h3{
font-size:15px;
}

.modal{
padding:10px;
}

.modal-box{
padding:20px;
}

}

</style>

</head>

<body>

<header>

<div class="nav">

<div class="logo">
Tool<span>Nest</span>
</div>

<nav>
<a href="#pdf">PDF</a>
<a href="#image">Image</a>
<a href="#text">Text</a>
<a href="#developer">Developer</a>
<a href="#utility">Utility</a>
</nav>

</div>

</header>


<section class="hero">

<h1>
Powerful Tools.<br>
<span>One Simple Website.</span>
</h1>

<p>
Free online tools for PDF, images, text, developers and everyday tasks.
</p>

<input
id="search"
class="search"
type="text"
placeholder="🔍 Search 30+ tools..."
>

</section>


<main class="container">


<section class="section" id="pdf">

<h2 class="section-title">📄 PDF Tools</h2>

<div class="grid">

<div class="tool" data-tool="image2pdf" data-name="image to pdf">
<div class="icon">📑</div>
<h3>Image to PDF</h3>
<p>Convert JPG, PNG and other images into PDF.</p>
</div>

<div class="tool" data-tool="mergepdf" data-name="merge pdf">
<div class="icon">🔗</div>
<h3>Merge PDF</h3>
<p>Combine multiple PDF files into one.</p>
</div>

<div class="tool" data-tool="splitpdf" data-name="split pdf">
<div class="icon">✂️</div>
<h3>Split PDF</h3>
<p>Extract selected pages from a PDF.</p>
</div>

<div class="tool" data-tool="pdfinfo" data-name="pdf information">
<div class="icon">ℹ️</div>
<h3>PDF Information</h3>
<p>Check PDF page count and information.</p>
</div>

<div class="tool" data-tool="pdf2image" data-name="pdf to image">
<div class="icon">🖼️</div>
<h3>PDF to Image</h3>
<p>Convert PDF pages into images.</p>
</div>

<div class="tool" data-tool="pdf2jpg" data-name="pdf to jpg">
<div class="icon">📸</div>
<h3>PDF to JPG</h3>
<p>Convert PDF pages into JPG images.</p>
</div>

<div class="tool" data-tool="pdf2png" data-name="pdf to png">
<div class="icon">🖼️</div>
<h3>PDF to PNG</h3>
<p>Convert PDF pages into PNG images.</p>
</div>

<div class="tool" data-tool="rotatepdf" data-name="rotate pdf">
<div class="icon">🔄</div>
<h3>Rotate PDF</h3>
<p>Rotate all PDF pages.</p>
</div>

<div class="tool" data-tool="extractpdf" data-name="extract pdf pages">
<div class="icon">📃</div>
<h3>Extract PDF Pages</h3>
<p>Extract selected pages from PDF.</p>
</div>

</div>

</section>


<section class="section" id="image">

<h2 class="section-title">🖼️ Image Tools</h2>

<div class="grid">

<div class="tool" data-tool="jpgpng" data-name="jpg to png">
<div class="icon">🔵</div>
<h3>JPG to PNG</h3>
<p>Convert JPG images into PNG.</p>
</div>

<div class="tool" data-tool="pngjpg" data-name="png to jpg">
<div class="icon">🟠</div>
<h3>PNG to JPG</h3>
<p>Convert PNG images into JPG.</p>
</div>

<div class="tool" data-tool="webp" data-name="webp converter">
<div class="icon">🌐</div>
<h3>WebP Converter</h3>
<p>Convert images to WebP.</p>
</div>

<div class="tool" data-tool="compress" data-name="image compressor">
<div class="icon">🗜️</div>
<h3>Image Compressor</h3>
<p>Reduce image file size.</p>
</div>

<div class="tool" data-tool="resize" data-name="image resizer">
<div class="icon">📐</div>
<h3>Image Resizer</h3>
<p>Resize images to any dimension.</p>
</div>

<div class="tool" data-tool="crop" data-name="image cropper">
<div class="icon">✂️</div>
<h3>Image Cropper</h3>
<p>Crop an image.</p>
</div>

<div class="tool" data-tool="base64image" data-name="image to base64">
<div class="icon">🔐</div>
<h3>Image to Base64</h3>
<p>Convert an image to Base64.</p>
</div>

<div class="tool" data-tool="grayscale" data-name="grayscale image">
<div class="icon">⚫</div>
<h3>Grayscale Image</h3>
<p>Convert image to grayscale.</p>
</div>

</div>

</section>


<section class="section" id="text">

<h2 class="section-title">📝 Text Tools</h2>

<div class="grid">

<div class="tool" data-tool="wordcount" data-name="word counter">
<div class="icon">🔢</div>
<h3>Word Counter</h3>
<p>Count words, characters and lines.</p>
</div>

<div class="tool" data-tool="case" data-name="case converter">
<div class="icon">🔤</div>
<h3>Case Converter</h3>
<p>Convert text to different cases.</p>
</div>

<div class="tool" data-tool="spaces" data-name="remove extra spaces">
<div class="icon">🧹</div>
<h3>Remove Extra Spaces</h3>
<p>Clean unnecessary spaces.</p>
</div>

<div class="tool" data-tool="reverse" data-name="reverse text">
<div class="icon">↔️</div>
<h3>Reverse Text</h3>
<p>Reverse your text.</p>
</div>

<div class="tool" data-tool="duplicate" data-name="remove duplicate lines">
<div class="icon">📋</div>
<h3>Remove Duplicates</h3>
<p>Remove duplicate lines.</p>
</div>

<div class="tool" data-tool="sort" data-name="sort lines">
<div class="icon">↕️</div>
<h3>Sort Lines</h3>
<p>Sort text lines alphabetically.</p>
</div>

<div class="tool" data-tool="slug" data-name="slug generator">
<div class="icon">🔗</div>
<h3>Slug Generator</h3>
<p>Create SEO-friendly slugs.</p>
</div>

</div>

</section>


<section class="section" id="developer">

<h2 class="section-title">💻 Developer Tools</h2>

<div class="grid">

<div class="tool" data-tool="jsonformat" data-name="json formatter">
<div class="icon">{ }</div>
<h3>JSON Formatter</h3>
<p>Beautify and format JSON.</p>
</div>

<div class="tool" data-tool="jsonmin" data-name="json minifier">
<div class="icon">{ }</div>
<h3>JSON Minifier</h3>
<p>Minify JSON data.</p>
</div>

<div class="tool" data-tool="base64encode" data-name="base64 encoder">
<div class="icon">🔐</div>
<h3>Base64 Encoder</h3>
<p>Encode text to Base64.</p>
</div>

<div class="tool" data-tool="base64decode" data-name="base64 decoder">
<div class="icon">🔓</div>
<h3>Base64 Decoder</h3>
<p>Decode Base64 text.</p>
</div>

<div class="tool" data-tool="urlencode" data-name="url encoder">
<div class="icon">🔗</div>
<h3>URL Encoder</h3>
<p>Encode URLs.</p>
</div>

<div class="tool" data-tool="urldecode" data-name="url decoder">
<div class="icon">🔗</div>
<h3>URL Decoder</h3>
<p>Decode URLs.</p>
</div>

</div>

</section>


<section class="section" id="utility">

<h2 class="section-title">🛠️ Utility Tools</h2>

<div class="grid">

<div class="tool" data-tool="password" data-name="password generator">
<div class="icon">🔑</div>
<h3>Password Generator</h3>
<p>Generate secure passwords.</p>
</div>

<div class="tool" data-tool="uuid" data-name="uuid generator">
<div class="icon">🆔</div>
<h3>UUID Generator</h3>
<p>Generate UUIDs.</p>
</div>

<div class="tool" data-tool="qrcode" data-name="qr code generator">
<div class="icon">▦</div>
<h3>QR Code Generator</h3>
<p>Create QR codes from text or URLs.</p>
</div>

<div class="tool" data-tool="calculator" data-name="calculator">
<div class="icon">🧮</div>
<h3>Calculator</h3>
<p>Simple online calculator.</p>
</div>

<div class="tool" data-tool="timestamp" data-name="unix timestamp">
<div class="icon">⏱️</div>
<h3>Unix Timestamp</h3>
<p>Convert date to timestamp.</p>
</div>

<div class="tool" data-tool="color" data-name="color converter">
<div class="icon">🎨</div>
<h3>Color Picker</h3>
<p>Pick and copy a color.</p>
</div>

</div>

</section>

</main>


<footer>

<h2>ToolNest</h2>

<p>
Free online tools for PDF, images, text and everyday tasks.
</p>

<p style="margin-top:15px;">
© 2026 ToolNest. All rights reserved.
</p>

</footer>


<div class="modal" id="modal">

<div class="modal-box">

<button class="close" id="close">✕ Close</button>

<div id="modalContent"></div>

</div>

</div>


<script>

if(window.pdfjsLib){

pdfjsLib.GlobalWorkerOptions.workerSrc =
"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

}


var modal = document.getElementById("modal");

var modalContent = document.getElementById("modalContent");

document.getElementById("close").onclick = function(){

modal.style.display = "none";

modalContent.innerHTML = "";

};


window.onclick = function(e){

if(e.target === modal){

modal.style.display = "none";

}

};


function showTool(title,description,content){

modalContent.innerHTML =
"<h2 class='modal-title'>" + title + "</h2>" +
"<p class='modal-description'>" + description + "</p>" +
content;

modal.style.display = "flex";

}


function downloadBlob(blob,name){

var url = URL.createObjectURL(blob);

var a = document.createElement("a");

a.href = url;

a.download = name;

document.body.appendChild(a);

a.click();

a.remove();

setTimeout(function(){

URL.revokeObjectURL(url);

},1000);

}


function getImage(file){

return new Promise(function(resolve,reject){

var img = new Image();

img.onload = function(){

resolve(img);

};

img.onerror = reject;

img.src = URL.createObjectURL(file);

});

}


function imageCanvas(file,width,height){

return getImage(file).then(function(img){

var canvas = document.createElement("canvas");

canvas.width = width || img.width;

canvas.height = height || img.height;

var ctx = canvas.getContext("2d");

ctx.drawImage(img,0,0,canvas.width,canvas.height);

return canvas;

});

}


function imageToPdfUI(){

showTool(
"📑 Image to PDF",
"Select one or more images and create a PDF.",
"<input type='file' id='imagePdfFiles' accept='image/*' multiple>" +
"<button class='action' id='createImagePdf'>Create PDF</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("createImagePdf").onclick = async function(){

var files = document.getElementById("imagePdfFiles").files;

if(!files.length){

alert("Please select at least one image.");

return;

}

var result = document.getElementById("toolResult");

result.textContent = "Creating PDF...";

var jsPDF = window.jspdf.jsPDF;

var pdf = null;

for(var i=0;i<files.length;i++){

var img = await getImage(files[i]);

var orientation =
img.width > img.height ? "landscape" : "portrait";

var width = img.width;

var height = img.height;

if(!pdf){

pdf = new jsPDF({
orientation:orientation,
unit:"px",
format:[width,height]
});

}else{

pdf.addPage(
[width,height],
orientation
);

}

pdf.addImage(
img,
"JPEG",
0,
0,
width,
height
);

}

pdf.save("toolnest-images.pdf");

result.textContent = "PDF created successfully.";

};

}


async function mergePDFUI(){

showTool(
"🔗 Merge PDF",
"Select two or more PDF files.",
"<input type='file' id='mergeFiles' accept='application/pdf' multiple>" +
"<button class='action' id='mergeButton'>Merge PDF</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("mergeButton").onclick = async function(){

var files = document.getElementById("mergeFiles").files;

if(files.length < 2){

alert("Please select at least two PDF files.");

return;

}

var output = await PDFLib.PDFDocument.create();

for(var i=0;i<files.length;i++){

var bytes = await files[i].arrayBuffer();

var source = await PDFLib.PDFDocument.load(bytes);

var pages = await output.copyPages(
source,
source.getPageIndices()
);

pages.forEach(function(page){

output.addPage(page);

});

}

var saved = await output.save();

downloadBlob(
new Blob([saved],{type:"application/pdf"}),
"merged.pdf"
);

document.getElementById("toolResult").textContent =
"PDF files merged successfully.";

};

}


async function splitPDFUI(){

showTool(
"✂️ Split PDF",
"Select a PDF and choose the page range.",
"<input type='file' id='splitFile' accept='application/pdf'>" +
"<input type='text' id='pageRange' placeholder='Example: 1-3'>" +
"<button class='action' id='splitButton'>Extract Pages</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("splitButton").onclick = async function(){

var file = document.getElementById("splitFile").files[0];

if(!file){

alert("Please select a PDF.");

return;

}

var range =
document.getElementById("pageRange").value.trim();

var match = range.match(/^(\\d+)\\s*-\\s*(\\d+)$/);

if(!match){

alert("Enter range like 1-3.");

return;

}

var start = parseInt(match[1])-1;

var end = parseInt(match[2])-1;

var source =
await PDFLib.PDFDocument.load(
await file.arrayBuffer()
);

var total = source.getPageCount();

if(start < 0 || end >= total || start > end){

alert("Invalid page range.");

return;

}

var output = await PDFLib.PDFDocument.create();

var pages = await output.copyPages(
source,
Array.from(
{length:end-start+1},
function(_,i){return start+i;}
)
);

pages.forEach(function(page){

output.addPage(page);

});

var saved = await output.save();

downloadBlob(
new Blob([saved],{type:"application/pdf"}),
"extracted-pages.pdf"
);

document.getElementById("toolResult").textContent =
"Pages extracted successfully.";

};

}


async function pdfInfoUI(){

showTool(
"ℹ️ PDF Information",
"Select a PDF to see basic information.",
"<input type='file' id='infoFile' accept='application/pdf'>" +
"<button class='action' id='infoButton'>Get Information</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("infoButton").onclick = async function(){

var file = document.getElementById("infoFile").files[0];

if(!file){

alert("Please select a PDF.");

return;

}

var pdf =
await PDFLib.PDFDocument.load(
await file.arrayBuffer()
);

document.getElementById("toolResult").textContent =
"File: " + file.name +
"\\nSize: " + (file.size/1024).toFixed(2) + " KB" +
"\\nPages: " + pdf.getPageCount();

};

}


async function pdfToImageUI(format){

showTool(
format === "jpg" ? "📸 PDF to JPG" : "🖼️ PDF to PNG",
"Convert PDF pages into images.",
"<input type='file' id='pdfImageFile' accept='application/pdf'>" +
"<button class='action' id='pdfImageButton'>Convert</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("pdfImageButton").onclick = async function(){

var file =
document.getElementById("pdfImageFile").files[0];

if(!file){

alert("Please select a PDF.");

return;

}

var result =
document.getElementById("toolResult");

result.textContent = "Converting PDF...";

var data =
new Uint8Array(await file.arrayBuffer());

var pdf =
await pdfjsLib.getDocument({data:data}).promise;

for(var i=1;i<=pdf.numPages;i++){

var page = await pdf.getPage(i);

var viewport = page.getViewport({scale:2});

var canvas =
document.createElement("canvas");

canvas.width = viewport.width;

canvas.height = viewport.height;

var ctx = canvas.getContext("2d");

await page.render({
canvasContext:ctx,
viewport:viewport
}).promise;

var mime =
format === "jpg" ? "image/jpeg" : "image/png";

var blob = await new Promise(function(resolve){

canvas.toBlob(resolve,mime,.92);

});

downloadBlob(
blob,
"toolnest-page-" + i + "." +
(format === "jpg" ? "jpg" : "png")
);

}

result.textContent =
pdf.numPages + " page(s) converted successfully.";

};

}


function convertImageUI(type){

var names = {
jpgpng:["JPG to PNG","image/png","converted.png"],
pngjpg:["PNG to JPG","image/jpeg","converted.jpg"],
webp:["WebP Converter","image/webp","converted.webp"],
grayscale:["Grayscale Image","image/png","grayscale.png"]
};

var item = names[type];

showTool(
item[0],
"Select an image to convert.",
"<input type='file' id='convertFile' accept='image/*'>" +
"<button class='action' id='convertButton'>Convert</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("convertButton").onclick = async function(){

var file =
document.getElementById("convertFile").files[0];

if(!file){

alert("Please select an image.");

return;

}

var canvas = await imageCanvas(file);

if(type === "grayscale"){

var ctx = canvas.getContext("2d");

var data =
ctx.getImageData(0,0,canvas.width,canvas.height);

for(var i=0;i<data.data.length;i+=4){

var avg =
0.299*data.data[i] +
0.587*data.data[i+1] +
0.114*data.data[i+2];

data.data[i] = avg;
data.data[i+1] = avg;
data.data[i+2] = avg;

}

ctx.putImageData(data,0,0);

}

canvas.toBlob(function(blob){

downloadBlob(blob,item[2]);

document.getElementById("toolResult").textContent =
"Conversion completed.";

},item[1],.92);

};

}


function compressImageUI(){

showTool(
"🗜️ Image Compressor",
"Compress an image and download the smaller version.",
"<input type='file' id='compressFile' accept='image/*'>" +
"<input type='number' id='quality' value='70' min='10' max='100'>" +
"<button class='action' id='compressButton'>Compress</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("compressButton").onclick = async function(){

var file =
document.getElementById("compressFile").files[0];

if(!file){

alert("Please select an image.");

return;

}

var quality =
parseInt(document.getElementById("quality").value) / 100;

var canvas = await imageCanvas(file);

canvas.toBlob(function(blob){

downloadBlob(blob,"compressed-image.jpg");

document.getElementById("toolResult").textContent =
"Original: " +
(file.size/1024).toFixed(2) +
" KB\\nCompressed: " +
(blob.size/1024).toFixed(2) +
" KB";

},"image/jpeg",quality);

};

}


function resizeImageUI(){

showTool(
"📐 Image Resizer",
"Enter the desired dimensions.",
"<input type='file' id='resizeFile' accept='image/*'>" +
"<input type='number' id='newWidth' placeholder='Width in pixels'>" +
"<input type='number' id='newHeight' placeholder='Height in pixels'>" +
"<button class='action' id='resizeButton'>Resize</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("resizeButton").onclick = async function(){

var file =
document.getElementById("resizeFile").files[0];

if(!file){

alert("Please select an image.");

return;

}

var img = await getImage(file);

var width =
parseInt(document.getElementById("newWidth").value) ||
img.width;

var height =
parseInt(document.getElementById("newHeight").value) ||
img.height;

var canvas = document.createElement("canvas");

canvas.width = width;

canvas.height = height;

canvas.getContext("2d").drawImage(
img,0,0,width,height
);

canvas.toBlob(function(blob){

downloadBlob(blob,"resized-image.png");

document.getElementById("toolResult").textContent =
"Image resized successfully.";

},"image/png");

};

}


function cropImageUI(){

showTool(
"✂️ Image Cropper",
"Enter crop dimensions.",
"<input type='file' id='cropFile' accept='image/*'>" +
"<input type='number' id='cropWidth' placeholder='Crop width'>" +
"<input type='number' id='cropHeight' placeholder='Crop height'>" +
"<button class='action' id='cropButton'>Crop</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("cropButton").onclick = async function(){

var file =
document.getElementById("cropFile").files[0];

if(!file){

alert("Please select an image.");

return;

}

var img = await getImage(file);

var width =
parseInt(document.getElementById("cropWidth").value) ||
img.width;

var height =
parseInt(document.getElementById("cropHeight").value) ||
img.height;

width = Math.min(width,img.width);

height = Math.min(height,img.height);

var canvas = document.createElement("canvas");

canvas.width = width;

canvas.height = height;

canvas.getContext("2d").drawImage(
img,
0,
0,
width,
height,
0,
0,
width,
height
);

canvas.toBlob(function(blob){

downloadBlob(blob,"cropped-image.png");

document.getElementById("toolResult").textContent =
"Image cropped successfully.";

},"image/png");

};

}


function imageBase64UI(){

showTool(
"🔐 Image to Base64",
"Convert an image into Base64 text.",
"<input type='file' id='base64File' accept='image/*'>" +
"<button class='action' id='base64Button'>Convert</button>" +
"<textarea id='toolResult' readonly></textarea>"
);

document.getElementById("base64Button").onclick = function(){

var file =
document.getElementById("base64File").files[0];

if(!file){

alert("Please select an image.");

return;

}

var reader = new FileReader();

reader.onload = function(){

document.getElementById("toolResult").value =
reader.result;

};

reader.readAsDataURL(file);

};

}


function textUI(type){

var titles = {
wordcount:"🔢 Word Counter",
case:"🔤 Case Converter",
spaces:"🧹 Remove Extra Spaces",
reverse:"↔️ Reverse Text",
duplicate:"📋 Remove Duplicates",
sort:"↕️ Sort Lines",
slug:"🔗 Slug Generator"
};

showTool(
titles[type],
"Enter or paste your text.",
"<textarea id='textInput' placeholder='Type or paste text here...'></textarea>" +
"<button class='action' id='textButton'>Process</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("textButton").onclick = function(){

var text =
document.getElementById("textInput").value;

var output = "";

if(type === "wordcount"){

var words =
text.trim() ? text.trim().split(/\\s+/).length : 0;

var lines =
text ? text.split("\\n").length : 0;

output =
"Words: " + words +
"\\nCharacters: " + text.length +
"\\nLines: " + lines;

}

if(type === "case"){

output =
text.toLowerCase()
.replace(/\\b\\w/g,function(c){
return c.toUpperCase();
});

}

if(type === "spaces"){

output =
text.replace(/\\s+/g," ").trim();

}

if(type === "reverse"){

output =
text.split("").reverse().join("");

}

if(type === "duplicate"){

output =
Array.from(new Set(text.split("\\n"))).join("\\n");

}

if(type === "sort"){

output =
text.split("\\n").sort().join("\\n");

}

if(type === "slug"){

output =
text.toLowerCase()
.trim()
.replace(/[^a-z0-9\\s-]/g,"")
.replace(/\\s+/g,"-")
.replace(/-+/g,"-");

}

document.getElementById("toolResult").textContent =
output;

};

}


function jsonUI(type){

showTool(
type === "jsonformat" ? "{ } JSON Formatter" : "{ } JSON Minifier",
"Paste valid JSON below.",
"<textarea id='jsonInput' placeholder='Paste JSON here...'></textarea>" +
"<button class='action' id='jsonButton'>Process JSON</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("jsonButton").onclick = function(){

var text =
document.getElementById("jsonInput").value;

try{

var object = JSON.parse(text);

document.getElementById("toolResult").textContent =
type === "jsonformat"
? JSON.stringify(object,null,2)
: JSON.stringify(object);

}catch(e){

document.getElementById("toolResult").textContent =
"Invalid JSON.";

}

};

}


function encodingUI(type){

showTool(
type === "base64encode" ? "🔐 Base64 Encoder" :
type === "base64decode" ? "🔓 Base64 Decoder" :
type === "urlencode" ? "🔗 URL Encoder" :
"🔗 URL Decoder",
"Enter text below.",
"<textarea id='encodingInput'></textarea>" +
"<button class='action' id='encodingButton'>Process</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("encodingButton").onclick = function(){

var text =
document.getElementById("encodingInput").value;

var result = "";

try{

if(type === "base64encode"){

result =
btoa(unescape(encodeURIComponent(text)));

}

if(type === "base64decode"){

result =
decodeURIComponent(escape(atob(text)));

}

if(type === "urlencode"){

result =
encodeURIComponent(text);

}

if(type === "urldecode"){

result =
decodeURIComponent(text);

}

}catch(e){

result = "Invalid input.";

}

document.getElementById("toolResult").textContent =
result;

};

}


function passwordUI(){

showTool(
"🔑 Password Generator",
"Generate a random password.",
"<input type='number' id='passwordLength' value='16' min='4' max='100'>" +
"<button class='action' id='passwordButton'>Generate</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("passwordButton").onclick = function(){

var length =
parseInt(document.getElementById("passwordLength").value) || 16;

var chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";

var password = "";

for(var i=0;i<length;i++){

password +=
chars.charAt(
Math.floor(Math.random()*chars.length)
);

}

document.getElementById("toolResult").textContent =
password;

};

}


function uuidUI(){

showTool(
"🆔 UUID Generator",
"Generate a unique UUID.",
"<button class='action' id='uuidButton'>Generate UUID</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("uuidButton").onclick = function(){

var uuid =
"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
/[xy]/g,
function(c){

var r =
Math.random()*16|0;

var v =
c === "x" ? r : (r&3|8);

return v.toString(16);

});

document.getElementById("toolResult").textContent =
uuid;

};

}


function qrUI(){

showTool(
"▦ QR Code Generator",
"Enter text or URL to create a QR code.",
"<input type='text' id='qrText' placeholder='https://example.com'>" +
"<button class='action' id='qrButton'>Generate QR</button>" +
"<div id='qrResult' style='margin:20px;text-align:center'></div>"
);

document.getElementById("qrButton").onclick = function(){

var text =
document.getElementById("qrText").value;

if(!text){

alert("Enter text or URL.");

return;

}

var result =
document.getElementById("qrResult");

result.innerHTML = "";

new QRCode(result,{
text:text,
width:220,
height:220
});

};

}


function calculatorUI(){

showTool(
"🧮 Calculator",
"Enter a mathematical expression.",
"<input type='text' id='calcInput' placeholder='Example: 25*10+5'>" +
"<button class='action' id='calcButton'>Calculate</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("calcButton").onclick = function(){

var expression =
document.getElementById("calcInput").value;

if(!/^[0-9+\\-*/().%\\s]+$/.test(expression)){

document.getElementById("toolResult").textContent =
"Invalid expression.";

return;

}

try{

document.getElementById("toolResult").textContent =
String(Function("return " + expression)());

}catch(e){

document.getElementById("toolResult").textContent =
"Calculation error.";

}

};

}


function timestampUI(){

showTool(
"⏱️ Unix Timestamp",
"Convert a date to Unix timestamp.",
"<input type='datetime-local' id='dateInput'>" +
"<button class='action' id='dateButton'>Convert</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("dateButton").onclick = function(){

var value =
document.getElementById("dateInput").value;

if(!value){

alert("Select a date.");

return;

}

var timestamp =
Math.floor(new Date(value).getTime()/1000);

document.getElementById("toolResult").textContent =
String(timestamp);

};

}


function colorUI(){

showTool(
"🎨 Color Picker",
"Choose a color and copy its HEX code.",
"<input type='color' id='colorInput' value='#2563eb'>" +
"<button class='action' id='colorButton'>Copy HEX</button>" +
"<div id='toolResult' class='result'>#2563eb</div>"
);

var color =
document.getElementById("colorInput");

color.oninput = function(){

document.getElementById("toolResult").textContent =
color.value;

};

document.getElementById("colorButton").onclick = function(){

navigator.clipboard.writeText(color.value);

alert("Color copied: " + color.value);

};

}


document.querySelectorAll(".tool").forEach(function(tool){

tool.addEventListener("click",function(){

var type =
tool.getAttribute("data-tool");

if(type === "image2pdf"){

imageToPdfUI();

return;

}

if(type === "mergepdf"){

mergePDFUI();

return;

}

if(type === "splitpdf"){

splitPDFUI();

return;

}

if(type === "pdfinfo"){

pdfInfoUI();

return;

}

if(type === "pdf2image"){

pdfToImageUI("png");

return;

}

if(type === "pdf2jpg"){

pdfToImageUI("jpg");

return;

}

if(type === "pdf2png"){

pdfToImageUI("png");

return;

}

if(type === "rotatepdf"){

showTool(
"🔄 Rotate PDF",
"Rotate every page of a PDF.",
"<input type='file' id='rotateFile' accept='application/pdf'>" +
"<select id='rotateAngle'>" +
"<option value='90'>90°</option>" +
"<option value='180'>180°</option>" +
"<option value='270'>270°</option>" +
"</select>" +
"<button class='action' id='rotateButton'>Rotate PDF</button>" +
"<div id='toolResult' class='result'></div>"
);

document.getElementById("rotateButton").onclick =
async function(){

var file =
document.getElementById("rotateFile").files[0];

if(!file){

alert("Please select a PDF.");

return;

}

var angle =
parseInt(document.getElementById("rotateAngle").value);

var pdf =
await PDFLib.PDFDocument.load(
await file.arrayBuffer()
);

pdf.getPages().forEach(function(page){

var current = page.getRotation().angle;

page.setRotation(
PDFLib.degrees(current + angle)
);

});

var saved = await pdf.save();

downloadBlob(
new Blob([saved],{type:"application/pdf"}),
"rotated.pdf"
);

document.getElementById("toolResult").textContent =
"PDF rotated successfully.";

};

return;

}

if(type === "extractpdf"){

splitPDFUI();

return;

}

if(
type === "jpgpng" ||
type === "pngjpg" ||
type === "webp" ||
type === "grayscale"
){

convertImageUI(type);

return;

}

if(type === "compress"){

compressImageUI();

return;

}

if(type === "resize"){

resizeImageUI();

return;

}

if(type === "crop"){

cropImageUI();

return;

}

if(type === "base64image"){

imageBase64UI();

return;

}

if(
type === "wordcount" ||
type === "case" ||
type === "spaces" ||
type === "reverse" ||
type === "duplicate" ||
type === "sort" ||
type === "slug"
){

textUI(type);

return;

}

if(
type === "jsonformat" ||
type === "jsonmin"
){

jsonUI(type);

return;

}

if(
type === "base64encode" ||
type === "base64decode" ||
type === "urlencode" ||
type === "urldecode"
){

encodingUI(type);

return;

}

if(type === "password"){

passwordUI();

return;

}

if(type === "uuid"){

uuidUI();

return;

}

if(type === "qrcode"){

qrUI();

return;

}

if(type === "calculator"){

calculatorUI();

return;

}

if(type === "timestamp"){

timestampUI();

return;

}

if(type === "color"){

colorUI();

return;

}

});

});


document.getElementById("search").addEventListener(
"input",
function(){

var query =
this.value.toLowerCase().trim();

document.querySelectorAll(".tool").forEach(
function(tool){

var name =
tool.getAttribute("data-name");

if(name.indexOf(query) !== -1){

tool.style.display = "block";

}else{

tool.style.display = "none";

}

});

});


</script>

</body>
</html>`;

    return new Response(html,{
      headers:{
        "content-type":"text/html;charset=UTF-8"
      }
    });

  }
};