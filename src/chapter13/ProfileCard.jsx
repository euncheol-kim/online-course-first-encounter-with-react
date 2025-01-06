import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title={"Euncheol Kim"} backgroundColor="#4ea04e">
            <p>안녕하세요. 김은철입니다.</p>
            <p>저는 리액트를 사용해 개발하기 위한 최선을 다하는 중입니다.</p>
        </Card>
    )
}

export default ProfileCard;