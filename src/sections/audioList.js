

export const audioList1 = [
    {
      name: 'Serpiente',
      singer: 'Lost Fusión',
      cover: 'https://res.cloudinary.com/dm8dxwvix/image/upload/v1590610036/deltingoaltango_b5e1em.png',
      musicSrc: 'https://res.cloudinary.com/dm8dxwvix/video/upload/v1590609528/Lost_Fusi%C3%B3n_-_Serpiente_Video_Oficial_cw063t.mp3'
     
    },
    {
      name: 'Guajira',
      singer: 'Lost Fusión',
      cover:
        'https://res.cloudinary.com/dm8dxwvix/image/upload/v1590610036/deltingoaltango_b5e1em.png',
      musicSrc: () => {
        return Promise.resolve(
          'https://res.cloudinary.com/dm8dxwvix/video/upload/v1590610006/Lost_Fusi%C3%B3n_-_Guajira_Audio_Oficial_ojeiiv.mp3'
        )
      },
    },
  ]