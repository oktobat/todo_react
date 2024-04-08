import React from 'react';
import styled from 'styled-components'
import { FaPlus } from "react-icons/fa6";

const TodoInsertBlock = styled.div`
    .formbox {
        background:#495057;
        display:flex;
        input { flex:1; background:none; border:none; 
            padding:1rem 0.5rem; font-size:1.125rem; 
            color:#fff; outline:none; 
            &::placeholder { color:#dee2e6 }
        }
        button { font-size:1.5rem;
            padding:0 1rem; 
            background:#868e96;
            border:none; 
            color:#fff; 
            cursor:pointer; 
        }
    }
`

const TodoInsert = () => {
    return (
        <TodoInsertBlock>
            <form className="formbox">
                <input type="text" placeholder="할 일을 입력하세요." />
                <button type="submit"><FaPlus /></button>
            </form>
        </TodoInsertBlock>
    );
};

export default TodoInsert;