# Content spec v2 — 24 slides

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

## 01 · Cover — `t-ink` — **rebuilt from the client's `slide mo dau.pptx`**
The client replaced the cover and asked for the speaker portrait to be dropped. Their reference is a
centred stack over a dark hex-network field. Layout and assets follow it exactly:
- `assets/brand/cover-partners.png` — organiser + sponsor strip (OpenClaw · ClawExperts · Firegroup), top centre
- `assets/brand/cover-badge-workshop.png` — the "Workshop" pill
- `assets/brand/cover-title-x3.png` — the title lockup: *X3 NĂNG SUẤT BÁN HÀNG / NHỜ AI TƯ VẤN & HỖ TRỢ CHỐT ĐƠN 24/7*

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

## 02 · Speaker — Tín Trương — `t-ink` — **NEW, client request**
Reference: `docs/ref/ref-02-speaker-card.png` (the client's own 552px speaker card).
**Copy — nothing beyond this is on the slide, and nothing was invented:**
Speakers · **Tín Trương** · Lead Producer · ClawExperts.com

Rebuilt rather than pasted: their card is 552px square, so it would be soft blown up on a 4480px wall.
The portrait is cropped out of it (`assets/brand/speaker-tin-portrait.png`, 446×316, centred on the
subject) and used at ~1.75× — about the most that stays acceptable — while the crimson glow frame and
the "Speakers" pill are rebuilt live. Their card repeats the name in a black band underneath; that band
is dropped, because the name is already the largest thing on the stage. Name + roles and the portrait sit
as one centred pair with a hairline between them, so the composition reads as deliberate rather than as
two blocks pushed to opposite edges. The only motion is a slow shine crawling across the frame.

**⚠ Role discrepancy to resolve:** this card says **Lead Producer**, but the earlier cover lockup
(`assets/brand/speaker-tin-truong.png`, from `ClawExperts Event in August.pptx`) says **AI Agent Expert**,
and the original speaker guide says *"Chuyên gia thiết kế giải pháp AI Agent cho doanh nghiệp"*.
The slide follows the newest reference. Confirm which title the client wants.

## 03 · Agenda — `t-paper` — **DONE, do not touch** (`03-agenda.html`)

## 04 · Divider — `t-ink` · `.divider`
**Title (verbatim):** Case study: Mái Nhà Việt X3 năng suất với Sale Agent
Use the shared `.divider` pattern. Port from `_v1/04-session1.html`. Strip items for this session:
Kết quả → Bối cảnh → Inbox tăng gấp 3. Marquee keywords: X3 NĂNG SUẤT · 47M25S → 6S · 600 KHÁCH · 85% / 15%.

## 05 · Mái Nhà Việt x3 năng suất — `t-ink` · `l-stack` + `.stat` — **NEW**
**Headline (verbatim):** Doanh nghiệp Mái Nhà Việt x3 năng suất
**Three results (verbatim, split into stat + caption):**
- `47m25s → 6s` — thời gian trung bình 1 khách hàng được trả lời
- `600+` — khách hàng được tư vấn xuyên suốt dịp lễ 1–2/9
- `85% / 15%` — lọc 85% lượng khách hàng không quan tâm · bàn giao chính xác 15% khách hàng có nhu cầu
Port the stat treatment from `_v1/06-fact.html` — but note the first figure is a *before → after*, not a fraction, so `.stat .num` needs a variant. Mark the slide as a customer result, not a promise.

## 06 · Nếu inbox tăng gấp 3 — `t-ink-2` · `l-center`
**Cut to a single sentence at the client's request.** The slide now carries nothing but:
> **Nếu inbox tăng gấp 3, shop có còn giữ được tốc độ phản hồi như hiện tại?**

Two balanced lines at 162px, `tăng gấp 3` accented with a `grow-x` underline. Gone with the trim: the
sub-line about mùa lễ/viral, the inline-SVG response-speed curve, the *"Khi khách đến nhiều hơn…"*
conclusion, the *"Không thay thế con người…"* line, and the **"kịch bản giả định" badge**.

**⚠** That badge was an explicit requirement from the client's own rehearsal checklist — *"Trình bày
'traffic tăng gấp 3' như số liệu đã chứng minh"* is listed under **cần tránh**. As a single bare
question the slide no longer states that ×3 is a hypothetical, so the speaker now has to say it aloud.

## 07 · Divider — `t-ink` · `.divider`
**Title (verbatim):** Trước khi tạo nhân viên số, hãy hiểu nhân viên đó sẽ làm gì.
Port from `_v1/12-session2.html`. Strip items: Là gì → Cần giao những gì → Hồ sơ nhân sự.

## 08 · Nhân viên tư vấn số là gì? — `t-ink` · `l-stack`
**Trimmed at the client's request** to headline + question + answer chipset:
**Headline:** Nhân viên tư vấn số là gì?
**Question:** Trước khi trả lời khách, một nhân viên cần được giao những gì?
**Chipset:** Sản phẩm · Giá · Tình trạng hàng · Chính sách · Cách nói chuyện · Lúc nào cần chuyển cho chủ shop
Removed: the sub-line *"Chuyển cách nghĩ từ 'chatbot' sang một vai trò nhân viên cụ thể…"*, and the
câu chốt, which is now its own slide (09).

## 09 · Câu chốt — `t-accent` · `l-center` — **NEW, split out of 08 at the client's request**
Nothing on the slide but the sentence, three balanced lines at 184px, white on the event crimson:
> **Những điều một nhân viên thật cần biết cũng chính là những điều chúng ta cần chuẩn bị cho nhân viên số.**

`cũng chính là` carries a white `grow-x` underline that lands after the lines are read.

## 10 · Nhân viên số cũng cần một "hồ sơ nhân sự" — `t-paper`
**Trimmed at the client's request** to headline + the seven items:
**Headline:** Nhân viên số cũng cần một "hồ sơ nhân sự"
**Seven items (headings only):** Mô tả công việc · KPI và tiêu chuẩn làm việc · Quy trình bán hàng ·
Đào tạo và học sản phẩm · Đào tạo qua tình huống thật · Quy trình phối hợp và bàn giao · Đánh giá và đào tạo lại

Removed: both sub-paragraphs (*"Nhân viên số cũng cần được thiết kế như một nhân viên vừa mới gia nhập…"*
and *"Điểm quan trọng không phải là một bên là người, một bên là công nghệ…"*) and the lead-in
*"Nếu ví nhân viên số như một nhân sự mới, shop cần chuẩn bị:"*. With four beats cut to two, the headline
went to 172px and the item headings to 68px so the slide still fills its height.

## 11 · Chat với An — `t-ink` — file `11-chat-with-an.html`
**Headline (client's wording):** Chat với **An**, nhân viên tư vấn trái cây và mâm ngũ quả
Two balanced lines at 168px with `An` in crimson, the eyebrow *Trước khi vào hands-on*, and the QR —
nothing else. The right-hand instruction block that was here (the "Facebook page" tag, the *"Mở camera…"*
line, the three-step list) was removed at the client's request. Headline and code sit as one centred pair
with a hairline between them, the speaker slide's recipe; two lone elements anchored to opposite safe
edges left a hole mid-stage. QR is `assets/brand/qr-facebook-page.png` at 660px, scan line still sweeping.

**Note:** the QR image never changed — it is the code the client supplied for the Facebook page, and it is
a stylised dot-matrix code no local decoder can read. The slide now names An as the destination, so
**worth one phone check that this code really opens a chat with An.**

## 12 · Divider — `t-ink` · `.divider`
**Title (verbatim):** Training nhân viên số đầu tiên của bạn
**Also on the slide (verbatim, must be legible from the back — attendees type it in):** Trial code: `CE_SALEWS1`
Port from `_v1/20-session3.html`. Give the trial code its own high-contrast plate; it is the one thing on this slide the room has to act on.

## 13 · Hãy tạo một nhân viên tư vấn số đầu tiên — `t-paper` · `l-rail`
**Headline (client's wording, revised):** Hãy tạo một nhân viên tư vấn số đầu tiên
**Five steps (verbatim):** Chọn vai trò và đặt tên cho nhân viên. · Chọn ngành hàng hoặc nhóm sản phẩm đầu tiên. · Nạp kiến thức tối thiểu. · Test bằng câu hỏi thật. · Sửa một câu trả lời và test lại.
Port `_v1/21-handson.html`.

## 14 · Nạp gì để nhân viên trả lời được? — `t-ink` · `l-stack`
**Headline (verbatim):** Nạp gì để nhân viên trả lời được?
**Seven items (verbatim):** Tên shop và ngành hàng. · 5–10 sản phẩm đầu tiên. · Giá, thuộc tính và tình trạng hàng. · Chính sách giao hàng, đổi trả, thanh toán. · Câu hỏi thường gặp. · Giọng nói và cách xưng hô của shop. · Ranh giới: trường hợp nào phải chuyển cho người thật.
Port `_v1/22-feed-data.html`. Keep item 07 emphasised.

## 15 · Test bằng 5 câu khách thật sẽ hỏi — `t-paper` · `l-split`
**Headline (verbatim):** Test bằng 5 câu khách thật sẽ hỏi
**Five questions (verbatim):** Shop còn mẫu này không? · Giá bao nhiêu? · Sản phẩm nào phù hợp với nhu cầu của em? · Có freeship hoặc đổi trả không? · Cho chị đặt hàng hoặc chuyển người thật tư vấn.
**Checklist (verbatim):** Agent trả lời đúng và an toàn ít nhất 3 câu đầu tiên; câu hỏi vượt phạm vi phải biết chuyển người thật.
Port `_v1/23-test-5.html` — it already solves five bubbles on one ultrawide stage.

## 16 · Nhân viên số không cần hoàn hảo ngay từ lần đầu — `t-ink` · `l-split`
**Headline (verbatim):** Nhân viên số không cần hoàn hảo ngay từ lần đầu.
**Sub (verbatim):** Điều quan trọng là mình biết cách kiểm tra, sửa và train lại sau mỗi lần test
Port `_v1/24-refine.html`. **Its before/after bubble copy and ×/✓ lists were written by a builder, not the client** — keep the before/after device (it earns the slide) but the invented lines are yours to justify; if in doubt, cut them down to the two verbatim sentences plus the device.

## 17 · Divider — `t-ink` · `.divider`
**Title (verbatim, two lines):** Từ nhân viên số / Đến công ty số
Port from `_v1/12-session2.html` or `_v1/20-session3.html`. Strip items: Một nhân viên → Bốn chuyên môn → Cả đội phối hợp.

## 18 · Bạn vừa có một nhân viên số. Còn cả một công ty thì sao? — `t-ink` · `l-center` — **NEW**
**Copy (verbatim, exactly two lines):**
Bạn vừa có một nhân viên số.
Còn cả một công ty thì sao?
**Client art direction:** *"Dùng chữ lớn làm điểm mở. Đặt 'nhân viên số' ở dòng đầu và 'công ty' ở dòng sau với màu nhấn. Không cần hình văn phòng. Khán giả vừa trải nghiệm Sale Agent nên hai dòng này đã có ngữ cảnh cụ thể. Cho dòng đầu xuất hiện trước; dừng một nhịp rồi hiện câu hỏi. Nếu không dùng hiệu ứng, giữ khoảng cách rõ giữa hai dòng. Không bổ sung định nghĩa hay danh sách vai trò vào slide mở."*
So: two lines only, accent on "nhân viên số" and "công ty", a real beat between them (≥700ms), nothing else on the slide.

## 19 · Mỗi nhân viên số đảm nhận một chuyên môn — `t-paper` · `l-rail` — **NEW**
**Headline (verbatim):** Mỗi nhân viên số đảm nhận một chuyên môn
**Four roles (verbatim, role — output):**
- Marketing — Chuẩn bị nội dung chiến dịch
- Kinh doanh — Tư vấn và lập đơn hàng
- Kho — Kiểm tra tồn, chuẩn bị phiếu xuất
- Kế toán — Đối soát đơn và thanh toán
**Client art direction:** *"Bốn chức năng ngang hàng… Mỗi chức năng có một đầu ra và một biểu tượng riêng. Đây là các chuyên môn độc lập, không phải bốn bước hội thoại của Sale Agent. Giữ kinh doanh là điểm nối với phần trước, sau đó mở sang marketing, kho và kế toán. Không tách tư vấn, chăm khách, báo cáo thành ba nhân viên chỉ để tăng số lượng. Nhãn trên slide là chức năng, không khẳng định mỗi chức năng thay thế được cả phòng ban."*
So: four **equal** cards, never a numbered sequence and never arrows between them. One simple inline-SVG icon each (document / order / boxes / ledger). "Kinh doanh" may carry a quiet "đã gặp ở phần trước" tie-back; do not make it bigger than the other three.

## 20 · Công ty số là nơi cả đội phối hợp làm việc — `t-paper` — **NEW, diagram slide**
**Headline (verbatim):** Công ty số là nơi cả đội phối hợp làm việc
**Three tiers (verbatim labels):**
- top: **Bạn điều hành**
- middle: Marketing · Kinh doanh · Kho · Kế toán
- bottom: Thông tin công ty · Công cụ làm việc · Hồ sơ & bàn giao
**Client art direction:** *"Sơ đồ ba tầng: người điều hành ở trên; các vai trò ở giữa; nền tảng làm việc chung ở dưới. Đường nối thể hiện vai trò tiếp cận nền tảng và người chủ điều hành đội ngũ. Đây là sơ đồ tổ chức khái niệm, không phải kiến trúc hệ thống… Giữ hình này là trọng tâm, chiếm khoảng hai phần ba slide. Khi nói, đi từ các vai trò ở giữa xuống nền tảng, rồi lên người điều hành. Có thể dựng lại bằng đối tượng chỉnh sửa được. Không thêm cây, bàn ghế, tòa nhà hoặc hiệu ứng công nghệ. Không vẽ mũi tên giữa mọi cặp nhân viên."*
Reference art: `docs/ref/ref-19-org.png` (16:9 — **you must re-lay it out for 4:1**, not letterbox it).
Build with `.node` / `.conn` primitives + inline SVG icons. Crimson **only** on "Bạn điều hành". Diagram ≈ two thirds of the stage, headline the remaining third.

## 21 · Một đơn hàng cần nhiều chuyên môn — `t-paper` — **NEW, diagram slide**
**Headline (verbatim):** Một đơn hàng cần nhiều chuyên môn
**Nodes (verbatim):**
- **Kinh doanh** — Lập đơn hàng — output: *Đơn A: mã hàng, số lượng*
- **Kho** — Kiểm tra tồn, lập phiếu xuất — output: *Hàng đủ hay thiếu?*
- **Kế toán** — Đối chiếu đơn và thanh toán — output: *Đã thu hay còn thiếu?*
- **Trạng thái đơn hàng** — *Đủ điều kiện xử lý tiếp* / crimson: *Có vướng mắc: chuyển người phụ trách*
**Caption (verbatim):** Cùng một đơn hàng. Mỗi nhân viên một chuyên môn.
**Also required (verbatim from the brief):** the note "Tình huống minh họa", set small.
**Client art direction:** *"Sơ đồ phân nhánh rồi hợp kết quả… Vẽ rõ hai nhánh kho và kế toán cùng nhận mã đơn. Không vẽ thành chuỗi tư vấn–chăm khách–báo cáo. Hai nhánh có thể làm song song theo quy trình thực tế. Dùng biểu tượng đơn hàng, hàng tồn và sổ đối soát để phân biệt nghiệp vụ. Trạng thái tổng hợp là kết quả, không phải một nhân viên thứ tư."*
Reference art: `docs/ref/ref-20-order.png`. A 4:1 stage suits this fork-join far better than the reference's 16:9 — let it run left-to-right across the full width. **Trạng thái đơn hàng must not look like a fourth employee** — give it a visibly different shape from the three role nodes.

## 22 · Bạn giao mục tiêu. Đội ngũ thực hiện. — `t-ink` · `l-stack` — **NEW**
**Headline (verbatim):** Bạn giao mục tiêu. Đội ngũ thực hiện.
**Three lines (verbatim, verb + question):**
- Giao mục tiêu — Cần đạt điều gì?
- Xem kết quả — Công việc đến đâu?
- Quyết định — Tiếp tục hay điều chỉnh?
**Client art direction:** *"Ba câu hỏi điều hành đặt theo chiều đọc… Không dùng lại bảng hai cột 'AI chuẩn bị / bạn quyết định' vì bảng đó thu hẹp vai trò người chủ vào một lần phê duyệt. Tiêu đề chiếm một phần ba trên cùng. Phần dưới có ba dòng ngắn; nhấn động từ 'Giao', 'Xem', 'Quyết định'. Không thêm hình người."*
So: headline occupies the top third; three lines below with the **verbs** carrying the accent; no human figures, no two-column table.

## 23 · Bạn đã có nhân viên số đầu tiên — `t-accent` · `l-center` — **NEW**
**Copy (verbatim, exactly two lines):**
Bạn đã có nhân viên số đầu tiên.
Bạn muốn xây đội ngũ nào tiếp theo?
**Client art direction:** *"Hai dòng chữ lớn. Dòng đầu ghi nhận trải nghiệm vừa có; dòng sau mở ra câu hỏi về đội ngũ của khán giả. Dùng màu nhấn cho 'đội ngũ'. Giữ nhiều khoảng trống để câu hỏi có sức nặng. Cho dòng đầu xuất hiện trước, dừng một nhịp rồi hiện câu hỏi… Không thêm hình hoặc ý mới. Kết bằng câu hỏi để khán giả tự hình dung."*
Two lines, generous emptiness, accent on "đội ngũ", a real beat between the lines, nothing else.

## 24 · Q&A — `t-paper` · `l-split`
**Headline (verbatim):** Q&A
**Also on the slide (verbatim):** QR code join cộng đồng Zalo, cộng đồng Facebook, cộng đồng Sale Agent
The pptx names **three** communities but ships **two** QR images (`qr-facebook.png`, `qr-zalo.png`).
Lay out the two codes you have, label them from the client's list, and **flag the missing third code in your report** — do not duplicate a code to fill the gap and do not invent a URL.
Port the Q&A question list from `_v1/28-qa.html` only if it still fits; the client's slide is just the headline plus the codes, so the questions are optional support, not required copy.

---


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
