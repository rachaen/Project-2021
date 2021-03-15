- 마우스 커서가 위치한 좌표 출력

### 수정사항 (21.3.15)

- left와 top의 변경은 계속해서 layout을 변경하게 하기 때문에 성능에 좋지 않다. 그래서 composite만 일어나는 translate를 사용하는 것으로 수정을 하였다.
  ![coordinates007](https://user-images.githubusercontent.com/78066837/111027332-f47d0f80-8432-11eb-85cf-7027b44b196c.gif)
