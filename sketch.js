let capture;
let graphics;

function setup() {
  // 建立全螢幕畫布，背景顏色為 e7c6ff
  createCanvas(windowWidth, windowHeight);
  background('#e7c6ff');

  // 初始化攝影機影像
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide(); // 隱藏原始攝影機影像

  // 建立與攝影機影像相同大小的 graphics
  graphics = createGraphics(capture.width, capture.height);
}

function draw() {
  background('#e7c6ff'); // 確保背景顏色一致

  // 計算影像顯示位置，讓影像置中
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;

  // 繪製攝影機影像
  image(capture, x, y, capture.width, capture.height);

  // 設定 graphics 的背景為黑色
  graphics.background(0);

  // 在 graphics 上繪製圓形網格
  for (let i = 0; i < graphics.width; i += 20) {
    for (let j = 0; j < graphics.height; j += 20) {
      // 從攝影機影像中取得對應位置的顏色
      let col = capture.get(i, j);

      // 在 graphics 上繪製圓形
      graphics.fill(col);
      graphics.noStroke();
      graphics.ellipse(i + 10, j + 10, 15, 15); // 圓的寬高為 15
    }
  }

  // 將 graphics 顯示在攝影機影像上方
  image(graphics, x, y, capture.width, capture.height);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
