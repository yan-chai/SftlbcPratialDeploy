import '../../less/traditional.less';
import AboutLayout from './aboutLayout';

const content = <p className="t5">认识我们</p>;
export default function KnowUs() {
  return <AboutLayout highLight={'knowus'} content={content} />;
}
