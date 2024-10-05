import React, { useState, useRef, useEffect, useSelector } from 'react';
import { history, connect } from 'umi';
import PageLayout from '../../component/layout/layout';
import { Typography, Card, Col, Row, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.less';

function Index(props) {
  const { Title } = Typography;
  const { Meta } = Card;

  if (
    props.loading.effects['cover/getRemote'] ||
    props.loading.effects['slider/getRemote']
  ) {
    return (
      <div>
        <LoadingOutlined />
      </div>
    );
  }
  return (
    <PageLayout>
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop
        useKeyboardArrows
      >
        {props.slider[0].data.map((o, i) => {
          return (
            <div>
              <a href={o.url} style={{ height: '100%' }}>
                <div>
                  <img src={o.pic} alt="" key={i} />
                </div>
              </a>
            </div>
          );
        })}
      </Carousel>
      <Row style={{ marginTop: '3%' }} className="text-style">
        <Col span={12}>
          <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
            <img src="bible.svg" />
          </Row>
          <Row
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              color: '#00000099',
              fontSize: '24px',
            }}
          >
            (约翰福音1:9)
          </Row>
          <Row
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              fontWeight: 'bold',
              fontSize: '30px',
              letterSpacing: '2%',
            }}
          >
            那光是真光
          </Row>
          <Row
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              fontWeight: 'bold',
              fontSize: '30px',
              letterSpacing: '2%',
            }}
          >
            照亮一切生在世上的人
          </Row>
          <Row
            style={{ justifyContent: 'center', alignContent: 'center' }}
          ></Row>
        </Col>
        <Col span={5}>
          <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
            <img src="people.svg" />
          </Row>
          <Row
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: '24px',
            }}
          >
            教会人数
          </Row>
          <Row
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            90人
          </Row>
        </Col>
        <Col span={5}>
          <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
            <img src="group.svg" />
          </Row>
          <Row
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: '24px',
            }}
          >
            团契小组
          </Row>
          <Row
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            8组
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: '1%',
        }}
        className="text-style"
      >
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '3%',
            fontSize: '46px',
          }}
        >
          信仰宣言
        </div>
      </Row>
      <div style={{ fontSize: '24px' }}>
        <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
          我们肯定圣经是神默示的话语。是我们信仰的根据。
        </Row>
        <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
          本教会赞同一九六三年美南浸信会年会所接纳的 「浸信会的信仰」。
        </Row>
        <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
          我们在基督耶稣里受浸的信徒们，志愿联合起来成为一体，{' '}
        </Row>
        <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
          并且每个人都愿意把得救的福音分享和传遍世人。
        </Row>
        <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
          教会的礼仪，包括信徒的浸礼和主餐。
        </Row>
        <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
          那光是真光，照亮一切生在世上的人。
        </Row>
        <Row
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            color: '#00000099',
          }}
        >
          (约翰福音1:9)
        </Row>
        <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
          The true light that gives light to every man was coming into the
          world.
        </Row>
        <Row
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            color: '#00000099',
          }}
        >
          (John 1:9)
        </Row>
      </div>
      <Row
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: '1%',
        }}
      >
        <Button type="primary" size="large" onClick={() => {}}>
          了解更多教会信息
        </Button>
      </Row>
      <div className="site-card-wrapper">
        {props.cover.map((obj, i) => {
          return (
            <Row
              gutter={16}
              style={{
                marginTop: '3%',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              {obj.map((o, j) => {
                return (
                  <Col span={8}>
                    <Card
                      hoverable
                      style={{
                        position: 'relative',
                        height: '100%',
                        width: '90%',
                        left: '5%',
                      }}
                      cover={<img alt="cover" src={o.pic} />}
                      onClick={() => {
                        history.push(o.url);
                      }}
                    >
                      <Meta title={o.title} description={o.description} />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </div>
    </PageLayout>
  );
}
export default connect(({ slider, loading, cover }) => ({
  slider,
  loading,
  cover,
}))(Index);
