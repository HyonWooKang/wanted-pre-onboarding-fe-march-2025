import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/javascript/Symbol")({
  component: SymbolPage,
});

function SymbolPage() {
  const navigate = useNavigate();
  /* symbol */
  /*
  유일한 식별자를 만들때 사용함
  생긴 것은 똑같이 symbol()이지만 다르다.
  symbole('설명') 방식으로 사용한다.

  Symbol.for() : 전역 심볼
  */

  /* 사용 예시 */
  const user = {
    name: "Mike",
    age: 30,
  };

  const showName = Symbol("show name");
  user[showName] = function () {
    console.log(this.name);
  };

  // symbol을 사용하여 다른 user와 구분되게 함
  user[showName]();

  for (let key in user) {
    console.log(`this ${key} is ${user[key]}`);
  }
  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate(history.back());
          }}
        >
          Back to the main
        </button>
      </div>
    </>
  );
}
