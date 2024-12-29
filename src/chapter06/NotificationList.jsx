import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요. 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    }
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [], // 빈 배열의 state
        };
    }

    componentDidMount() { // 클래스 컴포넌트 생명주기 함수
        const {notifications} = this.state;

        // 매 정해진 시간 (1000ms) 마다 작업을 수행
        // 미리 만든 reservedNotifications 배열 값을 notifications에 넣는 과정 수행
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);

                // state를 업데이트 하기 위해서 setState를 사용한다는 것을 기억
                this.setState({
                    notification: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification 
                                key={notification.id}
                                id={notification.id}
                                message={notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;