from pathlib import Path
from PIL import Image, ImageOps

base_dir = Path(r"U:\Ресторан Баски\AKSAY-GRILL-Claud\Сайт\Прототип лендинга")
base = base_dir / "landing-concept-WORKING-BASE.png"
out = base_dir / "landing-concept-v26-whole-fish-restored.png"
fish = Path(r"U:\Ресторан Баски\IMAGES\КУХНЯ\REDRAW_PREVIEW_2026-08-29\photo_2026-08-29_20-20-43_whole_fish_presentable_preview.png")

canvas = Image.open(base).convert("RGB")
src = Image.open(fish).convert("RGB")
photo_box = (252, 533, 206, 225)
fitted = ImageOps.fit(src, (photo_box[2], photo_box[3]), method=Image.Resampling.LANCZOS)
canvas.paste(fitted, (photo_box[0], photo_box[1]))
canvas.save(out, format="PNG", optimize=False)
print(canvas.size)
