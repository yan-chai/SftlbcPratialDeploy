import '../../less/traditional.less';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import MinistryDetail from './ministryDetail';

function Fellowship(props) {
  if (props.loading.effects['card/getRemote']) {
    return (
      <div>
        <LoadingOutlined />
      </div>
    );
  } else {
    return (
      <>
        {console.log(props.card[0].data)}
        <MinistryDetail highLight={'fellowship'} data={props.card[0].data} />
      </>
    );
  }
}

export default connect(({ card, fellowship, loading }) => ({
  card,
  fellowship,
  loading,
}))(Fellowship);
