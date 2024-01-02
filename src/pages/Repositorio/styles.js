import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`

    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 20px auto;

`;

export const Owner = styled.header`

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 90px;
        border-radius: 20%;
        margin: 10px 0;
    }


    h1{
        font-size: 30px;
        color: #0D2636;
    }

    p{
        margin-top: 5px;
        font-size: 14px;
        color: #000;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }

`;


export const Loading = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;


export const BackButton = styled(Link)`
    background: transparent;
    color: #0D2636;
    border: 0;
    

`;


export const IssuesList = styled.ul`

    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #ccc;
    list-style: none;

    li{
        display: flex;
        padding: 15px 10px;

        & + li{
            margin-top: 12px;
        }

        img{
            height: 36px;
            width: 36px;
            border-radius: 50%;
            border: 2px solid #0D2636;
        }

        div{
            flex: 1;
            margin-left: 12px;


            p{
                margin-top: 10px;
                font-size: 12px;
                color: #000;
            }
        }

        strong{
            font-size: 15px;


            a{
                text-decoration: none;
                color: #222;
                transform: 3s;

                &:hover{
                    color: #002dbd;
                }
            }

            span{
                background: #0D2636;
                color: #fff;
                border-radius: 4px;
                font-size: 14px;
                font-weight: 600px;
                padding: 1px 7px;
                margin-left: 10px;
            }
        }
    }
`;



export const PageActions = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        outline: 0;
        border: 0;
        background: #0D2636;
        color: white;
        border-radius: 4px;
        padding: 5px 10px;

        &[disabled]{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }

`;


export const Filters = styled.div`

    margin-top: 30px;
    display: flex;


    button{
        outline: 0;
        border: 0;
        background: #0D2636;
        color: white;
        border-radius: 4px;
        padding: 5px 10px;

        &[disabled]{
            cursor: not-allowed;
            opacity: 0.5;
        }

        & + button{
            margin-left: 10px;
        }

        &:hover{
            background: #26658E;
        }
    }

`;
