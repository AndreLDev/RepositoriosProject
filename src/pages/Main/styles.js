import styled, {keyframes, css} from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 30px;
    margin: 80px auto;

    h1{
        font-size: 20px;
        display: flex;
        align-items: center;
        flex-direction: row;

        svg{
            margin-right: 10px;
        }

    }
`;

export const Form = styled.form`
    
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        border: 1px solid ${ props => (props.error ? '#ff0000' : '#DDD') };
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }



`;


const animate = keyframes`

    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(380deg);
    }

`;


export const SubmitButton = styled.button.attrs( props => ({
type: 'submit', 
disabled: props.loading,
}) )`
    background: #0D2636;
    border: 0;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props => props.loading &&
        css`
            svg{
                animation: ${animate} 2s linear infinite;
            }
        `
    }

`;


export const List = styled.ul`
    list-style: none;
    margin-top: 20px;


    li{
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & + li{
            border-top: 1px solid #ddd;
        }

        div{
            display: flex;
            padding: 2px 2px;
            align-items: center;

            img{
                height: 36px;
                width: 36px;
                border-radius: 50%;
                border: 2px solid #0D2636;
            }

            span{
                color: #0D2636;
                font-size: 17px;
                font-weight: 600px;
                padding: 1px 7px;
                margin-left: 10px;
            }
        }

        a{
            background: #0D2636;
            color: white;
            border: 0;
            border-radius: 4px;
            margin-left: 10px;
            padding: 8px 7px;
            outline: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            
        }

    }
`;



export const DeleteButton = styled.button.attrs({
    type: 'button',
})`

    background: #8b0000;
    color: white;
    border: 0;
    border-radius: 4px;
    margin-left: 10px;
    padding: 8px 7px 5px;
    outline: 0;

`;


