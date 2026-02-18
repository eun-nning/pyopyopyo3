// --------------------
// 초성 추출 함수
// --------------------
function getChosung(text) {
  const chosung = [
    "ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ",
    "ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"
  ];

  return text.split("").map(char => {
    const code = char.charCodeAt(0) - 44032;
    if (code >= 0 && code <= 11171) {
      return chosung[Math.floor(code / 588)];
    }
    return char;
  }).join("");
}

// --------------------
// 문자열 정규화 (공백/특수문자 제거)
// --------------------
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9가-힣ㄱ-ㅎ]/g, "");
}

// --------------------
// 노래 데이터
// --------------------
const songs = [
  {
    title: "내일이 오면",
    titleAlt: [],

    mainArtist: ["릴보이"],
    mainArtistAlt: ["lIlBOI"],

    featArtist: ["기리보이","BIG Naughty"],
    featArtistAlt: ["서동현","빅나티"],

    date: "2025-12-21",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181331643?change_second=4934"
  },
  {
    title: "혼모노",
    titleAlt: ["Honmono"],

    mainArtist: ["키드밀리"],
    mainArtistAlt: ["Kid milli"],

    featArtist: ["블랙넛"],
    featArtistAlt: ["Black Nut"],

    date: "2025-12-21",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181331643?change_second=5574"
  },
  {
    title: "OHAYO MY NIGHT",
    titleAlt: ["오하요 마이 나이트","오하요 마이 나잇트"],

    mainArtist: ["디핵","PATEKO"],
    mainArtistAlt: ["D-Hack","파테코","파태코"],

    featArtist: [],
    featArtistAlt: [],

    date: "2025-12-21",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181331643?change_second=9643"
  },
  {
    title: "에피소드",
    titleAlt: ["episode"],

    mainArtist: ["이무진"],
    mainArtistAlt: [],

    featArtist: [],
    featArtistAlt: [],

    date: "2025-12-21",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181331643?change_second=11013"
  },
  {
    title: "나무",
    titleAlt: [],

    mainArtist: ["카더가든"],
    mainArtistAlt: ["car the garden","칼든강도"],

    featArtist: [],
    featArtistAlt: [],

    date: "2025-12-23",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181565971?change_second=23002"
  },
  {
    title: "내일이 오면",
    titleAlt: [],

    mainArtist: ["릴보이"],
    mainArtistAlt: ["lIlBOI"],

    featArtist: ["기리보이","BIG Naughty"],
    featArtistAlt: ["서동현","빅나티"],

    date: "2025-12-23",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181565971?change_second=26867"
  },
  {
    title: "쉬어",
    titleAlt: [],

    mainArtist: ["아넌딜라이트","unofficialboyy","BE'O"],
    mainArtistAlt: ["Anandekight","언오피셜보이","비오"],

    featArtist: ["MINO"],
    featArtistAlt: ["송민호","미노","송미노"],

    date: "2025-12-23",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181565971?change_second=27312"
  },
  {
    title: "존시나",
    titleAlt: [],

    mainArtist: ["염따"],
    mainArtistAlt: [],

    featArtist: ["Northfacegawd","저스디스","래원"],
    featArtistAlt: ["노스페이스갓","justhis","Layone"],

    date: "2025-12-23",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181565971?change_second=27925"
  },
  {
    title: "Supernova",
    titleAlt: ["슈퍼노바", "수퍼노바"],

    mainArtist: ["aespa"],
    mainArtistAlt: ["에스파"],

    featArtist: [],
    featArtistAlt: [],

    date: "2025-12-25",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181785091?change_second=13688"
  },
  {
    title: "서랍",
    titleAlt: ["Drawer"],

    mainArtist: ["10cm"],
    mainArtistAlt: ["십센치","10센치"],

    featArtist: [],
    featArtistAlt: [],

    date: "2025-12-25",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181785091?change_second=14074"
  },
  {
    title: "징글벨",
    titleAlt: ["캐롤","Jingle Bells"],

    mainArtist: ["james Pieront"],
    mainArtistAlt: ["제임스 피어폰트"],

    featArtist: [],
    featArtistAlt: [],

    date: "2025-12-25",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181785091?change_second=14396"
  },
  {
    title: "모찌송",
    titleAlt: [],

    mainArtist: ["모찌 멜로디"],
    mainArtistAlt: ["Mozzi Melody"],

    featArtist: [],
    featArtistAlt: [],

    date: "2025-12-25",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181785091?change_second=14870"
  },
  {
    title: "애상",
    titleAlt: [],

    mainArtist: ["쿨"],
    mainArtistAlt: ["COOL"],

    featArtist: [],
    featArtistAlt: [],

    date: "2025-12-25",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/181785091?change_second=15172"
  },
  {
    title: "Ditto",
    titleAlt: ["디토"],

    mainArtist: ["뉴진스"],
    mainArtistAlt: ["newjeans"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-12",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/186705799?change_second=34435"
  },
  {
    title: "Ditto",
    titleAlt: ["디토"],

    mainArtist: ["뉴진스"],
    mainArtistAlt: ["newjeans"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=4753"
  },
  {
    title: "홍연",
    titleAlt: [],

    mainArtist: ["안예은"],
    mainArtistAlt: [],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=5053"
  },
  {
    title: "곡예사",
    titleAlt: [],

    mainArtist: ["조광일"],
    mainArtistAlt: [],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=5396"
  },
  {
    title: "one of them",
    titleAlt: ["원오브댐", "원오브뎀"],

    mainArtist: ["허클베리피"],
    mainArtistAlt: ["Huckleberry P"],

    featArtist: ["저스디스","EK"],
    featArtistAlt: ["justhis","이케이"],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=5702"
  },
  {
    title: "selfmade orange",
    titleAlt: ["셀메이드 오렌지", "셀프메이드 오렌지"],

    mainArtist: ["창모"],
    mainArtistAlt: [],

    featArtist: ["SUPERBEE"],
    featArtistAlt: ["수퍼비","슈퍼비"],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=6102"
  },
  {
    title: "수퍼비와",
    titleAlt: [],

    mainArtist: ["SUPERBEE"],
    mainArtistAlt: ["수퍼비","슈퍼비"],

    featArtist: ["비와이"],
    featArtistAlt: ["BewhY"],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=6593"
  },
  {
    title: "UNFORGIVEN",
    titleAlt: ["언포기븐","언폴기븐"],

    mainArtist: ["LE SSERAFIM"],
    mainArtistAlt: ["르세라핌"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=6995"
  },
  {
    title: "OHAYO MY NIGHT",
    titleAlt: ["오하요 마이 나이트","오하요 마이 나잇트"],

    mainArtist: ["디핵","PATEKO"],
    mainArtistAlt: ["D-Hack","파테코","파태코"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=7250"
  },
  {
    title: "Oscar",
    titleAlt: ["오스카","오스칼"],

    mainArtist: ["pH-1", "Gsoul", "BIG Naughty", "JAY PARK"],
    mainArtistAlt: ["피에이치원","지소울","빅나티","서동현","제이팍","재이팍","박재범"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=7537"
  },
  {
    title: "뿌리",
    titleAlt: [],

    mainArtist: ["쿤디판다"],
    mainArtistAlt: ["Khundi panda"],

    featArtist: ["저스디스"],
    featArtistAlt: ["justhis"],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=7751"
  },
  {
    title: "원효대사",
    titleAlt: [],

    mainArtist: ["래원"],
    mainArtistAlt: ["레원","Layone"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=8015"
  },
  {
    title: "둥지",
    titleAlt: [],

    mainArtist: ["남진"],
    mainArtistAlt: [],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=8201"
  },
  {
    title: "나무",
    titleAlt: [],

    mainArtist: ["카더가든"],
    mainArtistAlt: ["car the garden","칼든강도"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=8713"
  },
  {
    title: "사랑하게 될 거야",
    titleAlt: [],

    mainArtist: ["한로로"],
    mainArtistAlt: ["HANRORO"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=8950"
  },
  {
    title: "내일이 오면",
    titleAlt: [],

    mainArtist: ["릴보이"],
    mainArtistAlt: ["lIlBOI"],

    featArtist: ["기리보이","BIG Naughty"],
    featArtistAlt: ["서동현","빅나티"],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=9349"
  },
  {
    title: "우주를 줄게",
    titleAlt: ["galaxy"],

    mainArtist: ["볼빨간사춘기"],
    mainArtistAlt: ["볼사","BOL4"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=9663"
  },
  {
    title: "좋다고 말해",
    titleAlt: [],

    mainArtist: ["볼빨간사춘기"],
    mainArtistAlt: ["볼사","BOL4"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=9901"
  },
  {
    title: "폰서트",
    titleAlt: ["Phonecert"],

    mainArtist: ["10cm"],
    mainArtistAlt: ["십센치","10센치"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=10106"
  },
  {
    title: "눈,코,입",
    titleAlt: ["EYES,NOSE,LIPS"],

    mainArtist: ["태양"],
    mainArtistAlt: ["TAEYANG"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=10431"
  },
  {
    title: "시차",
    titleAlt: ["We Are"],

    mainArtist: ["우원재"],
    mainArtistAlt: [],

    featArtist: ["로꼬","GRAY"],
    featArtistAlt: ["그레이","그래이"],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=10698"
  },
  {
    title: "죽일 놈",
    titleAlt: ["Guilty"],

    mainArtist: ["다이나믹 듀오"],
    mainArtistAlt: ["다듀","Dynamicduo"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=10936"
  },
  {
    title: "사건의 지평선",
    titleAlt: ["Event Horizon"],

    mainArtist: ["윤하"],
    mainArtistAlt: ["younha"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=11169"
  },
  {
    title: "오르트구름",
    titleAlt: ["오트르구름","Oort Cloud"],

    mainArtist: ["윤하"],
    mainArtistAlt: ["younha"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=11478"
  },
  {
    title: "거리에서",
    titleAlt: [],

    mainArtist: ["릴러말즈"],
    mainArtistAlt: ["Leellamarz"],

    featArtist: ["ASH ISLAND"],
    featArtistAlt: ["애쉬 아일랜드","에쉬 아일랜드"],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=11609"
  },
  {
    title: "빡",
    titleAlt: [],

    mainArtist: ["던말릭"],
    mainArtistAlt: ["DON MALIK"],

    featArtist: ["팔로알토","저스디스"],
    featArtistAlt: ["Paloalto","justhis"],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=12000"
  },
  {
    title: "My Way",
    titleAlt: ["마이웨이"],

    mainArtist: ["던말릭","허성현","KHAN","맥대디","Los"],
    mainArtistAlt: ["DON MALIK","Huh","Mckdaddy",'칸',"로스"],

    featArtist: ["저스디스"],
    featArtistAlt: ["justhis"],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=26845"
  },
  {
    title: "Chosen 1",
    titleAlt: [],

    mainArtist: ["블라세"],
    mainArtistAlt: ["Blase"],

    featArtist: [],
    featArtistAlt: [],

    date: "2026-02-15",
    tag: "노래뱅",
    link: "https://vod.sooplive.co.kr/player/187023883?change_second=27382"
  }
];

//  현재 선택된 태그 저장 (추가된 부분)
let currentTag = null;

// --------------------
// DOM 요소
// --------------------
const table = document.getElementById("songTable");
const searchInput = document.getElementById("searchInput");

// --------------------
// 화면 출력 함수
// --------------------
function displaySongs(filter = "", tagFilter = null) {
  table.innerHTML = "";

  let filtered = songs.filter(song => {
    const searchText = normalize(filter);

    // 제목 검색
    const titleMatch =
      normalize(song.title).includes(searchText) ||
      (Array.isArray(song.titleAlt)
        ? song.titleAlt.some(t =>
            normalize(t).includes(searchText)
          )
        : song.titleAlt &&
          normalize(song.titleAlt).includes(searchText));

    // 메인 아티스트 검색
    const mainMatch = song.mainArtist.some(a =>
      normalize(a).includes(searchText)
    );

    const mainAltMatch = song.mainArtistAlt
      ? song.mainArtistAlt.some(a =>
          normalize(a).includes(searchText)
        )
      : false;

    // 피처링 검색
    const featMatch = song.featArtist
      ? song.featArtist.some(a =>
          normalize(a).includes(searchText)
        )
      : false;

    const featAltMatch = song.featArtistAlt
      ? song.featArtistAlt.some(a =>
          normalize(a).includes(searchText)
        )
      : false;

    // 초성 검색
    const chosungMatch =
      getChosung(song.title).includes(searchText) ||
      song.mainArtist.some(a =>
        getChosung(a).includes(searchText)
      ) ||
      (song.featArtist &&
        song.featArtist.some(a =>
          getChosung(a).includes(searchText)
        ));

    return (
      titleMatch ||
      mainMatch ||
      mainAltMatch ||
      featMatch ||
      featAltMatch ||
      chosungMatch
    );
  });

  //  태그 필터 유지되도록 수정
  const activeTag = tagFilter !== null ? tagFilter : currentTag;

  if (activeTag) {
    filtered = filtered.filter(song => song.tag === activeTag);
  }

  // 화면 출력
  filtered.forEach(song => {
    const artistText =
      song.mainArtist.join(", ") +
      (song.featArtist && song.featArtist.length > 0
        ? " feat. " + song.featArtist.join(", ")
        : "");

    const row = `
      <tr>
        <td>${song.title}</td>
        <td>${artistText}</td>
        <td>${song.date}</td>
        <td>${song.tag}</td>
        <td><a href="${song.link}" target="_blank">보기</a></td>
      </tr>
    `;

    table.innerHTML += row;
  });
}

// --------------------
// 이벤트
// --------------------
searchInput.addEventListener("input", (e) => {
  displaySongs(e.target.value, currentTag);
});

// 최신순 (태그 유지되도록 수정)
function sortByNewest() {
  songs.sort((a, b) => new Date(b.date) - new Date(a.date));
  displaySongs(searchInput.value, currentTag);
}

// 오래된순 (태그 유지되도록 수정)
function sortByOldest() {
  songs.sort((a, b) => new Date(a.date) - new Date(b.date));
  displaySongs(searchInput.value, currentTag);
}

// 태그 필터 (선택 상태 유지 추가)
function filterByTag(tag) {
  currentTag = tag;

  const buttons = document.querySelectorAll(".tags button");
  buttons.forEach(btn => btn.classList.remove("active"));

  const clicked = [...buttons].find(btn => btn.innerText === tag);
  if (clicked) clicked.classList.add("active");

  displaySongs(searchInput.value, currentTag);
}

//  전체보기 완전 초기화 함수 추가
function showAll() {
  currentTag = null;
  searchInput.value = "";

  const buttons = document.querySelectorAll(".tags button");
  buttons.forEach(btn => btn.classList.remove("active"));

  displaySongs();
}

// 초기 실행
displaySongs();