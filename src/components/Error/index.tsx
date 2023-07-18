import { styled } from 'styled-components';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  font-size: 20px;
  font-weight: 800;
  p {
    @media screen and (max-width: 320px) {
      font-size: 13px;
    }

    @media screen and (max-width: 768px) {
      font-size: 13px;
    }

    color: red;
    margin: 25px;
  }
`;

const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  padding: 30px;
  border-radius: 10px;
  font-size: 15px;
  color: white;

  input {
    outline: none;
    color: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
  }

  div {
    margin: 5px 0px;
    display: flex;
    flex-direction: column;
  }
`;

const ERROR_CODE: { [key: string]: string } = {
  '200': 'Everything worked as expected',
  '400': 'Bad Request	The request was unacceptable, often due to missing a required parameter',
  '401': 'Unauthorized	Invalid Access Token',
  '403': 'Forbidden	Missing permissions to perform request',
  '404': 'Not Found	The requested resource doesn’t exist',
  '500': 'Something went wrong on our end',
  '503': 'Something went wrong on our end',
};

interface ErrorProps {
  errorCode: number;
}

const Error: React.FC<ErrorProps> = ({ errorCode }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result: EmailJSResponseStatus) => {
        console.log(result);
      })
      .catch((error) => {
        console.error('이메일 전송 실패:', error);
      });
    alert('전송이 완료됐습니다.');
    navigate('/');
  };

  return (
    <StyleContainer>
      <p>사진을 받아오는데 문제가 발생했습니다</p>

      <StyleForm ref={formRef} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="from_name"
            placeholder="이름을 입력해주세요."
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="메일 주소를 입력해주세요"
            required
          />
        </div>

        <div>
          <label>Message</label>
          <input name="message" defaultValue={ERROR_CODE[errorCode]} readOnly />
        </div>

        <div>
          <input type="submit" value="Send Message" />
        </div>
      </StyleForm>
    </StyleContainer>
  );
};

export default Error;
