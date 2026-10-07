Add-Type -AssemblyName System.Drawing
$imgPath = Join-Path (Get-Location) "dist\assets\logo.jpg"
$bmp = [System.Drawing.Bitmap]::new($imgPath)
$w = $bmp.Width
$h = $bmp.Height

$out = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outLight = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $c = $bmp.GetPixel($x, $y)
        $lum = (0.299 * $c.R + 0.587 * $c.G + 0.114 * $c.B)
        if ($lum -gt 240) {
            # Transparent
            $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            $outLight.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            # Smooth alpha transition
            $alpha = 255
            if ($lum -gt 210) {
                $alpha = [int](255 * (240 - $lum) / 30)
            }
            # Standard logo for light header
            $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
            
            # Ivory/gold tint for dark footer
            # Leopard spots and cursive Cotter Safaris text become warm ivory & gold
            $r = [int][Math]::Min(255, 245 - ($c.R * 0.15))
            $g = [int][Math]::Min(255, 235 - ($c.G * 0.2))
            $b = [int][Math]::Min(255, 205 - ($c.B * 0.2))
            $outLight.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
        }
    }
}

$outPath = Join-Path (Get-Location) "dist\assets\logo.png"
$outLightPath = Join-Path (Get-Location) "dist\assets\logo-light.png"

$out.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$outLight.Save($outLightPath, [System.Drawing.Imaging.ImageFormat]::Png)

$bmp.Dispose()
$out.Dispose()
$outLight.Dispose()
Write-Output "SUCCESS"
