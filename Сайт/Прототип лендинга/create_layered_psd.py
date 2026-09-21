from pathlib import Path

import numpy as np
from PIL import Image
from pytoshop import enums
from pytoshop.user.nested_layers import Group, Image as PsdImage, nested_layers_to_psd


ROOT = Path(r"U:\Ресторан Баски\AKSAY-GRILL-Claud\Сайт\Прототип лендинга")
SOURCE = ROOT / "landing-concept-v17-headline-15-percent-smaller.png"
OUTPUT = ROOT / "landing-concept-v17-layered.psd"


def psd_layer(name, rgba, left=0, top=0, visible=True):
    rgba = np.asarray(rgba, dtype=np.uint8)
    h, w, _ = rgba.shape
    return PsdImage(
        name=name,
        visible=visible,
        top=int(top),
        left=int(left),
        bottom=int(top + h),
        right=int(left + w),
        color_mode=enums.ColorMode.rgb,
        channels={
            0: rgba[:, :, 0],
            1: rgba[:, :, 1],
            2: rgba[:, :, 2],
            enums.ChannelId.transparency: rgba[:, :, 3],
        },
    )


def crop_layer(image, name, box):
    x1, y1, x2, y2 = box
    return psd_layer(name, np.array(image.crop(box).convert("RGBA")), x1, y1, visible=True)


img = Image.open(SOURCE).convert("RGBA")
w, h = img.size

# The exact rendered mockup remains visible as a protected reference layer.
reference = psd_layer("00 — REFERENCE MASTER (LOCKED)", np.array(img), visible=True)

editable = Group(name="01 — EDITABLE COMPONENTS", visible=False, closed=False, layers=[
    Group(name="Backgrounds and panels", visible=True, layers=[]),
    Group(name="Logo", visible=True, layers=[
        crop_layer(img, "Logo — replaceable raster", (40, 10, 380, 135)),
    ]),
    Group(name="Navigation", visible=True, layers=[
        crop_layer(img, "Top navigation", (570, 10, 1525, 75)),
    ]),
    Group(name="Hero text blocks", visible=True, layers=[
        crop_layer(img, "Hero headline — replace text", (45, 135, 410, 285)),
        crop_layer(img, "Hero supporting text — replace text", (45, 300, 405, 405)),
        crop_layer(img, "Welcome line — replace text", (45, 455, 220, 505)),
    ]),
    Group(name="Hero buttons", visible=True, layers=[
        crop_layer(img, "Reservar mesa button", (55, 390, 255, 470)),
        crop_layer(img, "Ver menú button", (250, 390, 390, 470)),
    ]),
    Group(name="Hero illustration", visible=True, layers=[
        crop_layer(img, "Building and boat illustration", (370, 220, 625, 475)),
    ]),
    Group(name="Photos — replaceable raster objects", visible=True, layers=[
        crop_layer(img, "Photo — restaurant interior hero", (628, 76, 1536, 506)),
        crop_layer(img, "Photo — menu fish", (240, 520, 470, 765)),
        crop_layer(img, "Photo — taberna interior", (1225, 520, 1525, 760)),
        crop_layer(img, "Photo — Día de la Cocina Armenia", (445, 505, 1090, 780)),
        crop_layer(img, "Photo — map", (735, 795, 1005, 1005)),
    ]),
    Group(name="Lower text blocks", visible=True, layers=[
        crop_layer(img, "Menu del día text", (20, 535, 235, 765)),
        crop_layer(img, "Taberna text", (1035, 535, 1230, 760)),
        crop_layer(img, "Google reviews text", (20, 790, 500, 1024)),
        crop_layer(img, "Address text", (515, 790, 740, 1024)),
        crop_layer(img, "WhatsApp text", (1035, 790, 1300, 1024)),
    ]),
])

psd = nested_layers_to_psd(
    [editable, reference],
    color_mode=enums.ColorMode.rgb,
    compression=enums.Compression.raw,
    size=(w, h),
    vector_mask=False,
)
with OUTPUT.open("wb") as fd:
    psd.write(fd)

print(OUTPUT)
print(OUTPUT.stat().st_size)
