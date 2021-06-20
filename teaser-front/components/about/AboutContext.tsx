import styled from '@emotion/styled';

const AboutBlock = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding-left: 20%;
    padding-right: 20%;
    
    h1 {
        font-size: 4rem;
    }

    h3 {
        font-size: 3rem;
    }

    p {
        font-size: 1.75rem;
    }
`;


function AboutContext() {
    return (
        <div>
            <AboutBlock>
                <h1>행사 상세</h1> 
                <p>파이콘 한국은 한국의 파이썬 개발자들이 지식을 공유하고 만남을 갖기 위한 장입니다. <br />
                파이콘 한국 2021은 온라인으로 진행됩니다.</p>
            </AboutBlock>
            <AboutBlock>
                <h1>슬로건</h1>
                <h3>“Stay Home, Stay Connected”</h3>
                <p>
                    우리 삶의 많은 것들이 바뀌고, 당연하던 것들이 더 이상 당연하지 않게 됐습니다. <br />
                    하지만 우리는 여전히 파이썬을 사랑하고 파이썬을 통해 공감하며 파이썬을 이야기합니다.<br /><br />
                    
                    이러한 마음을 담아 올해도 각자의 공간에서<br />
                    더 풍성하고 서로의 공감을 이끌어 낼 수 있는 프로그램을 통해<br />
                    거리는 멀어졌지만 변함 없이 함께 한다는 것을 느껴보시는 건 어떨까요?<br /><br />

                    더 안전해진 파이콘 한국 2021을 통해 따로, 또 같이 올해도 파이써니스타와 함께 합니다.
                </p>
            </AboutBlock>
            <AboutBlock>
                <h1>컨퍼런스</h1>
                <p>
                    파이썬 사용 사례, 지식 공유를 위한 행사입니다.<br />
                    컨퍼런스의 자세한 시간표는 프로그램 {'>'} 세부 일정에서 확인하실 수 있습니다.<br />
                    파이썬 사용 사례와 지식을 공유하는 40여 개의 다양한 발표 세션이 열립니다.<br />
                    이외의 모든 공지 사항은 공식 페이스북과 트위터, 이곳을 통해 공지될 예정입니다.
                </p>
            </AboutBlock>
            <AboutBlock>
                <h1>문의 & 공식 계정</h1>
                <p>파이콘 한국 2020에 대한 모든 문의는 아래의 공식 연락처로 주시기 바랍니다.</p>

                <p>
                    이메일 pyconkr@pycon.kr<br />
                    페이스북 https://www.facebook.com/pyconkorea/<br />
                    후원사 sponsor@pycon.kr
                </p>
            </AboutBlock>
        </div>
    )
}

export default AboutContext;