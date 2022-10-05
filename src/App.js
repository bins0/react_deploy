/* eslint-disable*/
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let post = "👍";
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <button
        onClick={() => {
          let arrStr = [...글제목];
          글제목변경(arrStr.sort());
        }}
      >
        가나다순정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}
      >
        {" "}
        수정버튼{" "}
      </button>
      {/* <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            ❤
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
       <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
       */}

      {글제목.map(function (a, i) {
        return (
          <div className="list">
            {/* false가 아닌 true일때 모달창나오게 */}
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                🤞
              </span>{" "}
              {따봉[i]} 
            </h4>
            <p>2월 17일 발행</p>
            <button onClick={()=>{
              let copy = [...글제목];
              copy.splice(i,1); 
              글제목변경(copy)
            }}>삭제</button>
          </div>
        );
      })}

      <button onClick={() => setTitle(0)}>글제목0</button>
      <button onClick={() => setTitle(1)}>글제목1</button>
      <button onClick={() => setTitle(2)}>글제목2</button>
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button onClick={()=>{
        let copy = [...글제목];
         copy.unshift(입력값)
        글제목변경(copy)
      }}>글발행</button>
      {입력값}

      {modal === true ? (
        <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            let copy = [...props.글제목];
            copy[0] = "여자코트추천";
            props.글제목변경(copy);
          }}
        >
          글수정
        </button>
      </div>
    </>
  );
}




export default App;
