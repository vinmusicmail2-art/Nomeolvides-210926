from pathlib import Path
from PIL import Image

root = Path(r"U:\Ресторан Баски\AKSAY-GRILL-Claud\Сайт\Прототип лендинга")
base_path = root / "landing-concept-WORKING-BASE.png"
generated_path = Path(r"C:\Users\VINMUSIC\.codex\generated_images\01a05294-998a-7ab0-8daa-a456f8505754\exec-c9eb5e80-5a9a-4ab9-b5a0-e718428584c8.png")
out_path = root / "landing-concept-v24-armenian-card-illustrations-only.png"

base = Image.open(base_path).convert("RGB")
generated = Image.open(generated_path).convert("RGB")

# Only the illustration interiors are copied. Frames, titles, spacing, and every other pixel stay from base.
boxes = [
    (505, 638, 595, 752),
    (636, 638, 722, 752),
    (764, 638, 850, 752),
    (892, 638, 978, 752),
]
for box in boxes:
    base.paste(generated.crop(box), box[:2])

base.save(out_path, "PNG", optimize=True)
print(out_path)
print(f"{base.width}x{base.height}")
print(out_path.stat().st_size)
