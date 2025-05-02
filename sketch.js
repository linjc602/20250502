let capture;

function setup() {
  // 建立全螢幕畫布，背景顏色為 e7c6ff
  createCanvas(windowWidth, windowHeight);
  background('#e7c6ff');

  // 初始化攝影機影像
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide(); // 隱藏原始攝影機影像
}

function draw() {
  background('#e7c6ff'); // 確保背景顏色一致

  // 計算影像顯示位置，讓影像置中
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;

  // 翻轉畫布以左右顛倒影像
  push();
  translate(width, 0); // 將畫布原點移到右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, width - x - capture.width, y, capture.width, capture.height);
  pop();
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
