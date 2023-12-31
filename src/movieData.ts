export interface MovieData {
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

export const data: { page: number; results: MovieData[]; total_pages: number, total_results: number } = {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 238,
      "original_language": "en",
      "original_title": "The Godfather",
      "overview": "시실리에서 이민온 뒤, 정치권까지 영향력을 미치는 거물로 자리잡은 돈 꼴레오네는 갖가지 고민을 호소하는 사람들의 문제를 해결해주며 대부라 불리운다. 한편 솔로소라는 인물은 꼴레오네가와 라이벌인 탓타리아 패밀리와 손잡고 새로운 마약 사업을 제안한다. 돈 꼴레오네가 마약 사업에 참여하지 않기로 하자, 돈 꼴레오네를 저격해 그는 중상을 입고 사경을 헤매게 된다. 그 뒤, 돈 꼴레오네의 아들 소니는 조직력을 총 동원해 다른 패밀리들과 피를 부르는 전쟁을 시작하는데... 가족의 사업과 상관없이 대학에 진학한 뒤 인텔리로 지내왔던 막내 아들 마이클은 아버지가 총격을 당한 뒤, 아버지를 구하기 위해 위험천만한 협상 자리에 나선다.",
      "popularity": 119.011,
      "poster_path": "/I1fkNd5CeJGv56mhrTDoOeMc2r.jpg",
      "release_date": "1972-12-27",
      "title": "대부",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 18729
    },
    {
      "adult": false,
      "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 278,
      "original_language": "en",
      "original_title": "The Shawshank Redemption",
      "overview": "촉망받는 은행 간부 앤디 듀프레인은 아내와 그녀의 정부를 살해했다는 누명을 쓴다. 주변의 증언과 살해 현장의 그럴듯한 증거들로 그는 종신형을 선고받고 악질범들만 수용한다는 지옥같은 교도소 쇼생크로 향한다. 인간 말종 쓰레기들만 모인 그곳에서 그는 이루 말할 수 없는 억압과 짐승보다 못한 취급을 당한다. 그러던 어느 날, 간수의 세금을 면제받게 해 준 덕분에 그는 일약 교도소의 비공식 회계사로 일하게 된다. 그 와중에 교도소 소장은 죄수들을 이리저리 부리면서 검은 돈을 긁어 모으고 앤디는 이 돈을 세탁하여 불려주면서 그의 돈을 관리하는데...",
      "popularity": 88.283,
      "poster_path": "/oAt6OtpwYCdJI76AVtVKW1eorYx.jpg",
      "release_date": "1995-01-28",
      "title": "쇼생크 탈출",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 24703
    },
    {
      "adult": false,
      "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 240,
      "original_language": "en",
      "original_title": "The Godfather Part II",
      "overview": "아버지의 장례식 도중에 맏아들 파올로가 총에 맞아 죽고, 비토(로버트 드니로)는 겨우 도망쳐 미국으로 건너온다. 대부로 성장한 후 비토는 다시 치치오를 찾아 복수를 한다. 새롭게 등장한 젊은 대부 마이클(알 파치노)은 본거지를 라스베가스로 옮기고 가족의 사업을 가능한 합법적인 것으로 바꾸려고 애쓴다. 그런 과중 중에 자신을 제거하려는 음모를 알게되고 그는 냉혹하고 신속하게 반대파들을 제거, 조직을 더욱 확대해 나간다. 이를 위해 마이클은 배신한 형마저 죽이고, 일 때문에 아내와 헤어지는 등 인간적으로는 계속 외로워져 가는데...",
      "popularity": 64.653,
      "poster_path": "/bhqvqYuAgrTGwyNAmMR0ZVmjXel.jpg",
      "release_date": "1978-04-20",
      "title": "대부 2",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 11327
    },
    {
      "adult": false,
      "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
      "genre_ids": [
        18,
        36,
        10752
      ],
      "id": 424,
      "original_language": "en",
      "original_title": "Schindler's List",
      "overview": "2차 세계대전 당시 독일군이 점령한 폴란드. 시류에 맞춰 자신의 성공을 추구하는 기회주의자 쉰들러는 유태인이 경영하는 그릇 공장을 인수한다. 그는 공장을 인수하기 위해 나찌 당원이 되고 독일군에게 뇌물을 바치는 등 갖은 방법을 동원한다. 그러나 냉혹한 기회주의자였던 쉰들러는 유태인 회계사인 스턴과 친분을 맺으면서 냉혹한 유태인 학살에 대한 양심의 소리를 듣기 시작한다. 마침내 그는 강제 수용소로 끌려가 죽음을 맞게될 유태인들을 구해내기로 결심하고, 독일군 장교에게 빼내는 사람 숫자대로 뇌물을 주는 방법으로 유태인들을 구해내려는 계획을 세우는데...",
      "popularity": 64.621,
      "poster_path": "/oyyUcGwLX7LTFS1pQbLrQpyzIyt.jpg",
      "release_date": "1994-03-05",
      "title": "쉰들러 리스트",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 14634
    },
    {
      "adult": false,
      "backdrop_path": "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
      "genre_ids": [
        16,
        10751,
        14
      ],
      "id": 129,
      "original_language": "ja",
      "original_title": "千と千尋の神隠し",
      "overview": "평범한 열 살 짜리 소녀 치히로 식구는 이사 가던 중 길을 잘못 들어 낡은 터널을 지나가게 된다. 터널 저편엔 폐허가 된 놀이공원이 있었고 그곳엔 이상한 기운이 흘렀다. 인기척 하나 없는 이 마을의 낯선 분위기에 불길한 기운을 느낀 치히로는 부모님에게 돌아가자고 조르지만 부모님은 호기심에 들떠 마을 곳곳을 돌아다니기 시작한다. 어느 음식점에 도착한 치히로의 부모님은 그 곳에 차려진 음식들을 보고 즐거워하며 허겁지겁 먹어대다가 돼지로 변해버린다. 겁에 질려 당황하는 치히로에게 낯선 소년 하쿠가 나타나 빨리 이곳을 나가라고 소리치는데...",
      "popularity": 79.634,
      "poster_path": "/5TJjXwERQGX9nUu21UaK9N4wECD.jpg",
      "release_date": "2002-06-28",
      "title": "센과 치히로의 행방불명",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 14941
    },
    {
      "adult": false,
      "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
      "genre_ids": [
        35,
        53,
        18
      ],
      "id": 496243,
      "original_language": "ko",
      "original_title": "기생충",
      "overview": "전원 백수로 살 길 막막하지만 사이는 좋은 기택 가족. 장남 기우에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 도움과 기대 속에 박 사장 집으로 향하는 기우. 글로벌 IT기업의 CEO인 박 사장의 저택에 도착하자 젊고 아름다운 사모님 연교와 가정부 문광이 기우를 맞이한다. 큰 문제 없이 박 사장의 딸 다혜의 과외를 시작한 기우. 그러나 이렇게 시작된 두 가족의 만남 뒤로, 걷잡을 수 없는 사건이 기다리고  있는데.....",
      "popularity": 76.262,
      "poster_path": "/jjHccoFjbqlfr4VGLVLT7yek0Xn.jpg",
      "release_date": "2019-05-30",
      "title": "기생충",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 16468
    },
    {
      "adult": false,
      "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
      "genre_ids": [
        10749,
        16,
        18
      ],
      "id": 372058,
      "original_language": "ja",
      "original_title": "君の名は。",
      "overview": "시골에 사는 소녀 미츠하(가미시라이시 모네)는 어느 날 잠에서 깬 후 자신의 몸이 남자로 바뀐 걸 알게 된다. 같은 시간, 도쿄에 사는 소년 타키(가미키 류노스케) 역시 이 기이한 상황을 겪고 있다. 낯선 가족, 낯선 친구들, 낯선 풍경들... 서로에게 이어진 끈을 알게 된 둘은 둘만의 규칙을 정하고 점차 상황을 받아들이기 시작한다. 서로에게 남긴 메모를 확인하며  점점 친구가 되어가는 타키와 미츠하. 언제부턴가 더 이상 몸이 바뀌지 않자  자신들이 특별하게 이어져있었음을 깨달은  타키는 미츠하를 만나러 가는데...",
      "popularity": 87.032,
      "poster_path": "/2DJCufz3Oa703PbLjNX1pM6MCG2.jpg",
      "release_date": "2017-01-04",
      "title": "너의 이름은.",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 10340
    },
    {
      "adult": false,
      "backdrop_path": "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
      "genre_ids": [
        18,
        28,
        80,
        53
      ],
      "id": 155,
      "original_language": "en",
      "original_title": "The Dark Knight",
      "overview": "범죄와 부정부패를 제거하여 고담시를 지키려는 배트맨. 그는 짐 고든 형사와 패기 넘치는 고담시 지방 검사 하비 덴트와 함께 도시를 범죄 조직으로부터 영원히 구원하고자 한다. 세 명의 의기투합으로 위기에 처한 악당들이 모인 자리에 보라색 양복을 입고 얼굴에 짙게 화장을 한 괴이한 존재가 나타나 배트맨을 죽이자는 사상 초유의 제안을 한다. 그는 바로 어떠한 룰도, 목적도 없는 사상 최악의 악당 미치광이 살인광대 조커. 배트맨을 죽이고 고담시를 끝장내버리기 위한 조커의 광기 어린 행각에 도시는 혼란에 빠지는데...",
      "popularity": 84.236,
      "poster_path": "/f6dNinWX8rBM79JXKcShkfSh2oA.jpg",
      "release_date": "2008-08-06",
      "title": "다크 나이트",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 30680
    },
    {
      "adult": false,
      "backdrop_path": "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
      "genre_ids": [
        14,
        18,
        80
      ],
      "id": 497,
      "original_language": "en",
      "original_title": "The Green Mile",
      "overview": "미국 루이지애나의 콜드 마운틴 교도소. 폴은 사형수 감방의 간수장으로 일하고 있다. 그의 일은 사형수들을 감독하고, 그린 마일이라 불리는 초록색 복도를 거쳐 그들을 사형 집행장까지 안내하는 것. 폴은 그들이 죽음을 맞이하는 순간까지 평화롭게 지낼 수 있도록 최선을 다한다. 어느 날 존 커피라는 사형수가 이송되어 온다. 그는 쌍둥이 여자아이를 살해한 흉악범. 하지만 순진한 눈망울에 겁을 잔뜩 집어먹은 그의 모습에 폴은 당혹감을 느낀다. 게다가 그는 초자연적 능력으로 폴의 지병을 깨끗하게 치료해주기까지 한다. 존을 전기 의자로 데려가야 할 날이 다가오면서 폴은 그가 무죄라는 확신을 갖게 되는데...",
      "popularity": 82.963,
      "poster_path": "/yuSpRhrTIJa5JN8oESrfD2bndp1.jpg",
      "release_date": "2000-03-04",
      "title": "그린 마일",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 15980
    },
    {
      "adult": false,
      "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      "genre_ids": [
        53,
        80
      ],
      "id": 680,
      "original_language": "en",
      "original_title": "Pulp Fiction",
      "overview": "펌프킨와 허니 버니가 레스토랑에서 강도 행각을 벌이기 시작한다. 빈센트와 그 동료 쥴스는 두목의 금가방을 찾기 위해 다른 건달이 사는 아파트를 찾아간다. 마르셀러스는 부치에게 돈을 주며 상대 선수에게 져 주라고 하지만 부치는 상대 선수를 때려 눕히고 도망치다, 어릴 때 아버지에게 물려받은 시계를 찾기 위해 아파트로 향한다. 아무런 상관 없이 보이는 이 사건들이 서로 얽히고 섥히면서 예상치 못한 인과관계가 만들어지는데...",
      "popularity": 67.589,
      "poster_path": "/6lXRHGoEbnnBUKsuqpL9JxD4DzT.jpg",
      "release_date": "1994-09-10",
      "title": "펄프 픽션",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 25952
    },
    {
      "adult": false,
      "backdrop_path": "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 13,
      "original_language": "en",
      "original_title": "Forrest Gump",
      "overview": "불편한 다리, 남들보다 조금 떨어지는 지능을 가진 포레스트 검프는 헌신적인 어머니의 보살핌과 첫사랑 제니와의 만남으로 편견과 괴롭힘 속에서도 따뜻한 마음을 지니고 성장한다. 또래들의 괴롭힘을 피해 도망치던 포레스트는 누구보다 빠르게 달릴 수 있는 자신의 재능을 깨닫는다. 그의 재능을 알아 본 대학에서 그를 미식축구 선수로 발탁하고, 졸업 후에도 뛰어난 신체능력으로 군에 들어가 무공훈장을 수여받는 등 탄탄한 인생 가도에 오르게 된 포레스트. 하지만 어머니가 병에 걸려 죽음을 맞이하고, 첫사랑 제니 역시 그의 곁을 떠나가며 다시 한 번 인생의 전환점을 맞이하게 되는데...",
      "popularity": 65.367,
      "poster_path": "/xdJxoq0dtkchOkUz5UVKuxn7a2V.jpg",
      "release_date": "1994-10-15",
      "title": "포레스트 검프",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 25462
    },
    {
      "adult": false,
      "backdrop_path": "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
      "genre_ids": [
        12,
        14,
        28
      ],
      "id": 122,
      "original_language": "en",
      "original_title": "The Lord of the Rings: The Return of the King",
      "overview": "사우론이 인간들의 마지막 요새인 곤도르를 향해 야욕을 드러내고 있는 한편, 아라곤은 쇠락해가고 있는 곤도르의 재건을 위해 왕위 계승을 신중하게 결정지어야만 하는 상황. 이제 중간대륙의 미래는 그의 어깨에 달려있는 것. 사우론이 이끄는 어둠의 군대와의 마지막 전투를 위해 간달프는 곤도르에 흩어져 있던 병사들을 모으고, 로한의 왕 세오덴에게 도움을 받기도 하지만 사우론의 군대에 비하면 열세를 면치 못한다. 그러나 그들은 중간대륙을 사우론의 야욕으로부터 지키려는 사명감과, 마지막 반지 운반자에게 임무를 끝낼 기회를 주기 위해 어둠의 군대를 향해 돌진하게 되는데...",
      "popularity": 88.689,
      "poster_path": "/tAXXuEAKLk2mOEIJzwajJQEnVZu.jpg",
      "release_date": "2003-12-17",
      "title": "반지의 제왕: 왕의 귀환",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 22387
    },
    {
      "adult": false,
      "backdrop_path": "/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
      "genre_ids": [
        37
      ],
      "id": 429,
      "original_language": "it",
      "original_title": "Il buono, il brutto, il cattivo",
      "overview": "미국의 남북전쟁이 한창인 때, 블론디는 멕시코인 총잡이 투코와 함께 동업 중이다. 블론디는 현상범 투코를 잡아 현상금을 받고, 투코가 교수형을 당하는 순간 구해주는 역할. 한편 세텐자라 불리우는 범죄자는 엄청나 돈이 묻힌 비밀장소를 추적 중이다. 그런데, 투코와 실랑이를 벌이던 블론디는 돈이 묻힌 장소를 죽어가는 사람에게 듣게 되고, 결국 둘은 돈을 찾아 나서는데...",
      "popularity": 68.201,
      "poster_path": "/s7qPuoj4liolAtmx9vcL6AyaZzR.jpg",
      "release_date": "1969-07-05",
      "title": "석양의 무법자",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 7773
    },
    {
      "adult": false,
      "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 769,
      "original_language": "en",
      "original_title": "GoodFellas",
      "overview": "아일랜드계 이탈리아인 헨리 힐와 토미는 13살에 마피아에 입문해 지미와 함께 트럭이나 공항 화물을 훔치는 일을 한다. 결혼 후에도 마피아 생활을 계속하는 헨리는 이제 조직에서도 안정된 위치와 경제적 여유를 갖는다.  어느 날 헨리와 지미는 공항터미널 사건을 모의해 현금 6백만 달러라는 엄청한 돈을 훔친다. 이 사건을 은폐하기 위해 혈안이 된 지미는 모의에 참여했던 사람들을 죽이고, 토미는 마피아 조직에 가담했다가 살해당한다. 엎친데 덮친격으로 헨리마저 마약거래로 경찰서에 잡혀 들어가는데...",
      "popularity": 47.738,
      "poster_path": "/zF9hSBS1t7PVFLo01GrJ3OjGi67.jpg",
      "release_date": "1991-02-14",
      "title": "좋은 친구들",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 11757
    },
    {
      "adult": false,
      "backdrop_path": "/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg",
      "genre_ids": [
        16,
        18,
        10752
      ],
      "id": 12477,
      "original_language": "ja",
      "original_title": "火垂るの墓",
      "overview": "2차 세계대전, 일본의 한 마을에 폭격기로 인한 대공습이 일어난다. 마을이 화염으로 휩싸이자, 14살인 세이타는 부모님과 따로 만나기로 약속한 채 4살짜리 여동생 세츠코를 업고 피신한다. 결국 집과 어머니를 잃고 먼 친척아주머니의 집으로 향하는 세이타와 세츠코. 힘들고 어려운 환경에서도 오빠 세이타는 천진하고 착한 여동생 세츠코를 보면서 희망과 용기를 잃지 않는다. 하지만 시간이 지날수록 친척아주머니의 남매에 대한 냉대는 더욱 심해지고, 세이타는 어머니가 남겨주었던 마지막 여비를 챙겨 세츠코와 함께 산 속에 있는 방공호로 거처를 옮긴다. 두 남매는 산 속 동굴에서 반딧불이를 잡아 불을 밝히고, 물고기와 개구리를 잡아먹으며 살아가는데...",
      "popularity": 0.6,
      "poster_path": "/uN0x0G4uuRjFJIFN57iYihBV2Qh.jpg",
      "release_date": "2014-06-19",
      "title": "반딧불이의 묘",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 4874
    },
    {
      "adult": false,
      "backdrop_path": "/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg",
      "genre_ids": [
        35,
        18
      ],
      "id": 637,
      "original_language": "it",
      "original_title": "La vita è bella",
      "overview": "로마에 갓 상경한 시골 총각 귀도는 운명처럼 만난 여인 도라에게 첫눈에 반한다. 넘치는 재치와 유머로 약혼자가 있던 그녀를 사로잡은 귀도는 가정을 꾸리며 분신과도 같은 아들 조수아를 얻는다. 조수아의 다섯 살 생일, 갑작스레 들이닥친 군인들은 귀도와 조수아를 수용소 행 기차에 실어버리고, 소식을 들은 도라 역시 기차에 따라 오른다. 귀도는 아들을 달래기 위해 무자비한 수용소 생활을 단체게임이라 속이고 1,000점을 따는 우승자에게는 진짜 탱크가 주어진다고 말한다. 하루하루가 지나 어느덧 전쟁이 끝났다는 말을 들은 귀도는 조수아를 창고에 숨겨둔 채 아내를 찾아 나서는데...",
      "popularity": 35.857,
      "poster_path": "/yjOqQsQHdsEZfAosZERqHiwjaty.jpg",
      "release_date": "1999-03-06",
      "title": "인생은 아름다워",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 12247
    },
    {
      "adult": false,
      "backdrop_path": "/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
      "genre_ids": [
        28,
        18
      ],
      "id": 346,
      "original_language": "ja",
      "original_title": "七人の侍",
      "overview": "일본의 전국시대. 주민들은 황폐한 땅에서 어렵게 수확한 식량으로 한해 한해를 넘기는 빈촌에 살고 있다. 이 빈촌엔 보리 수확이 끝날 무렵이면 어김없이 산적들이 찾아와 모든 식량을 모조리 약탈해 간다. 싸워도 애원해도 소용이 없었다. 가만히 있을 수만은 없던 촌장의 결단으로 사무라이들을 모집하는데, 이들은 풍부한 전쟁 경험을 가진 시마다 칸베에를 포함한 7명이었다. 시마다의 지휘하에 마을은 방위태세를 갖추고 전투훈련도 시작한다. 이윽고 산적들의 공격이 시작되어 치열한 사투가 벌어진다.",
      "popularity": 29.408,
      "poster_path": "/6Y8Q5t79ybiDA7XubUTneqZhjA3.jpg",
      "release_date": "2004-04-16",
      "title": "7인의 사무라이",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 3238
    },
    {
      "adult": false,
      "backdrop_path": "/zoVeIgKzGJzpdG6Gwnr7iOYfIMU.jpg",
      "genre_ids": [
        18,
        10749
      ],
      "id": 11216,
      "original_language": "it",
      "original_title": "Nuovo Cinema Paradiso",
      "overview": "어린 시절 영화가 세상의 전부였던 소년 토토는 학교 수업을 마치면 마을 광장에 있는 낡은 시네마 천국이라는 극장으로 달려가 영사 기사 알프레도와 친구로 지내며 어깨너머로 영사기술을 배운다. 어느 날 관객들을 위해 광장에서 야외 상영을 해주던 알프레도가 그만 화재 사고로 실명하게 되고, 토토가 그의 뒤를 이어 시네마 천국의 영상기사로 일하게 된다. 실명한 후에도 토토의 친구이자 아버지로 든든한 정신적 지주가 되어준 알프레도는 청년이 된 토토가 사랑하는 여자 엘레나의 부모님의 반대로 좌절하자 넓은 세상으로 나가서 더 많은 것을 배우라며 권유하는데...",
      "popularity": 27.771,
      "poster_path": "/r782z4H7GzkyNaf3hAtBB4pVkOj.jpg",
      "release_date": "1990-07-07",
      "title": "시네마 천국",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 3967
    },
    {
      "adult": false,
      "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
      "genre_ids": [
        18
      ],
      "id": 550,
      "original_language": "en",
      "original_title": "Fight Club",
      "overview": "자동차 회사의 리콜 심사관으로 일하는 주인공(에드워드 노튼)은 일상의 무료함과 공허함 속에서 늘 새로운 탈출을 꿈꾼다. 그는 비행기에서 자신을 비누 제조업자라고 소개하는 타일러 더든(브래드 피트)을 만난다. 집에 돌아온 주인공은 아파트가 누군가에 의해 폭파되었음을 발견하고, 타일러에게 도움을 청해 함께 생활하게 된다. 어느 날 밤 타일러는 주인공에게 자신을 때려달라고 부탁한다. 사람은 싸워봐야 진정한 자신을 알 수 있다는 것이다. 결국 이들은 매주 토요일 밤 술집 지하에서 맨주먹으로 격투를 벌이는 파이트 클럽을 결성하기에 이르는데...",
      "popularity": 84.121,
      "poster_path": "/eKZ07Ted7VHxQjbuZrRBFOamcKJ.jpg",
      "release_date": "1999-11-13",
      "title": "파이트 클럽",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 27293
    },
    {
      "adult": false,
      "backdrop_path": "/uif5fUshJrXyyDzfpzp1DLw3N0S.jpg",
      "genre_ids": [
        27,
        18,
        53
      ],
      "id": 539,
      "original_language": "en",
      "original_title": "Psycho",
      "overview": "마리온 크레인은 그녀의 애인 샘과 결혼하길 원하지만 샘은 빚을 갚을 때까지 기다리라고 말한다. 그래서 그녀는 자신이 다니고 있는 회사 사장이 은행에 입금하라고 맡긴 돈을 들고 도망친다. 도주 첫날 밤 묵게 된 도로변의 낡은 모텔 주인인 노만 베이츠는 그녀에게 친절하게 대해주며 자신은 모텔 바로 뒤쪽 저택에서 몸이 불편한 어머니와 함께 살고 있다고 말한다. 잠자리에 들기 전 마리온이 샤워를 하는 도중, 난데없이 검은 형상이 욕실에 나타나고 마리온은 실종된다. 마리온을 찾기 위해 그녀의 언니 릴라와 샘, 그리고 보험회사 측에서 고용한 탐정 등 세 사람이 추적에 나서는데...",
      "popularity": 44.601,
      "poster_path": "/vC3P8hH4r3I3fHiRFa1kj6yzeaN.jpg",
      "release_date": "2018-08-16",
      "title": "싸이코",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 9296
    },
    {
      "adult": false,
      "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
      "genre_ids": [
        16,
        28,
        12
      ],
      "id": 569094,
      "original_language": "en",
      "original_title": "Spider-Man: Across the Spider-Verse",
      "overview": "여러 성장통을 겪으며 새로운 스파이더맨이 된 마일스 모랄레스. 그 앞에 다른 평행세계의 스파이더우먼 그웬이 다시 나타난다. 모든 차원의 멀티버스 속 스파이더맨들을 만나게 되지만, 질서에 대한 신념이 부딪히며 예상치 못한 균열이 생기는데… 상상 그 이상을 넘어서는 멀티버스의 세계가 열린다!",
      "popularity": 544.932,
      "poster_path": "/zG9TYiHt0fdaJiWuNEhFrfKzwoi.jpg",
      "release_date": "2023-06-21",
      "title": "스파이더맨: 어크로스 더 유니버스",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 4487
    },
    {
      "adult": false,
      "backdrop_path": "/5p3aTxtUtZHCHwYsuycutmxIhND.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 598,
      "original_language": "pt",
      "original_title": "Cidade de Deus",
      "overview": "빈민가가 막 형성되기 시작한 1960년대, 마을을 지나가는 배달 트럭을 털면서 가족을 부양하는 텐더 삼총사가 주름잡던 그 시기에는 엄연한 룰이 존재했다. 돈은 훔치되 살인은 삼가는 것이다. 이들은 엉뚱한 용의자를 사살하고도 지갑을 챙기는 악질 경찰에 비하면 약자에 불과했다. 텐더 트리오 시대에 종지부를 찍은 제빼게노는 큰 돈을 만지기 위해서는 마약을 다뤄야 함을 알게 된다. 단짝친구 베네는 악랄하기만 할 뿐 주변을 다독일 줄 모르던 제빼게노를 보좌하며 또 다른 룰을 만들어내지만, 위태로운 평화의 유효기간은 그리 길지 않다.",
      "popularity": 33.807,
      "poster_path": "/iKXrQB16sxeXoc6GlnYjeeZKsOW.jpg",
      "release_date": "2005-11-03",
      "title": "시티 오브 갓",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 6722
    },
    {
      "adult": false,
      "backdrop_path": "/uPYa165sraN2c8gZBM9C47g3JoU.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 311,
      "original_language": "en",
      "original_title": "Once Upon a Time in America",
      "overview": "1921년, 좀도둑질을 일삼던 누들스는 친구들과 함께 밀수품 운반 일을 하며 돈을 벌어들인다. 누들스 무리에 위협을 느낀 벅시는 누들스의 친구를 죽이고, 분노한 누들스는 벅시를 살해한 후 감옥에 들어가게 된다. 1932년, 출소한 누들스는 어린 시절 첫사랑 데보라와 밀주 사업으로 크게 성공한 맥스를 다시 만나지만, 금주법 철폐로 밀주 사업도 위기를 맞는다. 맥스는 누들스에게 연방준비은행을 털 것을 제안하지만 누들스는 거절한다. 1968년, 베일리 재단 파티에 초대 받은 누들스는 재단 창립 기념 사진 속에서 데보라를 발견하고 그녀를 찾아가는데...",
      "popularity": 49.917,
      "poster_path": "/xbuc6sjIIopkA1Ep24rR6yCw0DK.jpg",
      "release_date": "1984-12-10",
      "title": "원스 어폰 어 타임 인 아메리카",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 4876
    },
    {
      "adult": false,
      "backdrop_path": "/aVFx1VtlOxR3v0ADEatalXOvwbu.jpg",
      "genre_ids": [
        16,
        14,
        28
      ],
      "id": 620249,
      "original_language": "zh",
      "original_title": "罗小黑战记",
      "overview": "숲속의 집을 잃고 홀로 떠돌던 검은 고양이 요정 ‘소흑’은 도시 뒷골목에서 미스터리한 능력의 요정 ‘풍식’을 만나 위기를 모면한다. ‘풍식’의 무리와 버려진 섬에서 행복한 시간을 보내는 ‘소흑’. 그러던 중 최강 능력의 집행자 ‘무한’이 ‘풍식’을 쫓아 섬에 오자 ‘풍식’ 일행은 달아나고, ‘소흑’만 남게 된다.  홀로 남은 ‘소흑’을 요정들의 회관으로 데려가려는 ‘무한’과 ‘무한’을 무서운 인간이라 여겨 도망치려는 ‘소흑’. 둘은 여정 속에서 점점 마음을 열게 되고, ‘무한’은 ‘소흑’에게 특별한 능력이 있음을 알게 된다.",
      "popularity": 18.559,
      "poster_path": "/nDieZR47cirx44UZxKQsCbRGYqW.jpg",
      "release_date": "2021-04-22",
      "title": "나소흑전기: 첫만남편",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 304
    },
    {
      "adult": false,
      "backdrop_path": "/qUq3QTr2KLvGIcN0GaaaYx9bbyH.jpg",
      "genre_ids": [
        18
      ],
      "id": 510,
      "original_language": "en",
      "original_title": "One Flew Over the Cuckoo's Nest",
      "overview": "많은 죄를 짓고 수감중이던 맥머피는 교도소에서 정신 병원으로 후송되는데, 감옥보다는 자유로울 것으로 생각했지만 전혀 그렇지 않다는 것을 깨닫는다. 정신 병원의 여러 환자들과 생활하면서 맥머피는 그들이 겉으로는 전혀 문제가 없어 보이지만 보이지 않는 병원내의 압력에 의해 짓눌려 사는 죽은 인간들임을 간파한다. 그리고 그러한 압력의 주범이 간호사 레취드임을 알게 된다. 맥머피는 환자들을 끌고 병원을 빠져나가 낚시를 다녀오거나 파티를 여는 등 의도적인 반항을 시도하다 결국 탈출을 결심하게 되는데...",
      "popularity": 35.756,
      "poster_path": "/g6TD3q0aunRN5VveKauoH8FdxQw.jpg",
      "release_date": "1977-09-17",
      "title": "뻐꾸기 둥지 위로 날아간 새",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 9671
    },
    {
      "adult": false,
      "backdrop_path": "/pZvZjxPFfWWIwtPQodsNygQ6u5Z.jpg",
      "genre_ids": [
        12,
        18,
        878
      ],
      "id": 157336,
      "original_language": "en",
      "original_title": "Interstellar",
      "overview": "세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다. 지난 20세기에 범한 잘못이 전 세계적인 식량 부족을 불러왔고, NASA도 해체되었다. 나사 소속 우주비행사였던 쿠퍼는 지구에 몰아친 식량난으로 옥수수나 키우며 살고 있다. 거센 황사가 몰아친 어느 날 알 수 없는 힘에 이끌려 딸과 함께 도착한 곳은 인류가 이주할 행성을 찾는 나사의 비밀본부. 이 때 시공간에 불가사의한 틈이 열리고, 이 곳을 탐험해 인류를 구해야 하는 임무를 위해 쿠퍼는 만류하는 딸을 뒤로한 채 우주선에 탑승하는데...",
      "popularity": 130.677,
      "poster_path": "/zDNAeWU0PxKolEX1D8Vn1qWhGjH.jpg",
      "release_date": "2014-11-06",
      "title": "인터스텔라",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 32636
    },
    {
      "adult": false,
      "backdrop_path": "/nv5wwZou159v5OC61i4ElR7OqyY.jpg",
      "genre_ids": [
        14,
        16,
        12
      ],
      "id": 4935,
      "original_language": "ja",
      "original_title": "ハウルの動く城",
      "overview": "19세기 말 마법과 과학이 공존하고 있는 세계 앵거리. 소피는 돌아가신 아버지의 모자상점에서 쉴틈없이 일하는 18살 소녀이다. 어느 날 오랫만에 마을로 나간 소피는 우연히 하울을 만나게 된다. 하울은 왕실 마법사로서 핸섬하지만 조금 겁이 많은 청년이다. 황무지 마녀는 두 사람의 사이를 오해, 주문을 걸어 소피를 90살의 늙은 할머니로 만들어 버린다. 가족을 걱정한 소피는 집을 나오게 되고 황무지를 헤매다가 하울이 사는 성에서 가정부로 낯선 생활을 시작한다. 4개의 다리로 걷는 기괴한 움직이는 성 안에서 하울과 소피의 기묘한 사랑과 모험이 시작되는데...",
      "popularity": 78.15,
      "poster_path": "/xiz6TiSduvR1U3VLfWVlBEdT9fO.jpg",
      "release_date": "2004-12-24",
      "title": "하울의 움직이는 성",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 8750
    },
    {
      "adult": false,
      "backdrop_path": "/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg",
      "genre_ids": [
        16,
        18
      ],
      "id": 378064,
      "original_language": "ja",
      "original_title": "映画 聲の形",
      "overview": "따분한 게 질색인 아이, 이시다 쇼야.  간디가 어떤 사람인지, 인류의 진화과정이라든지, 알게뭐람.  어느 날 쇼야의 따분함을 앗아갈 전학생이 나타났다. 니시미야 쇼코. 그 아이는 귀가 들리지 않는다고 한다.  쇼야의 짓궂은 장난에도 늘, 생글생글 웃고만 있다. 짜증난다.  그의 괴롭힘에 쇼코는 결국 전학을 갔고, 이시다 쇼야는 외톨이가 되었다.  6년 후, 더 이상 이렇게 살아봐야 의미가 없음을 느낀 쇼야는 마지막으로 쇼코를 찾아간다.  처음으로 전해진 두 사람의 목소리. 두 사람의 만남이 교실을, 학교를,  그리고 쇼야의 인생, 쇼코의 인생을 바꾸기 시작한다.",
      "popularity": 41.796,
      "poster_path": "/emNuB1GNGjJqZiK9uVJNiUPbgsx.jpg",
      "release_date": "2017-05-09",
      "title": "목소리의 형태",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 3570
    },
    {
      "adult": false,
      "backdrop_path": "/qGQf2OHIkoh89K8XeKQzhxczf96.jpg",
      "genre_ids": [
        28,
        12,
        16,
        878
      ],
      "id": 324857,
      "original_language": "en",
      "original_title": "Spider-Man: Into the Spider-Verse",
      "overview": "평범한 10대 마일스 모랄레스는 우연히 방사능 거미에 물려 스파이더맨 능력을 가지게 된다. 혼란스러워하던 마일스는 악당과 싸우고 있는 피터 파커를 마주치게 되고 피터 파커는 마일스가 자신과 같은 능력을 가지고 있음을 직감한다. 여러 개의 평행세계가 존재한다는 것을 알게 된 마일스와 피터 파커는 이후 스파이더우먼 스파이더 그웬, 스파이더맨 누아르, 스파이더햄 등 평행세계 속 공존하는 모든 스파이더맨들을 만나게 되는데... 하나의 유니버스에서 만나 팀을 결성한 스파이더맨들은 과연 세계를 구할 수 있을까?",
      "popularity": 93.409,
      "poster_path": "/vnWgIIEWAvWKOI65tm6h6VRbyY8.jpg",
      "release_date": "2018-12-12",
      "title": "스파이더맨: 뉴 유니버스",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 14055
    },
    {
      "adult": false,
      "backdrop_path": "/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg",
      "genre_ids": [
        12,
        14,
        28
      ],
      "id": 120,
      "original_language": "en",
      "original_title": "The Lord of the Rings: The Fellowship of the Ring",
      "overview": "호빗이라 불리우는 난장이 종족 중의 한 명인 프로도는 자신의 삼촌에게서 우연히 절대 반지를 물려받게 되고, 마법사 간달프를 통해서 절대반지가 사우론의 손에 들어가면 악의 세력이 세상을 지배하게 된다는 것을 알게 된다. 하지만 절대반지를 영원히 파괴할 수 있는 유일한 방법은 반지가 만들어진 불의 산의 용암에 그것을 던져 넣는 길 뿐이다. 마침내 프로도와 그의 친구들, 엘프족인 레골라스, 난장이족 김리, 두명의 인간 전사 아라곤과 보로미르, 그리고 마법사 간달프로 구성된 반지 원정대가 길고도 험난한 여정을 떠나게 되는데...",
      "popularity": 106.525,
      "poster_path": "/7uCvKNKKLRqYYyHIRpphi3yUE6Z.jpg",
      "release_date": "2001-12-31",
      "title": "반지의 제왕: 반지 원정대",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 23364
    },
    {
      "adult": false,
      "backdrop_path": "/aJCtkxLLzkk1pECehVjKHA2lBgw.jpg",
      "genre_ids": [
        12,
        28,
        878
      ],
      "id": 1891,
      "original_language": "en",
      "original_title": "The Empire Strikes Back",
      "overview": "제국군은 데스스타를 잃은 뒤에도 여전히 강력한 화력으로 반란군을 수세로 몰아넣었고, 반란군은 게릴라전을 위해 얼음으로 뒤덮인 행성 호스에 은신한다. 하지만 결국 제국군에 의해 호스의 반란군 기지마저 탄로나게 되고, 일행은 필사적으로 호스를 탈출해 다시 정처없는 피난길에 오른다. 반란군의 피난길에 함께 오르던 루크는 포스의 영이 된 오비완으로부터 제다이 마스터 요다를 찾아가라는 메시지를 받고 요다가 있는 정글 행성 대고바로 향한다. 루크는 요다를 만나 제다이가 되기 위한 훈련을 시작하고 솔로 일행은 제국군을 따돌리기 위해 옛 친구 랜도를 찾아가는데...",
      "popularity": 32.152,
      "poster_path": "/icaO5w8uLVm4JxMew71JJrQE2YX.jpg",
      "release_date": "1997-04-26",
      "title": "스타워즈 에피소드 5: 제국의 역습",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 15803
    },
    {
      "adult": false,
      "backdrop_path": "/zcc0My3G4SYR72VuEYHNcUWkkW0.jpg",
      "genre_ids": [
        12,
        14,
        28
      ],
      "id": 121,
      "original_language": "en",
      "original_title": "The Lord of the Rings: The Two Towers",
      "overview": "9명의 반지원정대는 사우론의 세력에 맞서 반지를 지켜냈지만 반지 원정대는 뿔뿔이 흩어지게 된다. 메리와 피핀을 구하기 위해 우르크하이 군대를 추격하던 아라곤과 레골라스, 김리는 유령 숲에서 백색의 마법사로 부활한 마법사 간달프를 만나게 되고 사우론이 암흑세계의 두 개의 탑을 통합하여 점점 그 세력을 넓혀가고 있다는 사실을 듣게 된다. 이에 아라곤과 원정대는 중간계의 선한 무리의 통합을 이뤄 사우론의 세력을 견제해야 하는 큰 임무를 맡게 된다. 하지만 원수지간인 곤도르와 로한으로 나뉜 인간 종족의 통합은 쉽지 않고 게다가 로한의 왕마저 사루만에게 동화되는데...",
      "popularity": 97.086,
      "poster_path": "/hjGjAdEPJF2unG8yseu5mcVb5cx.jpg",
      "release_date": "2002-12-19",
      "title": "반지의 제왕: 두 개의 탑",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 20309
    },
    {
      "adult": false,
      "backdrop_path": "/dVr11o9or7AS8AMPfwjSpEU83iU.jpg",
      "genre_ids": [
        18,
        10752
      ],
      "id": 423,
      "original_language": "en",
      "original_title": "The Pianist",
      "overview": "1939년 폴란드 바르샤바, 유명한 유대계 피아니스트 블라디슬로프 스필만은 한 인기 라디오 프로그램에서 쇼팽의 야상곡을 연주하다 폭격을 당한다. 이후 유태인인 스필만과 가족들은 게토에서 생활하지만, 결국 수용소로 향하는 기차에 몸을 싣게 된다. 가족들을 죽음으로 내보내고 간신히 목숨을 구한 스필만은 허기와 추위, 고독과 공포 속에서 마지막까지 생존해 나간다. 자신을 도와주던 몇몇의 사람마저 떠나고, 자신만의 은신처에서 끈질기게 생존을 유지하는 스필만. 어둠과 추위로 가득한 폐건물 속에서 은신생활 중 스필만은 우연찮게 순찰을 돌던 독일 장교에게 발각되는데...",
      "popularity": 47.691,
      "poster_path": "/t7L2YDpu635qKT3ehqZxry4yvTX.jpg",
      "release_date": "2003-01-01",
      "title": "피아니스트",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 8383
    },
    {
      "adult": false,
      "backdrop_path": "/vNXGrknx4GjWLgmuNTftWZluIUl.jpg",
      "genre_ids": [
        18,
        10402
      ],
      "id": 244786,
      "original_language": "en",
      "original_title": "Whiplash",
      "overview": "최고의 드러머가 되기 위해서라면 무엇이든 할 각오가 되어있는 음악대학 신입생 앤드류는 아무도 없는 지하실에서 혼자 드럼을 연습하던 중 우연한 기회로 누구든지 성공으로 이끄는 최고의 실력자이지만, 또한 동시에 최악의 폭군인 플렛처 교수에게 발탁되어 그의 밴드에 들어가게 된다. 설레는 마음으로 참가한 첫 연습에서, 그는 플렛처 교수의 진짜 얼굴을 마주치게 된다. 폭언과 학대 속에 좌절과 성취를 동시에 안겨주는 플렛처의 지독한 교육방식은 천재가 되길 갈망하는 앤드류의 집착을 끌어내며 그를 점점 광기로 몰아넣는데...",
      "popularity": 73.169,
      "poster_path": "/fz6osxiG7BWqnLoNgAlekpgSthf.jpg",
      "release_date": "2015-03-12",
      "title": "위플래쉬",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 13922
    },
    {
      "adult": false,
      "backdrop_path": "/l5K9elugftlcyIHHm4nylvsn26X.jpg",
      "genre_ids": [
        18
      ],
      "id": 255709,
      "original_language": "ko",
      "original_title": "소원",
      "overview": "어느 비 오는 아침, 학교를 가던 9살 소녀 소원은 술에 취한 아저씨에게 끌려가 믿고 싶지 않은 사고를 당한다. 이 일로 몸과 마음에 지울 수 없는 상처를 받은 소원이네 가족. 하지만 절망 끝에서 희망을 찾아 나서는데...",
      "popularity": 16.271,
      "poster_path": "/PZlNvDwKwHeHUsXnd6SEDXWZNn.jpg",
      "release_date": "2013-10-02",
      "title": "소원",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 577
    },
    {
      "adult": false,
      "backdrop_path": "/hWrxRwnnisPE4LJdER3FmdeM39b.jpg",
      "genre_ids": [
        80,
        9648,
        53
      ],
      "id": 807,
      "original_language": "en",
      "original_title": "Se7en",
      "overview": "은퇴를 7일 앞둔 관록의 형사 윌리엄 소머셋(모건 프리먼)과 새로 전근 온 신참내기 형사 밀스(브래드 피트)가 팀이 된 바로 다음날, 강압에 의해 위가 찢어질 때까지 먹다가 죽은 초고도 비만 남자와 역시 강압에 의해 식칼로 자기 살을 베어내 죽은 악덕 변호사의 사건과 마주한다. 식탐, 탐욕, 그리고 나태, 분노, 교만, 욕정, 시기. 소머셋은 현장에 남은 흔적들로 단테의 신곡과 쵸서의 캔터베리 서사시를 근거로 한 기나긴 연쇄 살인이 시작되었음을 직감하고 성서의 7가지 죄악을 따라 발생하는 사건들을 추적하기 시작하는데...",
      "popularity": 50.135,
      "poster_path": "/izzk8dbmrLowcoGbFaebqJvzyXg.jpg",
      "release_date": "1995-11-11",
      "title": "세븐",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 19441
    },
    {
      "adult": false,
      "backdrop_path": "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
      "genre_ids": [
        28,
        878,
        12
      ],
      "id": 27205,
      "original_language": "en",
      "original_title": "Inception",
      "overview": "타인의 꿈에 들어가 생각을 훔치는 특수 보안요원 코브. 그를 이용해 라이벌 기업의 정보를 빼내고자 하는 사이토는 코브에게 생각을 훔치는 것이 아닌, 생각을 심는 ‘인셉션’ 작전을 제안한다. 성공 조건으로 국제적인 수배자가 되어있는 코브의 신분을 바꿔주겠다는 거부할 수 없는 제안을 하고, 사랑하는 아이들에게 돌아가기 위해 그 제안을 받아들인다. 최강의 팀을 구성, 표적인 피셔에게 접근해서 ‘인셉션’ 작전을 실행하지만 예기치 못한 사건들과 마주하게 되는데… 꿈 VS 현실! 시간, 규칙, 타이밍 모든 것이 완벽해야만 하는, 단 한 번도 성공한 적 없는 ‘인셉션’ 작전이 시작된다!",
      "popularity": 72.406,
      "poster_path": "/zTgjeblxSLSvomt6F6UYtpiD4n7.jpg",
      "release_date": "2010-07-21",
      "title": "인셉션",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 34552
    },
    {
      "adult": false,
      "backdrop_path": "/8aEe01VfGtYG2dFy9V5MqyyNPlh.jpg",
      "genre_ids": [
        53,
        9648
      ],
      "id": 567,
      "original_language": "en",
      "original_title": "Rear Window",
      "overview": "사진 작가인 제프리스는 촬영 도중 다리가 부러져 휠체어에서 꼼짝할 수 없는 처지이다. 무료함을 견디지 못하는 그는 자신의 그리니치 빌리지에 있는 독신자 아파트에서 뜰 건너편에 사는 사람들의 행동을 관찰하는 것으로 시간을 보낸다. 어느날 건너편 아파트에 사는 한 사람이 아내를 살해한 것으로 의심받을 만한 짓을 한 것을 본 그는 이를 모델인 애인 리사와 친구인 형사 도일에게 말하지만 아무도 그의 말을 믿지 않는다. 그러나 결국 그의 의심이 전혀 근거없는 것은 아니라는 것을 알게 된 리사와 간호부 스텔라는 그의 지시에 따라 범행의 증거를 찾아 부부의 집을 조사하기 시작하는데...",
      "popularity": 21.675,
      "poster_path": "/jU5Fe7n9rsEBa0uaV5dqGjJGwmX.jpg",
      "release_date": "2016-08-04",
      "title": "이창",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 5905
    },
    {
      "adult": false,
      "backdrop_path": "/jBIMZ0AlUYuFNsKbd4L6FojWMoy.jpg",
      "genre_ids": [
        16,
        35,
        10749
      ],
      "id": 820067,
      "original_language": "ja",
      "original_title": "映画 五等分の花嫁",
      "overview": "「낙제 직전」「공부가 싫은」미소녀 다섯 쌍둥이를  아르바이트 가정 교사로서 「졸업」까지 이끈 후타로.  배우에 전념하기 위해 휴학하기로 한 이치카의 공부를 봐주면서  「학교 축제」 준비에 힘쓰는 후타로와,  후회 없는 「학교 축제」를 만들기 위해 평소 이상으로 노력하는 요츠바.  어지러운 날들이 지나고 정신을 차려보니 「학교 축제」 전날.  후타로는 포기하지 않고 힘쓰는 이츠키의 모습에 힘입어,  니노의 각오와 미쿠의 결의, 그리고 이치카·요츠바·이츠키에 대한 마음의 답을 찾는다.  저마다의 생각을 안고 있는 와중,  드디어 시작된 고교 생활 최후의(마지막) 이벤트인 「학교 축제」 첫날.  『학교 축제 첫날 15시에 교실에 와줘』  교실에 모인 다섯 쌍둥이는, 후타로에게 어떠한 마음을 고백 받게 될까?",
      "popularity": 70.352,
      "poster_path": "/shtqSAsB8snS3iww99iksu2QaoZ.jpg",
      "release_date": "2022-09-22",
      "title": "극장판 5등분의 신부",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 329
    },
    {
      "adult": false,
      "backdrop_path": "/9LSsSPbP715XT9B7acIZzantPyX.jpg",
      "genre_ids": [
        18
      ],
      "id": 73,
      "original_language": "en",
      "original_title": "American History X",
      "overview": "3년 전 강도 사건으로 소방수였던 아버지를 잃은 데렉은 백인 우월주의자들의 모임인 DOC에 관심을 갖게 되면서 유색인종에게 그 분노와 증오를 터트린다. 그는 혐오스러운 유색인종들을 이 땅에서 몰아내야 한다고 주장하면서 강렬한 카리스마로 동료들 사이에서 영웅이 된다. 가족들은 그런 그의 모습을 걱정하여 만류하지만, 단 한 사람, 동생 대니만은 그를 전적으로 믿고 따른다. 어느 날, 데렉에게 적대감을 품은 흑인들이 아버지의 낡은 밴을 훔치러 왔을 때 그는 서슴없이 그들에게 총을 겨눈다. 그리고는 총을 맞고 신음하는 그를 참혹하게 죽이고 마는데...",
      "popularity": 31.552,
      "poster_path": "/nm4XkYBt79ZjUQj6Rqxxzl1Wt3c.jpg",
      "release_date": "1999-04-17",
      "title": "아메리칸 히스토리 X",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 10752
    },
    {
      "adult": false,
      "backdrop_path": "/i1GT0e6Crg6UezT3ibXnMS3pBAd.jpg",
      "genre_ids": [
        16,
        18,
        10749
      ],
      "id": 652837,
      "original_language": "ja",
      "original_title": "ジョゼと虎と魚たち",
      "overview": "지체장애인인 조제는 그림 그리기를 좋아하며, 미처 경험해 보지 못한 세상에 대한 호기심과 두려움을 동시에 가지고 살아간다. 해양생물학을 전공하며 유학을 준비 중인 츠네오는 바다를 사랑하는 대학생으로 조제와 비슷한 또래이다. 조제를 온실 속 화초처럼 키워온 할머니는 츠네오를 아르바이트생으로 고용하여 조제를 일정 시간 돌보게 한다. 조제는 할머니의 눈을 피해, 혹은 할머니의 묵인하에, 츠네오와 함께 바깥나들이를 시작하고 조금씩 세상을 향해 마음을 열어간다.",
      "popularity": 25.99,
      "poster_path": "/v60S8rPRCQRYSeCtmLiuRpQqIfC.jpg",
      "release_date": "2020-10-30",
      "title": "조제, 호랑이 그리고 물고기들",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 367
    },
    {
      "adult": false,
      "backdrop_path": "/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg",
      "genre_ids": [
        80,
        18,
        53
      ],
      "id": 274,
      "original_language": "en",
      "original_title": "The Silence of the Lambs",
      "overview": "FBI 요원 스탈링은 몸집이 비대한 여자들의 살을 도려내는 변태 살인마를 추적하라는 상부의 명령을 받는다. 스탈링은 사건 해결의 단서를 얻기 위해 인육을 먹은 죄로 감옥에 수감된 정신과 의사 렉터 박사를 찾아간다. 지능범인 렉터와 침착하게 대처하는 스탈링은 긴장감 속에서 협상을 한다. 이러한 와중에 상원 의원의 딸 캐더린이 납치된다. 결국 범인의 정체를 알려준다던 렉터는 다른 감옥으로 이송되고 스탈링은 수사에서 제외된다. 범인에 대한 단서를 알아낸 범죄 심리 전문가인 렉터는 이송 중에 도주하고, 스탈링은 렉터와 나눈 마지막 대화를 기억하고 수사를 계속하는데...",
      "popularity": 12.41,
      "poster_path": "/2hBAfjDlRbamiX7TuzLes2EcnCM.jpg",
      "release_date": "1991-06-15",
      "title": "양들의 침묵",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 15043
    },
    {
      "adult": false,
      "backdrop_path": "/sXV0NVLtyEsOdaEXnMcRGwUhIi0.jpg",
      "genre_ids": [
        12,
        14,
        16
      ],
      "id": 128,
      "original_language": "ja",
      "original_title": "もののけ姫",
      "overview": "북쪽의 끝, 에미시족의 마을에 어느 날 갑자기 재앙신이 나타나 마을을 위협한다. 이에 강한 힘을 소유한 에미시족의 후계자인 아시타카는 결투 끝에 포악해진 재앙신을 쓰러트리지만 싸움 도중 오른팔에 저주의 상처를 받고 죽어야 할 운명에 처하게 된다. 결국 재앙신의 탄생 원인을 밝혀 자신의 저주를 없애기 위해 서쪽으로 길을 떠난 아시카타는 여행 중에 지코라는 미스테리한 수도승을 만나 재앙 신이 생겨나게 된 이유가 서쪽 끝에 있는 시시신의 숲과 관련이 깊다는 이야기를 듣게 되고 한시 바삐 서쪽으로 향한다.",
      "popularity": 46.592,
      "poster_path": "/kBlI1WEWbfYyrh5nuAH2whzWx9Y.jpg",
      "release_date": "2003-04-25",
      "title": "모노노케 히메",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 7246
    },
    {
      "adult": false,
      "backdrop_path": "/AfyuI3glMCBDFmNPj9PY6DwbgGp.jpg",
      "genre_ids": [
        16,
        878,
        28,
        18
      ],
      "id": 18491,
      "original_language": "ja",
      "original_title": "新世紀エヴァンゲリオン劇場版 Air／まごころを、君に",
      "overview": "네르프에 있는 마기가 미국, 프랑스 등지의 마기 5대의 파상공격으로 인해 해킹을 당하고 있었다. 그러나 슈퍼인공지능 컴퓨터도 그 파상공격을 당해내지는 못하는 상황. 결국 감금되어 있던 리츠코 박사를 다시 부르게 된다. 그는 처음에는 자신을 감금한 것에 대해 불만을 표시하지만, 결국 겐도우의 명령에 따르고 예전 사도에게 사용한 캐스퍼의 방법인 마지막 로직 코드를 변경하여 완전 몰아내기로 간신히 마기를 복구한다. 그리고 666프로텍트와 B다낭형 방벽을 세워 62시간은 막을 수 있게 조치하는데...",
      "popularity": 29.645,
      "poster_path": "/yBanOpNIccxjZlH4QH7ag4ojWOI.jpg",
      "release_date": "1997-07-19",
      "title": "신세기 에반게리온 엔드 오브 에반게리온",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 1385
    },
    {
      "adult": false,
      "backdrop_path": "/8AMKZODrCvWe2sCy9Ts7VsLcKd6.jpg",
      "genre_ids": [
        35,
        10752
      ],
      "id": 914,
      "original_language": "en",
      "original_title": "The Great Dictator",
      "overview": "세계대전에서 패배한 토매니아국에 힌켈이라는 독재자가 나타나 악명을 떨친다. 한편, 힌켈과 닮은꼴 외모의 이발사 찰리는 국가의 유태인 탄압정책으로 인해 곤경에 처하지만 병사로 참전했던 전쟁에서 우연히 구해줬던 슐츠 장교의 도움을 받아 위기를 모면한다. 독재자 힌켈의 악행은 갈수록 도를 더해가고, 찰리는 유태인 수용소에 끌려가게 되지만 기지를 부려 탈옥에 성공한다. 하지만 이발사와 똑같은 얼굴을 한 힌켈이 탈옥범으로 오해 받아 감옥에 잡혀 들어가게 되는데…",
      "popularity": 24.855,
      "poster_path": "/uw26mSTaA10hg2yuQfNaFLSeY3h.jpg",
      "release_date": "1988-11-19",
      "title": "위대한 독재자",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 3045
    },
    {
      "adult": false,
      "backdrop_path": "/aLqtWLA6NQHBwQHvHDq5z4EKUm0.jpg",
      "genre_ids": [
        16,
        14,
        10749,
        18
      ],
      "id": 533514,
      "original_language": "ja",
      "original_title": "劇場版 ヴァイオレット・エヴァーガーデン",
      "overview": "친애하는 길베르트 소령님, 오늘도 또 당신을 떠올리고 말았습니다.  무엇을 보든 무엇을 하든 당신이 떠오릅니다.  시간이 지나도 당신과 보냈던 기억은 선명하게 되살아납니다. 당신은 날 곁에 두었고 아무것도 모르는 제게 살아가는 방법을 가르쳐 주셨고 처음으로 사랑이라는 감정을 알려주셨습니다.  그래서 이렇게 또 편지를 쓰게 됩니다.  -언젠가 이 편지가 당신에게 닿기를 바라며-",
      "popularity": 31.168,
      "poster_path": "/mBUy2lCwk6fpByQ7GBFKRApKEHb.jpg",
      "release_date": "2020-11-12",
      "title": "극장판 바이올렛 에버가든",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 348
    },
    {
      "adult": false,
      "backdrop_path": "/jRJrQ72VLyEnVsvwfep8Xjlvu8c.jpg",
      "genre_ids": [
        80,
        18,
        28
      ],
      "id": 101,
      "original_language": "en",
      "original_title": "Léon: The Professional",
      "overview": "한 손엔 우유 2팩이 든 가방, 다른 한 손엔 화분을 들고 뿌리 없이 떠도는 킬러 레옹은 어느 날 옆 집 소녀 마틸다의 일가족이 몰살 당하는 것을 목격한다. 그 사이 심부름을 갔다 돌아 온 마틸다는 가족들이 처참히 몰살 당하자 레옹에게 도움을 청한다. 가족의 원수를 갚기 위해 킬러가 되기로 결심한 12세 소녀 마틸다는 레옹에게 글을 알려주는 대신 복수하는 법을 배우고, 그 사이 레옹에 대한 사랑을 키워나간다. 드디어 그녀는 가족을 죽인 사람이 부패한 마약 경찰 스탠스임을 알게 되고, 홀로 그의 사무실로 향하게 되는데...",
      "popularity": 50.245,
      "poster_path": "/cVNasmF1Egd3v3mpq747Hizxx4x.jpg",
      "release_date": "1995-02-18",
      "title": "레옹",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 13693
    },
    {
      "adult": false,
      "backdrop_path": "/qMMaTIUTxCcRRrwgNsna8EUAd1z.jpg",
      "genre_ids": [
        80,
        18,
        10749
      ],
      "id": 15804,
      "original_language": "zh",
      "original_title": "牯嶺街少年殺人事件",
      "overview": "14살 소년 샤오쓰는 국어 성적이 나쁘다는 이유로 중학교 주간부에서 야간부로 반을 옮기게 되고 ‘소공원’파와 어울려 다닌다. 그러던 중 샤오쓰는 양호실에서 밍이라는 이름의 소녀를 만나게 된다. 소녀는 ‘소공원’파의 보스 허니의 여자로 허니는 샤오밍을 차지하기 위해 경쟁조직인 ‘217’파의 보스를 죽이고 은둔 중이다. 보스의 부재로 통제력을 상실한 ‘소공원’파는 보스 자리를 두고 혼란에 빠지고 돌연 허니가 돌아오게 되면서 ‘소공원’파 내부와 ‘217’파간의 대립이 격해진다. 그리고 밍을 사랑하게 된 샤오쓰도 이들의 싸움에 휘말리게 되는데...",
      "popularity": 19.097,
      "poster_path": "/bCDbodBnA9A8k5bhwBc8Lh3j0mB.jpg",
      "release_date": "2017-11-23",
      "title": "고령가 소년 살인 사건",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 272
    },
    {
      "adult": false,
      "backdrop_path": "/3lbTiIN8cVonMUQwaeh5nvn61lr.jpg",
      "genre_ids": [
        12,
        35,
        878
      ],
      "id": 105,
      "original_language": "en",
      "original_title": "Back to the Future",
      "overview": "마티 맥플라이(마이클 J. 폭스)는 평범한 고등학생이다. 그런데 평소 친하게 지내던 괴상한 발명가 에메트 브라운 박사(크리스토퍼 로이드)가 스포츠카 드로리안을 개조해 타임머신을 만들고, 뜻밖의 사고로 브라운 박사가 테러범들에게 총을 맞고 위험해진 상황에서 마티는 30년 전으로 가게 된다. 극장 간판에는 2류 배우인 로널드 레이건이 보이고 청년인 아버지와 어머니를 보게 된다. 젊은 아버진 멍청하고, 어머니는 미래의 아들인 마티를 좋아해 야단이다. 마티가 미래로 가는 것을 도와 줄 사람은 30년 전인 젊은 브라운 박사뿐인데...",
      "popularity": 60.654,
      "poster_path": "/7gGicAJdHRzaUd6qLjH5bSW4Cgi.jpg",
      "release_date": "1987-07-17",
      "title": "빽 투 더 퓨쳐",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 18486
    },
    {
      "adult": false,
      "backdrop_path": "/hpzQHv8cA7j2Dn2CphOFYmllXzj.jpg",
      "genre_ids": [
        18
      ],
      "id": 207,
      "original_language": "en",
      "original_title": "Dead Poets Society",
      "overview": "1859년에 창립된 미국의 명문 사립학교인 웰튼 고등학교의 새 학기를 맞아 신입생들도 들어오고, 이 학교 출신인 새로운 영어 교사 존 키팅(로빈 윌리엄스)도 부임한다. 키팅 선생은 학생들에게 관습에 맞서고 자신의 삶을 남다르게 가꾸라며 새로운 학습 방법으로 학생들을 지도하며 학생들에게 신선한 충격을 준다. 닐(로버트 숀 레오나드)은 키팅 선생을 캡틴이라 부르며 따르게 되고, 몇몇 학생들과 함께 죽은 시인의 사회라는 시낭독 클럽을 조직한다. 닐과 그의 친구들은 엄격한 학교 규율을 어기고 서클에 참여하면서 키팅 선생을 통해 참된 인생이 무엇인지를 조금씩 느끼게 되는데...",
      "popularity": 41.032,
      "poster_path": "/41AJ4X5TRWpECsiMIKS8so4MSsD.jpg",
      "release_date": "1990-05-19",
      "title": "죽은 시인의 사회",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 10338
    },
    {
      "adult": false,
      "backdrop_path": "/n0Cju2Eu3VyrUFl32thblHFWznA.jpg",
      "genre_ids": [
        35,
        10749,
        18
      ],
      "id": 901,
      "original_language": "en",
      "original_title": "City Lights",
      "overview": "일자리가 없어 도시를 배회하는 떠돌이는 어느날 아침 산책길에서 꽃 파는 눈먼 소녀(를 만난다. 떠돌이는 마지막 동전을 털어서 꽃을 사주고, 육중한 차문 닫히는 소리에 소녀는 그를 부자로 오인한다. 소녀에게 애정을 느낀 떠돌이는 부자 행세를 하며 가깝게 지내고, 그녀의 눈을 수술할 비용을 마련해 주기로 약속한다. 어느 날 술에 취해 물에 빠진 백만장자를 구해준 떠돌이는 그와 친구가 되는데, 백만장자는 술에 취했을 때만 그를 알아보고 술이 깨면 그를 도둑으로 오인한다. 백만장자가 술에 취했을 때 소녀의 수술비를 얻어낸 떠돌이는 그가 술이 깨기 전에 달아나 소녀에게 돈을 전해주고 사라지는데...",
      "popularity": 18.409,
      "poster_path": "/7oI6KKZDxEuxhIm5m9VpOF2Yi9N.jpg",
      "release_date": "1989-02-04",
      "title": "시티 라이트",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 1962
    },
    {
      "adult": false,
      "backdrop_path": "/6C1U0cKK5zGjyUSwNc5GLSVCr7Y.jpg",
      "genre_ids": [
        18,
        10752
      ],
      "id": 25237,
      "original_language": "ru",
      "original_title": "Иди и смотри",
      "overview": "소년 플로리아는 나치 독일의 침공을 받고 있는 벨라루스에 살고 있다. 그런데 첫 장면에서 그는 모래밭의 흙을 파고 있는 중이다. 제대로 매장되지 못한 죽은 병사들의 시체들이 나오지만, 어떻게든 쓸 만한 총을 찾아낸다. 플로리아는 독일군과의 전투에 참여하길 원하지만 어른들은 그를 무시한다. 더 경험 많은 군인에게 그의 총은 인계되고, 그는 군인들의 행진을 지켜볼 뿐이다. 이윽고 플로리아는 글로샤라는 독특한 매력의 소녀와 함께 뒤에 처져 있음을 깨닫는다. 이들은 숲으로 가지만 거기서 나치 독일의 엄청난 폭격을 당하고, 그 바람에 플로리아의 청력에 문제가 생긴다. 정신이 혼미해진 플로리아는 마을로 돌아가는데, 거기서 엄청난 대량 학살의 흔적과 널부러진 시신들을 보고 경악한다. 문득 어머니의 생사가 궁금해져 필사적으로 찾아다니던 그는 비극적인 장면을 목격하게 되는데..",
      "popularity": 40.036,
      "poster_path": "/baK79h2An0J8mzTue13KThAeYC5.jpg",
      "release_date": "1990-01-03",
      "title": "컴 앤 씨",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 1218
    },
    {
      "adult": false,
      "backdrop_path": "/kSlO1pHpwQfPQdgVPr7dJiJNtJ8.jpg",
      "genre_ids": [
        35,
        18
      ],
      "id": 3082,
      "original_language": "en",
      "original_title": "Modern Times",
      "overview": "산업의 기계화와 대공황이 맞물려 힘든 시절, 공장의 컨베이어 벨트 위에서 하루 종일 나사못 조이는 일을 하는 찰리. 찰리는 반복되는 작업에 착란 현상을 일으키고, 눈에 보이는 모든 것을 조여버리는 강박 관념에 빠지고 만다. 그는 급기야 정신 병원에 가게 되고, 거리를 방황하다 시위 군중에 휩쓸려 감옥살이까지 하게 된다. 몇 년 후 감옥에서 풀려난 찰리는 부모를 잃고 고아가 된 한소녀를 만난다. 그녀의 도움으로 카페에서 일하게 되고 서로를 의지하며 새로운 희망을 가진다. 둘은 행복하고 단란한 가정을 꿈꾸며 일자리를 찾아 헤매지만 매번 다시 거리로 내몰리고 마는데...",
      "popularity": 21.853,
      "poster_path": "/51tKLNNKi8fKZq9DTcGpFAJ7IPc.jpg",
      "release_date": "1989-12-09",
      "title": "모던 타임즈",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 3405
    },
    {
      "adult": false,
      "backdrop_path": "/nbAbAk80aWCpOS5kOPYJ1L9kE1R.jpg",
      "genre_ids": [
        10402,
        18,
        10749
      ],
      "id": 630566,
      "original_language": "en",
      "original_title": "Clouds",
      "overview": "실화를 배경으로 만들어진 영감을 주는 이야기. 청년 음악가 잭 소비엑은 자신의 몸에 암세포가 퍼져, 이제 남은 시간이 몇 달밖에 없다는 것을 알게 된다. 이제 얼마 남지 않는 시간 동안 그는 자신의 꿈꾸어오던 대로 음악앨범을 만들기로 한다. 그러나 이 음악이 전 세상에 감동을 주는 엄청난 곡이 될 거라는 것을 그때는 알지 못했다. 결국 음악은 잭의 삶에 새로운 의미를 주었고, 그는 세상과 가장 아름답게 이별 인사를 할 수 있게 된다. 전 세계 사람들이 함께할 노래를 남긴 것이다.",
      "popularity": 19.127,
      "poster_path": "/wRV6Ulp8fD4mPLiipD8OxkIWSWe.jpg",
      "release_date": "2021-11-12",
      "title": "클라우즈",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 957
    },
    {
      "adult": false,
      "backdrop_path": "/vmryZ1Bkko8P2utNaJeO2Yo2Bx4.jpg",
      "genre_ids": [
        18,
        37
      ],
      "id": 335,
      "original_language": "it",
      "original_title": "C'era una volta il West",
      "overview": "프랭크가 보낸 세명의 총잡이가 기차역에서 누군가를 기다린다. 드디어 그들이 기다리던 한 남자가 하모니카를 불며 기차역에 도착하고, 그들 세 총잡이는 모두 이름 없는 그 남자의 총에 쓰러진다. 한편, 프랭크와 그 부하들은 아일랜드 출신인 맥베인 일가를 잔인하게 살해하는데, 뉴올리언즈에서 이제 막 도착한 맥베인의 새 아내 질로서는 황망할 수밖에 없다. 두 사람은 한달 전 이미 결혼을 한 상태였다.  다시 뉴올리언즈로 돌아가려던 질은 마음을 고쳐먹고 맥베인과 아이들의 시체만 있는 그 집에서 혼자 생활을 시작한다.",
      "popularity": 43.001,
      "poster_path": "/6ldVV8isyLQcFy6VHK8jeGgvepF.jpg",
      "release_date": "1970-02-05",
      "title": "옛날 옛적 서부에서",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 3928
    },
    {
      "adult": false,
      "backdrop_path": "/1EAxNqdkVnp48a7NUuNBHGflowM.jpg",
      "genre_ids": [
        16,
        28,
        878,
        18
      ],
      "id": 283566,
      "original_language": "ja",
      "original_title": "シン・エヴァンゲリオン劇場版:||",
      "overview": "‘에반게리온’ 신극장판 시리즈의 제4부이자 완결편  미사토가 이끄는 반네르프 조직 ‘빌레’는 코어화로 붉게 물든 파리 구시가에 있다.  기함 AAA 분더에서 선발대가 강하하여, 남겨져 있던 봉인주에 안착한다.  복원 작전의 작업 가능 시간은 고작 720초.  결사의 작전 수행 중 ‘네르프’의 EVA가 대량으로 무리를 이루고 접근하여,  마리의 개(改) 8호기가 요격을 개시한다.  한편 신지, 아스카, 아야나미 레이 (가칭) 세 사람은 일본의 대지를 떠돌고 있다…….",
      "popularity": 34.753,
      "poster_path": "/vpfX1mGVobWlrUGqEzbA2RNPdZF.jpg",
      "release_date": "2022-10-05",
      "title": "신 에반게리온 극장판 𝄇",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 696
    },
    {
      "adult": false,
      "backdrop_path": "/A1Larywbw79kZQqkvCEiPHJqdLN.jpg",
      "genre_ids": [
        16,
        53
      ],
      "id": 10494,
      "original_language": "ja",
      "original_title": "PERFECT BLUE",
      "overview": "아이돌 소녀 그룹인 Charm의 리더인 미마는 본격적인 연기를 시작하기 위해 아이돌의 그늘을 벗어나려고 하지만,첫 출연작부터 난관에 부딪힌다. 누드 등을 통한 과격적인 홍보로 그녀를 더욱 알리려는 소속사 대표와 미마를 지켜주려고 노력하는 그녀의 담당 매니저의 갈등. 그리고 아직까지도 아이돌로서의 그녀를 그리워하는 팬들. 그 모든 것의 중심에 선 미마는 비록 대사는 한마디에 불과한 단역이지만 그래도 주어진 역할에 충실히 하기 위해 노력한다. 드라마에서 광기어린 살인을 저지르고 다니는 소녀 역할을 맡은 미마는 현실과 허구의 경계선에서 자신을 쫓아다니던 스토커를 해친다. 그러나 그 일 역시 사실인지 허구인지는 불분명하다. 이제 미마의 눈에는 또 다른 미마가 보이기 시작한다. 아이돌 시절 그대로의 모습으로 미마의 눈 앞에 나타난 또 다른 미마는 그녀에게 과거 인기 스타로의 회귀를 강요한다. 니가 나고, 내가 너야. 라고 말하는 또 다른 자아 앞에서 미마는 혼란에 빠진다. 그러던 중, 미마의 주변을 둘러싼 사람들이 하나 둘 살해당하고 범인을 알 수 없는 상황에서 극도의 불안감을 느끼는 미마는 누군가 끊임없이 자신을 지켜보고 있다는 것을 느끼는데...",
      "popularity": 36.981,
      "poster_path": "/ewnu3MHaqJamonqPYh7NlhQagL5.jpg",
      "release_date": "2004-05-26",
      "title": "퍼펙트 블루",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 2184
    },
    {
      "adult": false,
      "backdrop_path": "/27ZkYMWynuK2qiDP6awc3MsCaOs.jpg",
      "genre_ids": [
        10749,
        18
      ],
      "id": 527641,
      "original_language": "en",
      "original_title": "Five Feet Apart",
      "overview": "같은 병을 가진 사람끼리 6피트 이상 접근해서도, 접촉도 해선 안되는 CF(낭포성 섬유증)를 가진 ‘스텔라’와 ‘윌’. 첫눈에 반한 두 사람은 서로를 위해 안전거리를 유지하려고 하지만 그럴수록 더욱 빠져든다. 손을 잡을 수도 키스를 할 수도 없는 그들은 병 때문에 지켜야 했던 6피트에서 1피트 더 가까워지는 걸 선택하고 처음으로 용기를 내 병원 밖 데이트를 결심한다. 그러나 갑자기 숨을 쉬지 못하는 ‘스텔라’. ‘윌’은 그녀를 살리기 위해 안전거리를 어기게 되는데…",
      "popularity": 42.807,
      "poster_path": "/8bXlrAzTJKwedmUDKBhiaU7OkqW.jpg",
      "release_date": "2019-04-11",
      "title": "파이브 피트",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 5264
    },
    {
      "adult": false,
      "backdrop_path": "/9Qs9oyn4iE8QtQjGZ0Hp2WyYNXT.jpg",
      "genre_ids": [
        18,
        10752
      ],
      "id": 28,
      "original_language": "en",
      "original_title": "Apocalypse Now",
      "overview": "미국 특수부대의 윌라드 대위는 고향에 돌아갔다가 아내가 내민 이혼장에 도장을 찍고 다시 정글로 돌아온다. 혼돈과 막연한 갈망에 시달리던 윌라드에게 떨어진 임무는 캄보디아에 자신의 왕국을 건설한 커츠 대령을 암살하라는 것. 커츠 대령은 한때 가장 뛰어난 군인으로 인정받았으나 미국의 통제를 벗어나 캄보디아에서 독자적인 왕국을 거느리고 있다. 윌라드 대위는 4명의 병사들과 함께 커츠 대령을 찾아 나선다. 폭염과 광기로 가득한 전투를 겪으면서 두려움과 공포로 이성을 잃어가던 그들은 마침내 커츠 대령의 왕국에 도착한다. 그리고 그곳에서 윌라드 대위는 상상을 초월하는 진실을 마주하게 되는데...",
      "popularity": 37.133,
      "poster_path": "/giP5yeJBrsqglkM05pbiTyRsoBa.jpg",
      "release_date": "1988-06-04",
      "title": "지옥의 묵시록",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 7507
    },
    {
      "adult": false,
      "backdrop_path": "/u1wHUA0R48FH4WV3sGqjwx3aNZm.jpg",
      "genre_ids": [
        16,
        18,
        10402,
        10749
      ],
      "id": 632632,
      "original_language": "ja",
      "original_title": "映画 ギヴン",
      "overview": "고등학생 우에노야마 리츠카는 사토 마후유의 노랫소리에 충격을 받아 나카야마 하루키, 카지 아키히코와 함께 활동하는 밴드에 보컬로 마후유를 영입한다. 마후유 영입 후 첫 공연을 성공시키면서 밴드 '기븐'의 활동을 시작하려는 와중에 마후유를 향한 마음을 자각한 리츠카는 그와 사귀기 시작한다. 한편, 하루키는 오랫동안 품고 있던 아키히코에 대한 호감이 커져만 가고 아키히코는 동거인인 바이올리니스트 우게츠와 관계를 계속 유지하려 하는데... 하루키와 아키히코, 우게츠의 사랑이 스크린에서 삐걱대며 움직인다!",
      "popularity": 19.752,
      "poster_path": "/tVP1DjnljT1it6cAnn353cdVXDe.jpg",
      "release_date": "2020-11-26",
      "title": "기븐 극장판",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 364
    },
    {
      "adult": false,
      "backdrop_path": "/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg",
      "genre_ids": [
        18,
        35
      ],
      "id": 77338,
      "original_language": "fr",
      "original_title": "Intouchables",
      "overview": "상위 1% 귀족남과 하위 1% 무일푼이 만났다.  2주간의 내기로 시작된 상상초월 특별한 동거 스토리  하루 24시간 내내 돌봐주는 손길이 없으면 아무 것도 할 수 없는 전신불구의 상위 1% 백만장자 필립(프랑수아 클루제). 어느 날 우연히, 가진 것이라곤 건강한 신체가 전부인 하위 1% 무일푼 백수 드리스(오마 사이)를 만나게 된 그는 거침없이 자유로운 성격의 드리스에게 호기심을 느껴 특별한 내기를 제안한다. 바로 2주 동안 필립의 손발이 되어 한시도 떨어지지 않고 자신을 간호하며 버틸 수 있는지 시험해보겠다는 것. 참을성이라곤 눈꼽 만큼도 찾아 볼 수 없던 드리스는 오기가 발동해 엉겁결에 내기를 수락한다. 이렇게, 전혀 어울릴 것 같지 않던 극과 극, 두 남자의 예측불허 기막힌 동거가 시작 되는데…",
      "popularity": 48.164,
      "poster_path": "/4oOf3pmDD5rMNQGgsf7zMbFKtKC.jpg",
      "release_date": "2012-03-22",
      "title": "언터처블: 1%의 우정",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 16107
    },
    {
      "adult": false,
      "backdrop_path": "/sdwjQEM869JFwMytTmvr6ggvaUl.jpg",
      "genre_ids": [
        18,
        53,
        9648,
        28
      ],
      "id": 670,
      "original_language": "ko",
      "original_title": "올드보이",
      "overview": "오대수는 어느 날 술이 거나하게 취해 집에 돌아가는 길에 누군가에게 납치, 사설 감금방에 갇히게 된다. 중국집 군만두만을 먹으며 8평이라는 제한된 공간에서 그가 할 수 있는 일이라곤 텔레비전 보는 게 전부. 1년이 지났을 무렵, 뉴스를 통해 나오는 아내의 살해소식. 게다가 아내의 살인범으로 자신이 지목되고 있음을 알게 된 오대수는 복수와 탈출을 위해 감금방 한쪽 구석을 쇠젓가락으로 파기 시작한다. 감금 15년을 맞이하는 해, 마침내 사람 몸 하나 빠져나갈 만큼의 탈출구가 생겼을 때, 어이없게도 15년 전 납치됐던 바로 그 장소로 풀려나 있는 자신을 발견하게 된다.",
      "popularity": 49.557,
      "poster_path": "/xpa9ybm6tYGna5LseqSXvKpSSJn.jpg",
      "release_date": "2003-11-21",
      "title": "올드보이",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 7820
    },
    {
      "adult": false,
      "backdrop_path": "/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg",
      "genre_ids": [
        12,
        14,
        16,
        35,
        10751,
        28
      ],
      "id": 315162,
      "original_language": "en",
      "original_title": "Puss in Boots: The Last Wish",
      "overview": "아홉 개의 목숨 중 단 하나의 목숨만 남은 장화신은 고양이.  마지막 남은 목숨을 지키기 위해 히어로의 삶 대신 반려묘의 삶을 선택한 그에게 찾아온 마지막 기회, 바로 소원을 들어주는 소원별이 있는 곳을 알려주는 지도!  잃어버린 목숨을 되찾고 다시 히어로가 되기를 꿈꾸는 장화신은 고양이는 뜻밖에 동료가 된 앙숙 파트너 '키티 말랑손', 그저 친구들과 함께라면 모든 게 행복한 강아지 '페로'와 함께 소원별을 찾기 위해 길을 떠난다.  그리고 소원별을 노리는 또 다른 빌런들과 마주치게 되는데…",
      "popularity": 241.499,
      "poster_path": "/rKgvctIuPXyuqOzCQ16VGdnHxKx.jpg",
      "release_date": "2023-01-04",
      "title": "장화신은 고양이: 끝내주는 모험",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 6439
    },
    {
      "adult": false,
      "backdrop_path": "/6rmb35g7XoMCMQtnbH0rUecFZlV.jpg",
      "genre_ids": [
        18,
        10402,
        10749
      ],
      "id": 10376,
      "original_language": "it",
      "original_title": "La leggenda del pianista sull'oceano",
      "overview": "1900년, 유럽과 미국을 오가는 버지니아 호에서 태어나 평생을 바다 위에서 살아온 천재 피아니스트 ‘나인틴 헌드레드’. 유일한 친구인 트럼펫 연주자 ‘맥스’와 첫사랑이자 마지막 사랑 ‘퍼든’, 그의 소문을 듣고 찾아온 재즈 피아니스트를 만나며 조금씩 바다 밖 세상을 배워가던 그의 인생에 새로운 변화가 찾아오는데...",
      "popularity": 28.007,
      "poster_path": "/78wbKjbdIG11hVIv55g6rwgLG3l.jpg",
      "release_date": "2020-01-01",
      "title": "피아니스트의 전설",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 2091
    },
    {
      "adult": false,
      "backdrop_path": "/5QWHHjwIPoaJYHNVL0D00bxDUUC.jpg",
      "genre_ids": [
        16,
        14,
        28,
        12
      ],
      "id": 795607,
      "original_language": "zh",
      "original_title": "白蛇 II: 青蛇劫起",
      "overview": "법해를 물리치고 언니를 구하려던 소청은 디스토피아 도시에서 눈을 뜬다. 낯선 이곳은 어딜까. 그런 소청 앞에 전생을 기억하지 못하는 미스터리한 남자가 나타난다.",
      "popularity": 18.54,
      "poster_path": "/g1d3uFf3eGvVJQ5Coh793Zi1ASq.jpg",
      "release_date": "2021-12-01",
      "title": "백사2: 청사의 시련",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 268
    },
    {
      "adult": false,
      "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      "genre_ids": [
        12,
        878,
        28
      ],
      "id": 299534,
      "original_language": "en",
      "original_title": "Avengers: Endgame",
      "overview": "어벤져스의 패배 이후 지구는 초토화됐고 남은 절반의 사람들은 정신적 고통을 호소하며 하루하루를 근근이 버텨나간다. 와칸다에서 싸우다 생존한 히어로들과 우주의 타이탄 행성에서 싸우다 생존한 히어로들이 뿔뿔이 흩어졌는데, 아이언맨과 네뷸라는 우주를 떠돌고 있고 지구에 남아 있는 어벤져스 멤버들은 닉 퓨리가 마지막에 신호를 보내다 만 송신기만 들여다보며 혹시 모를 우주의 응답을 기다리는 중이다. 애초 히어로의 삶을 잠시 내려놓고 가족과 시간을 보내던 호크아이 역시 헤아릴 수 없는 마음의 상처를 입은 채 사라지고 마는데...",
      "popularity": 101.531,
      "poster_path": "/z7ilT5rNN9kDo8JZmgyhM6ej2xv.jpg",
      "release_date": "2019-04-24",
      "title": "어벤져스: 엔드게임",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 23898
    },
    {
      "adult": false,
      "backdrop_path": "/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
      "genre_ids": [
        28,
        16,
        12,
        14,
        53
      ],
      "id": 635302,
      "original_language": "ja",
      "original_title": "劇場版「鬼滅の刃」無限列車編",
      "overview": "혈귀로 변해버린 여동생 네즈코를 인간으로 되돌릴 단서를 찾아 비밀조직 귀살대에 들어간 탄지로. 젠이츠, 이노스케와 새로운 임무 수행을 위해 무한열차에 탑승 후 귀살대 최강 검사 염주 렌고쿠와 합류한다. 달리는 무한열차에서 승객들이 하나 둘 흔적 없이 사라지자 숨어있는 식인 혈귀의 존재를 직감하는 렌고쿠. 귀살대 탄지로 일행과 최강 검사 염주 렌고쿠는 어둠 속을 달리는 무한열차에서 모두의 목숨을 구하기 위해 예측불가능한 능력을 가진 혈귀와 목숨을 건 혈전을 시작하는데...",
      "popularity": 94.003,
      "poster_path": "/mxdVTei65ymzhJlalIEtR1qSgV2.jpg",
      "release_date": "2021-01-27",
      "title": "극장판 귀멸의 칼날: 무한열차편",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 3423
    },
    {
      "adult": false,
      "backdrop_path": "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
      "genre_ids": [
        28,
        18
      ],
      "id": 361743,
      "original_language": "en",
      "original_title": "Top Gun: Maverick",
      "overview": "최고의 파일럿이자 전설적인 인물 매버릭은 자신이 졸업한 훈련학교 교관으로 발탁된다. 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. 매버릭의 지휘 아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자 매버릭은 자신이 가르친 동료들과 함께 마지막이 될지 모를 하늘 위 비행에 나서는데...",
      "popularity": 152.604,
      "poster_path": "/jeqXUwNilvNqNXqAHsdwm5pEfae.jpg",
      "release_date": "2022-06-22",
      "title": "탑건: 매버릭",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 7584
    },
    {
      "adult": false,
      "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
      "genre_ids": [
        18,
        36
      ],
      "id": 872585,
      "original_language": "en",
      "original_title": "Oppenheimer",
      "overview": "세상을 구하기 위해 세상을 파괴할 지도 모르는 선택을 해야 하는 천재 과학자의 핵개발 프로젝트.",
      "popularity": 400.827,
      "poster_path": "/4ZLnVUfiCe3wX8Ut9eyujndpyvA.jpg",
      "release_date": "2023-08-15",
      "title": "오펜하이머",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 3842
    },
    {
      "adult": false,
      "backdrop_path": "/rl7Jw8PjhSIjArOlDNv0JQPL1ZV.jpg",
      "genre_ids": [
        10749,
        18
      ],
      "id": 851644,
      "original_language": "ko",
      "original_title": "20세기 소녀",
      "overview": "보라의 둘도 없는 친구 연두는 심장 수술을 위해 미국에 가면서 자신이 좋아하는 남자 백현진에 대한 모든 정보를 수집해 달라고 보라에게 부탁한다. 보라는 백현진의 가장 친한 친구 풍운호와 먼저 친해지기로 한다. 하지만 보라의 서투른 계획은 예상치 못한 방향으로 전개된다. 새로운 세기가 오기 1년 전인 1999년, 17세가 된 보라는 첫사랑의 열병에 빠진다.",
      "popularity": 88.183,
      "poster_path": "/xM9Jt2sA6QcvLuHKM0RI3BMtFc5.jpg",
      "release_date": "2022-10-06",
      "title": "20세기 소녀",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 520
    },
    {
      "adult": false,
      "backdrop_path": "/yDaMQbBfyGzGWKxUsPMxzWVuJlY.jpg",
      "genre_ids": [
        10751,
        16,
        18
      ],
      "id": 8587,
      "original_language": "en",
      "original_title": "The Lion King",
      "overview": "아프리카의 평화로운 왕국 프라이드랜드. 이곳을 다스리는 사자 무파사의 아들 심바가 태어난다. 왕의 동생 스카는 자신이 왕위를 차지하기 위해 하이에나들과 결탁하여 무파사를 죽이고 심바에게 죄를 뒤집어 씌워 멀리 내쫓는다. 간신히 목숨을 건진 심바는 유쾌한 미어캣 티몬과 멧돼지 품바와 함께 생활하며 어른이 된다. 어느 날 심바는 옛 친구 날라를 만나 프라이드랜드가 파괴되고 있다는 소식을 듣게 된다. 하지만 자신이 저지른 실수 때문에 고향으로 돌아가기를 거부하는 심바. 결국 아버지의 가르침과 자신의 운명을 깨달은 심바는 스카와 하이에나들을 물리치고 평화를 되찾기 위해 왕국으로 돌아가는데...",
      "popularity": 117.555,
      "poster_path": "/9Y048zYw66TWvpUtsiNK0uReiVX.jpg",
      "release_date": "1994-07-02",
      "title": "라이온 킹",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 17027
    },
    {
      "adult": false,
      "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
      "genre_ids": [
        12,
        28,
        878
      ],
      "id": 299536,
      "original_language": "en",
      "original_title": "Avengers: Infinity War",
      "overview": "타노스는 6개의 인피니티 스톤을 획득해 신으로 군림하려 한다. 그것은 곧 인류의 절반을 학살해 우주의 균형을 맞추겠다는 뜻. 타노스는 닥터 스트레인지가 소유한 타임 스톤, 비전의 이마에 박혀 있는 마인드 스톤을 차지하기 위해 지구를 침략한다. 아이언맨과 스파이더맨은 가디언즈 오브 갤럭시의 멤버들과 타노스를 상대한다. 지구에선 캡틴 아메리카, 완다, 블랙 위도우, 블랙 팬서 등이 비전을 지키기 위해 뭉친다.",
      "popularity": 165.007,
      "poster_path": "/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg",
      "release_date": "2018-04-26",
      "title": "어벤져스: 인피니티 워",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 27760
    },
    {
      "adult": false,
      "backdrop_path": "/dIHezuC3AmylT8mkXQiWSjz2wJR.jpg",
      "genre_ids": [
        18
      ],
      "id": 265177,
      "original_language": "fr",
      "original_title": "Mommy",
      "overview": "불 같은 성격이지만 유쾌하고 당당한 엄마 디안은 거칠지만 사랑스러운 사고뭉치 아들 스티브가 보호 시설에서 사고를 쳐 쫓겨나자 홈스쿨링을 시작한다. 엄마가 행복하다면 무엇이든 할 수 있는 아들 스티브와 함께 행복한 생활을 꿈꾸는 디안. 하지만 홀로 생계를 책임지며 불안정한 성격의 스티브를 돌보기란 쉽지 않다. 이때 이들 앞에 이웃집 여인 카일라가 나타난다. 카일라의 등장으로 세 사람은 유일하게 서로에게 의지하며 지금까지 느껴보지 못한 작은 행복을 찾아가게 된다. 그러던 어느 날, 디안 앞으로 한 장의 편지가 날아오는데...",
      "popularity": 18.255,
      "poster_path": "/8AcQTHscYw8iUQ73GYlWKDPBxt7.jpg",
      "release_date": "2014-12-18",
      "title": "마미",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 2538
    },
    {
      "adult": false,
      "backdrop_path": "/2u1YG0pgm5bIOXO2OVWLNdMl23f.jpg",
      "genre_ids": [
        16,
        10751,
        12,
        35,
        14
      ],
      "id": 508965,
      "original_language": "en",
      "original_title": "Klaus",
      "overview": "공기도 인심도 꽁꽁 얼어붙은 마을. 활기 넘치는 젊은 우체부와 세상을 등지고 장난감을 만드는 목수. 작은 장난감 선물로 냉기가 사라질 수 있을까. 전혀 어울리지 않는 둘의 우정이 차디찬 세상에 온기를 불어넣는다. 《슈퍼배드》 작가의 산타 탄생 이야기.",
      "popularity": 31.056,
      "poster_path": "/1mtsyXMbMdaC5Oc1Jqy8pD0xZLA.jpg",
      "release_date": "2019-11-15",
      "title": "클라우스",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 3547
    },
    {
      "adult": false,
      "backdrop_path": "/yHtB4KHNigx3ZoxDvQbW2SOXGfq.jpg",
      "genre_ids": [
        16,
        10751,
        12,
        14
      ],
      "id": 441130,
      "original_language": "en",
      "original_title": "Wolfwalkers",
      "overview": "미신과 마법의 시대, 어린 사냥 견습생 로빈 굿펠로우는 최후의 늑대 무리를 제거하기 위해 아버지와 함께 아일랜드로 간다. 도시 성벽 바깥의 금지된 땅을 탐험하던 로빈은 밤이면 늑대로 변하는 능력을 지녔다고 전해지는 수수께끼 부족의 일원인 자유분방한 소녀 메브와 친구가 된다. 함께 메브의 사라진 어머니를 찾던 중, 로빈은 놀라운 비밀을 발견한다. 그 비밀로 인해 로빈의 아버지는 마법의 울프워커스 세계로 들어오게 되고, 로빈은 아버지가 없애려 하는 바로 그 존재로 변신하는 위험에 빠지게 된다.",
      "popularity": 26.545,
      "poster_path": "/ehAKuE48okTuonq6TpsNQj8vFTC.jpg",
      "release_date": "2020-12-11",
      "title": "울프워커스",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 1026
    },
    {
      "adult": false,
      "backdrop_path": "/3upEZ0ltY7WwOSFVXrtiP34D48p.jpg",
      "genre_ids": [
        53,
        18,
        10749
      ],
      "id": 290098,
      "original_language": "ko",
      "original_title": "아가씨",
      "overview": "어릴 적 부모를 잃고 후견인 이모부의 보호 아래 살아가는 귀족 아가씨에게 백작이 추천한 새로운 하녀가 찾아온다. 이모부의 서재에서 책을 읽는 것이 일상의 전부인 아가씨는  순박해 보이는 하녀에게 조금씩 의지하기 시작한다. 하지만 하녀의 정체는 유명한 여도둑의 딸인 소매치기 고아 소녀 숙희. 막대한 재산을 상속받게 될 아가씨를 유혹하여 돈을 가로채겠다는 사기꾼 백작의 제안을 받고  아가씨가 백작을 사랑하게 만들기 위해 하녀가 된 것. 드디어 백작이 등장하고, 백작과 숙희는 자신만의 방식으로 아가씨의 마음을 흔들기 시작하는데...",
      "popularity": 56.534,
      "poster_path": "/aoLarnDg8SmuIzax6mp0nAQ6bcV.jpg",
      "release_date": "2016-06-01",
      "title": "아가씨",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 3314
    },
    {
      "adult": false,
      "backdrop_path": "/2Xe9lISpwXKhvKiHttbFfVRERQX.jpg",
      "genre_ids": [
        18,
        35
      ],
      "id": 490132,
      "original_language": "en",
      "original_title": "Green Book",
      "overview": "1962년 미국, 입담과 주먹만 믿고 살아가던 토니 발레롱가는 교양과 우아함 그 자체인 천재 피아니스트 돈 셜리의 운전기사 면접을 보게 된다. 백악관에도 초청되는 등 미국 전역에서 콘서트 요청을 받으며 명성을 떨치고 있는 돈 셜리는 위험하기로 소문난 미국 남부 투어 공연을 떠나기로 결심하고, 투어 기간 동안 자신의 보디가드 겸 운전기사로 토니를 고용한다. 거친 인생을 살아온 토니와 교양과 기품을 지키며 살아온 돈. 생각, 행동, 말투, 취향까지 달라도 너무 다른 두 사람은 그들을 위한 여행안내서 그린북에 의존해 특별한 남부 투어를 시작하는데...",
      "popularity": 43.981,
      "poster_path": "/dyqQ12gZGwl5Y0R9UsLBDkZWOUA.jpg",
      "release_date": "2019-01-09",
      "title": "그린 북",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 10564
    },
    {
      "adult": false,
      "backdrop_path": "/yIPOArneyIpnD3bKkGJ3FSFjVPw.jpg",
      "genre_ids": [
        16,
        35,
        10749,
        18,
        14
      ],
      "id": 572154,
      "original_language": "ja",
      "original_title": "青春ブタ野郎はゆめみる少女の夢を見ない",
      "overview": "하늘과 바다가 반짝이는 마을 \"후지사와\"에 사는 고등학생 아즈사가와 사쿠타는 같은 학교 선배이자 연인인 사쿠라지마 마이와 설레는 일상을 보내고 있다. 하지만 어느 날 첫사랑인 마키노하라 쇼코가 등장하면서 그 일상은 완전히 뒤바뀌어 버린다. 알 수 없는 이유로 '중학생'과 '어른', 두 명이 존재하는 쇼코와 부득이한 동거를 하면서 사쿠타와 마이의 관계가 삐걱거리기 시작한다. 그러던 중 '중학생 쇼코'가 위중한 병을 앓고 있다는 것을 알고 사쿠타의 가슴 흉터는 다시 벌어지는데...",
      "popularity": 21.167,
      "poster_path": "/hqNkm15rQI6049Pg3XPSE8PMW98.jpg",
      "release_date": "2019-08-22",
      "title": "청춘 돼지는 꿈꾸는 소녀의 꿈을 꾸지 않는다",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 474
    },
  ],
  "total_pages": 234,
  "total_results": 4675
}