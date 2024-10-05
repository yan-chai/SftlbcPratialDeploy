import '../../less/traditional.less';
import { Row, Col } from 'antd';
import AboutLayout from './aboutLayout';

const content = (
  <>
    <p className="t5">奉獻支持</p>
    <Row>
      <Col span={10}>
        <img
          src="about\奉献支持.png"
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </Col>
      <Col span={12} style={{ marginLeft: '30px' }}>
        <Row>
          【奉獻：支票抬頭請寫 SFTLBC】
          <br />
          <br />
          1) 將奉獻 (支票) 寄到朴元俊弟兄家
          <br />
          地址：713 24th Ave, SF, CA 94121
          <br />
          <br />
          2) 使用 Zelle 網上即時轉帳到
          <br />
          stevequach5@gmail.com
          <br />
          (SF True Light Baptist Church 的帳戶)
          <br />
        </Row>
      </Col>
    </Row>
  </>
);
export default function Support() {
  return <AboutLayout highLight={'support'} content={content} />;
}
