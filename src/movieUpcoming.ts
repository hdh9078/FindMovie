export interface MovieUpcoming {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export const upcomingMovie: { page: number; results: MovieUpcoming[]; total_pages: number, total_results: number } = {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 1008042,
        "original_language": "en",
        "original_title": "Talk to Me",
        "overview": "실시간트렌드 #90초빙의챌린지 #넘사벽스릴 #주작아님  STEP 1. 촛불을 켜고 저승의 문을 연다.  STEP 2. 몸을 묶고 ‘죽은 자의 손’을 잡는다.  STEP 3. “내게 말해”라고 속삭인다.  STEP 4. 나타난 귀신에게 “널 들여보낸다”라고 말하면 빙의 완료.  ※ 경고 ※ 단, 90초 안에 깨울 것. 반드시 촛불을 꺼 문을 닫을 것. SNS에서 핫한 빙의 챌린지에 중독된 '미아'와 친구들. 위험한 게임을 이어가던 중 친구 '라일리'가 '미아'의 죽은 엄마에게 빙의되자 '미아'는 이성을 잃고 마의 90초를 넘기고 마는데! 죽음보다 끔찍하게, 당신을 무자비하게 뒤흔들 공포가 시작된다! #ㅌㅌㅁ #ㄷㄷㄷ",
        "popularity": 2107.318,
        "poster_path": "/xqi471OBgg6OjWo90v6ZQ2GoFST.jpg",
        "release_date": "2023-11-01",
        "title": "톡 투 미",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 1175
      },
      {
        "adult": false,
        "backdrop_path": "/f33XdT6dwNXmXQNvQ4FuyhQrUob.jpg",
        "genre_ids": [
          27
        ],
        "id": 807172,
        "original_language": "en",
        "original_title": "The Exorcist: Believer",
        "overview": "한날한시에 동시에 사라졌던 앤젤라와 캐서린.  기억이 전부 사라진 채 상처투성이 몸으로 돌아온 두 아이는  이상증세를 보이며 날이 갈수록 섬뜩하게 변해간다. 마침내 두 아이의 몸을 동시에 차지한 악마가 존재를 드러내고, 한 명을 살리면 한 명이 죽는다는 충격적인 사실이 밝혀지는데…",
        "popularity": 700.63,
        "poster_path": "/gekQTgjZkPhpglvP1ZdTHBwi7xO.jpg",
        "release_date": "2023-10-18",
        "title": "엑소시스트: 믿는 자",
        "video": false,
        "vote_average": 5.4,
        "vote_count": 50
      },
      {
        "adult": false,
        "backdrop_path": "/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 299054,
        "original_language": "en",
        "original_title": "Expend4bles",
        "overview": "핵무기를 탈취한 무장 세력을 추격하는 익스펜더블 팀의 활약을 그린 액션 영화",
        "popularity": 310.163,
        "poster_path": "/y8L3N9KGGal2CiNgIJ5tP5W9iAF.jpg",
        "release_date": "2023-10-18",
        "title": "익스펜더블 4",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 108
      },
      {
        "adult": false,
        "backdrop_path": "/vT17lPUglrAzjEqMwjPpIDe49ty.jpg",
        "genre_ids": [
          16,
          12,
          10751,
          14
        ],
        "id": 459003,
        "original_language": "uk",
        "original_title": "Мавка: Лісова пісня",
        "overview": "오랜 전쟁의 끝, 서로의 문을 닫아 버린 마법의 숲과 인간 세상. 숲의 정령이자 대자연의 새로운 수호자, 마브카는 어느 날 순수한 마음을 지닌 인간 청년 루카스와 사랑에 빠진다. 하지만 악당 킬리나는 사랑에 빠진 마브카의 마음을 이용해 숲을 파괴하고 숲의 심장을 차지하려는 음모를 꾸미는데…",
        "popularity": 258.817,
        "poster_path": "/oYv6T3ADPgGZHN3CUsZtT4WNJtC.jpg",
        "release_date": "2023-10-18",
        "title": "마브카 : 숲의 노래",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 408
      },
      {
        "adult": false,
        "backdrop_path": "/o9bbojtrrpl0yriiTmzC3Lp3OhA.jpg",
        "genre_ids": [
          28,
          10752
        ],
        "id": 840326,
        "original_language": "fi",
        "original_title": "Sisu",
        "overview": "라플란드의 황야 깊은 곳에서 금을 찾던 아타미 코피는 나치 순찰대를 우연히 만나게 되고, 파괴되고 채굴된 라플란드 황야를 가로지르는 숨막히는 추격전이 시작된다.",
        "popularity": 169.719,
        "poster_path": "/uCAaaAQEDrTllYR4dtsEsfQa8We.jpg",
        "release_date": "2023-10-25",
        "title": "시수",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1346
      },
      {
        "adult": false,
        "backdrop_path": "/uvsL5Q5Juf8ivqBnlr4nFVUwVoa.jpg",
        "genre_ids": [
          80,
          18,
          53
        ],
        "id": 466420,
        "original_language": "en",
        "original_title": "Killers of the Flower Moon",
        "overview": "1920년대 오클라호마주 오세이지 부족 땅에서 석유가 발견된 후, 부족 사람들이 한 명씩 죽어 나가자 FBI가 미스터리를 풀기 위해 나선다.",
        "popularity": 130.061,
        "poster_path": "/zIKcqDlE69Q5LYOneGzXawpr9Ye.jpg",
        "release_date": "2023-10-18",
        "title": "플라워 킬링 문",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/wCZfWZ09GW9YiHdu1BH6WWI0JKl.jpg",
        "genre_ids": [
          10402
        ],
        "id": 1160164,
        "original_language": "en",
        "original_title": "TAYLOR SWIFT | THE ERAS TOUR",
        "overview": "",
        "popularity": 48.157,
        "poster_path": "/a5EreVlyB9fXzZ2Rf9ugOLrW5YI.jpg",
        "release_date": "2023-11-03",
        "title": "테일러 스위프트: 디 에라스 투어",
        "video": false,
        "vote_average": 7,
        "vote_count": 3
      },
      {
        "adult": false,
        "backdrop_path": "/a0GM57AnJtNi7lMOCamniiyV10W.jpg",
        "genre_ids": [
          16,
          12,
          14,
          18
        ],
        "id": 508883,
        "original_language": "ja",
        "original_title": "君たちはどう生きるか",
        "overview": "화재로 어머니를 잃은 11살 소년 ‘마히토’는 아버지와 함께 어머니의 고향으로 간다. 어머니에 대한 그리움과 새로운 보금자리에 적응하느라 힘들어하던 ‘마히토’ 앞에 정체를 알 수 없는 왜가리 한 마리가 나타나고, 저택에서 일하는 일곱 할멈으로부터 왜가리가 살고 있는 탑에 대한 신비로운 이야기를 듣게 된다. 그러던 어느 날, ‘마히토’는 사라져버린 새엄마 ‘나츠코’를 찾기 위해 탑으로 들어가고, 왜가리가 안내하는 대로 이세계(異世界)의 문을 통과하는데…!",
        "popularity": 44.358,
        "poster_path": "/kmoScy628A6JWv8mmd2ofrYv16T.jpg",
        "release_date": "2023-10-25",
        "title": "그대들은 어떻게 살 것인가",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 19
      },
      {
        "adult": false,
        "backdrop_path": "/2J6RdAjLzrq2e4f6ztw0dW5tZfR.jpg",
        "genre_ids": [
          18,
          10749,
          14
        ],
        "id": 1037348,
        "original_language": "ja",
        "original_title": "わたしの幸せな結婚",
        "overview": "사이모리 가문의 이능을 이어받지 못해 집안의 미움을 받던 ‘미요’는 쿠도 가문의 당주이자 냉정한 이능력자 ‘키요카’와 갑작스러운 정략결혼을 하게 된다. 원하지 않은 정략결혼으로 ‘미요’를 냉대하던 ‘키요카’는 이전의 약혼자들과는 다른 그녀의 모습에 점차 빠져들게 되고, ‘미요’ 역시 무자비한 줄로만 알았던 ‘키요카’의 다정한 모습에 자꾸 설레기 시작한다. 그렇게 ‘키요카’와 ‘미요’가 서로의 마음을 알아가던 중 ‘미요’는 자신에게 숨겨진 능력이 있다는 것을 깨닫게 되고, 그녀의 이능은 두 사람의 행복한 결혼을 방해하게 되는데…",
        "popularity": 29.401,
        "poster_path": "/7NsnLIuztqLgjoKema2TwKhsBRh.jpg",
        "release_date": "2023-10-11",
        "title": "나의 행복한 결혼",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 8
      },
      {
        "adult": false,
        "backdrop_path": "/47nv1UXkSDvpBlEv3BiAss9TxIX.jpg",
        "genre_ids": [
          80,
          53
        ],
        "id": 800158,
        "original_language": "en",
        "original_title": "The Killer",
        "overview": "미스터리한 한 남자의 독백으로부터 시작한다. 이 남자는 한 비어 있는 공간에서 길 건너 건물만을 철저하게 주시하고 있다. 화장실을 갈 때도, 식사를 할 때도 심지어는 잠을 잘 때도 알람을 맞춰 놓고 그 건물에서 시선을 떼지 않는 이 남자의 정체는 전문 암살자이다. 며칠 동안을 그렇게 지내던 어느 날, 드디어 그가 암살해야 하는 인물이 도착한다. 하지만 실패할 경우 상상치 못했던 결과가 올 것이라는 사실을 모른 채 수일 동안 기다려왔던 자신의 임무를 수행하기 위해 마지막 준비를 한다.",
        "popularity": 27.099,
        "poster_path": "/ipkcgvN7h3yZnbYowthloHLKsf4.jpg",
        "release_date": "2023-10-25",
        "title": "더 킬러",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/gEt8nXeSIAZB0xzjeUO6aeH1YnP.jpg",
        "genre_ids": [
          80,
          18
        ],
        "id": 1028684,
        "original_language": "ko",
        "original_title": "화란",
        "overview": "희망도 미래도 없는 동네. 이곳에서 태어나 다른 곳은 가본 적 없는 18살 소년 연규는 반복되는 새아버지의 폭력 속에서 돈을 모아 엄마와 같이 네덜란드로 떠나는 것이 유일한 희망이다. 이곳에서 나고 자라 지금은 조직의 중간 보스가 된 치건. 일찌감치 세상은 지옥이란 걸 깨닫고 자신만의 방식으로 살아간다. 어느 날 동생 하얀을 지키기 위해 싸움을 하게 된 연규. 합의금이 절실한 연규에게 치건이 도움을 주고 이를 계기로 연규는 치건의 조직에서 새로운 삶을 시작한다. 무섭고 서툴지만 친형 같은 치건을 따르며 조금씩 적응해 가는 연규. 치건의 신뢰를 받으며, 조직에서 살아남기 위해 점점 위험한 상황에 빠져들기 시작하는데…",
        "popularity": 22.54,
        "poster_path": "/1cCi5Y4mBkpvtbxhDJPIRccCQrP.jpg",
        "release_date": "2023-10-11",
        "title": "화란",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/tMT3tsh7lXJTkHq4Gjq1XkNkgOr.jpg",
        "genre_ids": [
          18,
          35
        ],
        "id": 941045,
        "original_language": "ko",
        "original_title": "화사한 그녀",
        "overview": "인생 역전 한방을 꿈꾸는 화사한 작전꾼 지혜. 매번 허당한 실력으로 허탕만 치던 그녀에게 600억이라는 일생일대의 기회가 찾아왔다. 실패는 사치다!라는 모토 아래 영혼까지 끌어 모은 마지막 작전을 시작하는데…",
        "popularity": 20.731,
        "poster_path": "/ed11pkcHGkfXlWG0chGadAfuWEW.jpg",
        "release_date": "2023-10-11",
        "title": "화사한 그녀",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/hcWXnOL7ScXpFQVjJruYUODeQxX.jpg",
        "genre_ids": [
          9648,
          35,
          53,
          36
        ],
        "id": 1066298,
        "original_language": "zh",
        "original_title": "满江红",
        "overview": "송나라 재상 진회의 주둔지에서 금나라의 사신이 살해 당한다.  범인은 황제에게 바칠 밀서를 훔쳐 사라진 상황. 진회는 범행을 부인하는 유력 용의자 장다에게 목숨을 미끼로 밀서의 행방을 찾으라 명한다. 각기 다른 목적으로 밀서를 찾아야만 하는 6인! 주어진 시간은 단 2시간 뿐! 반드시 밀서를 차지해야만 한다!",
        "popularity": 18.696,
        "poster_path": "/zNQbQhbzzp6bubs5lv3S4mfo1SM.jpg",
        "release_date": "2023-10-11",
        "title": "만강홍: 사라진 밀서",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 96
      },
      {
        "adult": false,
        "backdrop_path": "/gJPfYt4p8kSpAWf0DJx2CgLq1P2.jpg",
        "genre_ids": [
          35,
          18
        ],
        "id": 950849,
        "original_language": "fr",
        "original_title": "Annie Colère",
        "overview": "1974년 프랑스 교외의 한 작은 마을.  두 아이를 키우는 워킹맘 애니는 원치 않는 임신을 하게 된다. 다행히 MLAC(임신중지와 피임의 자유를 위한 운동)의 도움으로 일상으로 돌아온 애니. 하지만, 우연한 사고를 계기로 MLAC 활동에 동참하기 시작하고 침묵으로 일관했던 지난날을 자책하며 본격적으로 목소리를 높이는데…",
        "popularity": 15.686,
        "poster_path": "/Nfn3Zv5WY3MaR3pJaqXUQQuUCS.jpg",
        "release_date": "2023-11-01",
        "title": "앵그리 애니",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 91
      },
      {
        "adult": false,
        "backdrop_path": "/kzlOgKZcEQ5FWh1p9QZJd0v3lMQ.jpg",
        "genre_ids": [
          99
        ],
        "id": 1022018,
        "original_language": "ko",
        "original_title": "페이오프",
        "overview": "소설 「임꺽정」이 크게 성공하면서 출판사 관계자와 북에 있는 작가의 유족들이 저작권 문제를 해결하기 위해 만난다. 그 남·북 왕래는 걱정과 환대의 마음과 함께 정치, 경제, 문화, 각종 영역이 응축된 또 하나의 소설 같은 이야기가 된다.​",
        "popularity": 14.917,
        "poster_path": "/3p3mhrw8uTZZkdfhXZWHdqeqQ1c.jpg",
        "release_date": "2023-10-11",
        "title": "페이오프",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/8RafTGqYqAN9FJzvC75USKmJCso.jpg",
        "genre_ids": [
          10402,
          99
        ],
        "id": 84334,
        "original_language": "en",
        "original_title": "Searching for Sugar Man",
        "overview": "미국에선 ZERO, 남아공에선 HERO?!  팝 역사상 가장 신비로운 가수, ‘슈가맨’의 놀라운 이야기!  ● 본고장 미국: 음반 판매 6장, 아무도 알아주지 않는 비운의 가수!  ● 반대편 남아공: 밀리언셀러 히트가수, ‘엘비스’보다 유명한 슈퍼스타!  70년대 초, 우연히 남아공으로 흘러 들어온 ‘슈가맨’의 앨범은 수십 년간 가장 큰 사랑을 받으며 최고의 히트를 기록한다.  하지만 ‘슈가맨’은 단 두 장의 앨범만 남기고 사라져버린 신비의 가수!  전설의 ‘슈가맨’을 둘러싸고 갖가지 소문만 무성한 가운데,  두 명의 열성 팬이 진실을 밝히고자 그의 흔적을 찾기 시작한다.  그러나 단서라고는 오직 그의 노래 가사뿐!  기발한 추적 끝에 ‘슈가맨’에 대한 수수께끼를 풀었다고 생각한 순간,  그들은 상상하지도 못했던 놀라운 사실과 마주하게 되는데...!  지금부터 ‘슈가맨’의 리얼 기적이 시작됩니다!",
        "popularity": 11.959,
        "poster_path": "/2UlEwjiNud7V2aB2ghbkRbBjaPA.jpg",
        "release_date": "2012-10-11",
        "title": "서칭 포 슈가맨",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 836
      },
      {
        "adult": false,
        "backdrop_path": "/pFq6tKCgi3LFjzeGC7rEJsL6gK2.jpg",
        "genre_ids": [
          18
        ],
        "id": 34308,
        "original_language": "en",
        "original_title": "Modigliani",
        "overview": "1919년 파리, 뜨겁고 파괴적이었던 세기의 예술가 ‘모딜리아니’는 술과 마약에 중독되어 방탕하고 동료 예술과들과 종잡을 수 없는 기행을 일삼는다. “당신을 영혼까지 알게 되면, 그때 눈동자를 그릴게요” 어느 날, ‘모딜리아니’는 아름다운 ‘잔’에게 매료되어 운명적인 사랑에 빠진다. ‘잔’은 ‘모딜리아니’에게 영감을 주는 뮤즈로 그는 더욱 작품 활동에 몰두하게 된다. 하지만 아이를 낳은 ‘잔’은 이어지는 궁핍한 생활에 지쳐가고, ‘피카소’를 찾아가 전시회에 ‘모딜리아니’의 그림을 걸어달라고 부탁하면서 사이가 좋지 않았던 그들의 갈등은 더욱 심해진다. ‘모딜리아니’는 약물과 알코올 중독 증세로 건강마저 악화되면서 점점 엉망진창이 된다. 그는 파리에서 매년 개최되는 상금이 걸린 미술 경연대회에 작품을 내기로 결심하고, 애증의 라이벌 ‘피카소’까지 참가한다는 소식에 파리가 들썩이기 시작하는데…",
        "popularity": 11.182,
        "poster_path": "/gWQLJFK4Z0KRBZqgiVLT5nU3TIk.jpg",
        "release_date": "2023-10-19",
        "title": "모딜리아니",
        "video": false,
        "vote_average": 7,
        "vote_count": 179
      },
      {
        "adult": false,
        "backdrop_path": "/5d1sQtAKsbVjdUuzXWoh2vKtyy7.jpg",
        "genre_ids": [
          28,
          18,
          35
        ],
        "id": 897160,
        "original_language": "ko",
        "original_title": "용감한 시민",
        "overview": "불의는 못 본 척, 성질은 없는 척, 주먹은 약한 척 먹고 살기 위해 조용히 살아 온 기간제 교사 소시민. 법도 경찰도 무서울 것 하나 없는 안하무인 절대권력 한수강의 선을 넘는 행동을 목격하게 된다. 그의 계속되는 악행을 도저히 참을 수 없었던 그녀, 정체를 숨긴 채 통쾌한 한 방을 날리기로 마음 먹는데…",
        "popularity": 10.342,
        "poster_path": "/oTK4NXB2mHsgYrMRjTBHS9WjfH0.jpg",
        "release_date": "2023-10-25",
        "title": "용감한 시민",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/dkRqcErje4ffPSso7wuoheycotC.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 522925,
        "original_language": "en",
        "original_title": "Dalíland",
        "overview": "달리의 예술 작품을 본능적으로 이해하며 제각기 다른 달리의 서명 수집, TV쇼 출연까지 챙겨보는 달리의 광팬이자 달리의 갤러리에서 일하는 제임스.  20년간 달리 부부가 겨울마다 묵는 뉴욕 세인트 레지스 호텔 1610호에 방문하며 우연한 기회로 달리의 조수를 제안받고 달리의 세계로 들어서게 된다. 매일 이어지는 화려한 파티와 그 속에서 만나는 각양각색의 인물들, 그리고 달리의 예술 활동의 근원이라 할 수 있는 그의 뮤즈 갈라를 통해 천재 예술가 달리의 진짜 얼굴을 보게 되는데! 길게 뻗은 콧수염, 녹아내리는 시계… 당신이 궁금했던 달리의 모든 것 ‘웰컴 투 달리랜드’!",
        "popularity": 10.062,
        "poster_path": "/vhIfmWeQErfTjX7csUaRM6F2G8i.jpg",
        "release_date": "2023-10-18",
        "title": "달리랜드",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 27
      },
      {
        "adult": false,
        "backdrop_path": "/pRfBBi7q8cvM4NiKCh9cGmQdocV.jpg",
        "genre_ids": [
          16,
          18,
          10402
        ],
        "id": 887870,
        "original_language": "ja",
        "original_title": "BLUE GIANT",
        "overview": "세계 최고의 재즈 플레이어가 되겠다는 열정과 테너 색소폰만을 가슴에 품고 도쿄로 무작정 상경한 열여덟 소년 '다이'. 언제나 혼자서만 연습하던 그는 같은 꿈을 지닌 천재 피아니스트 '사와베'와 초보 드러머 '타마다'를 만나 밴드 'JASS'를 결성하고, 일본 최고의 재즈 클럽에서의 공연을 목표로 치열하고 격렬한 무대를 준비한다.",
        "popularity": 7.217,
        "poster_path": "/5ntHgYKnv70nHOPaqsW4ozKRKY8.jpg",
        "release_date": "2023-10-18",
        "title": "블루 자이언트",
        "video": false,
        "vote_average": 9.3,
        "vote_count": 3
      },
      {
        "adult": false,
        "backdrop_path": "/tKRQbdGp8jHaWicKr9Qq8TNJZdu.jpg",
        "genre_ids": [
          18
        ],
        "id": 1086626,
        "original_language": "ko",
        "original_title": "믿을 수 있는 사람",
        "overview": "한영은 중국에서 살았을 때 배운 중국어를 활용하여 중국어 관광통역안내사 자격증을 취득하고 가이드가 된다. 아직 익숙지 않은 환경에 적응해 가며 실적도 제법 쌓지만 함께 온 동생 인혁의 행방은 알 수가 없고 사드 배치로 중국인 관광객까지 줄어드는 등 한영의 삶은 시대의 흐름과 함께 계속적으로 변화를 맞이한다.",
        "popularity": 7.204,
        "poster_path": "/yhwzXIgApNTK2Y676oPkb79isBE.jpg",
        "release_date": "2023-10-18",
        "title": "믿을 수 있는 사람",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/7ktjaB9NlrSnjs0YBFffqvMicrE.jpg",
        "genre_ids": [
          10751,
          18
        ],
        "id": 741600,
        "original_language": "cn",
        "original_title": "別叫我\"賭神\"",
        "overview": "빚에 허덕이며 매일 카지노에 출근 도장을 찍는 왕년의 도신 ‘광휘’에게 오래전 곁을 떠난 여자친구가 찾아와 그의 아들이라며 한 달간 ‘아양’을 돌봐 달라고 부탁한다. 도박 빚 때문에 한 푼이 아쉬운 ‘광휘’는 양육비로 내민 5만 달러의 달콤한 제안을 수락하게 된다.하늘에서 뚝 떨어진 아들 ‘아양’과 한 달 살이를 시작한 ‘광휘’. 청소도 기가 막히게 잘하고, 뽑는 카드 족족 돈을 따게 만들어주는 아들과 철없는 아빠 ‘광휘’는 티격태격하며 점점 정이 들어가는데… 약속한 한 달이 되어 이별을 준비하는 그때 ‘아양’의 엄마가 위중한 상태라는 연락을 받게 되고, ‘광휘’는 자신의 과거를 지우고 아들 ‘아양’을 잘 돌보겠다고 결심하게 된다.  평생을 가진 것 없이 살았던 그에게 찾아온 기적 같은 선물! 인생 2회차, 새로운 판이 시작됐다!",
        "popularity": 5.212,
        "poster_path": "/bCqS1MkwZouIdfevYIBz74VBTbp.jpg",
        "release_date": "2023-11-01",
        "title": "원 모어 찬스",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 6
      },
      {
        "adult": false,
        "backdrop_path": "/lGL6HNc2h0VmdEtjQ2bZfWX8qn1.jpg",
        "genre_ids": [
          10749,
          18
        ],
        "id": 977179,
        "original_language": "th",
        "original_title": "เธอกับฉันกับฉัน",
        "overview": "‘유'와 ‘미'는 하루하루의 모든 순간을 함께하며 모든 것을 나누는 일란성쌍둥이 소녀들이다. 어느 날 ‘미'가 ‘유'를 대신해 수학 시험을 보러 갔다가 ‘마크’라는 소년에게 연필을 빌리게 되는데 둘은 서로에게 두근거림을 느끼게 된다. ‘유'와 ‘미‘는 시골 할머니 집에서 여름방학을 보내게 되고 ‘유'는 혼자 전통악기 수업을 들으러 갔다가 우연히 자신을 ‘미’로 오해하고 자신에게 말을 거는 소년 ‘마크’를 만난다. ‘유’는 ‘마크’에게 한눈에 반해 그에게 시험장에서 만난 게 자신이 아니라고 털어놓지 못하고, ‘미’는 ‘마크’에게 반해버린 ‘유’를 보며 ‘마크’를 향한 자신의 마음을 애써 감춘다.  그렇게 평생 모든 걸 함께 나누며 살 것 같았던 쌍둥이들에게 나눌 수 없는 첫사랑이 찾아온다.",
        "popularity": 4.679,
        "poster_path": "/6qdaQ7l9ZKRnOKKFxEoiuX1tJkk.jpg",
        "release_date": "2023-10-25",
        "title": "유앤미앤미",
        "video": false,
        "vote_average": 6,
        "vote_count": 12
      },
      {
        "adult": false,
        "backdrop_path": "/yNOhMG7M37spJPdknhET1Fdn8BN.jpg",
        "genre_ids": [
          18,
          10749
        ],
        "id": 972435,
        "original_language": "ko",
        "original_title": "너와 나",
        "overview": "수학여행 전날, 샘은 그녀의 가장 친한 친구 하은이 죽는 불길한 꿈을 꾼다. 두려움에 휩싸인 샘은 최근 자전거 사고로 병원에 입원한 하은에게 달려가 함께 수학여행을 가자고 한다. 두 소녀는 여행을 위한 돈을 벌기 위해 하은의 캠코더를 팔기로 결심한다. 캠코더를 팔러 가는 길, 샘은 자신이 느끼는 하은에 대해 감정과 하은의 마음이 다를지도 모른다는 깊은 불안을 느낀다. 그녀는 하은을 둘러싼 사람들에게 질투심을 보이고 결국 그녀를 지치게 만든다. 둘이 크게 다툰 후, 하은은 사라지고 샘은 그녀를 찾아 헤매게 된다.",
        "popularity": 5.724,
        "poster_path": "/bYRzJcBw70JQzQrhTLUMkgeCt19.jpg",
        "release_date": "2023-10-25",
        "title": "너와 나",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/wgg0uDc0srsvQJQYlnnOhTAHNSr.jpg",
        "genre_ids": [
          99
        ],
        "id": 1174346,
        "original_language": "ko",
        "original_title": "약속",
        "overview": "아홉 살 소년 시우는 밤이 되면 세상을 떠난 엄마가 그리워 눈물을 흘리곤 한다. 그럴 때마다 시우의 아빠 민병훈은 아들을 감싸 안으며 마음을 다독인다. 사랑하는 이를 잃은 부자는 슬픔과 고독, 그리움으로 사무친 시간을 보낼 수밖에 없지만 둘이 함께하는 순간만은 따뜻하고 강하다.",
        "popularity": 2.749,
        "poster_path": "/cmw6brdxkbGlD3npwWFvLihwSZb.jpg",
        "release_date": "2023-11-01",
        "title": "약속",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/ptT7yDPqHPJmCYVUZ9hQhr5QyF8.jpg",
        "genre_ids": [
          9648,
          53
        ],
        "id": 977152,
        "original_language": "ko",
        "original_title": "오픈 더 도어",
        "overview": "홀로 집에서 술잔을 기울이던 문석에게 처남인 치훈이 찾아온다. 함께 술자리를 이어가는데, 5년 전 강도사건으로 엄마를 떠나보낸 생각에 울분이 터진 치훈. 누나에 대한 이야기로 이어지며 서로의 감정은 극에 다다르고 결국 하지 말아야 할 말을 내뱉고 만 문석. 혼란에 휩싸인 문석과 치훈은 이제 선택을 해야만 한다.",
        "popularity": 4.21,
        "poster_path": "/alghp3edIUkbDx0TSqACWKfEepo.jpg",
        "release_date": "2023-10-25",
        "title": "오픈 더 도어",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/ptT7yDPqHPJmCYVUZ9hQhr5QyF8.jpg",
        "genre_ids": [],
        "id": 1125324,
        "original_language": "ko",
        "original_title": "고인돌",
        "overview": "영화 <고인돌>은 기원전 2333년 한반도 최초 부족국가 고조선 설립 직전의 이야기다. 고인돌 문화가 융성한 시대, 태양부족과 달 부족이 지석강을 경계로 적대관계에 놓여 있다. 태양부족장 딸 사스미와 달 부족장 아들 바우쩍은 사냥터에서 만나 운명적인 사랑에 빠진다. 그러나 그들의 사랑은 부족 간 전쟁으로 비화되고... 바우쩍은 사스미를 지키기 위해 달 부족장이 쏜 화살을 대신 맞고 죽는다. 아비가 아들을 죽인 상황이 된 것이다. 그리고 현재 고대인 바우쩍과 사스미는 성이 다른 남녀로 태어나 고고학 박사와 여고생의 신분으로 다시 만나는데...",
        "popularity": 5.627,
        "poster_path": "/xjoeTGzcz2kag1ebzHjHivG1HuV.jpg",
        "release_date": "2023-10-19",
        "title": "고인돌",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/6uAjCDeHnvM2CvQCQZrchDBU2MS.jpg",
        "genre_ids": [
          18,
          53,
          9648
        ],
        "id": 1006031,
        "original_language": "ko",
        "original_title": "독친",
        "overview": "집안도 좋고 공부도 잘하는 완벽한 아이 유리가 어느 날 죽은 채로 발견된다. 형사는 자살에 가능성을 두지만, 유리의 엄마 혜영은 예나와 기범 때문에 유리가 죽었다고 주장한다. 한때 유리의 단짝 친구였던 아이돌 연습생 예나와 유리에게 유독 신경 써주었던 담임 선생님 기범. 서로 다른 주장으로 수사는 난항을 겪고, 수사가 진행될수록 혜영으로 인해 유리의 마음에 균열 가고 있던 것이 드러난다. 최선을 다해 딸을 사랑했다고 믿었던 혜영은 죽음에 얽힌 진실을 풀어낼 수 있을까?",
        "popularity": 4.281,
        "poster_path": "/Ary2DCWXriUDyykn6VL4PNjekg5.jpg",
        "release_date": "2023-11-01",
        "title": "독친",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/uj4ChlZG4014QhcfMwlExpI3Nz6.jpg",
        "genre_ids": [
          18
        ],
        "id": 1114775,
        "original_language": "ko",
        "original_title": "우리의 하루",
        "overview": "한때 배우로 일했던 상원(김민희)은 지금 선배 정수(송선미)의 거처에 머무르는 중이다. 어느 오후, 배우가 되고 싶다는 여자가 찾아와 상원의 이야기를 듣고자 한다. 시인 홍의주(기주봉)는 심장이 안 좋아져서 술 담배를 끊은 상태다. 젊은 감독이 시인에 대한 다큐멘터리를 찍기 위해 그의 집에 와 있다. 마침 시인을 동경해온 한 남자가 방문해 그에게 여러 질문을 던진다.",
        "popularity": 4.169,
        "poster_path": "/712BOyadfS8Dt56ymxEyahlqYOQ.jpg",
        "release_date": "2023-10-19",
        "title": "우리의 하루",
        "video": false,
        "vote_average": 7,
        "vote_count": 2
      },
      {
        "adult": false,
        "backdrop_path": "/ptT7yDPqHPJmCYVUZ9hQhr5QyF8.jpg",
        "genre_ids": [
          10402,
          99
        ],
        "id": 1148154,
        "original_language": "ko",
        "original_title": "마이 샤이니 월드",
        "overview": "샤이니 데뷔 15주년 기념 영화",
        "popularity": 3.828,
        "poster_path": "/pUt4jSQ6oH9Jj8PGq1Z0unNbJUy.jpg",
        "release_date": "2023-11-03",
        "title": "마이 샤이니 월드",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/m3CVpgdPospIf53mxaiOD5UIOBj.jpg",
        "genre_ids": [
          10749
        ],
        "id": 846517,
        "original_language": "zh",
        "original_title": "再說一次我願意",
        "overview": "너에게 첫눈에 반한 지 2225일째, 두근두근 설렘 가득 대망의 날이 밝았다!  프러포즈 D-DAY를 맞이한 ‘루크’는 ‘샤오차이’가 감동할 모습을 기대하며 분주한 하루를 보낸다. ☑ 마음을 전달할 반지 맞추기 ☑ 프러포즈를 도와줄 친구들과 사전 모임 ☑ 멋지게 꽃 단장하기 ☑ 여친 도착 전 리허설은 필수 마침내 오늘의 주인공 ‘샤오차이’가 도착하고 모든 게 완벽하다 생각한 순간, ‘루크’의 고백은 청천벽력 같은 거절과 함께 암전?! 그리고 다시, 프러포즈날의 아침이 밝았다?!",
        "popularity": 3.377,
        "poster_path": "/xbhoXMTzSsYIrHokOccsEaEFEkk.jpg",
        "release_date": "2023-10-18",
        "title": "세이 예스 어게인",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 2
      },
      {
        "adult": false,
        "backdrop_path": "/i12K4LKnzrXV4Q8s64kYM25PMnY.jpg",
        "genre_ids": [
          99
        ],
        "id": 913824,
        "original_language": "en",
        "original_title": "Free Chol Soo Lee",
        "overview": "탕! 탕! 탕! 1973년 6월 3일, 미국 샌프란시스코 차이나타운 거리 한복판에서 중국인 갱단이 총격을 받고 사망한다. 5일 후, 한 동양인 청년이 살인 용의자로 긴급 체포된다. 이름 ‘철수 리’, 21살의 한인 이민자였다. 동양인 외모를 구별 못하는 백인 목격자들의 증언으로 종신형을 선고받은 이철수는 곧장 캘리포니아에서 가장 폭력적인 교도소에 수감된다. 그대로 묻힐 뻔했던 사건은 한 기자의 심층 보도로 다시 수면 위로 떠오른다. 한인 최초의 미국 주류 신문사 기자였던 이경원은 차이나타운 취재 중 우연히 이철수 사건을 접하고, 엉터리 재판 과정을 폭로한다. 이철수의 억울한 사연이 알려지며 한인 이민 사회와 종교계가 들끓고, 재심을 요구하는 구명 운동이 시작된다. ‘프리 철수 리’ 운동이 아시안아메리칸 사회를 뒤흔들며 빠르게 번져가던 중, 교도소 안 이철수는 갱의 공격으로부터 자신을 지키려다 진짜 살인을 저지르게 되는데…. 반전에 반전을 거듭한 10년의 재판, 그리고 아무도 예상하지 못했던 이철수의 나머지 삶의 반전! 2023년, 모두의 기대를 배반하고 충격적인 감동을 선사할, 당신의 인생 영화가 될 최고의 다큐멘터리!",
        "popularity": 2.345,
        "poster_path": "/40IwTtEOYDCMLXKuC4ronJJwJFm.jpg",
        "release_date": "2023-10-18",
        "title": "프리 철수 리",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 8
      },
      {
        "adult": false,
        "backdrop_path": "/rJIZEbtjfMWCdFn0d4ZTBWbF6Rf.jpg",
        "genre_ids": [
          18
        ],
        "id": 1099951,
        "original_language": "ko",
        "original_title": "너를 줍다",
        "overview": "사랑에 배신 당한 지수는 타인의 쓰레기를 뒤지면 그 사람의 진짜 모습을 알 수 있다고 믿는다. 어느 날, 최선을 다해서 깔끔하게 버린 쓰레기가 눈에 띈다. 옆집 남자 우재의 것이다. 지수는 그가 궁금하다. 지수는 쓰레기 정보로 그에게 접근하는 데 성공한다. 우재와의 만남이 거듭되면서 그의 밝고 따뜻함, 그리고 상처들. 지수는 점차 마음이 열리기 시작한다.",
        "popularity": 1.834,
        "poster_path": "/4dbSyYeOCYceOLs5ebvFufYU5qY.jpg",
        "release_date": "2023-11-08",
        "title": "너를 줍다",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/4mehkHD0Jak932oTcMV7ONAk6j9.jpg",
        "genre_ids": [
          99
        ],
        "id": 1021777,
        "original_language": "ko",
        "original_title": "두 사람을 위한 식탁",
        "overview": "섭식장애로 고통받는 딸과 딸의 병에 무력한 엄마, 모녀관계의 깊고 깊은 연원을 파고든다. 2007년 15살 채영은 거식증 진단을 받고 폐쇄병동에 입원한다. 엄마 상옥은 막연한 죄책감에 딸의 병이 어디서 온 것인지를 되짚지만 알 길이 없다. 10년 뒤 엄마와 딸의 대화가 시작된다. 채영의 일기와 그림, 보이스 오버에 의지하여 감독은 할머니-어머니-딸, 삼대로 이어진 모녀관계의 갈등과 고통의 내력을 탐문한다.",
        "popularity": 0.942,
        "poster_path": "/k8A3LyQwctIu5KWFqyBsa50LJA7.jpg",
        "release_date": "2023-10-25",
        "title": "두 사람을 위한 식탁",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/aE1nANa2JYOphN3F10YzOTK0Ixw.jpg",
        "genre_ids": [
          18
        ],
        "id": 1021691,
        "original_language": "ko",
        "original_title": "5시부터 7시까지의 주희",
        "overview": "",
        "popularity": 1.674,
        "poster_path": "/zFJMZfXKmSqaYsuWgeSbPi5Iiwc.jpg",
        "release_date": "2023-11-08",
        "title": "5시부터 7시까지의 주희",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/uj4ChlZG4014QhcfMwlExpI3Nz6.jpg",
        "genre_ids": [
          18
        ],
        "id": 1114775,
        "original_language": "ko",
        "original_title": "우리의 하루",
        "overview": "",
        "popularity": 2.079,
        "poster_path": "/712BOyadfS8Dt56ymxEyahlqYOQ.jpg",
        "release_date": "2023-10-19",
        "title": "우리의 하루",
        "video": false,
        "vote_average": 7,
        "vote_count": 2
      }
    ],
    "total_pages": 2,
    "total_results": 34
  }
