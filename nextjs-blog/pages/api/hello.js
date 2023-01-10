// Nextjs는 api서버처럼도 사용이 가능하다
// req : requst를 받아옴(post/get과 같이 값을 전달하면)
// res : respones로 전달함
export default function handler(req, res) {
    // api/hello 로 접근하면 
    // json text: new data를 전달
    // >> 이때 json으로 전달하기 때문에, 
    // 다른 프론드엔드 서버에서 값을 받아와서 
    // 출력하는 용도로 사용할 수 있다 *리액트톰캣연결확인
    const data = {text: "new data"};
    res.status(200).json(data);
}