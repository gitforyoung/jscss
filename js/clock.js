// 실시간 시계 v
// 로컬 스토리지를 사용한 로그인 v
// 로컬 스토리지를 사용한 투두리스트 v
// 랜덤 배경 이미지 v
// 날씨와 위치 (geolocation) v

const clockTitle = document.querySelector(".js-clock");

function clock() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  clockTitle.innerText = `${year}년 ${month}월 ${hours}시 ${minutes}분 ${seconds}초`;
}

clock();
setInterval(clock, 1000);
