Add-Type -AssemblyName System.Drawing

$root = 'U:\Ресторан Баски'
$project = Join-Path $root 'AKSAY-GRILL-Claud'
$source = Join-Path $project 'Сайт\Прототип лендинга\landing-concept-WORKING-BASE.png'
$output = Join-Path $project 'Сайт\Прототип лендинга\landing-concept-WORKING-BASE-new-images.png'
$imageRoot = Join-Path $root 'IMAGES'

function Get-Image([string]$path) {
    if (-not (Test-Path -LiteralPath $path)) { throw "Missing image: $path" }
    return [System.Drawing.Image]::FromFile($path)
}

function Draw-Cropped([System.Drawing.Graphics]$graphics, [System.Drawing.Image]$image, [int]$x, [int]$y, [int]$width, [int]$height) {
    $sourceRatio = $image.Width / [double]$image.Height
    $targetRatio = $width / [double]$height
    if ($sourceRatio -gt $targetRatio) {
        $cropWidth = [int]($image.Height * $targetRatio)
        $cropX = [int](($image.Width - $cropWidth) / 2)
        $sourceRect = New-Object System.Drawing.Rectangle($cropX, 0, $cropWidth, $image.Height)
    } else {
        $cropHeight = [int]($image.Width / $targetRatio)
        $cropY = [int](($image.Height - $cropHeight) / 2)
        $sourceRect = New-Object System.Drawing.Rectangle(0, $cropY, $image.Width, $cropHeight)
    }
    $destRect = New-Object System.Drawing.Rectangle($x, $y, $width, $height)
    $graphics.DrawImage($image, $destRect, $sourceRect, [System.Drawing.GraphicsUnit]::Pixel)
}

$base = Get-Image $source
$canvas = New-Object System.Drawing.Bitmap($base.Width, $base.Height, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$graphics.DrawImage($base, 0, 0, $base.Width, $base.Height)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

$hero = Get-Image (Join-Path $imageRoot 'ИНТЕРЬЕР\ГОТОВЫЕ\photo_2026-08-29_18-28-17.jpg')
$side = Get-Image (Join-Path $imageRoot 'ИНТЕРЬЕР\ГОТОВЫЕ\photo_2026-08-29_18-37-25.jpg')
$fish = Get-Image (Join-Path $imageRoot 'КУХНЯ\REDRAW_PREVIEW_2026-08-29\photo_2026-08-29_20-20-43_whole_fish_presentable_preview.png')

# Keep the approved page geometry; replace only the three embedded photo areas.
Draw-Cropped $graphics $hero 628 76 908 437
Draw-Cropped $graphics $fish 247 532 215 229
Draw-Cropped $graphics $side 1233 534 290 216

$canvas.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)
$fish.Dispose(); $side.Dispose(); $hero.Dispose(); $graphics.Dispose(); $canvas.Dispose(); $base.Dispose()
Write-Output $output
