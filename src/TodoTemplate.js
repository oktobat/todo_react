import React from 'react';
import styled from 'styled-components'

const TodoTemplateBlock = styled.div`
    max-width:521px;
    margin:50px auto;
    h1 {
        height:4rem;
        background:#22b8cf;
        color:#fff;
        font-size:1.5rem;
        display:flex; 
        justify-content:center; 
        align-items:center;
    }
    .content {
        border:1px solid #000;
        background:#fff
    }
`

const TodoTemplate = ({children}) => {
    return (
        <TodoTemplateBlock>
            <h1>일정관리</h1>
            <div className="content">{children}</div>
        </TodoTemplateBlock>
    );
};

export default TodoTemplate;