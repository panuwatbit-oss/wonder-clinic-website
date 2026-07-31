from pathlib import Path

from PIL import Image


PUBLIC_ROOT = Path(__file__).resolve().parents[1] / "public"
SOURCE_EXTENSIONS = {".png", ".jpg", ".jpeg"}


def convert(source: Path) -> None:
    destination = source.with_suffix(".webp")
    with Image.open(source) as image:
        image.load()
        has_alpha = image.mode in {"RGBA", "LA"} or "transparency" in image.info
        if has_alpha:
            image.save(destination, "WEBP", lossless=True, method=6)
        else:
            image.convert("RGB").save(destination, "WEBP", quality=82, method=6)


sources = sorted(path for path in PUBLIC_ROOT.rglob("*") if path.suffix.lower() in SOURCE_EXTENSIONS)
for index, source in enumerate(sources, start=1):
    convert(source)
    if index % 25 == 0 or index == len(sources):
        print(f"{index}/{len(sources)}")
