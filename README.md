# mini_project

✈ 주제 : 여행의 민족
===========

내용
---

* 코로나로 끝나가는 이 시기에 다시금 여행에 대한 설렘이 살아날 수 있도록 자신이 갔던 여행지의 정보와 후기등을 공유하는 사이트
* 누군가에게는 여행지에 대한 정보가 될 수 있고, 누군가에게는 자신이 갔던 여행지의 즐거움을 한번 더 기억하게 되는 그런 사이트를 만들고 싶어서 제작하게 되었습니다.  

---

😎 여행의 민족을 제작한 자랑스러운 개발자들
---

👉 BE : 강명지, 박선우, 김성현
<br>
👉 FE : 임운철, 정대규, 장세화 

---
기능 구현
===

👉 회원가입후 닉네임을 사용한 안전한 익명성의 활동 가능

👉 여행 게시물 작성을 통해 나만의 여행지를 사진과 설명으로 모두에게 알릴 수 있는 인싸력 상승

👉 게시물 상세 조회를 통해 내가 갔었던 여행지를 모아서 볼 수 있는 편리함

👉 여행 게시물 조회를 통해 다른 사람들의 여행 후기를 볼 수 있는 생생함

---

🛠 tools
---

#F7DF1E


<br>



API 명세서

| 페이지 | 기능 | API URL | Method | request(가져갈 데이터)|response(서버로부터 받아올 데이터)|     
|:------:|:------:|:---:|:------:|:---:|:---:|
|홈|회원정보로 이동| x | x | x |x |
|회원정보|회원가입|/api/signup|/api/signup|email,password|token; result : [{""success"",nickname}] OR message: '이메일 또는 패스워드 확인해주세요'}"|
|회원정보|로그인|/api/login|POST|email,password|token; result : [{""success"",nickname}] OR message: '이메일 또는 패스워드 확인해주세요'|
|회원정보|중복검사 이메일|/api/duplicatesemail/:email|GET|email|Message: '사용 가능한 이메일 입니다' OR Message: '중복된 이메일 입니다' |
|회원정보|중복검사 닉네임|/api/duplicatesnick/:nickname|GET|nickname|Message: '사용 가능한 닉네임 입니다' OR Message: '중복된 닉네임 입니다' |
|메인|여행 게시물 조회|/api/travel|GET|x|boardId,title,image,nickname|
|메인|게시물 작성|/api/travels|x|title,image,content|boardId,title,image,content|
|메인|게시물 상세 조회|/api/travels/:boardId|GET|x|boardId,title,image,content,nickname|
|Detail|게시물 수정|/api/travels/:boardId|PATCH|"title,image,content|boardId,title,image,content|
|Detail|게시물 삭제|/api/travels/:boardId|DELETE|x|boardId|




