import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "EUN CHEOL",
        comment: "안녕하세요. 김은철입니다."
    },
    {
        name: "1번",
        comment: "안녕하세요. 첫 째 입니다."
    },
    {
        name: "2번",
        comment: "안녕하세요. 둘 째 입니다."
    },
    {
        name: "3번",
        comment: "안녕하세요. 셋 째 입니다."
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map ((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} /> 
                )
            })}
        </div>
    );
}

export default CommentList;
