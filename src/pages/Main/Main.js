import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <>
        <div className="TopMenu">
          <div className="logoImg">
            <img
              className="instalogo"
              src="/images/instagramlogo.png"
              alt="인스타그램 로고"
            />
            <h3>WeStagram</h3>
          </div>
          <div className="logo">
            <input
              className="search"
              type="text"
              placeholder="검색"
              size="30"
            />
          </div>
          <div className="RightMenu">
            <img
              className="Circinus"
              src="/images/instagramCircinus.png"
              alt="인스타그램 나침판"
            />
            <img
              className="heart"
              src="/images/instagramheart.png"
              alt="인스타그램 좋아요"
            />
            <img
              className="person"
              src="/images/instagramPerson.png"
              alt="인스타그램 사람"
            />
          </div>
        </div>
        <main>
          <article className="Content">
            <div className="Wes">
              <div className="info">
                <img className="food" src="/images/food.jpg" alt="음식" />
                <h5>sojin</h5>
              </div>
              <div className="feeds">
                <img className="street" src="/images/street.jpg" alt="거리" />
              </div>
              <div className="likefeeds">
                <img
                  className="like"
                  src="/images/instagramheart.png"
                  alt="좋아요"
                />
                <img
                  className="reply"
                  src="/images/instagramreply.png"
                  alt="댓글"
                />
                <img
                  className="message"
                  src="/images/instagramDM.png"
                  alt="DM"
                />
              </div>
              <div className="replyfeeds">
                <div className="imagefeeds">
                  <img className="dog" src="/images/dog.jpg" alt="강아지" />
                  <h5>ZzangGu님 외 여러명이 좋아합니다.</h5>
                </div>
                <input className="replywrite" placeholder="" size="30" />
                <button className="replyBtn" type="button">
                  게시
                </button>
              </div>
            </div>
          </article>
        </main>
      </>
    </>
  );
};

export default Main;
