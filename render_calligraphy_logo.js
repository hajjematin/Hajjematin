import sharp from 'sharp';
import fs from 'fs';

// High-fidelity SVG of the golden "حج متین" calligraphy
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <defs>
    <linearGradient id="goldCalligraphy" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD700" />
      <stop offset="45%" stop-color="#FFC000" />
      <stop offset="85%" stop-color="#F5A800" />
      <stop offset="100%" stop-color="#E69500" />
    </linearGradient>
  </defs>

  <!-- Group for the entire calligraphy emblem -->
  <g fill="url(#goldCalligraphy)" stroke="none">
    
    <!-- Top "ح" Crown and Hook -->
    <!-- Starting from top-center, arching right to the tip, looping back, and sweeping down-left -->
    <path d="
      M 430 200
      C 480 180, 550 170, 610 178
      C 660 185, 715 200, 725 210
      C 730 216, 720 225, 695 238
      C 650 260, 570 290, 480 340
      C 420 375, 340 435, 275 450
      C 290 440, 380 365, 470 305
      C 560 245, 650 205, 620 195
      C 570 180, 490 200, 430 230
      C 420 235, 415 220, 430 200
      Z
    " />

    <!-- Main Sweeping Body of "حج" - The Golden Crescent and Lower Loop -->
    <path d="
      M 275 450
      C 320 420, 400 380, 490 350
      C 580 320, 640 280, 665 240
      C 675 225, 690 230, 680 250
      C 650 310, 580 360, 470 410
      C 370 455, 310 510, 275 580
      C 240 650, 260 740, 330 800
      C 400 860, 500 870, 590 820
      C 670 770, 710 680, 700 580
      C 695 530, 680 500, 650 490
      C 640 485, 645 470, 660 470
      C 710 475, 735 530, 740 600
      C 750 710, 695 820, 590 880
      C 480 940, 350 920, 270 840
      C 190 760, 180 640, 225 540
      C 250 480, 265 460, 275 450
      Z
    " />

    <!-- Inner "متین" Script -->
    <!-- "م" at top right of the inner bowl -->
    <path d="
      M 690 415
      C 725 435, 735 470, 710 505
      C 695 525, 665 540, 645 530
      C 625 520, 620 495, 630 470
      C 640 445, 665 425, 690 415
      Z
      M 655 490
      C 660 505, 675 510, 685 500
      C 695 490, 695 470, 685 455
      C 675 445, 660 455, 655 470
      Z
    " />

    <!-- Connective Stroke from "م" through "ت" and "ی" into "ن" -->
    <path d="
      M 640 525
      C 620 540, 600 550, 580 540
      C 560 530, 565 500, 570 475
      C 575 450, 590 445, 595 465
      C 590 485, 585 515, 600 525
      C 615 530, 630 520, 640 510
      Z
    " />

    <!-- Teeth of "ت" and "ی" and swoop of "ن" -->
    <path d="
      M 565 535
      C 550 550, 530 565, 505 570
      C 480 575, 465 560, 480 535
      C 490 515, 505 500, 515 520
      C 510 535, 495 550, 510 555
      C 525 560, 545 545, 565 530
      Z
    " />

    <!-- Tail of "ن" curving down and left under the dots -->
    <path d="
      M 480 570
      C 440 600, 390 645, 360 700
      C 340 735, 350 765, 385 765
      C 425 765, 480 720, 530 670
      C 575 625, 615 580, 650 560
      C 660 555, 665 565, 655 575
      C 610 615, 560 670, 505 725
      C 455 775, 385 805, 340 785
      C 305 765, 300 715, 330 660
      C 365 600, 425 550, 480 540
      Z
    " />

    <!-- Two Diamond Dots for "ت" (top right) -->
    <path d="
      M 590 415 L 602 427 L 590 439 L 578 427 Z
    " />
    <path d="
      M 625 415 L 637 427 L 625 439 L 613 427 Z
    " />

    <!-- Two Diamond Dots for "ی" (center bottom) -->
    <path d="
      M 540 635 L 552 647 L 540 659 L 528 647 Z
    " />
    <path d="
      M 575 635 L 587 647 L 575 659 L 563 647 Z
    " />

    <!-- Large Central Diamond Dot for "ج" -->
    <path d="
      M 460 625 L 485 650 L 460 675 L 435 650 Z
    " />

  </g>
</svg>`;

async function render() {
  fs.writeFileSync('logo.svg', svg);
  
  // Render PNG with sharp
  const buffer = Buffer.from(svg);
  await sharp(buffer)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('logo.png');

  fs.copyFileSync('logo.png', 'public/logo.png');
  console.log('Successfully rendered logo.png matching user uploaded calligraphy!');
}

render().catch(console.error);
