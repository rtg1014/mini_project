# mini_project

주제 : 여행의 민족


BE : 강명지, 박선우, 김성현
<br>
FE : 정대규, 장세화, 임운철


<!-- 
##  🍎 iOS 커리큘럼 -->

<!-- | Week | 세미나 | 과제 |커리큘럼 내용 |
| ------ | -- | -- |----------- |
| 1주차 | ☑️ | ☑️ | iOS 기초, H.I.G를 통한 컴포넌트의 이해, 화면 전환 |
| 2주차 | ☑️ | ☑️ | Autolayout을 통한 기초 UI구성, Scroll View의 이해 |
| 3주차 | ☑️ | ☑️ | TableView, CollectionView, 데이터 전달 방식 |
| 4주차 | ☑️ | ☑️ | Cocoapods & Networking + 솝커톤 전 보충 세미나 |
| 5주차 |  |  |디자인 합동 세미나 |
| 6주차 |  |  |서버 합동 세미나 + 솝커톤  |
| 7주차 |  |  |클론 코딩을 통한 실전 UI 구성, Animation, 통신 보충  |
| 8주차 |  |  |e기획 경선 + 앱잼 전 보충 세미나 + 앱스토어 배포 가이드  |
 -->
<br>

API 명세서

|페이지|기능|API URL|Method|request(가져갈 데이터)|response(서버로부터 받아올 데이터)|     
|:------:|:---:|:---:|:------:|:---:|:---:|
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




