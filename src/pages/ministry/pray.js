import '../../less/traditional.less';
import { LoadingOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { connect } from 'umi';
import MinistryDetail from './ministryDetail';

const columns = [
  {
    title: '小组名称',
    dataIndex: 'name',
  },
  {
    title: '联络人',
    dataIndex: 'host',
  },
  {
    title: '联络方式',
    dataIndex: 'contact',
  },
  {
    title: '活动时间',
    dataIndex: 'time',
  },
];
function Pray(props) {
  if (
    props.loading.effects['group/getRemote'] ||
    props.loading.effects['card/getRemote'] ||
    props.group.length === 0
  ) {
    return (
      <div>
        <LoadingOutlined />
      </div>
    );
  } else {
    return (
      <>
        <MinistryDetail
          highLight={'pray'}
          data={props.card[0].data}
          remain={
            <>
              <p className="t5">各祷告小组及联络人</p>
              <Table
                columns={columns}
                dataSource={props.group[0].data}
                pagination={false}
                style={{ marginBottom: '5%' }}
              />
            </>
          }
        />
      </>
    );
  }
}

export default connect(({ card, group, loading }) => ({
  card,
  group,
  loading,
}))(Pray);
