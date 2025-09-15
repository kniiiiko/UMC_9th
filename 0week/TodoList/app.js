const input = document.querySelector("input");
const todoSection = document.querySelector(".sections section:nth-child(1)");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    event.preventDefault();

    // 새로운 할 일 항목 생성
    const newItem = document.createElement("div");
    newItem.textContent = input.value.trim();

    // 해야 할 일 섹션에 추가
    todoSection.appendChild(newItem);

    // 입력창 비우기
    input.value = "";
  }
});
