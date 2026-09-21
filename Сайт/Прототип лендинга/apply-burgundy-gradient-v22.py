from pathlib import Path
import numpy as np
from PIL import Image

root = Path(r"U:\Ресторан Баски\AKSAY-GRILL-Claud\Сайт\Прототип лендинга")
source = root / "landing-concept-v21-quality-restored.png"
output = root / "landing-concept-v22-burgundy-chocolate-gradient.png"

arr = np.array(Image.open(source).convert("RGB"), dtype=np.float32)
h, w, _ = arr.shape
yy, xx = np.mgrid[0:h, 0:w]

# Target only the three dark background panels; leave cream panels and photos alone.
regions = [
    (0, 0, 628, 514),
    (0, 786, 505, 1024),
    (1015, 786, 1536, 1024),
]

for x1, y1, x2, y2 in regions:
    sub = arr[y1:y2, x1:x2]
    sh, sw, _ = sub.shape
    sy, sx = np.mgrid[0:sh, 0:sw]
    # Reference-like direction: richer burgundy above/left, chocolate below/right.
    t = (0.58 * sx / max(sw - 1, 1) + 0.42 * sy / max(sh - 1, 1))
    top = np.array([76.0, 8.0, 13.0])
    bottom = np.array([43.0, 17.0, 13.0])
    target = top[None, None, :] * (1.0 - t[..., None]) + bottom[None, None, :] * t[..., None]

    luminance = 0.2126 * sub[..., 0] + 0.7152 * sub[..., 1] + 0.0722 * sub[..., 2]
    # Background pixels receive the grade; bright copy and highlights remain protected.
    strength = np.clip((92.0 - luminance) / 92.0, 0.0, 1.0)[..., None] * 0.34
    arr[y1:y2, x1:x2] = sub * (1.0 - strength) + target * strength

Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB").save(output, "PNG", optimize=True)
print(output)
print(f"{w}x{h}")
print(output.stat().st_size)
