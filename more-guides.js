// src/guides/more-guides.js — Hand-written long guides (batch 2).
import { TOOLGUIDES } from "./store.js";

/* ===== More tool guides (batch 2) ===== */
TOOLGUIDES["profit-loss-calculator"] = {
  ov: [
    `Every seller, from a street vendor to an online store owner, needs to know one thing after each sale: did I actually make money? It sounds obvious, but profit is easy to misjudge when costs are spread across purchase price, packing, delivery, platform fees and tax. A quick, reliable calculation removes guesswork and stops you from selling at a loss without realising it.`,
    `The Profit & Loss Calculator compares your cost price with your selling price and tells you the exact amount gained or lost and the percentage of the cost that this represents. Enter two numbers, press Calculate, and read the answer instantly. The calculation happens in your browser and nothing is saved, so you can test as many price ideas as you like. It is useful for shopkeepers, resellers, freelancers pricing a service, students learning commercial maths and anyone negotiating a deal.`
  ],
  more: [
    `The formula is straightforward. Profit equals selling price minus cost price. When the result is negative it is called a loss. The percentage shown by this tool is calculated on the cost price, which is the convention taught in school and used in most trade discussions in India. For example, buying an item for 500 rupees and selling it for 650 gives a profit of 150 rupees, which is 30 percent of the cost. Selling the same item for 450 gives a loss of 50 rupees, or 10 percent.`,
    `It helps to separate profit percentage from margin. Margin is calculated on the selling price, so the same 150 rupee profit is about 23 percent margin on a 650 rupee sale. Both are correct, but they answer different questions, and mixing them up is a common reason sellers misprice products. Always check which one your supplier, platform or accountant is using.`
  ],
  steps: [
    `Enter the cost price, meaning everything you paid to acquire or make the item.`,
    `Enter the selling price you charged or plan to charge.`,
    `Click Calculate.`,
    `Read whether the result is a profit or a loss and by how much.`,
    `Check the percentage against your target, for example 20 percent over cost.`,
    `Adjust the selling price and recalculate until the result matches your goal.`
  ],
  feats: [
    `Pricing products for a shop, market stall or online marketplace.`,
    `Checking whether a discount still leaves a profit.`,
    `Comparing suppliers by calculating the return on each.`,
    `Teaching profit and loss problems in school and college.`,
    `Reviewing monthly sales to find items that lose money.`,
    `Negotiating bulk deals with a clear minimum price.`
  ],
  tips: [
    `Include all costs in the cost price: shipping, packaging, platform fees and returns.`,
    `Do not forget GST. Use the GST Calculator to separate tax from your real revenue.`,
    `Test a few discount levels before running a sale, using the Discount Calculator.`,
    `Track slow-moving stock, because money tied up in unsold items is a hidden cost.`,
    `Round prices to attractive numbers only after you confirm they still give a healthy profit.`,
    `Keep a record of your calculations so you can compare months.`
  ],
  faq: [
    [`How do I calculate profit percentage?`, `Subtract the cost price from the selling price, divide the result by the cost price and multiply by 100. The tool does this for you automatically.`],
    [`What is the difference between profit and margin?`, `Profit percentage is based on cost price, while margin is based on selling price. For the same sale, margin is always a smaller number than profit percentage.`],
    [`Does the tool include tax or fees?`, `No. It uses only the two numbers you type. Add your extra costs into the cost price for a realistic result.`],
    [`Can I use it for loss calculations?`, `Yes. If the selling price is lower than the cost price, the tool reports a loss and its percentage.`]
  ]
};
TOOLGUIDES["youtube-embed-code-generator"] = {
  ov: [
    `Embedding a video means showing it directly on your own web page so visitors can play it without leaving your site. Blogs, online courses, product pages and portfolios use this all the time. The usual method is to copy an iframe snippet from YouTube, but the share menu hides it, and it is easy to grab the wrong link format when all you have is a short youtu.be address or a Shorts URL.`,
    `The YouTube Embed Code Generator accepts a normal watch link, a short link, a Shorts link or an embed link and extracts the 11-character video ID. It then produces a clean iframe code that you can paste into HTML, a CMS, a website builder or a documentation page. Everything runs in your browser and no video is downloaded, copied or hosted by ToolsNest. The video continues to be served by YouTube, and you must respect its terms and the rights of the creator.`
  ],
  more: [
    `An iframe is simply a window into another page. The code produced here points that window to the YouTube embed address of your video, with a standard 560 by 315 pixel size, which has a 16 by 9 shape suitable for most layouts. You can change the width and height numbers to make it larger or smaller, or wrap it in a responsive container so it scales on mobile screens.`,
    `Embedding is better than uploading the video yourself for most websites. YouTube handles streaming, adaptive quality and device compatibility, which saves your hosting bandwidth and keeps pages light. It also means views count toward the original video, which helps the creator. Just remember that private or deleted videos will not play, and videos whose owners disable embedding will show an error.`
  ],
  steps: [
    `Open the video on YouTube and copy its address from the browser bar or the Share button.`,
    `Paste the link into the tool.`,
    `The iframe code is generated immediately, or press Run.`,
    `Click Copy result.`,
    `Paste the code into the HTML or the custom code block of your page.`,
    `Save the page and preview it to confirm the video plays.`
  ],
  feats: [
    `Bloggers adding tutorials and reviews to posts.`,
    `Teachers building course pages with lecture videos.`,
    `Businesses placing product demos on landing pages.`,
    `Developers testing embeds in templates.`,
    `Portfolio owners showing showreels.`,
    `Documentation writers adding walkthroughs to help centres.`
  ],
  tips: [
    `Place the video near the text that explains it, and add a short written summary for readers who cannot play audio.`,
    `Make the container responsive so it fits phone screens.`,
    `Avoid embedding many videos on one page, which slows loading.`,
    `Only embed videos you have the right to show, and keep the original title and credit.`,
    `Check that embedding is allowed for the video, since some owners disable it.`,
    `Add a meaningful title attribute for accessibility.`
  ],
  faq: [
    [`Which link formats work?`, `Standard watch links, youtu.be short links, Shorts links, embed links and a bare 11-character video ID all work.`],
    [`Does this download the video?`, `No. The tool only builds the embed code. The video is streamed by YouTube.`],
    [`Why does my embedded video show an error?`, `The video may be private, deleted, age-restricted or set by its owner to disallow embedding.`],
    [`Can I change the size?`, `Yes. Edit the width and height numbers in the code, or place the iframe in a responsive wrapper.`]
  ]
};
TOOLGUIDES["gst-calculator"] = {
  ov: [
    `Goods and Services Tax is part of almost every purchase and invoice in India, yet people often calculate it wrongly. The mistake is usually in the direction: adding tax to a base price is simple multiplication, but taking tax out of a price that already includes it is a different calculation. Errors of this kind lead to wrong invoices, confused customers and mismatched accounts.`,
    `The GST Calculator handles both directions. Choose the amount, pick a rate of 5, 12, 18 or 28 percent, and select whether to add GST to a base price or remove GST from a tax-inclusive price. It shows the tax amount and the final figure. The tool runs in your browser, stores nothing and is meant for quick estimates. Rates and rules can change and may differ for specific goods, so check official sources or ask a tax professional for filing and compliance.`
  ],
  more: [
    `When adding GST, the tax equals the amount multiplied by the rate divided by 100, and the total is the amount plus the tax. For 1,000 rupees at 18 percent, GST is 180 and the total is 1,180. When removing GST, you cannot subtract 18 percent from 1,180, because the tax was calculated on the smaller original amount. Instead divide by 1.18 to get 1,000, and the tax is the difference of 180.`,
    `In many transactions the tax is split equally into CGST and SGST for sales inside a state, or charged as IGST for sales between states. The total rate is the same either way, so this calculator gives you the combined figure. If you need the split, simply halve the tax amount for CGST and SGST.`
  ],
  steps: [
    `Enter the amount in rupees.`,
    `Select the GST rate from the dropdown.`,
    `Choose Add GST if your amount is before tax, or Remove GST if it already includes tax.`,
    `Click Calculate.`,
    `Read the GST amount and the final value.`,
    `Copy the result into your invoice or sheet.`
  ],
  feats: [
    `Small businesses preparing quotations and invoices.`,
    `Shoppers checking how much of a bill is tax.`,
    `Freelancers quoting prices with and without GST.`,
    `Accountants cross-checking figures quickly.`,
    `Students learning how indirect tax works.`,
    `Sellers setting a tax-inclusive price for marketplaces.`
  ],
  tips: [
    `Confirm the correct rate for your product or service before calculating.`,
    `Use Remove GST when a price tag says inclusive of all taxes.`,
    `Keep amounts in rupees with two decimals on invoices.`,
    `Do not apply discounts and tax in the wrong order. Follow your invoice rules.`,
    `Save a record of tax collected for filing returns.`,
    `Treat the tool as a helper, not a replacement for professional advice.`
  ],
  faq: [
    [`Why is removing GST not just subtracting the percentage?`, `Because the percentage was originally applied to the smaller pre-tax amount. You must divide the inclusive price by one plus the rate to reverse it.`],
    [`Which GST rates are included?`, `The tool offers 5, 12, 18 and 28 percent, which cover the common slabs.`],
    [`Does it show CGST and SGST separately?`, `It shows the total GST. For intra-state sales you can divide that amount equally between CGST and SGST.`],
    [`Is this an official tax tool?`, `No. It is an estimator. Check government notifications or consult a professional for official rates and filing.`]
  ]
};
TOOLGUIDES["sip-calculator"] = {
  ov: [
    `A Systematic Investment Plan lets you invest a fixed amount at regular intervals, usually every month, in a mutual fund. It builds discipline, avoids the stress of timing the market and lets you start with small sums. Because each instalment is invested for a different length of time and returns compound, the final value is not a simple multiplication, which is why a calculator is so useful.`,
    `The SIP Calculator estimates the future value of your plan from three inputs: monthly investment, expected yearly return and the number of years. It shows how much you invested, the estimated returns and the total value. The numbers are projections based on a constant assumed rate, whereas real market returns vary and are not guaranteed. The tool runs in your browser, stores nothing and is educational, not investment advice.`
  ],
  more: [
    `The calculation treats each monthly payment as growing at the monthly equivalent of your annual rate. Money invested in the first month compounds for the longest time and contributes the most growth, while the last instalment barely grows. This is why starting early matters more than investing larger amounts later.`,
    `Try a comparison. Investing 5,000 rupees a month for ten years at an assumed 12 percent grows to roughly 11.6 lakh from 6 lakh invested. Extend the period to twenty years and the value rises to nearly 50 lakh from 12 lakh invested. Doubling the time more than quadruples the outcome, which shows the power of compounding and patience.`
  ],
  steps: [
    `Enter the monthly amount you plan to invest.`,
    `Enter an expected annual return. Use a cautious figure.`,
    `Enter the number of years.`,
    `Click Calculate.`,
    `Read the invested amount, estimated returns and total value.`,
    `Try different amounts and durations to build a plan that fits your goal.`
  ],
  feats: [
    `Planning savings for a house, education or retirement.`,
    `Comparing the effect of ten, fifteen and twenty years.`,
    `Deciding how much to raise your SIP each year.`,
    `Teaching children about compounding.`,
    `Checking a distributor's promised returns for realism.`,
    `Setting realistic expectations before investing.`
  ],
  tips: [
    `Use conservative return assumptions. Higher numbers make projections look better than reality.`,
    `Increase your SIP when your income rises.`,
    `Stay invested through market ups and downs for long goals.`,
    `Compare different funds using the CAGR Calculator on past values.`,
    `Remember that fund charges and taxes reduce actual returns.`,
    `Speak with a registered adviser before making investment decisions.`
  ],
  faq: [
    [`Are SIP returns guaranteed?`, `No. Mutual fund returns depend on markets and can be lower or negative. The tool uses a constant rate only for illustration.`],
    [`What return rate should I assume?`, `There is no right answer. Many people test several values, such as 8, 10 and 12 percent, to see a range.`],
    [`Does it include taxes and fund expenses?`, `No. It shows gross estimated growth. Actual results will be lower after costs and taxes.`],
    [`Why does a longer period help so much?`, `Returns earn further returns, so growth accelerates over time. Early instalments benefit the most.`]
  ]
};
TOOLGUIDES["age-calculator"] = {
  ov: [
    `Knowing someone's exact age sounds easy until a form asks for it in years, months and days, or you need to check eligibility for an exam, a job, a pension or a school admission as of a specific date. Subtracting birth years in your head gives a rough answer but fails around birthdays, and months of different lengths make day counts tricky.`,
    `The Age Calculator takes a date of birth and shows your exact age in years, months and days, the total number of days lived, and the number of days left until your next birthday. It uses your device date, runs entirely in your browser and stores nothing, so your date of birth stays private. It is handy for application forms, school records, birthday planning and curiosity.`
  ],
  more: [
    `The calculation works by subtracting dates part by part. If the current day of the month is smaller than the birth day, the tool borrows days from the previous month. If the current month is smaller, it borrows twelve months from the year. This is the same method used manually on official forms and gives the answer people expect.`,
    `Eligibility rules often depend on age on a particular date, such as the first of January of the exam year. This calculator uses today as the reference. For a past or future cut-off date, use the Date Difference Calculator with the birth date and the cut-off date and read the day totals.`
  ],
  steps: [
    `Click the Date of birth field and pick the date from the calendar.`,
    `Click Calculate.`,
    `Read your age in years, months and days.`,
    `Check total days lived for fun or records.`,
    `See how many days remain until your next birthday.`,
    `Change the date to calculate another person's age.`
  ],
  feats: [
    `Filling forms that ask for exact age.`,
    `Checking age limits for exams and jobs.`,
    `Planning birthday celebrations and reminders.`,
    `Tracking a baby's growth in months and days.`,
    `Comparing the ages of family members.`,
    `Finding the number of days between two life events with the Date Difference tool.`
  ],
  tips: [
    `Enter the date of birth exactly as on official documents.`,
    `For cut-off date eligibility, use the Date Difference Calculator.`,
    `Remember that leap years add an extra day in February.`,
    `Double check month and day order when your device uses a different date format.`,
    `Keep a record of age calculations used in applications.`,
    `Do not share personal dates on public websites unnecessarily.`
  ],
  faq: [
    [`Is my date of birth stored?`, `No. The calculation happens in your browser and ToolsNest does not receive or save it.`],
    [`How are months calculated?`, `Complete months since your last birthday are counted, with days borrowed from the previous month when needed.`],
    [`Can I calculate age on a past date?`, `This tool uses today. For another date, use the Date Difference Calculator.`],
    [`Does it handle leap years?`, `Yes. The browser date system accounts for leap years automatically.`]
  ]
};
TOOLGUIDES["percentage-calculator"] = {
  ov: [
    `Percentages appear everywhere: discounts in shops, marks in exams, interest on loans, growth in reports and nutritional labels on food. Many people can estimate ten or fifty percent mentally but get stuck with numbers like 17.5 percent of 2,340. A calculator removes the chance of slips and speeds up everyday decisions.`,
    `The Percentage Calculator finds X percent of any number. Enter the percentage and the value, press Calculate, and the answer appears instantly. It is paired on ToolsNest with the Percentage Change and What Percent Is X of Y tools, so you can handle the three most common percentage questions in one place. Everything runs locally in your browser and nothing is stored.`
  ],
  more: [
    `The idea is simple: a percentage is a fraction of one hundred. To find 15 percent of 800, multiply 800 by 15 and divide by 100, which gives 120. The same logic works in reverse for questions like what percent 120 is of 800, which is 120 divided by 800 times 100, or 15 percent.`,
    `Percentage change is slightly different. If a price rises from 100 to 125, the increase is 25 percent of the original. If it then falls from 125 back to 100, that is a decrease of 20 percent, not 25, because the base has changed. Understanding which number is the base prevents many everyday errors in budgeting and reports.`
  ],
  steps: [
    `Enter the percentage you want to find, for example 18.`,
    `Enter the value you want to take it from, for example 2,500.`,
    `Click Calculate.`,
    `Read the answer shown below the button.`,
    `Use Percentage Change if you are comparing an old and new value.`,
    `Use What Percent Is X of Y when you know two numbers and want the ratio.`
  ],
  feats: [
    `Calculating discounts and sale prices.`,
    `Working out marks, scores and attendance.`,
    `Computing tips, commission and tax amounts.`,
    `Checking interest and growth in reports.`,
    `Splitting budgets by percentage.`,
    `Helping students with maths homework.`
  ],
  tips: [
    `Identify the base number first. Percentages always refer to a base.`,
    `Remember that increasing and then decreasing by the same percentage does not return to the start.`,
    `Convert percentages to decimals by dividing by 100 for use in spreadsheets.`,
    `Round only at the end of multi-step calculations.`,
    `Check results with simple benchmarks like 10 and 50 percent.`,
    `Use the Discount Calculator for shopping and the GST Calculator for tax.`
  ],
  faq: [
    [`How do I find a percentage of a number?`, `Multiply the number by the percentage and divide by 100. The tool does it automatically.`],
    [`What is the difference between percentage and percentage points?`, `Going from 10 percent to 12 percent is a rise of two percentage points, but a 20 percent increase relative to the original rate.`],
    [`Can I enter decimals?`, `Yes. Values such as 7.5 percent work.`],
    [`Is the result rounded?`, `Results show up to two decimal places.`]
  ]
};
TOOLGUIDES["uuid-generator"] = {
  ov: [
    `A UUID, or universally unique identifier, is a 128-bit value written as 32 hexadecimal characters in five groups, such as 123e4567-e89b-42d3-a456-426614174000. Software uses UUIDs as labels for database records, files, sessions and API requests because they can be generated anywhere, at any time, without checking with a central server, and the chance of two being identical is vanishingly small.`,
    `The UUID Generator creates five random version 4 UUIDs each time you press the button, using your browser's secure random generator. They are generated on your device and are not stored or logged by ToolsNest. Developers use them for test data, mock records, temporary keys and unique file names, and students use them to learn how identifiers work.`
  ],
  more: [
    `Version 4 UUIDs are based on random numbers. Of the 128 bits, six are fixed to mark the version and variant, leaving 122 random bits. That gives about 5.3 undecillion possible values. Even if a company generated a billion IDs per second for decades, a collision would remain extremely unlikely.`,
    `UUIDs are not secrets and are not designed for security by themselves. They are good for uniqueness, but anyone who learns one can use it. If you need an unguessable token for access control, use a dedicated secret generation method and keep it private. Also note that random UUIDs are not sorted by time, which may affect database index performance in very large tables.`
  ],
  steps: [
    `Open the tool.`,
    `Click Generate to create five new UUIDs.`,
    `Read the list in the result box.`,
    `Click Copy to place them on your clipboard.`,
    `Paste them into your code, test data, spreadsheet or configuration.`,
    `Click Generate again for a fresh set.`
  ],
  feats: [
    `Creating primary keys for test databases.`,
    `Naming uploaded files without clashes.`,
    `Generating request or correlation IDs for logs.`,
    `Seeding mock data for demos.`,
    `Producing unique identifiers in distributed systems.`,
    `Learning about identifier formats.`
  ],
  tips: [
    `Do not use UUIDs as passwords or secret keys.`,
    `Store them as native UUID or binary types in databases when possible to save space.`,
    `Keep a consistent format, lowercase with hyphens, across systems.`,
    `For time-ordered IDs consider newer versions designed for sorting.`,
    `Never hand-edit UUIDs, since this can break the version bits.`,
    `Use the Password Generator for secrets instead.`
  ],
  faq: [
    [`Can two UUIDs be the same?`, `In theory yes, but the probability with version 4 is so tiny that it is treated as impossible in practice.`],
    [`Which version does this tool create?`, `Version 4, which is random-based.`],
    [`Are the UUIDs saved by ToolsNest?`, `No. They are created in your browser and never leave your device.`],
    [`Can I generate more than five?`, `Each press creates five. Press again and combine the lists if you need more.`]
  ]
};
TOOLGUIDES["jwt-decoder"] = {
  ov: [
    `A JSON Web Token is a compact string that many websites and APIs use to prove who you are after you log in. It looks like three blocks of random characters separated by dots, but it is actually structured data. Developers often need to peek inside a token to see which user it belongs to, which permissions it carries or when it expires, especially when debugging a login problem.`,
    `The JWT Decoder reads the first two parts of a token, the header and the payload, and shows them as readable formatted JSON. It runs entirely in your browser, so the token is not sent to ToolsNest. Importantly, decoding does not verify the signature, so it cannot tell you whether the token is genuine. Treat real tokens as passwords and avoid pasting live production tokens into any website.`
  ],
  more: [
    `The three parts are the header, the payload and the signature. The header states the signing algorithm and token type. The payload carries claims such as the subject identifier, issuer, issued-at time and expiry time, usually written as Unix timestamps. Both parts are only Base64URL encoded, which is why anyone can read them. The signature is created with a secret or private key and is what actually proves integrity.`,
    `Common claims include sub for the subject, iat for issued at, exp for expiry and aud for the audience. Convert exp and iat to dates with the Unix Timestamp Converter to see whether a token has expired. If a login keeps failing, an expired or wrongly scoped token is one of the first things to check.`
  ],
  steps: [
    `Copy the JWT from your browser storage, request header or log.`,
    `Paste it into the input box.`,
    `The header and payload are displayed automatically.`,
    `Check claims such as exp, iat, sub and roles.`,
    `Convert timestamps with the Unix Timestamp tool if needed.`,
    `Remove or revoke the token if you pasted a live one by mistake.`
  ],
  feats: [
    `Debugging authentication in web and mobile apps.`,
    `Checking expiry times of access tokens.`,
    `Inspecting claims and roles during development.`,
    `Learning how token-based login works.`,
    `Comparing tokens issued by different providers.`,
    `Support engineers diagnosing user login issues.`
  ],
  tips: [
    `Never trust a token just because it decodes. Always verify the signature on the server.`,
    `Do not store sensitive data in a JWT payload, since it is readable by anyone.`,
    `Use short expiry times for access tokens.`,
    `Prefer test tokens when using online tools.`,
    `Check for stray spaces or line breaks when decoding fails.`,
    `Rotate secrets if a token has been exposed.`
  ],
  faq: [
    [`Does decoding verify the token?`, `No. Verification needs the secret or public key and is done on the server.`],
    [`Why can I read the payload without a key?`, `Because it is only Base64URL encoded, not encrypted.`],
    [`Is my token uploaded?`, `No. Decoding happens locally in your browser, but you should still avoid pasting live production tokens.`],
    [`What does an invalid JWT error mean?`, `The string does not have the expected dot-separated structure or contains characters that cannot be decoded.`]
  ]
};
TOOLGUIDES["uuid-generator"].more.push(`In practice, developers meet UUIDs in many places without noticing. A mobile app may give every note a UUID so that notes created offline on two phones never clash when they sync later. A web service may attach a UUID to each request so that a single failed call can be traced through logs from the browser to the database. Cloud storage systems often rename uploaded files to UUIDs to avoid two users overwriting each other's files. Seeing a few examples side by side in this tool helps you recognise the pattern: eight characters, three groups of four and a final group of twelve, with the digit 4 at the start of the third group marking the random version.`);
TOOLGUIDES["percentage-calculator"].more.push(`Here are a few worked examples you can try straight away. To find a 15 percent tip on a 1,240 rupee restaurant bill, enter 15 and 1,240 and read 186. To see how much a 30 percent discount takes off a 2,499 rupee jacket, enter 30 and 2,499 for a saving of about 749.70. To find the marks equal to 72 percent of 650, enter 72 and 650 to get 468. Repeating such quick checks builds confidence, and they are also a good way to double-check a figure shown on a bill, a payslip or an exam result before you rely on it.`);
