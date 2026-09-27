import zlib
import struct
import math

def create_png():
    width = 256
    height = 256
    img = []

    cx, cy = 128.0, 128.0
    r_outer = 120.0
    r_inner = 114.0
    r_sub = 108.0

    # Colors
    c_deep_green = (6, 78, 59, 255)      # #064E3B
    c_dark_green = (4, 44, 33, 255)      # #042C21
    c_gold = (217, 119, 6, 255)          # #D97706
    c_light_gold = (245, 158, 11, 255)   # #F59E0B
    c_bright_gold = (253, 230, 138, 255) # #FDE68A
    c_transparent = (0, 0, 0, 0)

    raw_data = bytearray()

    for y in range(height):
        raw_data.append(0)  # filter type 0 (None)
        for x in range(width):
            dx = x - cx
            dy = y - cy
            dist = math.sqrt(dx*dx + dy*dy)

            if dist > r_outer + 1.5:
                # Outside circle
                raw_data.extend(c_transparent)
            elif dist > r_outer - 1.5:
                # Anti-alias outer edge
                alpha = int(max(0, min(255, (r_outer + 1.5 - dist) / 3.0 * 255)))
                raw_data.extend([c_gold[0], c_gold[1], c_gold[2], alpha])
            elif dist >= r_inner:
                # Outer gold border
                raw_data.extend(c_gold)
            elif dist > r_inner - 2.0:
                # Blend to inner green
                t = (r_inner - dist) / 2.0
                r = int(c_gold[0]*(1-t) + c_deep_green[0]*t)
                g = int(c_gold[1]*(1-t) + c_deep_green[1]*t)
                b = int(c_gold[2]*(1-t) + c_deep_green[2]*t)
                raw_data.extend([r, g, b, 255])
            elif abs(dist - r_sub) < 1.0:
                # Inner thin gold ring
                raw_data.extend(c_light_gold)
            else:
                # Inside medallion: Radial green gradient
                grad_factor = min(1.0, dist / r_inner)
                r = int(c_deep_green[0] * (1 - grad_factor*0.3) + c_dark_green[0] * (grad_factor*0.3))
                g = int(c_deep_green[1] * (1 - grad_factor*0.3) + c_dark_green[1] * (grad_factor*0.3))
                b = int(c_deep_green[2] * (1 - grad_factor*0.3) + c_dark_green[2] * (grad_factor*0.3))
                
                # Check for Kaaba drawing in center
                # Kaaba cube: 96 to 160 horizontal, 105 to 175 vertical
                # Base Kaaba block
                in_kaaba = (96 <= x <= 160 and 105 <= y <= 170)
                in_kiswa = (96 <= x <= 160 and 118 <= y <= 126) # Golden Kiswa stripe
                in_door = (132 <= x <= 146 and 135 <= y <= 168)  # Golden door
                
                # Crescent moon at top: center around (128, 85)
                c_dx = x - 128
                c_dy = y - 82
                c_dist1 = math.sqrt(c_dx*c_dx + c_dy*c_dy)
                c_dist2 = math.sqrt((c_dx-4)*(c_dx-4) + (c_dy+3)*(c_dy+3))
                in_crescent = (c_dist1 <= 15 and c_dist2 >= 13)

                # Star next to crescent
                s_dx = x - 138
                s_dy = y - 76
                in_star = (math.sqrt(s_dx*s_dx + s_dy*s_dy) <= 3.5)

                if in_kiswa or in_door or in_crescent or in_star:
                    raw_data.extend(c_light_gold)
                elif in_kaaba:
                    # Dark charcoal Kaaba walls with subtle gradient
                    kw = 18 + int((y - 105) * 0.15)
                    raw_data.extend([kw, kw + 4, kw + 3, 255])
                else:
                    raw_data.extend([r, g, b, 255])

    # Construct PNG binary
    png = bytearray()
    png.extend(b'\x89PNG\r\n\x1a\n')  # Header

    # IHDR
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
    png.extend(struct.pack('>I', len(ihdr_data)))
    png.extend(b'IHDR')
    png.extend(ihdr_data)
    png.extend(struct.pack('>I', ihdr_crc))

    # IDAT
    compressed = zlib.compress(bytes(raw_data), 9)
    idat_crc = zlib.crc32(b'IDAT' + compressed)
    png.extend(struct.pack('>I', len(compressed)))
    png.extend(b'IDAT')
    png.extend(compressed)
    png.extend(struct.pack('>I', idat_crc))

    # IEND
    iend_crc = zlib.crc32(b'IEND')
    png.extend(struct.pack('>I', 0))
    png.extend(b'IEND')
    png.extend(struct.pack('>I', iend_crc))

    with open('logo.png', 'wb') as f:
        f.write(png)
    with open('public/logo.png', 'wb') as f:
        f.write(png)
    print(f"Generated logo.png: {len(png)} bytes")

create_png()
