// Blog post: gst-discounts-profit-margins-for-small-sellers
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
export default ["gst-discounts-profit-margins-for-small-sellers",
  "A Practical Guide to GST, Discounts and Profit Margins for Small Sellers",
  "How to calculate GST correctly in both directions, price a discount without accidentally losing money, and understand profit margin versus markup for a small business.",
  "2026-10-06", 8, ["gst-calculator", "discount-calculator", "profit-loss-calculator", "percentage-calculator"],
  String.raw`<p>If you sell anything, even as a small side business, three numbers come up constantly: how much GST to add or remove from a price, how a discount actually affects your bottom line, and whether a price is genuinely profitable once costs are accounted for. Getting any of these slightly wrong, repeated across dozens or hundreds of transactions, adds up to real money. This guide walks through each calculation in plain terms.</p>

<h2>GST: adding it versus removing it are different calculations</h2>
<p>A surprisingly common mistake is calculating GST the same way regardless of whether you're starting from a price before tax or after tax — but these are genuinely different calculations, not just the same formula run forward and backward.</p>
<h3>Adding GST to a base price</h3>
<p>If a product costs ₹1,000 before tax and GST is 18%, the tax amount is simply 18% of ₹1,000, which is ₹180, making the final price ₹1,180. This part is straightforward multiplication.</p>
<h3>Removing GST from a tax-inclusive price</h3>
<p>Here's where it gets less intuitive: if a product's final, tax-inclusive price is ₹1,180 and GST is 18%, the tax portion is <em>not</em> 18% of ₹1,180 (which would incorrectly give ₹212.40). Instead, the original pre-tax price has to be calculated first by dividing ₹1,180 by 1.18, giving back the original ₹1,000, and the tax amount is the difference between the two. This distinction trips up a lot of people doing quick mental math, which is exactly why a dedicated <a href="/tools/gst-calculator">GST Calculator</a> with both an "add GST" and "remove GST" mode is worth using rather than trying to reverse-engineer the percentage by hand.</p>

<h2>Discounts: a percentage off doesn't mean what people assume</h2>
<p>A "20% off" discount seems simple, but sellers sometimes make a subtle error when trying to work backward from a target discounted price to figure out what the original price needs to be, or when stacking a discount on top of GST in the wrong order. The basic calculation is straightforward with a <a href="/tools/discount-calculator">Discount Calculator</a>: take the original price, calculate the discount amount as a percentage of that original price, and subtract. The part worth double-checking is the order of operations when GST is also involved — generally, whether GST is calculated before or after a discount depends on local tax rules and how the discount is structured (as a price reduction versus a separate coupon), so it's worth confirming the correct sequence for your specific situation rather than assuming.</p>

<h2>Profit margin versus markup: two different percentages people confuse</h2>
<p>This is probably the single most common pricing mistake among small sellers: treating "margin" and "markup" as the same thing, when they're calculated from different bases and give meaningfully different numbers.</p>
<ul>
<li><b>Markup</b> is the percentage added on top of your cost price to arrive at your selling price. If something costs you ₹500 and you sell it for ₹650, your markup is ₹150 on a ₹500 cost, which is a 30% markup.</li>
<li><b>Margin</b> is the percentage of the selling price that is profit. Using the same numbers, your profit of ₹150 is calculated against the ₹650 selling price, not the ₹500 cost, giving roughly a 23% margin.</li>
</ul>
<p>These numbers will always differ (margin is always a smaller percentage than markup, for the same actual profit amount), and confusing the two leads to real pricing mistakes — setting a price expecting a 30% margin when you've actually calculated a 30% markup means your real profit margin is noticeably lower than you think. A <a href="/tools/profit-loss-calculator">Profit & Loss Calculator</a> clears this up by working from your actual cost and selling price directly, showing the real profit amount and percentage rather than requiring you to remember which formula applies.</p>

<h2>A worked example pulling it together</h2>
<p>Say you buy a product for ₹500, want to apply an 18% GST, and plan to sell it at a price that gives you a 25% margin after tax. Working this out requires combining all three ideas: the GST-inclusive cost needs to be calculated first (₹500 × 1.18 = ₹590), and then the selling price needs to be set such that ₹590 represents 75% of that price (since a 25% margin means your cost is 75% of the selling price), giving a target selling price of roughly ₹786.67. Running each of these steps through dedicated calculators, rather than trying to chain the whole formula in your head, dramatically reduces the chance of a small arithmetic slip turning into a mispriced product.</p>

<h2>A quick reference you can reuse</h2>
<ul>
<li>Adding GST to a price: multiply by (1 + GST rate).</li>
<li>Removing GST from a price: divide by (1 + GST rate), don't just subtract the percentage.</li>
<li>Markup = profit ÷ cost price. Margin = profit ÷ selling price. They're never the same number for a given profit amount.</li>
<li>Always double-check whether a discount should be applied before or after tax for your specific tax jurisdiction and discount type.</li>
</ul>
<p>None of this requires advanced math — just being deliberate about which base number (cost price, selling price, or pre-tax price) a given percentage is actually being calculated against, since that's where almost every pricing mistake quietly originates.</p>`
  ];
