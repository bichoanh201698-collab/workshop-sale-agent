# Sales Agent Event — deck HTML

24 slide, người trình bày: **Tín Trương** — AI Agent Expert, ClawExperts.com.
Tổ chức: OpenClaw VN · Tài trợ: ClawExperts.com.
Khổ canvas **4480 × 1120 px** (4:1). Deck tự scale về đúng tỉ lệ trên mọi màn hình.

Nội dung và thứ tự slide lấy từ **`ClawExperts Event in August.pptx`**; cover lấy từ
**`slide mo dau.pptx`** (cả hai đều là bản khách gửi, giữ ở máy chứ không đưa lên repo).
Bản bóc tách chi tiết: `docs/CONTENT-v2.md`. Bản cũ 28 slide còn trong `src/slides/_v1/`.

## Chạy deck
```bash
./build.sh          # gộp src/slides/*.html → index.html
open index.html     # hoặc kéo file vào Chrome
```
Không cần server, không cần internet — font đã nhúng sẵn trong `assets/fonts/`.

Trình chiếu tại event: mở `index.html` trong Chrome → bấm **F** để fullscreen.

## Phím tắt khi trình bày
| Phím | Tác dụng |
|---|---|
| `→` `←` / `Space` / click | slide sau / trước |
| `1`–`9` | nhảy tới slide |
| `Home` / `End` | slide đầu / cuối |
| `F` | fullscreen |
| `O` | overview — xem toàn bộ deck dạng lưới, click để nhảy |
| `R` | chạy lại animation của slide hiện tại |
| `G` | hiện lưới 24 cột + safe area (dùng khi canh layout) |
| `C` | đổi fit-mode: contain → cover → 1:1 |

URL có hash slide (`index.html#12`) nên có thể mở thẳng đúng slide, và reload không mất vị trí.

## Cấu trúc
```
index.html            ← file build ra, KHÔNG sửa tay
build.sh              ← gộp slide
shot.sh   <n>         ← render slide thứ n của deck ra PNG 4480×1120
shot1.sh  <file>      ← render riêng 1 partial (dùng khi đang sửa 1 slide)
src/slides/NN-*.html  ← mỗi file là 1 slide
src/css/theme.css     ← design system: màu, type scale, layout, component, trang trí
src/css/engine.css    ← khung stage + animation primitives
src/js/deck.js        ← điều hướng, animation, overview
docs/DESIGN.md        ← quy ước design, đọc trước khi sửa slide
docs/CONTENT.md       ← bản bóc tách nội dung 24 slide từ pptx của khách
assets/fonts/         ← Be Vietnam Pro + IBM Plex Mono (self-host, chạy offline)
```

## Sửa nội dung một slide
1. Mở đúng file trong `src/slides/`.
2. Sửa chữ.
3. `./shot1.sh src/slides/05-fact.html` để xem lại đúng khổ thật.
4. `./build.sh`.

## Xuất file ảnh / PDF
```bash
for i in $(seq 1 24); do ./shot.sh $i "out/slide-$(printf %02d $i).png"; done   # PNG 4480×1120
```
`shot.sh` mở deck ở chế độ `?export=1` nên ảnh xuất ra không có progress bar hay thanh điều khiển.
Bộ 24 PNG đã render sẵn trong `out/`.
In PDF: mở `index.html` trong Chrome → Print → khổ ngang, tắt margin.
Cần `.pptx` thì import bộ PNG trên vào PowerPoint với slide size 4480×1120 px.

## Cover
Cover dựng lại theo `slide mo dau.pptx`: strip đối tác + pill "Workshop" + lockup tiêu đề X3, đặt trên
**background động dựng bằng CSS/SVG** — lưới tổ ong trôi chậm, vầng sáng đỏ thở, và một tia sáng chéo
quét ngang mỗi 9 giây. Không dùng ảnh nền bitmap của khách vì nó chỉ 836×1881, phóng lên 4480px sẽ mờ.
Ảnh chân dung speaker đã bỏ theo yêu cầu.

## Màu brand
Accent là đỏ **`#E61F28`** — lấy mẫu trực tiếp từ logo và ribbon trong pptx của khách.
Sơ đồ slide 19–20 dùng thêm xanh rừng `--forest` cho vai trò nhân viên số, và đỏ chỉ dành cho
người điều hành hoặc trường hợp vướng mắc.

## Nguyên tắc nội dung (từ rehearsal checklist)
- "Inbox tăng gấp 3" luôn kèm nhãn **kịch bản giả định**; biểu đồ slide 06 là quan hệ minh hoạ, không phải số liệu đo được.
- Số của Mái Nhà Việt là **kết quả một khách hàng báo lại**, không phải cam kết.
- Không hứa doanh thu / số đơn — customer value ở đây là **hypothesis cần kiểm chứng**.
- Không hứa agent thay thế hoàn toàn nhân viên thật.
- Không mở đầu bằng thuật ngữ AI (model, RAG, vector, MCP, automation).
- Slide cuối chốt bằng **câu hỏi mở** cho khán giả, không thêm ý mới.
