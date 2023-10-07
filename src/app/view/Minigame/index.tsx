import React, { useRef } from "react";
import { styled } from "styled-components";
import images from '../../../../public/images/index.js'
import question from "./config.js";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .style-shake {
    position: relative;

    .shaked {
    z-index: 3;
    position: relative;
    animation: shake 10s linear 1s infinite alternate-reverse;
    @keyframes shake {
      0%,
      100% {
        transform: translateY(0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        transform: translateY(-5px);
      }
      20%,
      40%,
      60%,
      80% {
        transform: translateY(5px);
      }
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`
const Image = styled.img`
    width: 380px;
    height: 550px;
    @media (max-width: 575px) {
        width: 310px;
        height: 450px;
    }
`
const StyleCardEnd = styled.div`
    width: 380px;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #eaf2fb;
    border-radius: 24px;
    border: 4px solid #6089e9;
    padding: 40px;
    font-size: 20px;
    line-height: 28px;
    font-weight: 800;
    text-align: center;
    color: #1869b3;
    @media (max-width: 575px) {
    width: 310px;
    height: 450px;
    padding: 30px;
    }
`
const Btn = styled.button`
    width: 200px;
    height: 45px;
    border-radius: 12px;
    border: 3px solid #fff;
    cursor: pointer;
    font-size: 18px;
    line-height: 24px;
    font-weight: 800;
    color: #fff;
    background-color: #1d6eb7;
    &:hover {
        opacity: 0.6;
    }
`

const MiniGame = () => {
    const [questionValue, setQuestionValue] = React.useState('')
    const [changeValue, setChangeValue] = React.useState(false)

    const handleRandom = () => {
        const usedNumbers: number[] = [];
        // if (usedNumbers.length === question.length) {
        //     setQuestionValue("Đã sử dụng tất cả các số.")
        //     return;
        // }
        const min: number = 1;
        const max: number = 50;
        let randomNumber: number;
        do {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (usedNumbers.includes(randomNumber));

        usedNumbers.push(randomNumber);
        
        const val = question.find((e) => e.id === usedNumbers[0])
        setQuestionValue(String(val?.content))
        setChangeValue(true)
    };

    return (
        <Wrapper>
            <Container>
                <div className="style-shake">
                    {changeValue ? (
                        <StyleCardEnd>
                            {questionValue}
                        </StyleCardEnd>
                    ): (
                        <Image className="shaked" src={images.card} alt="card" />
                    )}
                </div>
                {!changeValue ? (
                    <Btn onClick={() => handleRandom()}>Start</Btn>
                ):(
                    <Btn onClick={() => setChangeValue(!changeValue)}>End</Btn>
                )}
            </Container>
        </Wrapper>
    )
}

export default MiniGame