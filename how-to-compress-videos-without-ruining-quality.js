// Blog post: how-to-compress-videos-without-ruining-quality
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
export default ["how-to-compress-videos-without-ruining-quality",
  "How to Make a Video Smaller Without Ruining It",
  "What video file size really depends on, which settings matter most, and a simple step-by-step way to shrink a clip in your browser before sharing it.",
  "2026-10-28", 7, ["video-compressor", "video-trimmer", "mute-video", "video-to-reels-shorts-9-16", "extract-audio-from-video"],
  String.raw`<p>A one-minute clip from a modern phone can easily be 100 MB or more. That is too big for most email services, slow to send over mobile data and heavy to keep on a phone with limited storage. The good news is that a few simple choices can shrink a video a lot while it still looks fine on a phone screen.</p>
<h2>What decides the size of a video file</h2>
<p>File size is mostly bitrate multiplied by time. Bitrate is the amount of data used for each second of video. A clip recorded at 8 megabits per second uses about 1 MB every second, so a 60 second clip is about 60 MB. If you cut the bitrate to 1 megabit per second, the same minute becomes roughly 7 to 8 MB, plus a small amount for sound.</p>
<p>Three things control that bitrate in practice: the resolution (how many pixels in each frame), the quality or bitrate setting the encoder is told to use, and the length of the clip. You can change all three.</p>
<h2>Step 1: Remove what you do not need</h2>
<p>The cheapest way to shrink a video is to make it shorter. Open the <a href="/tools/video-trimmer">Video Trimmer</a>, enter a start and an end time in seconds, and keep only the part that matters. Every second removed is a second you never have to store or send. If the picture is useful but the sound is not, the <a href="/tools/mute-video">Mute Video</a> tool saves a silent copy.</p>
<h2>Step 2: Lower the resolution to match where it will be watched</h2>
<p>A phone screen shows a 720p video very well, and a 480p video is acceptable for casual viewing. Full HD or 4K files are only worth their size if the viewer will watch on a large screen. The <a href="/tools/video-compressor">Video Compressor</a> lets you choose a maximum width of 720p, 480p, 360p or 240p. It only shrinks a video and never enlarges one.</p>
<h2>Step 3: Choose a quality level</h2>
<p>The same tool offers three quality levels called Good, Medium and Small file, which correspond to target bitrates of about 1.5, 0.8 and 0.4 megabits per second. As a rough guide, one minute of video at those levels is about 11 MB, 6 MB and 3 MB, plus audio. Start with 480p and Medium. If the result looks too soft, step up to 720p and Good. If it is still too big, go down to 360p and Small file.</p>
<h2>How the browser tool works, and what to expect</h2>
<p>Tools on ToolsNest run inside your browser, so the video is not uploaded to a server. To compress, the browser plays your video and records the result as a new file. That means the work takes about as long as the clip itself: a five minute video needs about five minutes. Keep the browser tab open and in the foreground while it works. The output is a WebM file, which plays in browsers and many players such as VLC. Some apps and phones prefer MP4, so check what your destination accepts before you rely on the result.</p>
<h2>Common situations</h2>
<ul><li><b>Sending a clip over chat or email:</b> trim it, then compress at 480p with Medium quality.</li><li><b>Posting a short vertical video:</b> if your footage is landscape, the <a href="/tools/video-to-reels-shorts-9-16">Video to Reels / Shorts 9:16</a> tool crops the centre into a vertical frame. Record vertically when you can, because cropping uses the pixels you already have.</li><li><b>Keeping only the audio of a talk:</b> <a href="/tools/extract-audio-from-video">Extract Audio from Video</a> saves just the sound, which is far smaller than the full video.</li></ul>
<h2>A short checklist</h2>
<ol><li>Trim the clip to what you need.</li><li>Pick the lowest resolution that is still comfortable to watch.</li><li>Start with Medium quality and compare before going lower.</li><li>Preview the finished file from start to end.</li><li>Keep the original in case you need full quality later.</li></ol>
<p>Compression always trades some sharpness for size. A little testing with one short clip will quickly show you the settings that suit your videos.</p>`];
