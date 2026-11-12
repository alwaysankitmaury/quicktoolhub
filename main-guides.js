// src/guides/main-guides.js — Hand-written long guides for the main tools (batch 1).
import { TOOLGUIDES } from "./store.js";

TOOLGUIDES["word-counter"] = {
  ov: [
    `A word counter looks like a very small utility, but it solves a problem that almost every writer, student, marketer and office worker meets sooner or later: knowing exactly how long a piece of text is. Essays have minimum and maximum lengths, meta descriptions are cut off after roughly 155 characters, social captions have hard limits, and clients often pay by the word. Counting by eye is slow and unreliable, and the counter built into a word processor is not always available when you are working in an email box, a CMS, a chat window or a notes app.`,
    `This Word Counter works instantly inside your browser. Paste or type your text and it reports words, characters with and without spaces, sentences, paragraphs and an estimated reading time at an average adult speed of about 200 words per minute. Because processing happens locally, your draft is never uploaded, which matters when the text is an unpublished article, a confidential report or a personal letter. It is free, needs no signup and works on phones as well as desktops.`
  ],
  steps: [
    `Open the tool and click inside the text box.`,
    `Type your text, or paste it from a document, email or web page.`,
    `The counts update as you type, and you can also press Run to refresh them.`,
    `Read the number of words and characters to compare against your target length.`,
    `Use the sentence and paragraph counts to judge structure, for example whether a section is one long block or several short ones.`,
    `Edit your text, watch the numbers change, and press Copy result if you want to paste the statistics into a report.`
  ],
  feats: [
    `Students: check that an essay or assignment meets the required word range before submitting.`,
    `SEO writers: keep meta descriptions near 150 to 160 characters and titles under about 60 characters.`,
    `Social media managers: stay inside limits for captions, bios and posts on different platforms.`,
    `Freelancers: verify the length of a delivered article when you are paid per word.`,
    `Speakers: use the reading time estimate to plan a talk, since spoken pace is usually 130 to 160 words per minute.`,
    `Translators and editors: compare the length of a source text and its translation quickly.`
  ],
  tips: [
    `Decide whether your target counts characters with spaces or without, because platforms differ.`,
    `Remember that different tools split words slightly differently around hyphens and numbers, so allow a small margin when you are right at a limit.`,
    `Remove headings, captions or reference lists before counting if your brief excludes them.`,
    `Paste plain text where possible, since hidden formatting from web pages can add stray line breaks that change paragraph counts.`,
    `Use the sentence count together with words per sentence to spot overly long sentences that hurt readability.`,
    `Keep an unedited copy of your text before heavy trimming to hit a limit.`
  ],
  faq: [
    [`How does the tool decide what a word is?`, `A word is any group of characters separated by spaces, tabs or line breaks. Hyphenated terms such as well-known count as one word, and numbers count as words too. Word processors can differ by a handful of words on long documents because of how they treat symbols.`],
    [`Is my text saved or sent anywhere?`, `No. The counting runs in your own browser, so the text stays on your device and ToolsNest does not store it. You can safely check private drafts.`],
    [`How is reading time calculated?`, `Reading time divides the word count by 200, an average silent reading speed for adults, and rounds up to the next minute. It is an estimate, because technical or unfamiliar material is read more slowly.`],
    [`Does it work for Hindi or other languages?`, `Yes for counting words and characters, because those rely on spaces and length. Sentence detection looks for common punctuation such as full stops, question marks and exclamation marks, so languages that use other sentence endings may give less precise sentence counts.`]
  ]
};
TOOLGUIDES["title-case-converter"] = {
  ov: [
    `Text case sounds trivial until you have to fix a long list of headings, a column of product names pasted in all capitals, or a variable name that must follow a strict programming convention. Retyping every letter by hand is slow and creates mistakes. A case converter changes the capitalization of whole blocks of text in one step, so you can focus on the content instead of the formatting.`,
    `The Title Case Converter turns any text into Title Case, where the main words start with a capital letter, which is the usual style for headlines, article titles, book names and slide headings. It belongs to a family of ToolsNest converters that also cover UPPERCASE, lowercase, Sentence case, camelCase, snake_case and kebab-case. Everything runs in your browser, nothing is uploaded, and the result appears as you type so you can copy it straight into your document, CMS or code editor.`
  ],
  steps: [
    `Open the converter and paste or type your text into the box.`,
    `The converted text appears in the result area immediately.`,
    `Read the output once, paying attention to names, brands and abbreviations.`,
    `Click Copy result to place it on your clipboard.`,
    `Paste it into your document, spreadsheet, web page or code file.`,
    `If you need another style, open the matching converter from the related tools list and repeat.`
  ],
  feats: [
    `Bloggers and editors: format headlines and subheadings consistently across a whole site.`,
    `E-commerce sellers: clean up product titles that arrive in all capitals from a supplier sheet.`,
    `Developers: switch names between camelCase, snake_case and kebab-case when moving data between systems.`,
    `Students: tidy up the headings of reports and presentations quickly.`,
    `Data entry teams: normalise names and city lists pasted from different sources.`,
    `Social media users: prepare clean captions and profile text without retyping.`
  ],
  tips: [
    `Always scan the result for proper nouns, since automatic conversion treats every word the same way.`,
    `Brand names with unusual capitals such as iPhone or eBay may need a manual fix afterwards.`,
    `Use sentence case for long body text, because Title Case on whole paragraphs looks odd and is harder to read.`,
    `Pick one style guide for your site or document and apply it everywhere for consistency.`,
    `For URLs and CSS class names choose kebab-case, and for Python variables choose snake_case.`,
    `Keep the original text until you have checked the converted version.`
  ],
  faq: [
    [`Does Title Case capitalize every single word?`, `This tool capitalizes the first letter of each word and lowercases the rest, which is the simple and predictable version. Some style guides keep small words such as of, the or and in lowercase, so you may want to adjust those by hand for formal publications.`],
    [`What is the difference between camelCase and snake_case?`, `Both join words without spaces. camelCase capitalizes each word after the first, such as firstName, and is common in JavaScript and Java. snake_case uses lowercase words joined by underscores, such as first_name, and is common in Python and databases.`],
    [`Will it change numbers or symbols?`, `Numbers and symbols are left as they are. Only letters are affected, so phone numbers, prices and punctuation keep their original form.`],
    [`Is there a limit on text length?`, `ToolsNest sets no limit. Very large texts depend on your device and browser speed, but normal articles convert instantly.`]
  ]
};
TOOLGUIDES["password-generator"] = {
  ov: [
    `Weak and reused passwords are one of the most common reasons accounts get broken into. People tend to choose names, dates and simple patterns because they are easy to remember, and attackers use automated tools that try exactly those guesses first. A properly random password removes the pattern completely, so there is nothing for a guessing program to exploit.`,
    `The ToolsNest Password Generator creates a random password of the length you choose, with or without symbols. It uses your browser's cryptographically secure random number generator rather than a simple predictable function, and the password is created on your device, not on a server. That means it is never sent, logged or stored by ToolsNest. Pair it with a password manager so you can use a different long password for every account without having to memorize any of them.`
  ],
  steps: [
    `Open the tool and set the length. Sixteen characters is a good starting point, and longer is stronger.`,
    `Choose whether to include symbols. Keep them on unless a website refuses them.`,
    `Click Generate to create a new password.`,
    `Click Copy to place the password on your clipboard.`,
    `Paste it into the sign-up or change-password form, then save it in your password manager.`,
    `Generate a fresh password for every different account instead of reusing one.`
  ],
  feats: [
    `Creating strong passwords for email, banking, social media and shopping accounts.`,
    `Setting up Wi-Fi router passphrases that are hard to guess.`,
    `Producing temporary passwords for new team members or test accounts.`,
    `Generating secret keys and tokens for development and testing.`,
    `Replacing old passwords after a data breach notice.`,
    `Helping family members move away from easy passwords like birthdays.`
  ],
  tips: [
    `Length matters more than clever tricks. A random sixteen character password is far stronger than a short one full of substitutions.`,
    `Never reuse a password across sites, because one breach then exposes every account.`,
    `Store passwords in a reputable password manager, not in a text file or a note on your phone.`,
    `Turn on two-factor authentication wherever it is offered, as a second layer in case a password leaks.`,
    `If a site limits symbols, increase the length to compensate.`,
    `Do not share passwords by chat or email, and never type them into links sent by strangers.`
  ],
  faq: [
    [`Is the generated password stored by ToolsNest?`, `No. The password is produced inside your browser and never leaves your device, so ToolsNest cannot see or save it.`],
    [`How long should my password be?`, `For important accounts such as email and banking, use at least sixteen random characters. For less sensitive accounts twelve is a sensible minimum. The longer the password, the more guesses an attacker needs.`],
    [`Why is a random password better than one I make up?`, `Human-made passwords follow patterns, such as a word followed by a number. Attackers try those patterns first. A random password has no pattern, so the only option left is brute force, which becomes impractical as length grows.`],
    [`Can I remember these passwords?`, `Not easily, and you are not meant to. Use a password manager to remember them for you, and memorize only the one strong master password that unlocks the manager.`]
  ]
};
TOOLGUIDES["text-repeater"] = {
  ov: [
    `Sometimes you need the same piece of text many times: a placeholder to fill a layout, a test string to check how a form handles long input, a pattern for a design mockup, or a line repeated for a fun chat message. Copying and pasting by hand works for five repeats but becomes tedious and error prone at fifty or five hundred.`,
    `The Text Repeater does it in one click. Enter your text, choose how many times it should repeat and pick a separator such as a new line, a space, a comma or nothing at all. The result is ready to copy immediately. It is useful for developers testing limits, designers filling prototypes, teachers preparing practice sheets, and anyone who needs repetition without manual effort. The tool runs locally in your browser, so nothing you type is uploaded.`
  ],
  steps: [
    `Type or paste the text you want to repeat into the Text field.`,
    `Enter the number of repetitions. The tool allows up to 1,000.`,
    `Choose a separator: new line, space, comma or none.`,
    `Click Repeat to generate the output.`,
    `Check the result in the box below.`,
    `Click Copy and paste it where you need it.`
  ],
  feats: [
    `Developers: create long strings to test input limits, database fields and layout overflow.`,
    `Designers: fill cards, tables and text areas with realistic amounts of content.`,
    `Teachers: prepare handwriting or typing practice lines.`,
    `Marketers: build repeated hashtags or keyword lists for quick drafts.`,
    `Testers: simulate large clipboard or form submissions.`,
    `Everyday users: create playful repeated messages for friends.`
  ],
  tips: [
    `Add a trailing space or newline inside the text itself if you want a separator that the dropdown does not offer.`,
    `Start with a small number to check the format, then increase it.`,
    `Use the comma separator when you need a quick list that can be pasted into a spreadsheet or code array.`,
    `For layout tests, repeat a long word without spaces to see how your design handles overflow.`,
    `Very large outputs may slow older phones, so keep repetitions reasonable.`,
    `Do not use repeated text as filler on a live website, since search engines value original content.`
  ],
  faq: [
    [`What is the maximum number of repeats?`, `The tool repeats up to 1,000 times in one run, which is plenty for testing and design work while keeping your browser responsive.`],
    [`Can I repeat multiple lines?`, `The input is repeated exactly as typed, so a text block with several lines will be repeated as a block. Choose the new line separator to put each copy on its own line.`],
    [`Is my text uploaded?`, `No. Repetition happens in your browser and ToolsNest does not receive the text.`],
    [`Can I use the output in code?`, `Yes. With the comma separator you can wrap the result in brackets to make a quick array, or use new lines for line-based test data.`]
  ]
};
TOOLGUIDES["base64-encoder"] = {
  ov: [
    `Base64 is a way of writing data using only 64 safe, printable characters: letters, numbers and two symbols. It exists because many systems, such as email, URLs, JSON and certain HTML attributes, are designed for plain text and can corrupt raw binary data. By converting bytes into Base64 text, a small image, a file or a string can travel safely through those systems and be turned back into the original later.`,
    `This guide covers both the Base64 Encoder and the Base64 Decoder on ToolsNest. The encoder converts ordinary text, including accented and non-English characters, into Base64. The decoder reverses the process and shows the original text. Both run entirely in your browser, so the data you paste is not uploaded. It is important to remember that Base64 is an encoding, not encryption. Anyone can decode it in a second, so it must never be used to hide passwords or private information.`
  ],
  steps: [
    `Open the Base64 Encoder if you want to convert text, or the Base64 Decoder if you already have an encoded string.`,
    `Paste your text or Base64 string into the input box.`,
    `The result appears automatically, or press Run to refresh it.`,
    `If the decoder shows an error, check for missing characters, extra spaces or a cut-off string.`,
    `Click Copy result to copy the output.`,
    `Paste it into your code, configuration file, API request or document.`
  ],
  feats: [
    `Developers: inspect values from API responses, headers and configuration files.`,
    `Embedding small images or fonts directly into CSS and HTML as data URLs.`,
    `Debugging tokens, since the parts of a JWT are Base64 encoded.`,
    `Preparing text for transport through systems that only accept plain text.`,
    `Learning how encoding works, with instant input and output side by side.`,
    `Quickly decoding a suspicious looking string to see what it contains before trusting it.`
  ],
  tips: [
    `Never treat Base64 as a security measure. Use real encryption for secrets.`,
    `Encoded output is about one third larger than the input, so avoid encoding big files for web pages.`,
    `Watch for URL-safe Base64, which replaces plus and slash with dash and underscore. Convert them back before decoding if needed.`,
    `Remove line breaks and spaces from pasted strings that were wrapped by an email program.`,
    `Do not paste real passwords or private keys into any online tool, including this one.`,
    `Check that decoded text looks readable. Garbled output usually means the data was binary, not text.`
  ],
  faq: [
    [`Is Base64 the same as encryption?`, `No. Base64 only changes how data is written. It has no key and no secrecy, so anyone can reverse it. Use encryption such as AES when you need privacy.`],
    [`Why does the string end with equals signs?`, `The equals signs are padding. Base64 works in groups of three bytes, and padding fills the final group so the length stays correct.`],
    [`Does it support Hindi and emoji?`, `Yes. The encoder converts text to UTF-8 bytes first, so characters from any language and emoji are handled correctly.`],
    [`Why does my decode attempt fail?`, `The usual causes are a missing character, extra spaces, a string that is not Base64 at all, or URL-safe characters that need to be converted back first.`]
  ]
};
TOOLGUIDES["base64-decoder"] = TOOLGUIDES["base64-encoder"];
TOOLGUIDES["json-formatter-validator"] = {
  ov: [
    `JSON is the standard format that websites, mobile apps and APIs use to exchange data. It is simple for machines but hard for people to read when it arrives as one long line, and it is unforgiving: a missing comma or an extra quotation mark makes the whole document invalid. Finding such a mistake by eye in a few thousand characters is frustrating.`,
    `The JSON Formatter and Validator takes raw JSON, checks that it is valid and, if it is, rewrites it with clean indentation so the structure is easy to follow. If something is wrong, you get an error message instead of silent failure, which tells you there is a problem to fix. It runs locally in your browser, so API responses and configuration data are not uploaded. Developers, testers, analysts and students use it daily to debug responses, tidy configuration files and learn how nested data is organised.`
  ],
  steps: [
    `Copy the JSON from your API client, log file, browser tool or document.`,
    `Paste it into the input box of the tool.`,
    `The formatted version appears right away with two-space indentation.`,
    `If you see an error, look for missing commas, trailing commas, single quotes or unquoted keys and fix them.`,
    `Click Copy result to copy the neat JSON.`,
    `Use the JSON Minifier from the related tools when you need to compress it back to one line.`
  ],
  feats: [
    `Debugging API responses during development and testing.`,
    `Validating configuration files before deploying them.`,
    `Reading deeply nested data from exports and logs.`,
    `Preparing readable examples for documentation and tutorials.`,
    `Finding syntax mistakes quickly in hand-written JSON.`,
    `Teaching beginners how objects, arrays and values fit together.`
  ],
  tips: [
    `JSON requires double quotes around keys and strings. Single quotes are not valid.`,
    `Remove trailing commas after the last item, which is a very common mistake.`,
    `Comments are not allowed in standard JSON, so delete them before validating.`,
    `Never paste data containing real passwords, tokens or customer details into any online tool.`,
    `Minify JSON before sending it over the network if size matters, and format it only for reading.`,
    `If your data is a list of records, the JSON to CSV tool can turn it into a spreadsheet-friendly file.`
  ],
  faq: [
    [`What does valid JSON mean?`, `Valid JSON follows strict syntax rules: keys and strings in double quotes, values separated by commas, objects in curly braces, arrays in square brackets, and no trailing commas or comments.`],
    [`Why do I get an error for data that looks fine?`, `Small details usually cause it, such as a single quote, a trailing comma, an unquoted key or invisible characters copied from a web page. Retype the suspicious part or check around the position mentioned in the error.`],
    [`Does formatting change my data?`, `No. Only whitespace is changed. Keys, values and order stay the same, so formatted and minified versions mean exactly the same thing.`],
    [`Is there a size limit?`, `ToolsNest sets none, but very large files depend on your device memory. For multi-megabyte files use a desktop editor.`]
  ]
};
TOOLGUIDES["image-compressor"] = {
  ov: [
    `Large images slow down websites, fill up email attachments and take forever to upload on a weak mobile connection. A photo straight from a modern phone can easily be several megabytes, far more than a blog post, a profile picture or a marketplace listing needs. Reducing the file size without making the picture look bad is one of the most useful everyday tasks online.`,
    `The Image Compressor converts your picture to a compressed JPG at the quality you choose. Lower quality produces a smaller file, and a setting around 70 to 80 percent usually keeps the image looking good while cutting its size dramatically. The tool shows a preview and the final size, and your photo is processed inside your browser, so it is never uploaded to a server. That makes it a safe choice for personal pictures and documents.`
  ],
  steps: [
    `Click the file box and choose a photo from your device.`,
    `Set the quality value between 10 and 100. Start with 70.`,
    `Click Apply and wait for the preview.`,
    `Check the preview and the reported dimensions and size.`,
    `If the picture looks too soft, raise the quality, or lower it if the file is still too large.`,
    `Click Download to save the compressed image.`
  ],
  feats: [
    `Website owners: speed up pages by shrinking blog and product images.`,
    `Job seekers and students: meet size limits on upload forms for photos and documents.`,
    `Email users: fit several pictures under attachment limits.`,
    `Sellers: prepare listing photos that load quickly on mobile.`,
    `Social media users: reduce huge camera photos before sharing.`,
    `Anyone short on phone storage: keep a lighter copy of large pictures.`
  ],
  tips: [
    `Resize the picture to the real display size first with the Image Resizer, then compress. This usually saves the most space.`,
    `Do not compress the same JPG again and again, since each save loses a little detail.`,
    `Keep the original file as a backup.`,
    `Use PNG only for graphics with transparency or flat colors, and JPG or WebP for photographs.`,
    `Compare results at different quality values and pick the lowest one that still looks good.`,
    `Remove location data with the metadata tool before sharing personal photos.`
  ],
  faq: [
    [`Will compression reduce image quality?`, `Yes, a little. The tool uses lossy JPG compression. At 70 to 85 percent the difference is hard to notice in most photos, while the file becomes much smaller.`],
    [`Is my photo uploaded?`, `No. Compression happens inside your browser, so the picture stays on your device.`],
    [`Why did a PNG become a JPG?`, `The tool outputs JPG because it compresses photographs best. Transparent areas become white. Use the Image to WebP tool if you need a modern format.`],
    [`What quality should I choose?`, `For websites try 70 to 80. For printing or archiving use 90 or higher. For very small files try 50, but check for blocky edges.`]
  ]
};
TOOLGUIDES["image-resizer"] = {
  ov: [
    `Different places need different image sizes. A passport portal may want a specific width, a blog layout may display pictures at 800 pixels, and a social post may need a square. Uploading a huge photo and letting the website shrink it wastes bandwidth and slows loading, while stretching a small photo makes it blurry. Resizing to the right dimensions fixes both problems.`,
    `The Image Resizer lets you set a new width, a new height, or both. If you fill in only one, the other is calculated automatically so the picture keeps its original proportions and nothing looks stretched. The result is previewed and downloaded as a PNG file. The work happens in your browser, so your images are not sent to ToolsNest or anyone else.`
  ],
  steps: [
    `Choose an image from your device.`,
    `Enter a width, a height, or both in pixels. Leave one empty to keep the aspect ratio.`,
    `Click Apply and check the preview and the pixel size shown.`,
    `If the proportions look wrong, clear one field and try again.`,
    `Click Download to save the resized image.`,
    `Run the Image Compressor afterwards if you also need a smaller file size.`
  ],
  feats: [
    `Preparing pictures for blogs, online stores and landing pages.`,
    `Meeting exact pixel requirements on application and government forms.`,
    `Creating thumbnails and profile pictures.`,
    `Reducing large phone photos before emailing.`,
    `Making images consistent in size for a gallery or catalog.`,
    `Enlarging a small image slightly for a presentation slide.`
  ],
  tips: [
    `Fill in only one dimension unless you really need a new shape, to avoid distortion.`,
    `Scaling down gives clean results, while scaling up beyond about twice the size makes images soft.`,
    `Resize first and compress last for the smallest good-looking file.`,
    `To change the shape instead of the size, use the Image Cropper.`,
    `Write down the dimensions you use so every picture in a project matches.`,
    `Keep the original image in case you need a bigger version later.`
  ],
  faq: [
    [`How do I keep the proportions?`, `Enter only the width or only the height. The tool calculates the other value from the original ratio.`],
    [`Can I make an image bigger?`, `Yes, but enlarging cannot add detail that is not there, so large increases look blurry. It works best for small adjustments.`],
    [`What file format do I get?`, `The resized image downloads as a PNG, which keeps quality and transparency. Use the compressor if you want a smaller JPG.`],
    [`Are my pictures uploaded?`, `No. Resizing happens locally in your browser and nothing is transmitted to ToolsNest.`]
  ]
};
TOOLGUIDES["qr-code-generator"] = {
  ov: [
    `A QR code is a square barcode that a phone camera can read in a moment. It can hold a website address, a line of text, a Wi-Fi sign-in detail, a payment link or a contact page. Restaurants use them for menus, shops use them on posters and packaging, and event organizers print them on tickets and flyers. They save people from typing long web addresses and make offline material interactive.`,
    `The ToolsNest QR Code Generator creates a code for any text or link and lets you download it as a PNG image. It runs in your browser, so the address or text you enter is not uploaded. There is no watermark, no expiry and no account required. Because the code contains your data directly instead of pointing to a tracking service, it keeps working as long as the destination you linked to stays online.`
  ],
  steps: [
    `Type or paste the web address or text into the box. Include https:// for websites.`,
    `Click Generate to draw the QR code.`,
    `Scan it with your phone camera to check that it opens the right page.`,
    `Click Download PNG to save the image.`,
    `Place it on your poster, card, menu, packaging or slide.`,
    `Test the printed version before producing a large batch.`
  ],
  feats: [
    `Restaurants and cafes: link to a digital menu.`,
    `Businesses: put a QR code on visiting cards pointing to a website or WhatsApp chat.`,
    `Teachers: share a worksheet or video with a class quickly.`,
    `Events: link to a registration or location page.`,
    `Shops: connect packaging to product guides or reviews pages.`,
    `Personal use: share a Wi-Fi page, a portfolio or a social profile.`
  ],
  tips: [
    `Keep the content short. The less data, the simpler and easier to scan the code.`,
    `Use dark code on a light background with plenty of empty margin around it.`,
    `Print it at least two centimetres wide so cameras can read it.`,
    `Never print a code until you have scanned it with more than one phone.`,
    `Use a link you control. If the page disappears, the code stops being useful.`,
    `For campaigns, add tracking parameters with the UTM Link Builder before generating the code.`
  ],
  faq: [
    [`Does the QR code expire?`, `No. The data is stored in the pattern itself, so it never expires. It stops being useful only if the page you linked to goes offline.`],
    [`Is it free for commercial use?`, `Yes. You can use the generated image on products, posters and marketing material.`],
    [`Why will my code not scan?`, `Common reasons are low contrast, a very small print size, a crowded design or too much text. Make the code larger and use dark on light colours.`],
    [`Is my link uploaded to a server?`, `No. The code is drawn inside your browser. ToolsNest does not receive the text you enter.`]
  ]
};
TOOLGUIDES["length-converter"] = {
  ov: [
    `People meet different measurement systems all the time. A product listing may give inches while your tape measure shows centimetres, a road sign may show miles while your map app shows kilometres, and a recipe, a blueprint or a school problem may mix units. Doing the arithmetic in your head is easy to get wrong, especially with less familiar units like yards or nautical measures.`,
    `The Length Converter changes a value between metres, kilometres, centimetres, millimetres, miles, yards, feet and inches in one step. Enter the number, choose the unit you have and the unit you want, and the answer appears immediately. The same layout is used by the weight, area, data storage and speed converters on ToolsNest, so once you know one you know them all. It is free, works on mobile, and does everything locally in your browser.`
  ],
  steps: [
    `Type the value you want to convert in the Value field.`,
    `Choose the starting unit in the From dropdown.`,
    `Choose the target unit in the To dropdown.`,
    `Click Calculate to see the converted result.`,
    `Copy the answer with the Copy button if you need it elsewhere.`,
    `Change any field and calculate again to compare other units.`
  ],
  feats: [
    `Shopping online: convert sizes of furniture, screens and clothing measurements.`,
    `Travel: change miles to kilometres for distances and road trips.`,
    `Students: check homework and science problems that mix units.`,
    `Construction and interiors: convert between feet, inches and metres for plans.`,
    `Sports: compare running or swimming distances.`,
    `Engineering and DIY: switch between millimetres and inches for parts and tools.`
  ],
  tips: [
    `Double check the From and To units before reading the result, since swapping them is the most common mistake.`,
    `For work that needs accuracy, keep extra decimal places until the final step.`,
    `Remember the basics: one inch is 2.54 centimetres and one mile is about 1.609 kilometres.`,
    `Convert everything to one unit before adding or comparing several measurements.`,
    `Write the unit next to every number so the result is never ambiguous.`,
    `For areas, use the Area Converter, because squared units cannot be converted with a length factor.`
  ],
  faq: [
    [`How accurate is the converter?`, `It uses exact standard conversion factors, such as 0.3048 metres per foot, and shows results rounded to two decimal places for readability.`],
    [`Can I convert square or cubic units here?`, `No. Use the Area Converter for square units, because a square foot is not simply twelve times a square inch.`],
    [`Does it work offline?`, `Once the page is loaded the calculation runs in your browser, so it keeps working even if the connection drops.`],
    [`Which units are included?`, `Metre, kilometre, centimetre, millimetre, mile, yard, foot and inch.`]
  ]
};
TOOLGUIDES["emi-calculator"] = {
  ov: [
    `An EMI, or Equated Monthly Instalment, is the fixed amount you pay each month to repay a loan with interest. Home, car, education and personal loans all work this way. Before signing, it helps to know not only the monthly payment but also the total interest you will pay over the life of the loan, since a lower EMI stretched over a longer tenure often costs far more in the end.`,
    `The EMI Calculator asks for three numbers: the loan amount, the annual interest rate and the tenure in years. It then shows your monthly EMI, the total payment and the total interest. It uses the standard reducing-balance formula that banks use, so the answer is a reliable estimate for planning. The calculation runs in your browser and nothing you enter is stored. Results are estimates and not financial advice, because actual offers include processing fees, taxes and rate changes.`
  ],
  steps: [
    `Enter the loan amount in rupees.`,
    `Enter the yearly interest rate offered by the lender.`,
    `Enter the tenure in years. For months, divide by twelve.`,
    `Click Calculate.`,
    `Read the monthly EMI, total payment and total interest.`,
    `Change the tenure or amount and recalculate to compare options before choosing.`
  ],
  feats: [
    `Comparing offers from different banks by trying each interest rate.`,
    `Deciding how much loan you can comfortably afford each month.`,
    `Seeing how a longer tenure lowers the EMI but raises total interest.`,
    `Planning a down payment by testing smaller loan amounts.`,
    `Checking a lender's quoted EMI to make sure it looks fair.`,
    `Teaching students how loans and compound interest work.`
  ],
  tips: [
    `As a rule of thumb keep total EMIs under about 40 percent of your monthly income.`,
    `Always look at total interest, not just the EMI, when comparing tenures.`,
    `Remember that processing fees, insurance and taxes are usually extra.`,
    `Floating rates can change, so test your budget with a rate one or two points higher.`,
    `Part-prepayments reduce the principal and can save a lot of interest.`,
    `Confirm the final figures with your lender's official schedule.`
  ],
  faq: [
    [`How is EMI calculated?`, `The formula is P x r x (1+r)^n divided by ((1+r)^n - 1), where P is the loan amount, r the monthly interest rate and n the number of months.`],
    [`Why is total interest so high on long loans?`, `Interest is charged on the outstanding balance every month. With a long tenure the balance stays high for longer, so interest adds up.`],
    [`Will my bank's EMI be exactly the same?`, `It should be very close. Small differences can come from rounding, fees, rate type or the date the first payment starts.`],
    [`Does this include GST or processing fees?`, `No. It calculates principal and interest only. Ask your lender for the full list of charges.`]
  ]
};
TOOLGUIDES["merge-pdf"] = {
  ov: [
    `Many everyday tasks end with a single PDF: a job application with a resume and certificates, an insurance claim with several scanned pages, a school assignment made of separate sections, or an invoice bundle for an accountant. When the pieces are separate files, forms often reject them and recipients find them confusing. Combining them into one tidy document solves both problems.`,
    `The Merge PDF tool joins two or more PDF files into a single file. You can add files one at a time or select several together, then change their order with the up and down buttons or remove any by mistake before merging. Everything is processed inside your browser, so your private documents are not uploaded to ToolsNest. There is no page limit set by the tool, no watermark and no account to create.`
  ],
  steps: [
    `Click the file box and choose your first PDF.`,
    `Add more files. You can choose them together or come back and add one by one.`,
    `Use the up and down arrows to put the files in the correct order, and the cross to remove any wrong file.`,
    `Click Merge PDFs.`,
    `Wait for the progress message to show that all files are merged.`,
    `Open the downloaded merged.pdf and scroll through it to confirm the order and pages.`
  ],
  feats: [
    `Job seekers: combine a resume, cover letter and certificates into one upload.`,
    `Students: join assignment sections and appendices.`,
    `Finance and admin staff: bundle invoices or statements for a client.`,
    `Legal and insurance work: merge scanned forms and supporting documents.`,
    `Small businesses: assemble brochures and price lists.`,
    `Personal records: keep related papers, such as a family set of documents, in one file.`
  ],
  tips: [
    `Check the order before merging, because it is easier than fixing it afterwards.`,
    `Rotate sideways scans with the Rotate PDF tool before merging.`,
    `Use Delete PDF Pages afterwards to remove a blank or duplicate page.`,
    `Keep your original files as backups.`,
    `If the result is too large to email, reduce the image sizes in the source scans.`,
    `Password protected PDFs may need to be unlocked first.`
  ],
  faq: [
    [`Are my PDFs uploaded?`, `No. Merging happens locally in your browser, so the files never leave your device.`],
    [`Is there a limit on the number of files?`, `ToolsNest sets no limit. Very large files depend on the memory of your device.`],
    [`Will merging reduce quality?`, `No. The pages are copied as they are, so text, images and layout stay the same.`],
    [`Can I change the order after adding files?`, `Yes. Use the arrow buttons next to each file before pressing Merge.`]
  ]
};
TOOLGUIDES["image-to-pdf"] = {
  ov: [
    `Phone cameras have become the most common scanner. People photograph bills, certificates, handwritten notes and forms, but then discover that many portals and email recipients want a single PDF instead of a pile of pictures. Turning images into a PDF makes sharing easier, keeps the pages in order and is usually the format that official systems expect.`,
    `The Image to PDF tool combines your photos into one PDF with one image per page. Each page uses the size of its picture, so nothing is cropped or stretched. Select several images together, convert and download. Processing happens in your browser, which means sensitive pictures such as identity documents do not have to be uploaded to a server. The tool is free, needs no signup and adds no watermark.`
  ],
  steps: [
    `Click the file box and select one or more images. Hold Ctrl or Shift, or tap multiple photos on mobile.`,
    `Check that the images are chosen in the order you want the pages.`,
    `Click Create PDF.`,
    `Wait a moment while the pages are built.`,
    `Open the downloaded PDF and check each page.`,
    `If needed, use Merge PDF or Delete PDF Pages to adjust the final document.`
  ],
  feats: [
    `Turning photographed documents into one shareable file.`,
    `Submitting certificates and ID proofs on application portals.`,
    `Making a PDF portfolio from design or photography samples.`,
    `Sending receipts and bills as one attachment.`,
    `Creating handouts from slide screenshots.`,
    `Archiving handwritten notes in a single file.`
  ],
  tips: [
    `Take photos in good light, flat and straight on, to get clean pages.`,
    `Crop away backgrounds first with the Image Cropper.`,
    `Compress very large photos beforehand so the PDF stays small.`,
    `Name or number the files in the order you want, such as page-1, page-2.`,
    `Check text is readable at full size before sending anything important.`,
    `Remove location data from photos with the metadata tool before sharing.`
  ],
  faq: [
    [`Which image formats can I use?`, `Common formats such as JPG, PNG and WebP work in modern browsers. If a file does not load, convert it to JPG or PNG first.`],
    [`Does the PDF keep the original quality?`, `Images are placed at their original pixel size and saved with high JPEG quality, so they stay sharp for reading and printing.`],
    [`Can I change the page order?`, `Pages follow the order of the selected files. Rename the files or select them again in the order you want.`],
    [`Is there a file size limit?`, `ToolsNest sets none. Large batches depend on your device memory, so split very big sets into two PDFs and join them with Merge PDF.`]
  ]
};
TOOLGUIDES["color-code-converter"] = {
  ov: [
    `Colours are written in different ways depending on where you work. Designers use HEX codes like #ff8800, CSS often uses rgb values, and many design systems use HSL because it describes hue, saturation and lightness in a way that is easier to adjust by hand. Moving between formats manually means doing base conversion and trigonometry-like maths that nobody wants to do.`,
    `The Color Code Converter takes a colour in HEX or RGB form and shows the same colour as HEX, RGB and HSL together. Type #ff8800 or rgb(255,136,0) and read all three results in a moment. It is useful for web designers, developers, social media creators and anyone matching brand colours across tools. The conversion happens in your browser, and you can copy the result straight into CSS, a design file or a document.`
  ],
  steps: [
    `Type a colour in the box, for example #ff8800 or rgb(255,136,0).`,
    `The converted values appear immediately, or press Run.`,
    `Read the HEX, RGB and HSL lines.`,
    `Click Copy result to copy all three.`,
    `Paste the format you need into your stylesheet or design app.`,
    `Use the Color Picker tool if you want to choose a colour visually first.`
  ],
  feats: [
    `Matching a brand colour given as HEX to an RGB value required by a tool.`,
    `Writing CSS with HSL so you can create lighter or darker variants easily.`,
    `Checking colours from screenshots or design mockups.`,
    `Preparing consistent palettes for slides, posters and social posts.`,
    `Teaching students how screens mix red, green and blue light.`,
    `Documenting design tokens for a development team.`
  ],
  tips: [
    `Use six-digit HEX values with or without the hash sign.`,
    `To make a colour lighter or darker, raise or lower the lightness number in HSL.`,
    `Keep enough contrast between text and background colours for readability.`,
    `Save your main brand colours in all three formats in one document.`,
    `Remember that colours can look different on different screens and in print.`,
    `Use the Color Palette Extractor to find colours from a photo first.`
  ],
  faq: [
    [`What is the difference between HEX, RGB and HSL?`, `HEX and RGB both describe amounts of red, green and blue, written in hexadecimal or decimal. HSL describes hue as a colour wheel angle, plus saturation and lightness percentages.`],
    [`Can I enter shorthand HEX like #f80?`, `Please use the full six-digit form such as #ff8800. Shorthand is not accepted by this tool.`],
    [`Does it support transparency?`, `No. The tool converts solid colours. For transparency add an alpha value yourself in CSS, such as rgba.`],
    [`Are the values exact?`, `HEX and RGB are exact. HSL values are rounded to whole numbers, so converting back may differ by one step.`]
  ]
};
TOOLGUIDES["sha-256-hash-generator"] = {
  ov: [
    `A hash is a short fixed-length fingerprint of any piece of data. Feed in a sentence, a password or the contents of a file and a hash function produces a string of letters and numbers. Change even one character of the input and the output looks completely different, and nobody can work backwards from the hash to the original. This makes hashes ideal for checking that data has not been changed.`,
    `The SHA-256 Hash Generator creates a 64-character hexadecimal fingerprint of any text using the SHA-256 algorithm, which is part of the SHA-2 family and is widely used for integrity checks, digital signatures and software downloads. ToolsNest also offers SHA-1 and SHA-512. The hash is computed in your browser using its built-in cryptography support, so the text you enter is not uploaded. It is a handy utility for developers, students and anyone verifying data.`
  ],
  steps: [
    `Type or paste your text into the input box.`,
    `The SHA-256 hash appears automatically, or press Run.`,
    `Compare the hash with the value published by a trusted source if you are verifying something.`,
    `Click Copy result to copy the hash.`,
    `Use the hash in your code, documentation or checksum list.`,
    `Try changing one letter to see how the whole hash changes.`
  ],
  feats: [
    `Verifying that two pieces of text are exactly identical.`,
    `Creating checksums for documentation and tests.`,
    `Learning how hashing works in security courses.`,
    `Generating identifiers derived from content.`,
    `Checking values used in APIs and signatures.`,
    `Comparing against published hashes for small text-based data.`
  ],
  tips: [
    `Remember that even a trailing space or line break changes the hash.`,
    `Hashing is not encryption. You cannot decode a hash back to the text.`,
    `Do not use plain SHA-256 to store passwords. Real systems use slow salted algorithms such as bcrypt or Argon2.`,
    `Prefer SHA-256 or SHA-512 over SHA-1, which is no longer considered safe for security.`,
    `Never paste secret keys or real passwords into any online tool.`,
    `Use lowercase hexadecimal when comparing, since most tools output lowercase.`
  ],
  faq: [
    [`Can a SHA-256 hash be reversed?`, `No. It is a one-way function. Attackers can only guess inputs and compare, which is why long random passwords matter.`],
    [`Why is the output always 64 characters?`, `SHA-256 produces 256 bits, which are written as 64 hexadecimal characters no matter how short or long the input is.`],
    [`Can I hash a file with this tool?`, `This tool hashes the text you type or paste. For files, use a checksum tool on your computer.`],
    [`Is my text sent anywhere?`, `No. Hashing is done by your browser, so ToolsNest never receives the text.`]
  ]
};
TOOLGUIDES["bmi-calculator"] = {
  ov: [
    `Body Mass Index, or BMI, is a quick number that compares your weight with your height. It is widely used by doctors, schools and fitness programs as a first screening measure to see whether a person falls in a lower, typical or higher weight range. It is simple, free and needs no equipment beyond a scale and a tape measure.`,
    `The BMI Calculator takes your weight in kilograms and your height in centimetres and divides weight by height in metres squared. It then shows your BMI and the usual category: underweight, normal weight, overweight or obese. The calculation runs in your browser, and nothing you enter is stored or shared. BMI is only a general indicator. It does not measure body fat, muscle, age, sex or health, so treat the result as a starting point for a conversation with a qualified professional, not as a diagnosis.`
  ],
  steps: [
    `Enter your weight in kilograms.`,
    `Enter your height in centimetres.`,
    `Click Calculate.`,
    `Read your BMI value and the category shown below it.`,
    `Compare it with the ranges: below 18.5, 18.5 to 24.9, 25 to 29.9 and 30 or above.`,
    `Recalculate with other numbers to see how a weight goal would change the result.`
  ],
  feats: [
    `A quick check at the start of a fitness plan.`,
    `Tracking changes over several months.`,
    `Helping parents and teachers understand general ranges for adults.`,
    `Preparing numbers to discuss with a doctor or dietitian.`,
    `Setting a realistic weight goal for a given height.`,
    `Learning how weight and height relate.`
  ],
  tips: [
    `Weigh yourself at the same time of day for comparable readings.`,
    `Measure height without shoes, standing straight.`,
    `Remember that athletes and muscular people can have a high BMI without excess fat.`,
    `Children, teenagers, older adults and pregnant women need different guidelines.`,
    `Use waist measurement and other health checks alongside BMI.`,
    `Speak to a doctor before making major diet or exercise changes.`
  ],
  faq: [
    [`What is a healthy BMI range?`, `For most adults, a BMI from 18.5 to 24.9 is classed as normal weight under common guidelines. Some regions use slightly different cut-offs for Asian populations.`],
    [`Is BMI accurate for everyone?`, `No. It ignores muscle mass, bone structure and fat distribution, so it can mislead for athletes, older people and others.`],
    [`Is this medical advice?`, `No. The result is an estimate for general information. Please consult a qualified health professional for advice.`],
    [`Is my data saved?`, `No. The calculation happens in your browser and ToolsNest does not keep your numbers.`]
  ]
};
