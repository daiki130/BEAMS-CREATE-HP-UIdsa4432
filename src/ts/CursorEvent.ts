export const CursorEvent = () => {
  // 要素の取得
  const cursor = document.querySelector(".cursor")! as HTMLElement;
  const footer = document.querySelector("footer")! as HTMLElement;
  const footerR = document.querySelector(".footerR")! as HTMLElement;
  const Body = document.querySelector("body")! as HTMLBodyElement;
  const mobileMenuBtn = document.querySelector(
    ".mobile-menu__btn"
  )! as HTMLButtonElement;
  const gridColumns: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".grid-column"
  );
  const drawer = document.querySelector(".drawer")! as HTMLDivElement;

  // gridColumnホバー時のcursorイベント
  gridColumns.forEach((gridColumn) => {
    gridColumn.addEventListener("mouseover", () => {
      cursor.classList.add("link-grow");
      console.log("foo");
    });
    gridColumn.addEventListener("mouseleave", () => {
      cursor.classList.remove("link-grow");
    });
  });

  // フッターイベント時、実行する関数
  function footerMouseoverEvent() {
    cursor.style.display = "none";
    cursor.classList.add("cursorStyle");
  }
  function footerMouseoutEvent() {
    cursor.style.display = "block";
    cursor.classList.remove("cursorStyle");
  }

  // フッターホバー時のcursorイベント
  footer.addEventListener("mouseover", () => {
    footerMouseoverEvent();
  });
  footer.addEventListener("mouseout", () => {
    footerMouseoutEvent();
  });
  footerR.addEventListener("mouseover", () => {
    footerMouseoverEvent();
  });
  footerR.addEventListener("mouseout", () => {
    footerMouseoutEvent();
  });

  // ハンバーガーメニューホバー時のcursorイベント
  mobileMenuBtn.addEventListener("mouseover", () => {
    cursor.style.display = "none";
  });
  mobileMenuBtn.addEventListener("mouseout", () => {
    cursor.style.display = "block";
  });

  // ハンバーガーメニュークリック時のcursorイベント
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("menu-open");
    drawer.classList.toggle("right");
    if (drawer.className === "drawer right") {
      cursor.style.display = "none";
      Body.style.cursor = "pointer";
    } else {
      cursor.style.display = "block";
      Body.style.cursor = "none";
    }
  });
};
