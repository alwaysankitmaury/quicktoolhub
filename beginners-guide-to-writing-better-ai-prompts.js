// Blog post: beginners-guide-to-writing-better-ai-prompts
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
export default ["beginners-guide-to-writing-better-ai-prompts",
  "A Beginner's Guide to Writing Better AI Prompts",
  "Why most AI prompts underperform, and a simple structure you can reuse to get sharper, more useful answers from ChatGPT, Gemini, Claude and other chatbots.",
  "2026-08-17", 8, ["chatgpt-ai-prompt-generator", "ai-prompt-improver", "ai-image-prompt-generator", "summarize-rewrite-prompt"],
  String.raw`<p>Ask an AI chatbot a vague question and you'll usually get a vague, generic answer back. Ask it a specific, well-structured question and the quality jumps noticeably, often without needing a more advanced model at all. The difference almost always comes down to the prompt itself. This guide breaks down what separates a weak prompt from a strong one, and gives you a repeatable structure you can apply to nearly any task.</p>

<h2>Why "write me a blog post" rarely works well</h2>
<p>A request like "write me a blog post about marketing" gives the AI almost nothing to work with: no audience, no angle, no length, no tone, no format. The model has to guess at every one of those decisions, and it will guess generically, because generic is the statistically safest bet across every possible blog post about marketing. The fix isn't to write a longer sentence — it's to fill in the specific gaps the AI is being forced to guess at.</p>

<h2>The five things every good prompt answers</h2>
<ul>
<li><b>Role:</b> Who should the AI act as? "A senior copywriter," "an experienced math teacher," and "a blunt startup advisor" each produce a noticeably different voice and level of assumed knowledge.</li>
<li><b>Task:</b> What exactly do you want done? Be as concrete as possible — "write five Instagram captions" rather than "help with Instagram."</li>
<li><b>Context:</b> What background does the AI need to avoid generic output? Your industry, your audience, constraints, examples of what you like or dislike.</li>
<li><b>Format:</b> How should the answer be structured — bullet points, a table, a numbered list, a short paragraph, JSON for a program to read?</li>
<li><b>Tone:</b> Formal, casual, funny, persuasive, technical? Tone shapes word choice as much as content.</li>
</ul>
<p>Fill in all five and even a short prompt will usually outperform a long, rambling one that's missing several of them. A <a href="/tools/chatgpt-ai-prompt-generator">ChatGPT / AI Prompt Generator</a> is built around exactly this structure, so you're prompted for each piece rather than having to remember the checklist yourself.</p>

<h2>Show, don't just tell</h2>
<p>If you have an example of output you like — a caption style, a tone of voice, a report format from a previous project — pasting a short sample into your prompt and asking the AI to match that style is far more effective than describing the style in abstract terms. "Write it like this example" consistently beats "write it in a punchy, engaging tone," because "punchy" means something slightly different to everyone, including the model.</p>

<h2>Ask the AI to ask you questions first</h2>
<p>For anything moderately complex, adding a line like "before answering, ask me up to three clarifying questions if anything is unclear" changes the whole interaction. Instead of the AI silently guessing at missing details and producing something that misses the mark, it surfaces the gaps explicitly, and you get a chance to fill them in before any real work happens. This single habit prevents a huge share of frustrating back-and-forth revisions.</p>

<h2>Iterate instead of starting over</h2>
<p>If the first response isn't quite right, it's almost always faster to give specific feedback on that response ("make the second paragraph shorter and cut the exclamation marks") than to rewrite your original prompt from scratch. Chatbots retain the conversation context, so small, targeted corrections compound quickly into exactly what you need.</p>

<h2>Turning a rough idea into a structured prompt</h2>
<p>Not every prompt needs to be built field by field. If you already have a rough idea in mind — "something about how to start a YouTube channel" — an <a href="/tools/ai-prompt-improver">AI Prompt Improver</a> can expand that into a properly structured request with built-in instructions to ask clarifying questions and avoid generic advice, saving you the work of structuring it by hand every time.</p>

<h2>Prompting for images and video is a different skill</h2>
<p>Image and video generators respond to a noticeably different style of prompt: short, dense, descriptive phrases rather than full sentences, with explicit mentions of style, lighting, mood and aspect ratio. "A lone traveller walking through a bamboo forest at sunrise, cinematic lighting, slow dolly-in, 16:9" will consistently outperform a flowery paragraph description, because these models respond more to specific visual tags than to narrative prose. An <a href="/tools/ai-image-prompt-generator">AI Image Prompt Generator</a> structures exactly this kind of tag-style prompt for you, including a negative prompt section to exclude common artifacts.</p>

<h2>Keep a personal prompt library</h2>
<p>Once you find a prompt structure that reliably works for a recurring task — weekly social captions, meeting summaries, code review requests — save it somewhere you can quickly find again, swapping in the new specifics each time rather than rebuilding it from memory. Over a few months, this saved library becomes genuinely valuable, often more useful than any single clever one-off prompt.</p>

<h2>A simple template to start from</h2>
<p>If you only remember one structure, use this: "Act as [role]. My task is [specific task]. Here is the relevant context: [details]. Please format the answer as [format] in a [tone] tone. If anything is unclear, ask me up to three questions first." Filling in those five blanks will noticeably improve almost any request you send to an AI chatbot, regardless of which one you use.</p>`
  ];
