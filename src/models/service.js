import { request } from 'umi';
import slider from '../../mock/slides.json';
import covers from '../../mock/covers.json';
import cards from '../../mock/cards.json';
import groups from '../../mock/groups.json';

//const host = 'http://localhost:8000';

export async function getSlider() {
  return slider;
}

export async function getCover() {
  return covers;
}

export async function getCard() {
  console.log('Get Card');
  return cards;
}

export async function getGroup() {
  console.log('Get group');
  return groups;
}
/*export async function getSlider() {
  console.log('call');
  return request(host + '/api/slide-banners', {
    method: 'get',
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getCover() {
  console.log('call');
  return request(host + '/api/covers', {
    method: 'get',
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getCard() {
  console.log('call');
  return request(host + '/api/cards', {
    method: 'get',
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getGroup() {
  console.log('call');
  return request(host + '/api/groups', {
    method: 'get',
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getWorshipList(year, isSpeacial, page) {
  let url;
  console.log(isSpeacial);
  if (isSpeacial) {
    url =
      '/api/worships?fields=title,description,date,weekly_report,scripture,hoster,url&sort[0]=date:desc&pagination[pageSize]=10&filters[isSpecial][$eq]=true&pagination[page]=' +
      page;
  } else if (year != 0) {
    url =
      '/api/worships?fields=title,description,date,weekly_report,scripture,hoster,url&sort[0]=date:desc&pagination[pageSize]=10&filters[date][$gte]=' +
      year +
      '-01-01&filters[date][$lte]=' +
      year +
      '-12-31&pagination[page]=' +
      page;
  } else {
    url =
      '/api/worships?fields=title,description,date,weekly_report,scripture,hoster,url&sort[0]=date:desc&pagination[pageSize]=10&&pagination[page]=' +
      page;
  }
  return request(url, {
    method: 'get',
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getYears() {
  return request(host + '/api/year-filters?fields=year&sort[0]=year:desc', {
    method: 'get',
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getInfo() {
  return request(host + '/api/infos', {
    method: 'get',
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getFellowship() {
  return request(host + '/api/fellowships', {
    method: 'get',
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getDailyBread() {
  var date = new Date();
  return request(
    host +
      '/api/daily-breads?pagination[pageSize]=1&filters[month]=' +
      (date.getMonth() + 1) +
      '&filters[day]=' +
      date.getDate(),
    {
      method: 'get',
    },
  )
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getDailyBreadList(date1, date2, page) {
  let url = '/api/daily-breads?sort[0]=date:desc&pagination[pageSize]=10';
  if (date1 != null && date2 != null) {
    url = url + '&filters[date][$gte]=';
  }
}

export async function getKids() {
  return request(host + '/api/kids', {
    method: 'get',
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}*/
