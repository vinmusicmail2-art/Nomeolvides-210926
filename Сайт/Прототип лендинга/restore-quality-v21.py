from pathlib import Path
from PIL import Image, ImageFilter

root = Path(r"U:\Ресторан Баски\AKSAY-GRILL-Claud\Сайт\Прототип лендинга")
source = root / "landing-concept-WORKING-BASE.png"
output = root / "landing-concept-v21-quality-restored.png"

image = Image.open(source).convert("RGB")
# Mild, deterministic sharpening only; no resize, crop, recolor, or geometry changes.
enhanced = image.filter(ImageFilter.UnsharpMask(radius=1.15, percent=135, threshold=3))
enhanced.save(output, format="PNG", optimize=True)
print(output)
print(f"{enhanced.width}x{enhanced.height}")
print(output.stat().st_size)
