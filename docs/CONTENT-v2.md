# Content spec v2 — 31 slides

Source of truth: **`ClawExperts Event in August.pptx`** (client, 4480×1120 — same canvas as this deck).
It re-orders and re-scopes the earlier speaker guide, so v2 replaces `docs/CONTENT.md` entirely.
Every v1 slide is preserved in `src/slides/_v1/` — port markup from there wherever a slide carries over.

Copy marked **verbatim** is the client's own wording. Do not rewrite it, do not "improve" it,
do not add sentences of your own. Where the pptx carried a design brief ("Ý tưởng visual" /
"Chỉ dẫn cho team thiết kế"), it is reproduced under **Client art direction** — treat it as binding.

## What changed at the deck level
- **Accent is now the event crimson `#E61F28`** (sampled from the client's own logo/ribbon art), not the old vermilion. It is already swapped in `theme.css`; use `var(--accent)`.
- **`t-accent` is now white-on-crimson**, not ink-on-vermilion. Check contrast on those slides.
- **`.brandbar`** puts the organiser (OpenClaw VN) + sponsor (ClawExperts.com) lockups bottom-left. Put it on **every slide except the cover** (the cover carries them larger). On dark themes it self-plates.
- **Diagram palette** for slides 19–20: `--forest` = a digital role, `--accent` crimson = the human owner or an exception. Primitives `.node`, `.node .hd/.bd/.out`, `.node.owner`, `.conn` are in `theme.css`.
- Assets in `assets/brand/`: `logo-organizer-openclaw.png`, `logo-sponsor-clawexperts.png`, `speaker-tin-truong.png`, `qr-facebook.png`, `qr-zalo.png`, `ribbon-clawweb.png` (all transparent PNG).

## Open questions flagged to the client — do NOT invent answers
**All three were answered by the client — resolved as follows:**
1. **RESOLVED.** The pptx cover sub-line *"Build workflow đầu tiên: Tổng hợp, nhập liệu & báo cáo tự động"* was indeed a leftover; the client confirmed this event is Sale Agent. The slide now reads **"Tạo nhân viên tư vấn số đầu tiên cho shop của bạn"** — *this wording is ours, not the client's*, and lives in its own element on slide 01 so one edit replaces it.
2. **RESOLVED.** The ribbon belongs on the slides but had to say Sale Agent. `ribbon-clawweb.png` is therefore unused; the ribbon is rebuilt as the `.ribbon` CSS component reading **"Sale Agent Event"**. Change the label once in each slide partial (or search-replace) if the client wants a series number.
3. Slide 05 marks the dashboard as *"ngày cuối sẽ fill hình"* — the numbers are built as type inside a clearly-sized slot a screenshot can drop into later. **Still open on the client's side.**
4. Q&A: the client confirmed shipping with the two QR codes they have. The third (cộng đồng Sale Agent) renders as a dashed empty slot so the gap is visible rather than hidden. **Still needs a code from the client.**
5. QR pairing was not stated anywhere, so it was derived from the shape coordinates on the pptx cover: `qr-facebook.png` sat above "Cộng đồng Facebook", `qr-zalo.png` above "Cộng đồng Zalo". The files are renamed accordingly. The codes are stylised dot-matrix QRs that no local decoder could read, so this pairing is positional evidence, not a decode — **worth one phone check before the event.**

---

## 01 · Backdrop — check-in — `t-ink` — **NEW, client request**
The screen that stands behind check-in while guests arrive. Built as a **step-and-repeat**, which is what
an event wall physically is: the event name and the two partner names tiled, rotated ‑9°, sunk to ~5%
opacity, with a second brighter pass masked to the centre so the wall has depth. The whole field drifts.

Ground is a dark red gradient with a bloom that breathes on a 13s cycle; a scrim pulls the centre back
down so the partner lockup — dark artwork — keeps its contrast against the bloom. Legible in the middle:
partner strip, the Workshop pill, and the wordmark **Sale Agent Event** with *Agent* in brand crimson.

**The drift oscillates rather than loops.** A looping translate would have to equal exactly one tile width
to avoid a visible snap, and here the tile width is set by text metrics; drifting out and back has no seam
at all. Both passes run on the same 46s clock — at different durations they separate and read as doubled
text rather than depth.

Nothing on this slide is meant to be read from the back of the room. It is furniture, and it carries no
`.brandbar` or `.ribbon`: the partner names are already in the pattern and in the lockup.

## 02 · Cover — `t-ink` — **rebuilt from the client's `slide mo dau.pptx`**
The client replaced the cover and asked for the speaker portrait to be dropped. Their reference is a
centred stack over a dark hex-network field. Layout and assets follow it exactly:
- `assets/brand/cover-partners.png` — organiser + sponsor strip (OpenClaw · ClawExperts · Firegroup), top centre
- `assets/brand/cover-badge-workshop.png` — the "Workshop" pill
- `assets/brand/cover-title-x3.png` — the title lockup: *X3 NĂNG SUẤT BÁN HÀNG / NHỜ AI TƯ VẤN & HỖ TRỢ CHỐT ĐƠN 24/7*

**Sized to 80% at the client's request** — the three stacked assets and their gaps were scaled down
rather than transformed, so the layout maths stays honest, and the stack now centres vertically instead
of hanging from the top edge with a hole underneath.

**The background is rebuilt live in CSS + SVG, not their flattened PNG.** Their bitmap is 836×1881 and
would need a 2.4× upscale to fill a 4480px wall; rebuilding it keeps it crisp and lets it move, which is
what the client asked for. Four layers: a red-to-charcoal base, a seamless honeycomb tile that drifts
(two copies, the warm one masked to the red side), a red bloom that breathes, and the reference's diagonal
light edge plus a beam that sweeps across every 9s. Reference kept at `docs/ref/ref-01-cover-bg.png`.

The grain layer is deliberately *not* animated on this slide and the bloom's blur is reduced — three large
moving layers plus a full-stage re-rendering grain is what would drop frames on an event laptop.

The cover carries **no `.brandbar` and no `.ribbon`**: the partner strip and the Workshop pill do that job.
It also carries **no QR codes** — the client's reference has none, so the community codes now live only on
slides 10 and 24.

## 03 · Speaker — Tín Trương — `t-ink` — file `03-speaker-tin.html`
**Copy — nothing beyond this is on the slide, and nothing was invented:**
Speakers · **Tín Trương** · Lead Producer — AI Agent Business Solutions · ClawExperts.com

**Photo:** `assets/brand/speaker-tin-halfbody.png` — the client's half-body cutout, a transparent PNG
(source `docs/ref/ref-02-speaker-halfbody.png`, 552×698, subject 425×649). It replaced the head crop
taken out of their 552px speaker card, which had only ~316px of subject and had to be pushed 1.75×.
The cutout stands on the red ground anchored to the card's bottom edge, at 97% of card height — at 100%
or more the crop's top padding vanishes and the hair clips against the frame.

Card is 640×790 portrait with the crimson glow frame and the client's "Speakers" pill straddling the
bottom edge. Their card repeats the name in a black band under the photo; that band is dropped, because
the name is already the largest thing on the stage. Name + roles and the card sit as one centred pair
with a hairline between them, so the composition reads as deliberate rather than as two blocks pushed to
opposite edges. The only motion is a slow shine crawling across the frame.

**Role settled by the client:** *Lead Producer — AI Agent Business Solutions*. The older
*AI Agent Expert* (cover lockup) and *Chuyên gia thiết kế giải pháp AI Agent cho doanh nghiệp*
(original speaker guide) are superseded.

## 04 · Agenda — `t-paper` — **DONE, do not touch** (`03-agenda.html`)

## 05 · Divider — Bài Toán Kinh Doanh: Mái Nhà Việt — `t-ink` · `.divider`
**Retitled by the client.** Was *"Case study: Mái Nhà Việt / X3 năng suất với Sale Agent"*; now:
**Title:** Bài Toán Kinh Doanh: **Mái Nhà Việt**
**Sub:** Hơn **3.000 sản phẩm**, **1-2 nhân sự**, traffic mỗi ngày **80-100 tin nhắn**.

Single line now, so the component's `line-height:1` is fine again; the sub-line is pulled up to 50px
because those three numbers are the point of the slide.

**Marquee changed to match the reframing:** it used to shout the *results* (X3 năng suất · 47m25s → 6s ·
600 khách · 85%/15%), which contradicts a divider that now frames the *problem*. It carries the problem's
own numbers instead — 3.000 sản phẩm · 1–2 nhân sự · 80–100 tin nhắn/ngày, and inbox dồn · tồn kho · giá ·
chính sách · ngoài giờ. The results still appear on slide 05, where they belong.

## 06 · Mái Nhà Việt x3 năng suất — `t-ink` · `l-stack` + `.stat` — **NEW**
**Headline (verbatim):** Doanh nghiệp Mái Nhà Việt x3 năng suất
**Three results (verbatim, split into stat + caption):**
- `47m25s → 6s` — thời gian trung bình 1 khách hàng được trả lời
- `600+` — khách hàng được tư vấn xuyên suốt dịp lễ 1–2/9
- `85% / 15%` — lọc 85% lượng khách hàng không quan tâm · bàn giao chính xác 15% khách hàng có nhu cầu
Port the stat treatment from `_v1/06-fact.html` — but note the first figure is a *before → after*, not a fraction, so `.stat .num` needs a variant. Mark the slide as a customer result, not a promise.

## 07 · Nếu inbox tăng gấp 3 — `t-ink-2` · `l-center`
**Cut to a single sentence, then reworded by the client.** The slide carries nothing but:
> **Nếu inbox tăng gấp 3, shop có còn tư vấn đúng, phản hồi kịp và không bỏ sót khách cần người hỗ trợ ngay không?**

Three balanced lines at 150px, `tăng gấp 3` accented with a `grow-x` underline. The longer wording
dropped the size from 162 to 150px and added a third line; widest line runs 766→3717, well inside the
safe area. Gone with the earlier trim: the sub-line about mùa lễ/viral, the inline-SVG response-speed
curve, the *"Khi khách đến nhiều hơn…"* conclusion, the *"Không thay thế con người…"* line, and the
**"kịch bản giả định" badge**.

**⚠** That badge was an explicit requirement from the client's own rehearsal checklist — *"Trình bày
'traffic tăng gấp 3' như số liệu đã chứng minh"* is listed under **cần tránh**. As a single bare
question the slide still does not state that ×3 is hypothetical, so the speaker has to say it aloud.

## 08 · Scale traffic, Scale năng lực — `t-ink` · `l-stack` — **NEW, client request**
**Title:** Scale traffic, **Scale năng lực**
**Four nodes, left to right, joined by arrows** (client's wording, one typo fixed — *tuyền* → *tuyển*):
1. Inbox nổ nhanh hơn khả năng phản hồi, tư vấn thủ công
2. Sản phẩm nhiều, tư vấn lặp lại tốn thời gian
3. Tăng traffic, tăng áp lực vận hành
4. Tuyển thêm nhân sự, đào tạo

Read as a chain rather than a list: each answer to growing traffic creates the next pressure. Node 04 is
amber instead of crimson — it is the conventional answer, and the tension it leaves is what slide 09
resolves. Node text is bottom-aligned so all four share a baseline.

## 09 · Nhân viên tư vấn số — `t-accent` · `l-center` — **NEW, client request**
Nothing on the slide but the term, at 330px on the crimson flood. Emphasis is by **weight**, as the
client asked: *Nhân viên* at 500, **tư vấn số** at 900. It lands as the answer to slide 07's chain, so
it stays deliberately bare — no sub-line, no icons.

## 10 · Divider — `t-ink` · `.divider`
**Title (verbatim):** Trước khi tạo nhân viên số, hãy hiểu nhân viên đó sẽ làm gì.
Port from `_v1/12-session2.html`. Strip items: Là gì → Cần giao những gì → Hồ sơ nhân sự.

## 11 · Nhân viên tư vấn số là gì? — `t-ink` · `l-stack`
**Trimmed at the client's request** to headline + question + answer chipset:
**Headline:** Nhân viên tư vấn số là gì?
**Question (reworded by the client):** Muốn giao việc tư vấn cho một nhân viên số, shop cần chuẩn bị gì?
**Chipset:** Sản phẩm · Giá · Tình trạng hàng · Chính sách · Cách nói chuyện · Lúc nào cần chuyển cho chủ shop
Removed: the sub-line *"Chuyển cách nghĩ từ 'chatbot' sang một vai trò nhân viên cụ thể…"*, and the
câu chốt, which is now its own slide (09).

## 12 · Câu chốt — `t-paper` · `l-center` — **NEW, split out of slide 10 at the client's request**
Nothing on the slide but the sentence, three balanced lines at 184px:
> Những điều một **nhân viên thật** cần biết cũng chính là những điều chúng ta cần chuẩn bị cho **nhân viên số**.

Restyled at the client's request: **white ground, black body copy, crimson bold on the highlight.** The
highlight lands on the two things the sentence equates — *nhân viên thật* and *nhân viên số* — rather than
on the connective, since that pairing is the whole point of the line. The underline swipe is gone; the
red weight is the emphasis now.

The ground is the deck's warm `--paper` `#F6F3ED`, matching every other light slide — a pure-white
version was tried first and the client asked for the warm tone instead.

## 13 · Nhân viên số cũng cần một "hồ sơ nhân sự" — `t-paper`
**Trimmed at the client's request** to headline + the seven items:
**Headline:** Nhân viên số cũng cần một "hồ sơ nhân sự"
**Seven items (headings only):** Mô tả công việc · KPI và tiêu chuẩn làm việc · Quy trình bán hàng ·
Đào tạo và học sản phẩm · Đào tạo qua tình huống thật · Quy trình phối hợp và bàn giao · Đánh giá và đào tạo lại

Removed: both sub-paragraphs (*"Nhân viên số cũng cần được thiết kế như một nhân viên vừa mới gia nhập…"*
and *"Điểm quan trọng không phải là một bên là người, một bên là công nghệ…"*) and the lead-in
*"Nếu ví nhân viên số như một nhân sự mới, shop cần chuẩn bị:"*. With four beats cut to two, the headline
went to 172px and the item headings to 68px so the slide still fills its height.

## 14 · Chat với An — `t-ink` — file `14-chat-with-an.html`
**Headline (client's wording):** Chat với **An**, nhân viên tư vấn trái cây và mâm ngũ quả
Two balanced lines at 168px with `An` in crimson, the eyebrow *Trước khi vào hands-on*, and the QR —
nothing else. The right-hand instruction block that was here (the "Facebook page" tag, the *"Mở camera…"*
line, the three-step list) was removed at the client's request. Headline and code sit as one centred pair
with a hairline between them, the speaker slide's recipe; two lone elements anchored to opposite safe
edges left a hole mid-stage. QR is `assets/brand/qr-facebook-page.png` at 660px, scan line still sweeping.

**Note:** the QR image never changed — it is the code the client supplied for the Facebook page, and it is
a stylised dot-matrix code no local decoder can read. The slide now names An as the destination, so
**worth one phone check that this code really opens a chat with An.**

## 15 · Divider — `t-ink` · `.divider`
**Title (client's wording, revised):** Tuyển dụng và đào tạo nhân viên **đầu tiên của bạn**
Broken over two balanced lines; on one line it ran to the safe edge and orphaned "của bạn".
**Also on the slide (verbatim, must be legible from the back — attendees type it in):** Trial code: `CE_SALEWS1`
Port from `_v1/20-session3.html`. Give the trial code its own high-contrast plate; it is the one thing on this slide the room has to act on.

## 16 · Hãy tạo một nhân viên tư vấn số đầu tiên — `t-paper` · `l-rail`
**Headline (client's wording, revised):** Hãy tạo một nhân viên tư vấn số đầu tiên
**Five steps (verbatim):** Chọn vai trò và đặt tên cho nhân viên. · Chọn ngành hàng hoặc nhóm sản phẩm đầu tiên. · Nạp kiến thức tối thiểu. · Test bằng câu hỏi thật. · Sửa một câu trả lời và test lại.
Port `_v1/21-handson.html`.

## 17 · Nhân viên cần biết những gì để trả lời được? — `t-ink` · `l-stack`
**Headline (reworded by the client):** Nhân viên cần biết những gì để trả lời được?
**Seven items (verbatim):** Tên shop và ngành hàng. · 5–10 sản phẩm đầu tiên. · Giá, thuộc tính và tình trạng hàng. · Chính sách giao hàng, đổi trả, thanh toán. · Câu hỏi thường gặp. · Giọng nói và cách xưng hô của shop. · Ranh giới: trường hợp nào phải chuyển cho người thật.
Port `_v1/22-feed-data.html`. Keep item 07 emphasised.

## 18 · Test bằng 5 câu khách thật sẽ hỏi — `t-paper` · `l-split`
**Headline (verbatim):** Test bằng 5 câu khách thật sẽ hỏi
**Five questions (verbatim):** Shop còn mẫu này không? · Giá bao nhiêu? · Sản phẩm nào phù hợp với nhu cầu của em? · Có freeship hoặc đổi trả không? · Cho chị đặt hàng hoặc chuyển người thật tư vấn.
**Checklist (verbatim):** Agent trả lời đúng và an toàn ít nhất 3 câu đầu tiên; câu hỏi vượt phạm vi phải biết chuyển người thật.
Port `_v1/23-test-5.html` — it already solves five bubbles on one ultrawide stage.

## 19 · Nhân viên số không cần hoàn hảo ngay từ lần đầu — `t-ink` · `l-split`
**Headline (verbatim):** Nhân viên số không cần hoàn hảo ngay từ lần đầu.
**Sub (verbatim):** Điều quan trọng là mình biết cách kiểm tra, sửa và train lại sau mỗi lần test
Port `_v1/24-refine.html`. **Its before/after bubble copy and ×/✓ lists were written by a builder, not the client** — keep the before/after device (it earns the slide) but the invented lines are yours to justify; if in doubt, cut them down to the two verbatim sentences plus the device.

## 20 · Báo chí đang nói về nhân viên số — `t-paper` · `.press` — **NEW, client request**
### and again at 30, immediately before Q&A
A press-clipping **bento** built for FOMO: five real articles with their own cover photos — one feature
clipping spanning both rows, four smaller ones beside it, so the wall reads as "lots of coverage".
**All five carry headline *and* lead** — the four side cards were headline-only at first and read as
half-empty; their leads are verbatim from the same articles.
**Every headline and lead is verbatim from the published article** and every thumbnail is that article's
own cover image, pulled from the live page. Dates are the articles' own.

Covers live in `assets/press/` (normalised to JPEG ≤900px, 311KB for all five — VTV's shipped as WEBP
behind a .jpg name, which would not have rendered reliably when served by extension).

**⚠ One thumbnail is a best guess:** VnEconomy's 11/04/2026 article exposes no `og:image` to a plain
fetch, so `vneconomy1.jpg` is the first article-body image from that page, dated 09/04. If the client
wants the exact cover, it needs to come from them.

| Outlet | Date | Headline |
|---|---|---|
| baochinhphu.vn | 04/05/2026 | 'Doanh nghiệp một người': Cú hích chính sách cho làn sóng khởi nghiệp số |
| VnEconomy | 11/04/2026 | "Nhân viên số": Lời giải cho bài toán năng suất trong kỷ nguyên AI |
| VTV.vn | 16/06/2026 | Công nghệ AI mở ra kỷ nguyên làm việc cùng "đồng nghiệp số" |
| Tuổi Trẻ · KTSG | 16/04/2026 | Công ty chỉ với AI và hai nhân viên tạo ra doanh thu 1,8 tỉ đô la Mỹ |
| VnEconomy | 31/07/2026 | Những công ty triệu USD chỉ có một nhân viên trong kỷ nguyên AI |

**The title — *"Báo chí đang nói về nhân viên số."* — is ours, not the client's.** It is deliberately
flat: the clippings do the persuading, so the headline only has to name what the room is looking at.

The slide appears **twice, identically** (20 and 30). Its CSS is the `.press` component in `theme.css`
rather than a scoped block, precisely so the repeat cannot drift out of sync with the first showing —
the two partials differ only in `id`, `data-slide` and `data-title`.

**⚠ Check before the event:** these are third-party headlines and cover photos about the market, not
about ClawExperts or this product. Nothing on the slide claims otherwise, and it should stay that way.

## 21 · Divider — `t-ink` · `.divider`
**Title (verbatim, two lines):** Từ nhân viên số / Đến công ty số
Port from `_v1/12-session2.html` or `_v1/20-session3.html`. Strip items: Một nhân viên → Bốn chuyên môn → Cả đội phối hợp.

## 22 · Speaker — Hoàng Lê — `t-ink` — **NEW, client request** — file `22-speaker-hoang.html`
Placed immediately after the *Từ nhân viên số → Đến công ty số* divider, which is the section he presents.
**Copy — all of it:** Speakers · **Hoàng Lê** · Program Manager — AI Agent Business Solution

Built with the same construction as slide 02 so the two speaker slides read as a pair: centred name/role,
hairline, portrait card with the crimson glow frame and the "Speakers" pill straddling the bottom edge.
Photo is `assets/brand/speaker-hoang-halfbody.png`, the client's transparent cutout
(`docs/ref/ref-18-speaker-hoang.png`, subject 426×528). His crop is a wider frame than Tín's — 0.79 against
0.66 — so it is sized to **84%** of card height rather than 97%; that lands his head at the same size as
Tín's and keeps a comfortable red margin at the sides.

**Two things not on the slide, deliberately:**
- **No organisation line.** Tín's card carries *ClawExperts.com* because the client's own card did; nothing
  was supplied for Hoàng, and his employer is not ours to assume. Send it and it takes one line.
- The client's two titles differ by one letter — Tín is *…Business **Solutions***, Hoàng is
  *…Business **Solution***. Both are reproduced exactly as given. **Worth a look** — if it is a typo,
  these are the only two places it appears.

## 23 · Bạn vừa có một nhân viên số. Còn cả một công ty thì sao? — `t-ink` · `l-center` — **NEW**
**Copy (verbatim, exactly two lines):**
Bạn vừa có một nhân viên số.
Còn cả một công ty thì sao?
**Client art direction:** *"Dùng chữ lớn làm điểm mở. Đặt 'nhân viên số' ở dòng đầu và 'công ty' ở dòng sau với màu nhấn. Không cần hình văn phòng. Khán giả vừa trải nghiệm Sale Agent nên hai dòng này đã có ngữ cảnh cụ thể. Cho dòng đầu xuất hiện trước; dừng một nhịp rồi hiện câu hỏi. Nếu không dùng hiệu ứng, giữ khoảng cách rõ giữa hai dòng. Không bổ sung định nghĩa hay danh sách vai trò vào slide mở."*
So: two lines only, accent on "nhân viên số" and "công ty", a real beat between them (≥700ms), nothing else on the slide.

## 23–25 · rebuilt from `docs/ref/brief-hoang-le.html` (client brief, bản biên tập 13)
The brief re-scoped Hoàng Lê's session to **7 slides** and renamed the four digital roles away from
department names. It is kept local, not committed — it carries the full speaker script.
Section map: **22** = S1 · **23** = S2 · **24** = S3 · **25** = S4 · **26** = S5 · **27** = S6 · **28** = S7.

### 24 · Mỗi nhân viên số, một phần việc rõ ràng. — `t-paper` · `l-rail`
Four **equal** cards, each an employee's job scope — the brief is explicit: *"Tên nhân viên là phần nổi
bật. Không dùng tên phòng ban làm tiêu đề thẻ."* So each card is eyebrow **Nhân viên số** + scope + output:
- **Quản lý nội dung Fanpage** — Chuẩn bị bài · Lịch nội dung · Chờ duyệt
- **Tư vấn khách hàng** — Tư vấn · Ghi nhận nhu cầu đặt hàng *(carries the quiet "Đã gặp ở phần trước" tie-back)*
- **Theo dõi hàng hóa** — Nhập–xuất–tồn · Báo hàng cần bổ sung
- **Đối soát thanh toán** — Khớp khoản thu · Nêu chênh lệch

No numbering, no arrows, no size hierarchy. The tie-back sits *above* the divider rule so the four output
lines keep a common baseline — below it, the card with a tie-back pushed its output line out of alignment
with the other three.

### 25 · Công ty số là nơi cả đội phối hợp làm việc — `t-paper`
Same three-tier chart, relabelled to the brief:
- top: **Bạn & người phụ trách** — Giao ưu tiên · Duyệt · Quyết định *(the only crimson on the slide)*
- middle: the four scopes above, each prefixed **NV** at the client's request so the nodes read as
  employees rather than functions; icons match slide 23's set exactly
  *(slide 23 needs no prefix — its cards already carry a "Nhân viên số" eyebrow)*
- bottom: **Thông tin công ty** (Cùng bản đang có hiệu lực) · **Công cụ kết nối** (Quyền theo phần việc) ·
  **Hồ sơ công việc** (Kết quả & người tiếp nhận)

The brief's constraint stands: the connectors show organisational relationships, **not message flow**, and
the tools tier must not imply every employee can read every piece of data.

### 26 · Từ tin nhắn Zalo đến công việc của cả đội — `t-paper` — **replaces the old fork-join slide**
S4 changed completely: the *"Một đơn hàng cần nhiều chuyên môn"* diamond is retired to
`src/slides/_removed/22-order-flow-fork-join.html`. The new slide walks one illustrated case in four
numbered steps across two simulated Zalo phone screens — customer request and transfer photo → two
digital employees check order A102 → the reconciliation employee reports *chưa ghép được khoản thu* →
a **real accountant** verifies and records the result → A102's new state goes back to the advisor.
Colour discipline: deep green = digital employee, Zalo blue = the channel, crimson = the human.
Constraints from the brief: phone frames keep the 310:660 ratio, the 10:25 message is *before*
verification and 10:28 is the result *after*, and no verification badges — the Zalo UI is a simulation,
not proof of a shipped integration.

**⚠ Removed at the client'''s request:** the *"Tình huống minh họa · Giao diện Zalo mô phỏng"* note. The
brief lists keeping that label under its **Team slide** rules (*"Giữ nhãn Tình huống minh họa ở slide 4"*),
so the slide no longer marks the A102 story and the Zalo UI as illustrative. The speaker now has to say it.

## 27 · Bạn giao mục tiêu. Đội ngũ thực hiện. — `t-ink` · `l-stack` — **NEW**
**Headline (verbatim):** Bạn giao mục tiêu. Đội ngũ thực hiện.
**Three lines (verbatim, verb + question):**
- Giao mục tiêu — Cần đạt điều gì?
- Xem kết quả — Công việc đến đâu?
- Quyết định — Tiếp tục hay điều chỉnh?
**Layout note (client feedback, two rounds):** the connector between verb and question was elastic, which
threw the question to the far right edge — on a 4480px wall that is a full head-turn per row. It is now a
short fixed rule, and the rows are **centred** (the headline stays left), so each row reads inside one eye
fixation while the full-width hairlines carry the stage width. Checked the rest of the deck for the same pattern: every other `flex:1` is an independent
content column (three stats, six chips, three QR blocks), not a phrase split across the stage.

**Client art direction:** *"Ba câu hỏi điều hành đặt theo chiều đọc… Không dùng lại bảng hai cột 'AI chuẩn bị / bạn quyết định' vì bảng đó thu hẹp vai trò người chủ vào một lần phê duyệt. Tiêu đề chiếm một phần ba trên cùng. Phần dưới có ba dòng ngắn; nhấn động từ 'Giao', 'Xem', 'Quyết định'. Không thêm hình người."*
So: headline occupies the top third; three lines below with the **verbs** carrying the accent; no human figures, no two-column table.

## 28 · Bạn đã có nhân viên số đầu tiên — `t-accent` · `l-center` — **NEW**
**Copy (verbatim, exactly two lines):**
Bạn đã có nhân viên số đầu tiên.
Bạn muốn xây đội ngũ nào tiếp theo?
**Client art direction:** *"Hai dòng chữ lớn. Dòng đầu ghi nhận trải nghiệm vừa có; dòng sau mở ra câu hỏi về đội ngũ của khán giả. Dùng màu nhấn cho 'đội ngũ'. Giữ nhiều khoảng trống để câu hỏi có sức nặng. Cho dòng đầu xuất hiện trước, dừng một nhịp rồi hiện câu hỏi… Không thêm hình hoặc ý mới. Kết bằng câu hỏi để khán giả tự hình dung."*
Two lines, generous emptiness, accent on "đội ngũ", a real beat between the lines, nothing else.

## 29 · Cùng xây đội ngũ số phía sau bạn — `t-ink` — **NEW, S7 of the brief**
**Copy:** eyebrow *ClawExperts · Đồng hành triển khai* · headline **Cùng xây đội ngũ số phía sau bạn.** ·
*Bắt đầu từ một phần việc thực tế của công ty.* · *Quét QR để trao đổi về nhu cầu triển khai*

The speaker name and title block was **removed at the client'''s request** — the brief had it here, but
slide 18 already introduces him, so the name now appears once in the deck. The QR grew to 560px with the
space that freed up.

The brief's own instruction is that headline and QR are the two focal points and nothing else competes:
no map, no policy figures, no international examples.

**QR — supplied and in place.** `assets/brand/qr-hoang-zalo.png` (1920×1920, the speaker'''s Zalo code)
replaced the brief'''s example.com sample. White surround kept per the brief so it scans from a distance.
It is a styled dot-matrix code with a logo overlay, so no local decoder can read it — **test-scan with a
phone once before the event**, which is what the brief asks for anyway.

**⚠ Name and title differ between sources.** The brief's S7 says *Hoàng Nguyễn Lê* /
*AI – Agent Solutions Program Manager*; the client's later message says *Hoàng Lê* /
*Program Manager - AI Agent Business Solution*. The slide follows the later message so it matches
slide 18. Confirm which is right.

## 31 · Q&A — `t-paper` · centred pair
**Headline:** Q&A · **Sub:** Hỏi đáp & thảo luận tự do — cứ hỏi thẳng về shop của mình.
**Two community codes**, both real, in identical crimson frames:
- `assets/brand/qr-zalo-community.png` → **Cộng đồng AI Agents Việt Nam**
- `assets/brand/qr-zalo-group-saleagent.png` → **Cộng đồng Sale Agent** (Zalo group *ClawExperts - Sale Agent*)

**Changed at the client's request:** the *Cộng đồng Facebook* block and its code were removed, the
Sale Agent slot — previously a dashed "mã QR chưa có" placeholder — now holds the real group code, and
the first label became **Cộng đồng AI Agents Việt Nam**. The two frames are now identical: the original
`qr-zalo.png` had a red frame baked into the bitmap, which made the pair look mismatched, so it was
stripped and the code rebuilt on a clean white canvas (`qr-zalo-community.png`) with the frame drawn
in CSS for both. With
two codes instead of three the pair no longer stretches to the far edge: Q&A block, hairline, then the
heading plus both codes, all centred as one unit.

*This is the only QR in the deck a local decoder could read:* it resolves to
`https://zaloapp.com/qr/g/z594ovekvacc5rdqduml`, so the crop is verified scannable. It was cut out of a
full-screen Zalo invite screenshot — the square was derived from the code's own geometry rather than
guessed, since the card's title text sits directly above it.

## Removed after client review
- **"Bắt đầu bằng những việc lặp lại nhưng quan trọng"** (was slide 13) — removed at the client's
  request; parked in `src/slides/_removed/`. **Its câu chốt went with it** — *"Nhân viên tư vấn số không
  thay chủ shop. Nhân viên đó giữ nhịp tư vấn để chủ shop không bỏ lỡ khách."* — and so did the three
  starter tasks (FAQ · tư vấn sản phẩm cơ bản · giữ nhịp + chuyển lead). Session 3 now opens straight
  into the hands-on build.
- **"Cùng nhìn lại cách các shop đang tư vấn khách hàng"** (was slide 06) — removed at the client's
  request; the partial is parked in `src/slides/_removed/` rather than deleted. **The audience-survey
  figures went with it** (18/27 · 14/27 · 20/27 from the workshop CSV), so those numbers no longer
  appear anywhere in the deck. The open question about the "fill hình dashboard" slot is moot as a result.
- **The footnote strips on all four session dividers** (04 / 07 / 12 / 18) — removed at the client's
  request, so the four read as one set again. The `.divider .strip` / `.st` / `.cx` rules stay in
  `theme.css` if a progress strip is ever wanted back. Slide 12 keeps its `Trial code: CE_SALEWS1` plate;
  that was never part of the strip.
- **Slide 05's "Kết quả khách hàng" caveat plate** — removed at the client's request. It carried the
  *"kết quả của một khách hàng cụ thể — không phải cam kết"* framing that the original speaker guide's
  rehearsal checklist asked for; the Mái Nhà Việt figures are now presented without that qualifier.

## Rules carried over from v1 (still binding)
- Never present "inbox tăng gấp 3" as measured data — it is a scenario.
- No promise of revenue or order counts; the Mái Nhà Việt figures are one customer's reported result, not a guarantee.
- Never claim the agent fully replaces a human; handoff is part of the design.
- Every slide except the cover carries `.brandbar`.
