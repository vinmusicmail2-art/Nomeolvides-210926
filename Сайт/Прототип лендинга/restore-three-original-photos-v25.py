from pathlib import Path
from PIL import Image, ImageOps

base_dir = Path(r"U:\Ресторан Баски\AKSAY-GRILL-Claud\Сайт\Прототип лендинга")
base = base_dir / "landing-concept-WORKING-BASE.png"
out = base_dir / "landing-concept-v25-original-photos-restored.png"

interior = Path(r"U:\Ресторан Баски\IMAGES\ИНТЕРЬЕР\ГОТОВЫЕ\photo_2026-08-29_18-28-17.jpg")
fish = Path(r"U:\Ресторан Баски\IMAGES\КУХНЯ\photo_2026-08-29_20-20-43.jpg")

canvas = Image.open(base).convert("RGB")

def paste_fit(src_path: Path, box: tuple[int, int, int, int]) -> None:
    x, y, w, h = box
    src = Image.open(src_path).convert("RGB")
    fitted = ImageOps.fit(src, (w, h), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
    canvas.paste(fitted, (x, y))

# Keep the existing frames and all surrounding pixels untouched.
# Only the visible photo interiors are replaced.
paste_fit(interior, (628, 76, 908, 430))
paste_fit(interior, (1238, 533, 278, 215))
paste_fit(fish, (252, 533, 206, 225))

canvas.save(out, format="PNG", optimize=False)
print(out)
print(canvas.size)
