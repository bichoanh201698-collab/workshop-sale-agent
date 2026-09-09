# Workshop Sale Agent — deck HTML

Slide cho Session 1–3, người trình bày: **Tín**.
Khổ canvas **4480 × 1120 px** (4:1). Deck tự scale về đúng tỉ lệ trên mọi màn hình.

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
docs/CONTENT.md       ← bản bóc tách nội dung 28 slide từ speaker guide
assets/fonts/         ← Be Vietnam Pro + IBM Plex Mono (self-host, chạy offline)
```

## Sửa nội dung một slide
1. Mở đúng file trong `src/slides/`.
2. Sửa chữ.
3. `./shot1.sh src/slides/05-fact.html` để xem lại đúng khổ thật.
4. `./build.sh`.

## Xuất file ảnh / PDF
```bash
for i in $(seq 1 28); do ./shot.sh $i "out/slide-$(printf %02d $i).png"; done   # PNG 4480×1120
```
`shot.sh` mở deck ở chế độ `?export=1` nên ảnh xuất ra không có progress bar hay thanh điều khiển.
Bộ 28 PNG đã render sẵn trong `out/`.
In PDF: mở `index.html` trong Chrome → Print → khổ ngang, tắt margin.
Cần `.pptx` thì import bộ PNG trên vào PowerPoint với slide size 4480×1120 px.

## Nguyên tắc nội dung (từ rehearsal checklist)
- "Traffic tăng gấp 3" luôn kèm nhãn **kịch bản giả định**, không phải số liệu đã chứng minh.
- Không hứa doanh thu / số đơn — customer value ở đây là **hypothesis cần kiểm chứng**.
- Không hứa agent thay thế hoàn toàn nhân viên thật.
- Không mở đầu bằng thuật ngữ AI (model, RAG, vector, MCP, automation).
- Slide cuối phải chốt bằng **bước tiếp theo 7 ngày**.
