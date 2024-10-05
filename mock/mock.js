export default {
  '/api/users': [
    { id: 1, name: 'foo' },
    { id: 2, name: 'bar' },
  ],
  '/api/users/1': { id: 1, name: 'foo' },
  'GET /api/users/2': (req, res) => {
    res.status(200).json({ id: 2, name: 'bar' });
  },
  'GET /api/slide-banners': {
    data: [
      {
        url: 'www.google.com',
        desc: 'google!!!!',
        pic: 'banner/banner1.png',
      },
      {
        url: 'www.google.com',
        desc: 'google!!!!',
        pic: 'banner/banner2.png',
      },
      {
        url: 'www.google.com',
        desc: 'google!!!!',
        pic: 'banner/banner3.png',
      },
    ],
  },
  'GET /api/card-banners': [
    {
      url: 'www.google.com',
      desc: 'google!!!!',
      pic: 'cover_主日崇拜.jpg',
      title: '主日崇拜',
      description:
        '主日崇拜是教会每周的核心聚会，我们通过敬拜、祷告、读经和讲道来敬拜神，并聆听祂的话语。崇拜中，信徒们同心合意，在神的同在中得安慰、引导和力量，更新信心，装备自己去活出基督的生命。',
    },
    {
      url: 'www.google.com',
      desc: 'google!!!!',
      pic: 'cover_儿童事工.jpg',
      title: '儿童事工',
      description:
        '儿童事工专注于帮助孩子们在轻松愉快的环境中认识神，学习圣经真理。通过主日学、互动游戏、赞美敬拜及特别活动，我们培养孩子们的信仰根基，教导他们耶稣的爱与价值观，帮助他们在信仰和品格上成长',
    },
    {
      url: 'www.google.com',
      desc: 'google!!!!',
      pic: 'cover_团契小组.jpg',
      title: '团契小组',
      description:
        '团契小组是教会中的小型社区，信徒们通过定期的聚会、分享、祷告和圣经学习，彼此扶持、鼓励，共同成长。每个团契小组根据不同年龄、兴趣或生活阶段设立，旨在帮助每位成员在信仰道路上更加成熟，并实践彼此相爱、共同服事的教会生活。',
    },
    {
      url: 'www.google.com',
      desc: 'google!!!!',
      pic: 'cover_成人主日学.jpg',
      title: '成人主日学',
      description:
        '成人主日学为信徒提供深入学习圣经和探讨信仰实际应用的机会。通过系统化的课程、讨论和互动，学员们可以更好地理解神的话语，装备自己在日常生活中实践基督教信仰，并在灵命上成长，面对属灵挑战。主日学同时也是一个彼此鼓励和支持的属灵团体。',
    },
    {
      url: 'www.google.com',
      desc: 'google!!!!',
      pic: 'cover_新人指南.jpg',
      title: '新人指南',
      description:
        '欢迎来到我们的教会！作为新人，您将体验到一个充满爱与关怀的属灵大家庭。我们鼓励您参与主日崇拜、加入团契小组，并参加新人欢迎会。教会还设有各类事工，包括儿童、青少年和成人事工，帮助您更好地融入教会生活，深入认识基督的爱与真理。如果您有任何问题或需要帮助，我们的招待团队随时为您服务！',
    },
    {
      url: 'www.google.com',
      desc: 'google!!!!',
      pic: 'cover_见证分享.jpg',
      title: '见证分享',
      description:
        '见证分享是信徒们述说神在自己生命中作为的时刻。通过分享信仰旅程中的经历、挑战、恩典和改变，信徒们彼此鼓励，见证神的信实与大能。这不仅能激励他人更深入地信靠神，也彰显了祂如何在每个人的生活中动工，使信仰更加真实和有力量。',
    },
  ],
  'GET /api/cards': {
    data: [
      {
        name: '英语查经小组',
        pic: '',
        time: '',
        host: '',
        contact: '',
        shortDesc: '',
      },
    ],
  },
};
