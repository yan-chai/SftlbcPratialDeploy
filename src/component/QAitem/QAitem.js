import { Row, Button } from 'antd';

export default function QAitem(props) {
  return (
    <div style={{ width: 'auto', height: 'auto', marginTop: '8%' }}>
      <Row style={{ fontSize: '24px', marginTop: '10px', marginLeft: '10px' }}>
        {props.question}
      </Row>
      <Row
        style={{ marginTop: '24px', marginLeft: '10px', marginBottom: '10px' }}
      >
        {props.answer}
      </Row>
    </div>
  );
}
